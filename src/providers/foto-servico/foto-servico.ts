import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera'

@Injectable()

export class FotoServicoProvider {

    exibirImagem: boolean;
    ultimaFoto: string;
    data;
    constructor(public camera: Camera){}

    getFoto(type)  {
        return new Promise((resolve, reject) => {

            const options: CameraOptions = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                correctOrientation: true
            };

            this.exibirImagem = true;
            console.log(Date())
    
            this.camera.getPicture(options).then((imageData) => {
    
                this.ultimaFoto = 'data:image/jpeg;base64,' + imageData;
                
                resolve(this.ultimaFoto);

            }, (err) => {
                
                reject(err); 
            });
        });
    }

 
}
        