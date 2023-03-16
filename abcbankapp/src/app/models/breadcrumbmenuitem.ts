export class BreadcrumbMenuItem{
  private _label:string;
  private _routerLink:any;

  constructor(label: string, routerLink: any) {
    this._label = label;
    this._routerLink = routerLink;
  }

  get label(): string {
    return this._label;
  }

  get routerLink(): any {
    return this._routerLink;
  }
}
