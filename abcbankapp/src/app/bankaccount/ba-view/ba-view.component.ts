import {Component, OnInit, Optional} from '@angular/core';
import {AlbumService} from "../../services/album.service";

@Component({
  selector: 'app-ba-view',
  templateUrl: './ba-view.component.html',
  styleUrls: ['./ba-view.component.scss']
})
export class BaViewComponent implements OnInit {
 rowData:any;
  constructor(@Optional() private albumService:AlbumService) { }

  ngOnInit(): void {
    this.albumService.getAlbumData().subscribe(response=>{
      this.rowData=response;
    })
  }
  columnDefs = [{ field: "userId" }, { field: "id" }, { field: "title" }];
/*
  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];
*/
}
