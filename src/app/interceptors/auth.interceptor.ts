import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {JwtServiceService} from "../shared/services/token/jwt-service.service";
import {Router} from "@angular/router";
import {MenuService} from "../shared/menu/menu.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const jwtService = inject(JwtServiceService);
  const router = inject(Router);
  const menuService = inject(MenuService);

  const token = window.sessionStorage.getItem('token');


  // if (token) {
  //   const isValid = jwtService.isTokenValid(token as string);
  //   if (isValid) {
  //     req = req.clone({
  //       setHeaders: {
  //         Authorization: 'Bearer ' + token,
  //       }
  //     });
  //   } else {
  //     window.sessionStorage.removeItem('token');
  //     router.navigate(['login']);
  //     menuService._menu.next([]);
  //   }

  // }
  return next(req);
};
