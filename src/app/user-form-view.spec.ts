import {UserFormView} from './user-form-view';

describe('UserFormView', () => {

  function givenAValidForm() {
    return new UserFormView(null, "lucas", "lucas@mufato.com", "lucas", "lucas", "1/04/1992", "masculino", true);
  }

  it('correct user has no validation errors', () => {
    const form = givenAValidForm();
    const validaciones = form.getFormErrors()
    expect( validaciones[0] ).toBeUndefined()
    expect( validaciones.length === 0 ).toBeTrue()
  });

  it('should validates name', () => {
    const form = givenAValidForm();
    form.username = ""
    const validaciones = form.getFormErrors();
    expect(validaciones.length).toBeGreaterThan(0)
    expect(validaciones[0]).toBe("El username debe tener mas de 4 caracteres")
  });

  it('should validates name', () => {
    const form = givenAValidForm();
    form.email = "adaedaed"
    const validaciones = form.getFormErrors();
    expect(validaciones.length).toBeGreaterThan(0)
    expect(validaciones[0]).toBe("El email no esta bien formado")
  });

  it('should validate passwords are equals', () => {
    const form = givenAValidForm();
    form.password = "adaedaed"
    form.repeated_password = "      "
    const validaciones = form.getFormErrors();
    expect(validaciones.length).toBeGreaterThan(0)
    expect(validaciones[0]).toBe("El password y su repeticion son distintos")
  });

  it('should validate passwords are not too short', () => {
    const form = givenAValidForm();
    form.password = "aa  "
    form.repeated_password = "aa  "
    const validaciones = form.getFormErrors();
    expect(validaciones.length).toBeGreaterThan(0)
    expect(validaciones[0]).toBe("El password es muy chico, debe tener mas de 4 caracteres")
  });

  it('should validate passwords has no space inbetween', () => {
    const form = givenAValidForm();
    form.password = "lala lala"
    form.repeated_password = "lala lala"
    const validaciones = form.getFormErrors();
    expect(validaciones.length).toBeGreaterThan(0)
    expect(validaciones[0]).toBe("El password no puede tener espacios")
  });

  it('should validate fecha nacimiento menor a hoy', () => {
    const form = givenAValidForm();
    form.fecha_nacimiento = "11/04/2029";
    const validaciones = form.getFormErrors();
    expect(validaciones.length).toBeGreaterThan(0)
    expect(validaciones[0]).toBe("La fecha de nacimiento no puede ser mayor que hoy")
  });

  it('should validate sexo is valid', () => {
    const form = givenAValidForm();
    form.sexo = " ";
    const validaciones = form.getFormErrors();
    expect(validaciones.length).toBeGreaterThan(0)
    expect(validaciones[0]).toBe("El sexo debe ser masculino o femenino")
  });
});
