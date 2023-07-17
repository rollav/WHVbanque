import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/service-banque/authentifier'; 
  private loginStatusSubject = new Subject<number>();

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<number> {
    alert('Login service called');
    const body = { unLogin: username, unMdp: password };
    this.http.post<number>(this.apiUrl, body)
      .subscribe(
        userId => {
          this.loginStatusSubject.next(userId);
        },
        error => {
          this.loginStatusSubject.next(-1);
        }
      );
    return this.loginStatusSubject.asObservable();
  }
}
