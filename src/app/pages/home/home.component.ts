import { Component, OnInit } from '@angular/core';
import { IHouse } from 'src/app/shared/interfaces/house.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HousesService } from 'src/app/shared/services/houses.service';
import { map, mergeMap } from 'rxjs/operators';
import { userInfo } from 'node:os';
import { combineLatest } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  houses: IHouse[]
  user: IUser;
  constructor(
    private housesService: HousesService,
    private authService: AuthService) { }

  ngOnInit(): void {
    const user$ = this.authService.user$;
    const houses$ = this.housesService.houses$;
    combineLatest([user$, houses$]).pipe(
      map(([user, houses]) => {
        this.user = user
        if(user) this.houses = houses.filter(house => house.ownerId === user.id)
      })
    ).subscribe()
  }

  sell(house: IHouse) {
    this.housesService.sell(house)
  }
}
