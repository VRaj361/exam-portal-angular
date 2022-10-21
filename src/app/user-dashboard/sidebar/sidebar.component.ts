import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
declare function razorPay(obj:any):Observable<any>;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  url:string=""
  category:Array<any>=[]
  constructor(private router:Router,private adminService : AdminService,private spinner:NgxSpinnerService) { }
  ngOnInit(): void {
    this.spinner.show().then(()=>{
      this.adminService.showCategory().subscribe((e)=>{
        this.spinner.hide()
        if (e.status == 200) {
          this.category = e.data
        } else {
          Swal.fire("Error", "Somethings went wrong", "error")
        }
      }, () => {
        this.spinner.hide()
        Swal.fire("Error", "Somethings went wrong", "error")
      })

    })
  }

  //for side bar selections

  getClassSideBar(classSide:any,classSide1:any){
    this.url=this.router.url;
    if(this.url.includes("myaccout")){
      classSide = "menu-item active"
      classSide1 = "menu-item"
    }else if(this.url.includes("myconnections")){
      classSide1 = "menu-item active"
      classSide = "menu-item"
    }
  }

  checkUserAdmin(){
    if(this.router.url.includes("/admin")){
      return true;
    }else{
      return false;
    }
  }

  paymentDetails:any={}
  response:any={}
  getOrderTransaction(){
    this.spinner.show().then(()=>{
      this.adminService.createOrder().subscribe((e)=>{
        this.spinner.hide()
        if(e.status==200){
          this.paymentDetails = JSON.parse(e.data)
          if(this.paymentDetails.status == "created"){

            let paymentD = {
              "amount":this.paymentDetails.amount,
              "created_at":this.paymentDetails.created_at,
              "amount_due":this.paymentDetails.amount_due,
              "currency":this.paymentDetails.currency,
              "orderid":this.paymentDetails.id
            }
            this.response = razorPay(paymentD)
            console.log("res "+this.response.razorpay_payment_id)

            // this.spinner.show().then(()=>{
            //   this.adminService.changeRole(this.users.userid).subscribe(()=>{
            //     this.spinner.hide()
            //   },()=>{
            //     this.spinner.hide()
            //     Swal.fire("Error","Something went wrong","error")
            //   })
            // })
          }else{
            Swal.fire("Error","Transaction Cancelled Try again..","error")
          }
        }else{
          Swal.fire("Error","Something went wrong","error")
        }
      },()=>{
        this.spinner.hide()
        Swal.fire("Error","Something went wrong","error")
      })
    })
  }
}
