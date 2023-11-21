import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { EmployeeService } from '../../shared/services/employee/employee.service';
import { error } from 'console';
import { FormBuilder, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { EmployeeDetail } from '../../shared/services/employee/employee-detail.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TicketHelper } from '../../_helpers/leaners-helperClass';
import { ComonService } from './../../shared/services/comon.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-form',
    templateUrl: './ticketissue.component.html',
    styleUrls: ['./ticketissue.component.scss','./ticketissue.css'],
    animations: [routerTransition()]
})
export class TicketissueComponent implements OnInit {

    submitted = false;
    ticketGroup : FormGroup;

    issueTypeList =[{name:'Hardware',id:2},{name:'Software',id:1}]
      employeeData: any[];
      civilstatus: any[];
      designation: any[];
      branch:any[];
      employeeFields : string[] = ["Id","Full Name","DOB","NIC","Calling Name","Brach","Action"];
      technicianList :any;
      displayedColumns: string[] = ["id", "fullname", "dob", "nic", "callingname","branch"];
      inventoryList:any;
     prorityType = ['Immediatly','Meduim','No hurry']



     constructor(private router: Router,
        public employeeService:EmployeeService,
        public commonService: ComonService,private toastr: ToastrService,private fb:FormBuilder) {}

    


     ngOnInit() {

        this.ticketGroup = this.fb.group({
            issuedate :[new Date()],
            ticketnumber : [TicketHelper.systemIdGenratr('T_')],
            description :[''],
            issuetype :[1],
            Ticketstatus :[3],
            Prioritytype :['Immediatly'],
            IssuerId :['',Validators.required],
            AssignerId :['',Validators.required],
            InventoryId:['',Validators.required],
        })

        this.loadDefaultData()
    }

    get f(){
        return this.ticketGroup.controls;
    }

    loadDefaultData() {
        const emplyeeList = this.employeeService.refreshList();
        const inventory = this.commonService.getInventory();

        forkJoin([emplyeeList, inventory]) //we can use more that 2 api request 
        .subscribe(
            result => {
                //this will return list of array of the result
                this.technicianList = result[0];
                this.technicianList.filter(t=>t.designation === 'Technician');
                this.inventoryList = result[1];
            }
        )
        
    }

      //submit data
      onSubmit(form:NgForm){
            this.submitted = true;

       
      }


      //reset fields
      resetData(form:NgForm){
       this.toastr.warning('Successfully','Reset Form') 
      }





}
