export class UserFormView {
  id: number|null;
  username: string;
  email: string;
  password: string;
  repeated_password: string;
  fecha_nacimiento: string;
  sexo: string;
  activo: boolean;

  constructor(id: number | null, username: string, email: string, password: string, repeated_password: string, fecha_nacimiento: string, sexo: string, activo: boolean) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.repeated_password = repeated_password;
    this.fecha_nacimiento = fecha_nacimiento;
    this.sexo = sexo;
    this.activo = activo;
  }

  static createNewUserForm(): UserFormView{
    return new UserFormView(null, "", "", "", "", "", "", true);
  }

  getFormErrors(): string[] {
    let errores = [];
    if(this.username.trim().length < 4){
      errores.push("El username debe tener mas de 4 caracteres")
    }
    if(!this.email.trim().match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$")){
      errores.push("El email no esta bien formado")
    }
    if(this.password !== this.repeated_password){
      errores.push("El password y su repeticion son distintos")
    }
    if(this.password.trim().length <= 4){
      errores.push("El password es muy chico, debe tener mas de 4 caracteres")
    }
    if(this.password.trim().split(" ").length > 1){
      errores.push("El password no puede tener espacios")
    }
    if(new Date(this.fecha_nacimiento).getTime() > new Date().getTime()){
      errores.push("La fecha de nacimiento no puede ser mayor que hoy")
    }
    if( !["Masculino","Femenino"].includes(this.sexo.trim())){
      errores.push("El sexo debe ser masculino o femenino")
    }
    return errores;
  }
}
