import {Component, Optional} from '@angular/core';
import {MenuService} from "./services/menu.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {filter} from "rxjs";
import { environment } from '../environments/environment';
import {AuthService} from "./services/authservice";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logoPath:string="assets/images/logo.png";
  banner:string="assets/images/banner.jfif";
  title:string ="ABC Bank"
  //ng serve --configuration=staging
  link = environment.link;
  name = environment.name;
  code = environment.code;

  menuDataInstance:any;
  constructor(private menuService:MenuService,
              private router:Router,private activatedRoute:ActivatedRoute,
              @Optional() private titleService:Title,public authService:AuthService) { }

  ngOnInit(): void {
      this.router.events.pipe(
        filter(e=>e instanceof NavigationEnd)
      ).subscribe(()=>{
        this.getChild(this.activatedRoute).data.subscribe((data: { title: string; }) => {
          if(data.title !=undefined) {
            console.log(data.title);
            this.titleService.setTitle(data.title)
            this.title=data.title
          }
        })
      })

    this.menuDataInstance=this.menuService.loadMenuData();
  }

  getChild(activatedRoute:ActivatedRoute):any{
      if(activatedRoute.firstChild)
        return this.getChild(activatedRoute.firstChild);
      else
        return activatedRoute;

  }

  logout() {
    this.authService.doLogout()
  }
}
