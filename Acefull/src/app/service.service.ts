import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  addData(name,contact,password,email) {
      const obj = {name,contact,password,email};
      this
          .http
          .post(`${this.url}/newadd`, obj)
          .subscribe(res => console.log(res));
  }
 
  getData() {
      return(
      this
          .http
          .get(`${this.url}/newview`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
 
 
    up_data(name,contact, password,email, id) {
 
      const obj = {
          name: name,
          contact: contact,
          password: password,
          email:email
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
}