import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  printToConsole(arg) {
    console.log(arg);
  }
}
