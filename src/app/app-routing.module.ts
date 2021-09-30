import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { BarradenavegacionComponent } from './pages/barradenavegacion/barradenavegacion.component';
import { IniciasesionComponent } from './pages/iniciasesion/iniciasesion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { RegistrateComponent } from './pages/registrate/registrate.component';
import { VerificarEmailComponent } from './pages/verificar-email/verificar-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'iniciasesion', component: IniciasesionComponent },
  { path: 'barradenavegacion', component: BarradenavegacionComponent },
  { path: 'registrate', component: RegistrateComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verificar-email', component: VerificarEmailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
