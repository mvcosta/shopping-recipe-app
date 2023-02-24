export class User {
  constructor(public login: string, private _token: string) {}

  get token() {
    //token validation here
    return this._token;
  }
}
