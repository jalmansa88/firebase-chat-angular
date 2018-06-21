import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Mensaje } from '../model/mensaje.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(user => {
      console.log('User state: ', user);

      if (user) {
        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
      }
    });
  }

  login(proveedor: string) {

    if (proveedor === 'google') {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

    } else if (proveedor === 'twitter') {
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
  }
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(10));

    return this.itemsCollection.valueChanges()
                    .pipe(map((mensajes: Mensaje[]) => {
                          console.log(mensajes);
                          this.chats = mensajes.reverse();
                    }));
  }

  agregarMensaje(text: string) {
    // TODO: falta el UID del user
      const mensaje: Mensaje = {
        nombre: this.usuario.nombre,
        mensaje: text,
        fecha: new Date().getTime(),
        uid: this.usuario.uid
      };

      return this.itemsCollection.add(mensaje);
  }
}
