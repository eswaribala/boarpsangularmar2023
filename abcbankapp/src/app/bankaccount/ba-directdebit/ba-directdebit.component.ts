import {Component, OnInit, Optional} from '@angular/core';
import {concatAll, map, of, Subject, takeUntil, timer} from "rxjs";
import {fromFetch} from "rxjs/fetch";
import {ImageService} from "../../services/image.service";
import {Router} from "@angular/router";

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

  destroy = new Subject();
  showDialog = false;
  timer: number;
  dialog = 'upload file within 20s?';
  notice = 'Sorry, I am redirecting to Home Page';
  showNotice = false;


  rxjsTimer = timer(1000, 1000);

  constructor(@Optional() private imageService:ImageService,private router:Router) { }

  ngOnInit(): void {
//actual timer
    this.rxjsTimer.pipe(takeUntil(this.destroy)).subscribe(val => {
      this.timer = val;

      if (this.timer === 10) {
        this.showDialog = true;
      }

      if (this.timer >= 20) {
        this.destroy.next(1);
        this.destroy.complete();
        this.showNotice = true;
        this.router.navigate(['/']);
      }
    })
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
