import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs';
import { IAuth } from '../interfaces/auth.ninterface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseAPi = 'https://icherniakov.ru/yt-course/auth/';
  cookieService = inject(CookieService)
  htpp = inject(HttpClient)
  token: string | null = null
  refresh_token: string | null = null

  isAUth() {
    if(!this.token) {
    this.token = this.cookieService.get('token')
    }
    return !!this.token 
  }

  login(payload: {username:string, password:string}) {
    const fd = new FormData()
    fd.append('username', payload.username)
    fd.append('password', payload.password)
    return this.htpp.post<IAuth>(`${this.baseAPi}token`, fd)
    .pipe(
      tap(val => {
        this.token = val.access_token
        this.refresh_token = val.refresh_token
        this.cookieService.set('token', this.token)
        this.cookieService.set('refresh_token', this.refresh_token)
      })
    )
  }
} 
