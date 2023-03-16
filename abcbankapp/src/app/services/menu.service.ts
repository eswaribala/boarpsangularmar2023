import { Injectable } from '@angular/core';
import {breadCrumbData, menuData} from "../models/menudata";
import {empData} from "../models/employeeData";
import {projectData} from "../models/projectdata";
import {Observable, of} from "rxjs";
import {Employee} from "../models/employee";
import {Project} from "../models/project";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  loadMenuData(){
    return menuData;
  }

  loadBreadCrumbData(){
    return breadCrumbData;
  }

  loadEmployeeData():Observable<any>{
    return of(empData);
  }

  loadProjectData():Observable<any>{
    return of(projectData);
  }
}
