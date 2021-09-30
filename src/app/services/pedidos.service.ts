import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private firestore:AngularFirestore, private authService:AuthService) { }
  form= new FormGroup({
    email: new FormControl(''),
    pedido: new FormControl(''),
    pedidoCompletado: new FormControl(false)
  });

  crearPedidos(data){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.collection('pedidos').add(data).then(res=> {},
        err=> reject(err));
    });
  }
  getPedidos(){
    return this.firestore.collection('pedidos').snapshotChanges();
  }
  updatePedido(data){
    return this.firestore.collection('pedidos').doc(data.payload.doc.id).set({pedidoCompletado:true},{merge:true});
  }
  deletePedido(data){
    return this.firestore.collection('pedidos').doc(data.payload.doc.id).delete();
  }
}
