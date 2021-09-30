import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-iniciasesion',
  templateUrl: './iniciasesion.component.html',
  styleUrls: ['./iniciasesion.component.css']
})
export class IniciasesionComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
