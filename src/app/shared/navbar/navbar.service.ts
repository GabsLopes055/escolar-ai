import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private _title = new BehaviorSubject<string>("");
  showBtnViajar = new BehaviorSubject(true);

  constructor() { }

  get title(): Observable<string> {
    return this._title;
  }

  setTitle(titulo: string) {
    this._title.next(titulo);
  }
}
