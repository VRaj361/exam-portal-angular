import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  getShowProfile(profileDetail:any){
    if(profileDetail.value.includes("show")){
      profileDetail.value = "dropdown-menu dropdown-menu-end"
    }else{
      profileDetail.value = "dropdown-menu dropdown-menu-end show"
    }
  }

  logOut(){
    this.loginService.doLogOut()
    this.router.navigateByUrl("/login")
  }
}
