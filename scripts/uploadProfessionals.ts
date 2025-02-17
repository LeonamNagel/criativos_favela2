import { supabase, STORAGE_BUCKET } from './supabase';
import fs from 'fs';
import path from 'path';

const PROFESSIONALS_DIR = path.join(process.cwd(), 'public', 'professionals');

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

async function uploadProfessionals() {
    console.log('Starting professionals upload process...');

    try {
        const files = fs.readdirSync(PROFESSIONALS_DIR);
        const webpFiles = files.filter(file => file.toLowerCase().endsWith('.webp'));

        for (const file of webpFiles) {
            const filePath = path.join(PROFESSIONALS_DIR, file);
            if (fs.existsSync(filePath)) {
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