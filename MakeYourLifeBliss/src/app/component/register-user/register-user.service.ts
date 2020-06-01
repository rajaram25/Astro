import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from 'src/app/entity/user';


@Injectable({
  providedIn: "root",
})
export class RegisterUserService {
  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
    }),
  };

  constructor(
    private http: HttpClient,
    @Inject("API_URL") private _apiUrl: string
  ) {}

  public listOfUsers: User[];
  getData: string = "api/Users";
  getListOfUsers() {
    return this.http.get<User[]>(`${this._apiUrl}/${this.getData}`);
  }

  addData: string = "api/users";
  addUser(user: User) {
    this.http
      .post(`${this._apiUrl}/${this.addData}`, user, this.httpOptions)
      .subscribe((listOfUsers) => {
        console.log("list of existing users", listOfUsers);
      });
  }
}
