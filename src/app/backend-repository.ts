import {Injectable} from '@angular/core';
import {UserFormView} from "./user-form-view";
import {Observable} from "rxjs";

@Injectable()
export abstract class BackendRepository {
  abstract save(user : UserFormView): Observable<null>
  abstract update(user : UserFormView): Observable<null>
  abstract getAll(): Observable< UserFormView[] >
}
