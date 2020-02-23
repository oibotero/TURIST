import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../servicio/login-service.service'
import { Routes, RouterModule, Router } from '@angular/router'
import { User } from '../user/user.model'
import { UserServiceService } from '../servicio/user-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private LoginServiceService:LoginServiceService, private Router:Router, private userService:UserServiceService) { }
  data: any = {
    correoElectronico: '',
    contrasena: ''
  }
  ngOnInit() {
    
  }


  
  Login (){
    this.LoginServiceService.login(this.data.correoElectronico, this.data.contrasena).subscribe(
    res => {
      console.log(res);      
  });
}

logIn(username: string, password: string, event: Event) {
  event.preventDefault(); // Avoid default action for the submit button of the login form

  // Calls service to login user to the api rest
  this.LoginServiceService.login(username, password).subscribe(

    res => {
     console.log(res);
     let u:User = {userName:username};
     this.userService.setUserLoggedIn(u);
     console.log(res);      

    },
    error => {
      console.error(error);
      
    },

    () => this.navigate()
  );

}

navigate() {
  this.Router.navigate(['/inicio']);
}

}
