import { createClient } from '@supabase/supabase-js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, readdirSync, existsSync } from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase URL or Key');
}

const supabase = createClient(supabaseUrl, supabaseKey);
const STORAGE_BUCKET = 'professionals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROFESSIONALS_DIR = join(dirname(__dirname), 'public', 'professionals');

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

async function uploadProfessionals() {
    console.log('Starting professionals upload process...');

    try {
        const files = readdirSync(PROFESSIONALS_DIR);
        const webpFiles = files.filter(file => file.toLowerCase().endsWith('.webp'));

        for (const file of webpFiles) {
            const filePath = join(PROFESSIONALS_DIR, file);
            if (existsSync(filePath)) {
                await uploadImage(filePath);
            } else {
                console.error(`File not found: ${filePath}`);
            }
        }

        console.log('All professionals uploaded successfully!');
    } catch (error) {
        console.error('Error uploading professionals:', error);
    }
}

uploadProfessionals(); 