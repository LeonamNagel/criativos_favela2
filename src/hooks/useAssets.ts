import { supabase } from '../config/supabase';

const ASSETS_BUCKET = 'assets';

export const useAssets = () => {
    const getAssetUrl = (assetName: string) => {
        const { data } = supabase.storage
            .from(ASSETS_BUCKET)
            .getPublicUrl(assetName);

        return data.publicUrl;
    };

    return {
        logo: getAssetUrl('criativos-logo.webp'),
        footer: getAssetUrl('footer.webp')
    };
}; 