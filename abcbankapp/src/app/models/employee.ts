export class Employee{
  private _name:string;
  private _level:string;


  constructor(name: string, level: string) {
    this._name = name;
    this._level = level;
  }


  get name(): string {
    return this._name;
  }

  get level(): string {
    return this._level;
  }
}
