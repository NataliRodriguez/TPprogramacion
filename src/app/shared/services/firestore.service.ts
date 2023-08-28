import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>
  //dentro de los parametros la BD
  constructor(private database: AngularFirestore) {
    //refenciamos coleccion de la BD
    this.usuariosCollection= this.database.collection<Usuario>('usuarios')
   }

   agregarUsuario(usuario: Usuario, id:string){
    //Resolve: promesa resulta -> similar al then
    //Reject: promesa rechazada-> similar al catch
    return new Promise(async(resolve, reject)=>{
      try{
        usuario.uid= id
        const resultado = await this.usuariosCollection.doc(id).set(usuario)
        resolve(resultado)//muestra el resultado
      }catch(error){
        reject(error)//en casos de error
      }
    })
   }
}
