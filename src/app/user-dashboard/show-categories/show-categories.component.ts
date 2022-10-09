import { ToastrService } from 'ngx-toastr';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.css']
})
export class ShowCategoriesComponent implements OnInit {

  constructor(private adminService:AdminService,private sprinner:NgxSpinnerService,private toaster:ToastrService) { }

  category: Array<any> = []
  ngOnInit(): void {
    this.sprinner.show().then(()=>{
      this.adminService.showCategory().subscribe((e)=>{
        this.sprinner.hide()
        if(e.status==200){
          this.category = e.data
        }else {
          Swal.fire("Error","Somethings went wrong","error")
        }
      })
    })
  }

  deleteCategory(id:any){
    this.sprinner.show().then(()=>{
      this.adminService.deleteCategory(id).subscribe((e)=>{
        this.sprinner.hide()
        this.toaster.success("Category Delete Successfully")
        this.category = this.category.filter(cate=>cate.categoryid!=id);
      })
    })
  }

}
