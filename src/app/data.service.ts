import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getUsers() {
    // this function is returning JSON from this API call
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
