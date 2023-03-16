import { Component, OnInit } from '@angular/core';
import {concatAll, map, of} from "rxjs";
import {fromFetch} from "rxjs/fetch";

@Component({
  selector: 'app-ba-directdebit',
  templateUrl: './ba-directdebit.component.html',
  styleUrls: ['./ba-directdebit.component.scss']
})
export class BaDirectdebitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*
    of(5, 8, 3)
      .pipe(
        map(id =>
          fromFetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            selector: resp => resp.json()
          })
        ),
        concatAll()
      )
      .subscribe(todo => console.log(todo.title));

     */
  }

}
