const cloudDinaryPreset = 'arz9gytw';
const cloudDinaryUrl = 'https://api.cloudinary.com/v1_1/dkcwfbhj9/image/upload'; 

export const subirImagen = async( archivoFile ) => {
    const formdata = new FormData();
    formdata.append("upload_preset", cloudDinaryPreset );
    formdata.append("file", archivoFile );

    try {

        const resp = await fetch( cloudDinaryUrl, {
            method: 'POST',
            body: formdata
        } );

        if( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {

        throw error;
    }

}