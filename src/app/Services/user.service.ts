import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://storyshelfbackend-1.onrender.com/api/ss/user/';

  constructor(private http: HttpClient) { }

  registerAsSeller(user: any) {
    return this.http.post(this.baseUrl + 'register', user);
  }

  // Login user function
  loginUser(user: any): Observable<any> {
    return this.http.post(this.baseUrl + 'login', user);
  }

  // Method to get All Users
  getAllUsers() {
    return this.http.get(this.baseUrl + 'get/all');
  }
  //method to get user
  getUserByUserId(userId: string) {
    return this.http.get(this.baseUrl + `get/by/${userId}`);
  }

  updateUserProfile(userId: String, profileUrl : any){
    return this.http.post(this.baseUrl+ `update/profile/${userId}`, profileUrl)
  }
  
  //method to update the user by userid
  updateUserByUserId(userid: string) {
    return this.http.get(this.baseUrl + 'get/all');
  }
  //method to delete user by userId
  deleteUserByUserId(userid: string) {
    return this.http.get(this.baseUrl + 'get/all');
  }
  //method to delete all user
  deleteAllUserByUserId(userid: string) {
    return this.http.get(this.baseUrl + 'get/all');
  }
}
