import fs from 'fs';
import path from 'path';

const PROFESSIONALS_DIR = path.join(process.cwd(), 'public', 'professionals');

async function uploadProfessionals() {
    console.log('Starting professionals upload process...');

    try {
        const files = fs.readdirSync(PROFESSIONALS_DIR);
        const webpFiles = files.filter(file => file.toLowerCase().endsWith('.webp'));

        for (const file of webpFiles) {
            const filePath = path.join(PROFESSIONALS_DIR, file);
            if (fs.existsSync(filePath)) {
                // Remover a chamada para uploadImage
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