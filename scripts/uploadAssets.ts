import { supabase, STORAGE_BUCKET } from './supabase';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = path.join(process.cwd(), 'public', 'logos');

async function uploadImage(filePath: string) {
    const fileName = path.basename(filePath);
    const fileBuffer = fs.readFileSync(filePath);

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
            const filePath = path.join(ASSETS_DIR, asset);
            if (fs.existsSync(filePath)) {
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