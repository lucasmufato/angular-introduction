import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrudCoordinatorComponent } from './user-crud-coordinator.component';

describe('UserCrudCoordinatorComponent', () => {
  let component: UserCrudCoordinatorComponent;
  let fixture: ComponentFixture<UserCrudCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCrudCoordinatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCrudCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
