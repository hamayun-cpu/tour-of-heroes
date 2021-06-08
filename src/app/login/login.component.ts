import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;
  formData!: FormGroup;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl("admin"),
      password: new FormControl("admin")
    });
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    this.auth.login(this.userName, this.password)
       .subscribe( data => {
         if(data) this.router.navigate(['/dashboard']); 
    });
 }

}
