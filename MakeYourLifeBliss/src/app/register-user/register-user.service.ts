import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RegisterUserService {
  // myAppUrl: string;
  // myApiUrl: string;
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json; charset=utf-8'
  //   })
  // };

  PATH: string = "weatherforecast";

  constructor(
    private http: HttpClient,
    @Inject("API_URL") private _apiUrl: string
  ) {}

  public forecasts: WeatherForecast[];

  getWeaterForeCast() {
    return this.http
      .get<WeatherForecast[]>(`${this._apiUrl}/${this.PATH}`)
      .subscribe(
        (result) => {
          this.forecasts = result;
          console.log("test-", result);
        },
        (error) => console.error(error)
      );
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
