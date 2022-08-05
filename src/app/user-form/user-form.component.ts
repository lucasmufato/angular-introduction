import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserFormView} from "../user-form-view";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input()
  user: UserFormView = UserFormView.createNewUserForm()

  @Output()
  editUser = new EventEmitter<void>();

  formErrors: string[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

  crearPressed(evento: MouseEvent) {
    console.log(this.user)
    this.formErrors = this.user.getFormErrors()
    if (this.formErrors.length <1){
      this.editUser.emit()
    }
  }


}
