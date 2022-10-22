
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/services/login.service';
declare function razorPay(obj:any):Observable<any>;
@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.css']
})
export class PricingTableComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router,private spinner:NgxSpinnerService,private loginService:LoginService) { }
  users:any={}
  
  ngOnInit(): void {
    this.spinner.show().then(() => {
      this.loginService.getCurrentUser().subscribe((data) => {
        this.spinner.hide()
        this.users = data;


      }, error => {
        this.spinner.hide()
        Swal.fire("Error", "Somethings went wrong", "error")
      })
    })
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

            //become admin
            this.spinner.show().then(()=>{
              this.adminService.changeRole(this.users.userid).subscribe(()=>{
                this.spinner.hide()
                this.logOut()
              },()=>{
                this.spinner.hide()
                Swal.fire("Error","Something went wrong","error")
              })
            })

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

  logOut() {
    this.loginService.doLogOut()
    this.router.navigateByUrl("/login")
  }
}
