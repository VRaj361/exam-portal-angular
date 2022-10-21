import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
declare function razorPay(obj:any):Observable<any>

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private spinner: NgxSpinnerService,private adminService:AdminService) { }
  users:any={}
  authority:any="";
  ngOnInit(): void {
    this.spinner.show().then(() => {
      this.loginService.getCurrentUser().subscribe((data) => {
        this.spinner.hide()
        this.users = data;
        this.authority = data.authorities["0"].authority=="Admin"?"Admin":"User"

      }, error => {
        this.spinner.hide()
        Swal.fire("Error", "Somethings went wrong", "error")
      })
    })

    this.loginService.getCurrentUser().subscribe()
  }
  getShowProfile(profileDetail: any) {
    if (profileDetail.value.includes("show")) {
      profileDetail.value = "dropdown-menu dropdown-menu-end"
    } else {
      profileDetail.value = "dropdown-menu dropdown-menu-end show"
    }
  }

  logOut() {
    this.loginService.doLogOut()
    this.router.navigateByUrl("/login")
  }


  checkUserAdmin(){
    if(this.router.url.includes("/admin")){
      return true;
    }else{
      return false;
    }
  }
  checkUserAdminhead(){
    if(this.router.url.includes("/admin") && this.users.username == "vraj@gmail.com"){
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
}
