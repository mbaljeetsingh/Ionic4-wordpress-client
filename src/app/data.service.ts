import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token;
  public refreshQuotes = new Subject<number>();
  constructor(private http: HttpClient) {}

  getData(url: string) {
    return this.http.get(`${apiUrl}/wp/v2/${url}`);
  }

  postData(url: string, data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    });
    return this.http.post(`${apiUrl}/wp/v2/${url}`, data, {
      headers: headers
    });
  }

  putData(url: string, data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    });
    return this.http.put(`${apiUrl}/wp/v2/${url}`, data, {
      headers: headers
    });
  }
}
