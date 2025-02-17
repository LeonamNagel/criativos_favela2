import { supabase } from '../src/config/supabase';
import fs from 'fs';
import path from 'path';

const ASSETS_BUCKET = 'assets';
const ASSETS_DIR = path.join(process.cwd(), 'src', 'assets');

async function uploadImage(filePath: string) {
    const fileName = path.basename(filePath);
    const fileBuffer = fs.readFileSync(filePath);

    try {
        const { data, error } = await supabase.storage
            .from(ASSETS_BUCKET)
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

async function uploadAssets() {
    console.log('Starting assets upload process...');

    const assetsToUpload = [
        'criativos-logo.png',
        'footer.png'
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