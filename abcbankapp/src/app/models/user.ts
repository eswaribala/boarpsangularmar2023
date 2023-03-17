export class User {
  private _userName: String;
  private _email: String;
  private _password: String;


  constructor(userName: String, email: String, password: String) {
    this._userName = userName;
    this._email = email;
    this._password = password;
  }

  get name(): String {
    return this._userName;
  }

  get email(): String {
    return this._email;
  }

  get password(): String {
    return this._password;
  }
}
