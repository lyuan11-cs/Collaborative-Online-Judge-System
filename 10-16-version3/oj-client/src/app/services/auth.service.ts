

// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {HttpHeaders} from "@angular/common/http";

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  // Configure Auth0
 // auth0 = new auth0.WebAuth({
//     clientID: '9VSFNNP6-8ZjhxaBUMOD-_WlSEeHziCP',
//     domain: 'lyuan11.auth0.com',
//     responseType: 'token id_token',
//     redirectUri: 'http://localhost:3000/callback',
//     scope: 'openid'
//   });
//
//   constructor(public router: Router) {}
//
//   public login(): void {
//     this.auth0.authorize();
//   }

  // var webAuth = new auth0.WebAuth({
  //   domain: 'YOUR_AUTH0_DOMAIN',
  //   clientID: 'YOUR_CLIENT_ID'
  // });


  lock = new Auth0Lock('9VSFNNP6-8ZjhxaBUMOD-_WlSEeHziCP', 'lyuan11.auth0.com');

  constructor(private http: Http) {

  }

  public login(): Promise<Object> {
    return new Promise((resolve, reject) => {
      // Call the show method to display the widget.

      this.lock.show((error: string, profile: Object, id_token: string) => {
        if (error) {
          reject(error);
        } else {
          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', id_token);
          resolve(profile);
        }
      });
    })
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  public getProfile() {
    return JSON.parse(localStorage.getItem('profile'));
  }

  public resetPassword(): void {
    let profile = this.getProfile();
    let url: string = `https://lyuan11.auth0.com/dbconnections/change_password`;
    const headers = new HttpHeaders({'content-type': 'application/json' });
    let body = {
      client_id: '9VSFNNP6-8ZjhxaBUMOD-_WlSEeHziCP',
      email: profile.email,
      connection: 'Username-Password-Authentication'
    }

    // @ts-ignore
    this.http.post(url, body, headers)
      .toPromise()
      .then((res: Response) => {
        console.log(res.json());
      })
      .catch(this.handleError);


  }
  private handleError(error: any): Promise<any> {
    console.error('Error occurred', error);
    return Promise.reject(error.message || error);
  }

}



// // src/app/auth/auth.service.ts
//
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import {tokenNotExpired} from "angular2-jwt";
// import * as auth0 from 'auth0-js';
// import { Http, Response, Headers} from '@angular/http';
// import 'rxjs/add/operator/toPromise';
// import { HttpClient, HttpHeaders } from "@angular/common/http";
//
// declare var Auth0Lock: any;
//
// @Injectable()
// export class AuthService {
//   //Configure Auth0
//   // clientID = 'BKzRoPPzNpfVBmdgaCc2MOlhcSkV8kFX';
//   //domain = 'lyuan11.auth0.com';
//   private auth0: any;
//
//   lock = new auth0.WebAuth({
//     clientID: '9VSFNNP6-8ZjhxaBUMOD-_WlSEeHziCP',
//     domain: 'lyuan11.auth0.com',
//     responseType: 'token id_token',
//     redirectUri: 'http://localhost:3000/callback',
//     scope: 'openid'
//   });
//
//
//   // lock = new Auth0Lock(this.clientID, this.domain, {});
//
//   constructor(private http: Http) {
//     //Add callback for lock 'authenticated' event
//   }
//
//   public login(): Promise<Object> {
//     return new Promise((resolve, reject) => {
//       this.lock.show((error: string, profile: Object, id_token: string) => {
//         if (error) {
//           reject(error);
//         } else {
//           localStorage.setItem('profile', JSON.stringify(profile));
//           localStorage.setItem('id_token', id_token);
//           resolve(profile);
//         }
//       });
//
//     });
//   }
//
//
//   public authenticated() {
//     return tokenNotExpired();
//   }
//
//   public logout() {
//     localStorage.removeItem('id_token');
//     localStorage.removeItem('profile');
//   }
//
//   public getProfile() {
//     return JSON.parse(localStorage.getItem('profile'));
//   }
//
//   public resetPassword() :void{
//     let profile = this.getProfile();
//     let url: string = `https://lyuan11.auth0.com/dbconnections/change_password`;
//     const headers = new HttpHeaders({'content-type': 'application/json' });
//     let body = {
//       client_id: '9VSFNNP6-8ZjhxaBUMOD-_WlSEeHziCP',
//       email: profile.email,
//       connection: 'Username-Password-Authentication'
//     }
//
//     this.http.post(url,body, headers)
//       .toPromise()
//       .then((res:Response) => {
//         console.log(res.json());
//       })
//       .catch(this.handleError);
//   }
//
//   private handleError(error:any): Promise<any>{
//     console.error('Error occurred', error);
//     return Promise.reject(error.message || error);
//   }
//
//   // var request = require("request");
//   //
//   // var options = { method: 'POST',
//   //   url: 'https://YOUR_AUTH0_DOMAIN/dbconnections/change_password',
//   //   headers: { 'content-type': 'application/json' },
//   //   body:
//   //     { client_id: 'YOUR_CLIENT_ID',
//   //       email: '',
//   //       connection: 'Username-Password-Authentication' },
//   //   json: true };
//   //
//   // request(options, function (error, response, body) {
//   //   if (error) throw new Error(error);
//   //
//   //   console.log(body);
//   // });
//
// }
//
// //
// // import { filter } from 'rxjs/operators';
// // import * as auth0 from 'auth0-js';
// //
// // (window as any).global = window;
// //
// // @Injectable()
// // export class AuthService {
// //
// //   auth0 = new auth0.WebAuth({
// //     clientID: '9VSFNNP6-8ZjhxaBUMOD-_WlSEeHziCP',
// //     domain: 'lyuan11.auth0.com',
// //     responseType: 'token id_token',
// //     redirectUri: 'http://localhost:3000/callback',
// //     scope: 'openid'
// //   });
// //
// //   constructor(public router: Router) {}
// //
// //   public login(): void {
// //     this.auth0.authorize();
// //   }
// //
// //
// //
// // }
