import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProfile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseAPi = 'https://icherniakov.ru/yt-course/';

  http = inject(HttpClient)


  getProfileService() {
   return this.http.get<IProfile[]>(`${this.baseAPi}account/test_accounts`)
  }
}
