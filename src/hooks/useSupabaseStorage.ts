import { supabase, STORAGE_BUCKET } from '../config/supabase'

export const useSupabaseStorage = () => {
    const uploadImage = async (file: File, path: string) => {
        try {
            const { data, error } = await supabase.storage
                .from(STORAGE_BUCKET)
                .upload(path, file)

            if (error) throw error

            const { data: publicUrl } = supabase.storage
                .from(STORAGE_BUCKET)
                .getPublicUrl(path)

            return publicUrl.publicUrl
        } catch (error) {
            console.error('Error uploading image:', error)
            throw error
        }
    }

    const getImageUrl = (path: string) => {
        const { data } = supabase.storage
            .from(STORAGE_BUCKET)
            .getPublicUrl(path)

        return data.publicUrl
    }

    return {
        uploadImage,
        getImageUrl
    }
} 