import { supabase, STORAGE_BUCKET } from '../src/config/supabase';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = path.join(process.cwd(), 'src', 'assets', 'professionals');

async function uploadImage(filePath: string) {
    const fileName = path.basename(filePath);
    const fileBuffer = fs.readFileSync(filePath);

    try {
        const { data, error } = await supabase.storage
            .from(STORAGE_BUCKET)
            .upload(fileName, fileBuffer, {
                upsert: true,
                contentType: getContentType(fileName)
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

function getContentType(fileName: string): string {
    const ext = path.extname(fileName).toLowerCase();
    switch (ext) {
        case '.jpg':
        case '.jpeg':
            return 'image/jpeg';
        case '.png':
            return 'image/png';
        case '.gif':
            return 'image/gif';
        default:
            return 'application/octet-stream';
    }
}

async function uploadAllImages() {
    console.log('Starting image upload process...');

    try {
        const files = fs.readdirSync(ASSETS_DIR);

        for (const file of files) {
            if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
                const filePath = path.join(ASSETS_DIR, file);
                await uploadImage(filePath);
            }
        }

        console.log('All images uploaded successfully!');
    } catch (error) {
        console.error('Error reading directory:', error);
    }
}

uploadAllImages(); 