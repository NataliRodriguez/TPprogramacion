import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  usuarios:Usuario={//esto es el input
    uid:'',
    nombre:'',
    contrasena:''
  }
  uid= '';

  //creamos nueva coleccion de usuarios
  coleccionUsuarios: Usuario[] =[];

  //servicioAuth referencia a nuestro servicio Auth
  constructor(
    public servicioAuth: AuthService, 
    public servicioFirestore: FirestoreService
    ){}
  //tomamos nuevos registros y mostramos resultados
  async registrarse(){
    const credenciales ={
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena
    };

    const res= await this.servicioAuth.registrar(credenciales.nombre, credenciales.contrasena)
    .then(res =>{
      alert("Ha agregado un nuevo usuario con exito:)");
    })
    //el metodo CATCH creara el error cuando algo este mal
    .catch(error=> alert("Hubo un error al cargar el usuario:( \n"+error)
    );

    const uid= await this.servicioAuth.getUid();

    this.usuarios.uid = uid;
    //guarda el nuevo usuario
    this.guardarUser();
  }
  //funcion para nuevo usuario
  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res=>{
      console.log(this.usuarios)
    })
    .catch(error=>{console.log('Error =>', error)})
  }

  async ngOnInit(){
    const uid= await this.servicioAuth.getUid();
    console.log(uid);
  }
}
