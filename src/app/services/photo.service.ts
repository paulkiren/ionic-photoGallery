import { Injectable } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  public photos: Photo[] = [];
  currentImage: any;
  constructor(private camera: Camera) {}

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(
      imageData => {
        this.photos.unshift({ data: "data:image/jpeg;base64," + imageData });
      },
      err => {
        console.log("Camera Issue", err);
      }
    );
  }
}

class Photo {
  data: any;
}
