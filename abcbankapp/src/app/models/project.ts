export class Project{
  private _projectId:number;
  private _name:string;

  constructor(projectId: number, name: string) {
    this._projectId = projectId;
    this._name = name;
  }

  get projectId(): number {
    return this._projectId;
  }

  get name(): string {
    return this._name;
  }
}
