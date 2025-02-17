import { createClient } from '@supabase/supabase-js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, existsSync } from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase URL or Key');
}

const supabase = createClient(supabaseUrl, supabaseKey);
const STORAGE_BUCKET = 'assets';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ASSETS_DIR = join(dirname(__dirname), 'public', 'logos');

async function uploadImage(filePath) {
    const fileName = filePath.split('/').pop();
    const fileBuffer = readFileSync(filePath);

    try {
        const { data, error } = await supabase.storage
            .from(STORAGE_BUCKET)
            .upload(fileName, fileBuffer, {
                upsert: true,
                contentType: 'image/webp'
            });

        if (error) {
            console.error(`Error uploading ${fileName}:`, error.message);
            return null;
        }

        console.log(`Successfully uploaded ${fileName}`);
        return data;
    } catch (error) {
        console.error(`Error uploading ${fileName}:`, error);
        return null;
    }
}

async function uploadAssets() {
    console.log('Starting assets upload process...');

    const assetsToUpload = [
        'criativos-logo.webp',
        'footer.webp'
    ];

    try {
        for (const asset of assetsToUpload) {
            const filePath = join(ASSETS_DIR, asset);
            if (existsSync(filePath)) {
                await uploadImage(filePath);
            } else {
                console.error(`File not found: ${filePath}`);
            }
        }

        console.log('All assets uploaded successfully!');
    } catch (error) {
        console.error('Error uploading assets:', error);
    }
}

uploadAssets(); 