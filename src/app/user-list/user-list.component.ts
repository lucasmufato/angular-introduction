import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserFormView} from "../user-form-view";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  users: UserFormView[] = []
  @Output()
  editUser = new EventEmitter<UserFormView>();

  constructor() { }

  ngOnInit(): void {
  }

  editClicked(user: UserFormView){
    this.editUser.emit(user)
  }

}
