import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app'
import { merge } from 'rxjs';

export interface User{
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userState: any;

  constructor(
    public firestore : AngularFirestore,
    public fireAuth : AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  )
  {
    this.fireAuth.authState.subscribe(user =>{
      if(user){
        this.userState = user;
        localStorage.setItem('user',JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user'));
      }else{
        localStorage.setItem('user',null);
        JSON.parse(localStorage.getItem('user'));
      }
    })

  }
  //método para loguearse con usuario y contraseña
  login(email,password){
    return this.fireAuth.signInWithEmailAndPassword(email,password)
      .then((result)=> {
        this.ngZone.run(()=>{
          this.router.navigate(['forgot-password']);
        });
        this.setUserData(result.user);
      }).catch((error)=> {
        window.alert(error.message)
      })
  }

  //método para registrar un nuevo usuario con email y password
  registrar(email,password){
    return this.fireAuth.createUserWithEmailAndPassword(email,password)
     .then((result)=> {
       this.sendVerificationMail();
       this.setUserData(result.user);
     }).catch ((error) => {
       window.alert(error.message)
     })
  }

  //método para enviar correo de verificación
  sendVerificationMail(){
    return this.fireAuth.currentUser.then(u => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verificar-email']);
      })
  }

  //método para cuando el usuario olvidó su contraseña
  forgotPassword(passwordResetEmail){
    return this.fireAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(()=> {
        window.alert("Se envio correo para restablecer su contraseña");
      }).catch((error)=>{
        window.alert(error)
      })
  }

  //getter para verificar cuando el ususario está logueado
  get isLoggedIn():boolean{
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !=null && user.emailVerified != false) ? true : false;
  }

  //método para autenticarse con Google
  googleAuth(){
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  //método para loguearse con proveedores
  authLogin(provider){
    return this.fireAuth.signInWithPopup(provider)
      .then((result)=> {
        this.ngZone.run(()=>{
          this.router.navigate(['forgot-password']);
        })
        this.setUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
  }
  //método para asignar los datos del ususario logueado
  setUserData(user){
    const userRef: AngularFirestoreDocument<any>=this.firestore.doc(`users/${user.udi}`);
    const userState: User = {
      uid:user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set (userState,{merge: true});
  }
  //método para cerrar la sesión
  cerrarSesion(){
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['inicio']);
    })
  }

  async gEmail(){
    const u = await this.fireAuth.currentUser;
    if(u===undefined){
      return null;
    }else{
      return u.email;
    }

  }
}
