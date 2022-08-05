import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form at button pressed', () => {
    //given
    const mockedUserFormView = jasmine.createSpyObj('UserFormView', ['getFormErrors']);
    component.user = mockedUserFormView
    //when
    component.crearPressed(new MouseEvent("some event"))
    //then
    expect( component.user.getFormErrors ).toHaveBeenCalled()
  });

  it('should show errors', () => {
    //given
    const mockedUserFormView = jasmine.createSpyObj('UserFormView', {
      'getFormErrors': ["some error"]
    });
    component.user = mockedUserFormView
    //when
    component.crearPressed(new MouseEvent("some event"))
    //then
    expect( component.user.getFormErrors ).toHaveBeenCalled()
    expect( component.formErrors ).toEqual(["some error"])
  });

});
