import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicComponent} from "./dynamic/dynamic.component";

@Component({
  selector: 'app-corporate',
  standalone:true,
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  @ViewChild('dynamic', { read: ViewContainerRef })
  //tsconfig.json initialize property
  private viewRef: ViewContainerRef;

  showDynamicComponent(): void {
    this.viewRef.clear();
    let dynamiccomp =this.viewRef.createComponent(DynamicComponent);
    dynamiccomp.instance.getData("hi");
  }

  removeDynamicComponent(): void {
    this.viewRef.clear();
  }
}
