import { Injectable } from '@angular/core';
import { AppUser } from '../../../models/user.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: AppUser[] = [];
  authenticatedUser!: AppUser | undefined;

  constructor() { 
    this.users.push({id:1, username:"user1", password:"123", roles:["USER"]})
    this.users.push({id:2, username:"user2", password:"123", roles:["USER"]})
    this.users.push({id:3, username:"user3", password:"123", roles:["USER", "ADMIN"]})
  }

  public login(username:string, password:string): Observable<AppUser>{
    let appUser = this.users.find(u=>u.username==username);
    if(appUser == undefined) return throwError(() => new Error("User not found"));
    if(appUser.password != password) return throwError(() => new Error("Bad credential"));
    return of(appUser);
  }

  public authenticateUser(appUser: AppUser): Observable<boolean>{
    this.authenticatedUser = appUser;
    localStorage.setItem("authUser", JSON.stringify({username:appUser.username, role:appUser.roles, "jwt":"JWT_TOKEN_custom"}));
    return of(true);
  }
  
  public hasRole(role: string): Observable<any>{
    return of(this.authenticatedUser!.roles.includes(role))
  }

  public isAuthenticated(){
    return this.authenticatedUser != undefined;
  }

  public logout(): Observable<boolean>{
    this.authenticatedUser = undefined;
    localStorage.removeItem("authUser");
    return of(true);
  }

}
