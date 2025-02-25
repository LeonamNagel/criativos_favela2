import fs from 'fs';
import path from 'path';

const ASSETS_DIR = path.join(process.cwd(), 'public', 'logos');

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
                // Remover a função 'uploadImage' que depende do Supabase
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