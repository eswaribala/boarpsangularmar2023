import {Component, OnInit, Optional} from '@angular/core';
import {concatAll, map, of} from "rxjs";
import {fromFetch} from "rxjs/fetch";
import {ImageService} from "../../services/image.service";

@Component({
  selector: 'app-ba-directdebit',
  templateUrl: './ba-directdebit.component.html',
  styleUrls: ['./ba-directdebit.component.scss']
})
export class BaDirectdebitComponent implements OnInit {
  message: any;
  retrievedImage: any;
  imageName: any;
  private selectedFile: any;
  private retrieveResponse: any;
  private base64Data: any;

  constructor(@Optional() private imageService:ImageService) { }

  ngOnInit(): void {

  }

  onFileChanged($event: any) {
    this.selectedFile = $event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    this.imageService.sendImage(uploadImageData)
      .subscribe((response) => {
          console.log(response);
        }
      );
  }

  getImage() {
//Make a call to Sprinf Boot to get the Image Bytes.
    this.imageService.receiveImage(this.imageName)
      .subscribe(
        res => {
          this.retrieveResponse = res;
          this.base64Data = this.retrieveResponse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}
