import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {BackendRepository} from "./backend-repository";
import {InMemoryRepositoryService} from "./in-memory-repository.service";
import { UserCrudCoordinatorComponent } from './user-crud-coordinator/user-crud-coordinator.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserCrudCoordinatorComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    { provide: BackendRepository, useClass: InMemoryRepositoryService },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
