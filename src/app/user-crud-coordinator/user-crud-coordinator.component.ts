import {Component, OnInit} from '@angular/core';
import {UserFormView} from "../user-form-view";
import {BackendRepository} from "../backend-repository";

@Component({
  selector: 'app-user-crud-coordinator',
  templateUrl: './user-crud-coordinator.component.html',
  styleUrls: ['./user-crud-coordinator.component.css']
})
export class UserCrudCoordinatorComponent implements OnInit {

  users: UserFormView[] = []
  show: string = "";
  creatingNewUser: Boolean = true;
  currentUser: UserFormView = UserFormView.createNewUserForm();
  backend: BackendRepository;

  constructor(backend: BackendRepository) {
    this.backend = backend
  }

  ngOnInit(): void {
    this.backend.getAll().subscribe( usersFromBackend => {
      this.users = usersFromBackend
    })
  }

  quiereEditarA(user: UserFormView) {
    this.creatingNewUser = false;
    this.mostrarForm()
    //this.currentUser = JSON.parse(JSON.stringify(user));
    this.currentUser = new UserFormView(user.id, user.username, user.email, user.password, user.repeated_password, user.fecha_nacimiento, user.sexo, user.activo)
  }

  closeUserForm() {
    this.show = ""
  }

  mostrarForm(){
    this.show = "show"
  }

  newUser() {
    this.mostrarForm()
    this.currentUser = UserFormView.createNewUserForm();
    this.creatingNewUser = true
  }

  finishedForm() {
    if(this.creatingNewUser){
      this.backend.save(this.currentUser).subscribe(() => {
        this.closeUserForm()
        this.refresh()
      })
    }else{
      this.backend.update(this.currentUser).subscribe( () => {
        this.closeUserForm()
        this.refresh()
      })
    }
  }

  refresh() {
    this.backend.getAll().subscribe( usersFromBackend => {
      this.users = usersFromBackend
    })
  }
}
