import {Component, OnInit, Optional} from '@angular/core';
import {
  combineLatest, combineLatestWith, concatWith, connectable,
  EMPTY, filter,
  firstValueFrom,
  forkJoin,
  from,
  groupBy,
  interval, lastValueFrom,
  map, merge,
  mergeMap,
  mergeWith,
  Observable,
  observable, of, race,
  Subject,
  take, throwError, timeout, timer,
  toArray,
  zip
} from "rxjs";
import {MenuService} from "../../services/menu.service";
import {Employee} from "../../models/employee";
import {HttpClient} from "@angular/common/http";
import {AlbumService} from "../../services/album.service";
import {Project} from "../../models/project";
import {fromFetch} from "rxjs/fetch";
import {CustomTimeoutError} from "../../models/customtimeout";

@Component({
  selector: 'app-ba-delete',
  templateUrl: './ba-delete.component.html',
  styleUrls: ['./ba-delete.component.scss']
})
export class BaDeleteComponent implements OnInit {
  source: Observable<any>;
  histogramData: any
  data: any;

  constructor(@Optional() private menuService: MenuService,
              @Optional() private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.source = this.menuService.loadEmployeeData();
    let sourceData = from(this.source);
    this.histogramData = sourceData.pipe(
      //rxjs 7
      groupBy(emp => emp.level),
      // return each item in group as array
      mergeMap(group => group.pipe(toArray())
      ))
      .pipe(toArray())
  }

  source1: any;
  source2: any;

  public makeRequests(): void {
    this.menuService.loadEmployeeData().subscribe(response => {
      this.source1 = response;
      this.menuService.loadProjectData().subscribe(response => {
        this.source2 = response;
        //rxjs6
        forkJoin({x: this.source1, y: this.source2})
          .subscribe(console.log);
        combineLatest({x: this.source1, y: this.source2})
          .subscribe(console.log);

        //   this.source1.pipe(combineLatest(this.source2)).subscribe(console.log);
        //rxjs7

        // this.source1.pipe(combineLatestWith(this.source2)).subscribe(console.log);

      })
    })
    const source1 = interval(1000).pipe(
      take(5),
      map(i => i + 1)
    );

    const source2 = interval(1000).pipe(
      take(4),
      map(i => i + 6)
    );
    const source3 = interval(1000).pipe(
      take(3),
      map(i => i + 20)
    );

    //rxjs 7
    //dictionary

    source1.pipe(combineLatestWith(source3.pipe(combineLatestWith(source2)))).subscribe(console.log);

    const api1 = fromFetch('https://jsonplaceholder.typicode.com/comments');
    const api2 = fromFetch('https://jsonplaceholder.typicode.com/albums');
    race(api1, api2).subscribe(console.log);

    //concatwith
    const names = of("Arun", "Ajay", "David", "Jaya");
    const weights = of(56, 87, 90, 45);
    names.pipe(concatWith(weights)).subscribe(console.log);

    //timer and timeout rxjs 7
    //const count=timer(3000,200);

    //count.pipe(timeout({first:5000,each: 100}))
    //.subscribe({next:console.log, error:console.error});
    //rxjs7
    //check the exact error messages
    //pending
    /*timer(5000,1000).pipe(timeout({first:4000,with:_=>
        of("timeout occurred...")}))
      .subscribe({next:console.log, error:console.error});
  }*/
    //solution with custom error
    timer(500, 1000).pipe(
      timeout({
        each: 1000,
        with: () => throwError(() => new CustomTimeoutError())
      })
    )
      .subscribe(error => {
        console.log(error)
      });

    //connect and connectable
    const data=of("TCS","hcl","Infosys","BOA","cts");
    const connectableData=connectable(data);
   const lowerData=connectableData.pipe(
      filter(x=>x.toLowerCase() == x),
      map(x=>`lower ${x.toUpperCase()}`)
    )
    const upperData=connectableData.pipe(
      filter(x=>x.toUpperCase() == x),
      map(x=>`lower ${x.toLowerCase()}`)
    )
    merge(lowerData,upperData).subscribe(console.log);

    setTimeout(()=>{
      console.log("connect data");
      connectableData.connect()
    },2000);


    //async Iterable
    const delayedResponses = {
      delays: [500, 1300, 3500],

      wait(delay:any) {
        return new Promise(resolve => {
          setTimeout(resolve, delay);
        });
      },

      async *[Symbol.asyncIterator]() {
        for (const delay of this.delays) {
          await this.wait(delay);
          yield `Delayed response for ${delay} milliseconds`;
        }
      },
    };
//it will display message after 500ms, 1300ms and 3500 ms 3 times
    (async() => {
      for await (const response of delayedResponses) {
        console.log(response);
      }
    })();


  }


}

/*
 /*
        this.albumService.forkJoinData().subscribe(response => {
          this.data = response;
        });

        const test:Observable<any>=forkJoin(
          [of(500,502,504),
          Promise.resolve(8),
          timer(4000)]
        );
        test.subscribe({
          next: value=>console.log(value),
          complete: ()=>console.log("It ends!!")
        });




    const source1 = interval(1000).pipe(
      take(5),
      map(num => num + 10)
    );
    const source2 = interval(1000).pipe(
      take(4),
      map(num => num + 100)
    );
*/
  // source1.toPromise().then(response=>{
  //   this.data=response;
  //  })
  //EMPTY.toPromise().then(console.log);
  // firstValueFrom(source1).then(response=>{
  //   this.data=response});
 // lastValueFrom(source1).then(response=>{
 // this.data=response});
//lastValueFrom(EMPTY).catch(console.log);
//zipwith takes minlength list and merges
//mergeWith lengthiest list and merges

//source1.pipe(mergeWith(source2)).subscribe(response => {
//  this.data = response;
// })
//}


/*

  const source1 = of(1,2,3);
const source2 = of('a','b','c');

of(source1, source2)
  .pipe(zipAll())
  .subscribe(val => console.log(val));
   */
