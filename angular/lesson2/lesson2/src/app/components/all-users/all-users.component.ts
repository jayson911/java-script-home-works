import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllUsersComponent implements OnInit {

  @Input()
  users: User[]

  constructor() { }

  ngOnInit(): void {
  }

}
