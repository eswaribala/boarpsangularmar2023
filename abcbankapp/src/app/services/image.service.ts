import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, EMPTY, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient:HttpClient) { }

  sendImage(uploadImageData:any):Observable<any>{
    return this.httpClient.post('http://localhost:7070/upload',
      uploadImageData).pipe(
      catchError( err => {
        if ((err.status > 400)&&(err.status < 500)) {
          return EMPTY;
        } else {
          return throwError(err);
        }
      })
    );
  }
  receiveImage(imageName:string):Observable<any>{
    return this.httpClient.get('http://localhost:7070/get/' + imageName)
  }
}
