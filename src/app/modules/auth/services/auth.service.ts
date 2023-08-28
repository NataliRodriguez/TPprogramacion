import { Injectable } from '@angular/core';
//srvicio de autentificacion de Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciamos Auth de Firebase
  constructor(public auth: AngularFireAuth) { }

  registrar(nombre: string, contrasena:string){
    //nuevo valor de nombre y contraseña 
    return this.auth.createUserWithEmailAndPassword(nombre,contrasena);
  }
  //Funcion para tomar UID
  async getUid(){
    //genera promesa y const user la captura
    const user= await this.auth.currentUser;
    if(user== null){
      return null;
    }else{
      return user.uid;
    }
  }
}
