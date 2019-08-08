import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }
  login (email, password) {
    alert("service call");
    const uri = 'http://localhost:4000/coins/add';
    const obj = {
      email: email,
      password: password
    };
    console.log("service obj",obj);
    return this
        .http
        .post(uri, obj)
        .pipe(map(res=>{
          return res;
        }))
  }
  getlogin() {
    const uri = 'http://localhost:4000/coins';
    return this
            .http
            .get(uri)
            .pipe(map(res=>{
              return res;
            }))
  
}
}
