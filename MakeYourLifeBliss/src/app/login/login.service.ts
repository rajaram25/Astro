import { Injectable, Inject, EventEmitter, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../entity/user";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  /** To notify to say the user got move away from dashboard. */
  @Output() userLoggedIn: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private http: HttpClient,
    @Inject("API_URL") private _apiUrl: string
  ) {}

  getData: string = "api/Users";
  isGivenUserIsValid() {
    return this.http.get<User[]>(`${this._apiUrl}/${this.getData}`).subscribe(
      (result) => {
        //this.listOfUsers = result;
        console.log("test-listOfUsers-", result);
      },
      (error) => console.error(error)
    );
  }

  IsUserValid() {
    let promise = new Promise((resolve, reject) => {
      this.http
        .get(`${this._apiUrl}/${this.getData}`)
        .toPromise()
        .then((res) => {
          console.log("test from promise");
          return true;
        });
    });
    return promise;
  }

  // IsUserValid() {
  //   let promise = new Promise((resolve, reject) => {
  //     this.http
  //       .get<User[]>(`${this._apiUrl}/${this.getData}`)
  //       .toPromise()
  //       .then((res) => {
  //         console.log('test from promise')
  //         return true;
  //       });
  //   });
  //   return promise;
  // }

  // IsUserValid(): Observable<boolean> {
  //   let subject = new Subject<boolean>();
  //   this.http.get<User[]>(`${this._apiUrl}/${this.getData}`).subscribe(
  //     (result) => {
  //       //this.listOfUsers = result;
  //       subject.next(true);
  //       console.log("test-listOfUsers-", result);
  //     },
  //     (error) => {
  //       subject.next(false);
  //       console.error(error);
  //     }
  //   );
  //   return subject.asObservable();
  // }
}
