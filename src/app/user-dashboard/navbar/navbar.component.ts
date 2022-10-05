import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getShowProfile(profileDetail:any){
    if(profileDetail.value.includes("show")){
      profileDetail.value = "dropdown-menu dropdown-menu-end"
    }else{
      profileDetail.value = "dropdown-menu dropdown-menu-end show"
    }
  }
}
