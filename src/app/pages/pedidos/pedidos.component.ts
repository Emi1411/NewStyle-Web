import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PedidosService } from 'src/app/services/pedidos.service';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

 pedido = [];
  email=[];

 formulario = this.pedidosService.form;

  constructor(public pedidosService: PedidosService, public authService:AuthService) {

   }

  async ngOnInit() {
    const email = await this.authService.gEmail();
    console.log(email);
    this.email.push(email);
  }

  agregar(data:String){
    this.pedido.push(data);
    console.log(this.pedido);
  }
  eliminar= data=>{
    let index =this.pedido.indexOf(data);
    if(index > -1)this.pedido.splice(index,1);
  }
  onSubmit(){
    this.formulario.value.pedido = this.pedido;
    this.formulario.value.email = this.email;
    let data = this.formulario.value;

    this.pedido=[];
    this.formulario.setValue({
      email:'',
      pedido:'',
      pedidoCompletado:false
    });

    this.pedidosService.crearPedidos(data).then(res=>{});
  }
}
