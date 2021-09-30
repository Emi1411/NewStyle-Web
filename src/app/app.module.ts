import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarradenavegacionComponent } from './pages/barradenavegacion/barradenavegacion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { IniciasesionComponent } from './pages/iniciasesion/iniciasesion.component';
import { RegistrateComponent } from './pages/registrate/registrate.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { environment } from './../environments/environment.prod';
import { VerificarEmailComponent } from './pages/verificar-email/verificar-email.component';



@NgModule({
  declarations: [
    AppComponent,
    BarradenavegacionComponent,
    InicioComponent,
    IniciasesionComponent,
    RegistrateComponent,
    AcercadeComponent,
    PedidosComponent,
    ForgotPasswordComponent,
    VerificarEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
