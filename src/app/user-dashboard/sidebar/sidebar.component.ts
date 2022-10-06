import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  url:string=""
  constructor(private router:Router) { }

  ngOnInit(): void {
    // console.log(this.router.url)

  }

  //for side bar selections

  getClassSideBar(classSide:any,classSide1:any){
    this.url=this.router.url;
    console.log(this.url+" "+classSide)
    if(this.url.includes("myaccout")){
      classSide = "menu-item active"
      classSide1 = "menu-item"
    }else if(this.url.includes("myconnections")){
      classSide1 = "menu-item active"
      classSide = "menu-item"
    }
  }

}
