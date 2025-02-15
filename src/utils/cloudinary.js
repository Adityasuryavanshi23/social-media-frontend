 // Your Cloudinary cloud name and preset
 const uploadPreset = 'socialmedia'; // Create this in your Cloudinary dashboard
 
 export const handleFileUpload = async (file) => {
   try {

     const formData = new FormData();
     
     formData.append('file', file);
     formData.append('upload_preset', uploadPreset);
     
     const response = await fetch(
       `https://api.cloudinary.com/v1_1/dp6rrq2w7/image/upload`,
       {
         method: 'POST',
         body: formData,
       }
     );
     
     const data = await response.json();
     
     if (data) {
      return data;
     }
   } catch (error) {
     console.error('Upload error:', error);
     throw error;
   }
 };