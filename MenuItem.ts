export class MenuItem{
  private _label:any;
  private _items:Item[];
  private _routerLink:any;


  constructor(label: any, items: Item[], routerLink: any) {
    this._label = label;
    this._items = items;
    this._routerLink = routerLink;
  }


  get label(): any {
    return this._label;
  }

  get items(): Item[] {
    return this._items;
  }

  get routerLink(): any {
    return this._routerLink;
  }
}

export class Item{
  private _label:any;
  private _icon:any;
  private _routerLink:any;
  private _items:SubItem[];


  constructor(label: any, icon: any, routerLink: any, items: SubItem[]) {
    this._label = label;
    this._icon = icon;
    this._routerLink = routerLink;
    this._items = items;
  }


  get label(): any {
    return this._label;
  }

  get icon(): any {
    return this._icon;
  }

  get routerLink(): any {
    return this._routerLink;
  }

  get items(): SubItem[] {
    return this._items;
  }
}

export class SubItem{
  private _label:any[]
  private _routerLink:any;
  private _icon:any;

  constructor(label: any[], routerLink: any, icon: any) {
    this._label = label;
    this._routerLink = routerLink;
    this._icon = icon;
  }


  get label(): any[] {
    return this._label;
  }

  get routerLink(): any {
    return this._routerLink;
  }

  get icon(): any {
    return this._icon;
  }
}
