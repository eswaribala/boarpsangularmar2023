import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable, zip, zipWith} from "rxjs";
import {ajax} from "rxjs/ajax";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient:HttpClient) { }

  getAlbumData():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/albums");
  }



  zipData():Observable<any>{
    let source1=this.httpClient.get("https://api.github.com/emojis");
    let source2=this.httpClient.get("https://api.github.com/");
    //zipwith rxjs7
    return source1.pipe(zipWith(source2));


  }

  forkJoinData():Observable<any>{

   return forkJoin(
      {
        google:this.httpClient.get('http://api.github.com/users/google'),
        microsoft: this.httpClient.get('http://api.github.com/users/microsoft'),
        users:this.httpClient.get('http://api.github.com/users')
      }
    )
  }

}
