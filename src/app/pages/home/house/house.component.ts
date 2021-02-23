import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHouse } from 'src/app/shared/interfaces/house.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { USERS } from 'src/app/shared/mocks/users.const';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  @Input() house: IHouse
  @Output() sell = new EventEmitter();
  owner: IUser;
  constructor() { }

  ngOnInit(): void {
    this.owner = USERS.find(user => user.id === this.house.ownerId)
  }

  sellHouse() {
    this.sell.emit();
  }

}
