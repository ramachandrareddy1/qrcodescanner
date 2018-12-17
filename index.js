const jsQR= require('jsqr');
const path= require('path');
const Jimp= require('jimp');

//const code = jsQR(imageData, width, height);
 
Jimp.read(path.join(__dirname,'/frame.png'))
  .then(image => {
      let bitmapData=image.bitmap;
      const code = jsQR(bitmapData.data, bitmapData.width, bitmapData.height);
      if(code){
        console.log(code.data);
      }else{
        console.log('something went to wrong')
      }
      
      
  })
  .catch(err => {
      console.log(err);
    // Handle an exception.
  });
  