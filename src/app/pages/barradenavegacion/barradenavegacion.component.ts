import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-barradenavegacion',
  templateUrl: './barradenavegacion.component.html',
  styleUrls: ['./barradenavegacion.component.css']
})
export class BarradenavegacionComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
