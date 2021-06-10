import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }


}
