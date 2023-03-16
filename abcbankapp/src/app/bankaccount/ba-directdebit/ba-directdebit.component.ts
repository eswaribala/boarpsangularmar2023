import { Component, OnInit } from '@angular/core';
import {concatAll, map, of} from "rxjs";
import {fromFetch} from "rxjs/fetch";

@Component({
  selector: 'app-ba-directdebit',
  templateUrl: './ba-directdebit.component.html',
  styleUrls: ['./ba-directdebit.component.scss']
})
export class BaDirectdebitComponent implements OnInit {
  message: any;
  retrievedImage: any;
  imageName: any;

  constructor() { }

  ngOnInit(): void {

  }

  onFileChanged($event: Event) {
    
  }

  onUpload() {
    
  }

  getImage() {
    
  }
}
