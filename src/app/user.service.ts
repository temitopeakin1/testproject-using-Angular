import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { IUser } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'assets/api/users/users.json';

  constructor(private http: HttpClient) { }

  getName():Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl)
    .pipe(
      tap((data: any) => console.log('All: ', JSON.stringify(data))),
      //catchError(this.handleError)
    );
  }

  getPosts():Observable<IUser[]>{
  return this.http.get<IUser[]>(this.usersUrl) 
  .pipe(
    tap((data: any) => console.log('All: ',JSON.stringify(data)))
  )   
  }
}

