import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHouse } from '../interfaces/house.interface';
import { USERS } from '../mocks/users.const';
import { HOUSES } from './../mocks/houses.const';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  houses$ = new BehaviorSubject<IHouse[]>(HOUSES)
  constructor() { }

  sell(house: IHouse) {
    USERS.find(user => user.id === house.ownerId).balance += house.price
    this.houses$.next(this.houses$.value.map(item => {
      if(item === house) return item.ownerId = null, item;
      return item;
    }))
  }
}
