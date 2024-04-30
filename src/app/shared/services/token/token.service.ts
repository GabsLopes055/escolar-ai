import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private readonly route: Router
  ) { }

  public async isLogin(): Promise<boolean> {
    
    const token = await window.sessionStorage.getItem('token');
    
    if(token) {
      return true;
    }else {
      this.route.navigate(['login']);
      return false;
    }
    
  }
}
