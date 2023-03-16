import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
const DATA_URL='http://localhost:4200/BankAccount/Edit';
import * as data from "./data.json"
@Injectable()
export class MockService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url===DATA_URL){
      console.log('Loaded from JSON: ' + req.url);
      return of(new HttpResponse({status: 200, body: ((data) as any).default}));
    }
    else
    {
      return next.handle(req);
    }



  }
}
