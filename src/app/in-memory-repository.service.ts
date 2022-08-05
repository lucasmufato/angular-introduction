import { Injectable } from '@angular/core';
import {BackendRepository} from "./backend-repository";
import {from, Observable, of} from "rxjs";
import {UserFormView} from "./user-form-view";

@Injectable({
  providedIn: 'root'
})
export class InMemoryRepositoryService implements BackendRepository{

  private usuarios: UserFormView[] = []
  private idGenerator = 1

  constructor() { }

  getAll(): Observable<UserFormView[]> {
    return from([this.usuarios])
  }

  update(user: UserFormView): Observable<null> {
    this.usuarios = this.usuarios.filter((it) => it.id !== user.id);
    this.usuarios.push(user)
    return of(null);
  }

  save(user: UserFormView): Observable<null> {
    user.id = this.idGenerator
    this.idGenerator++
    this.usuarios.push(user)
    return of(null);
  }
}
