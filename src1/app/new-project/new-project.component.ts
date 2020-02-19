import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
declare var $;

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  bsValue = new Date();
  bsRangeValue: Date[]; 
  maxDate = new Date();
  newprojectform:any;
  constructor(private FormBuilder: FormBuilder, private router:Router) { 
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];

    this.newprojectform = this.FormBuilder.group({
      "priority": ['Medium', Validators.compose([Validators.required])],
    })
  }

  ngOnInit() {
  }
  newproject() {
    this.router.navigateByUrl("dashboard/project");
  }
  submitproject(){
    $("#Submit").modal("show");
  }
  confirmSubmit(){
    $("#Submit").modal("hide");
    this.router.navigateByUrl("dashboard/hdtbs-ganttview");
  }
}
