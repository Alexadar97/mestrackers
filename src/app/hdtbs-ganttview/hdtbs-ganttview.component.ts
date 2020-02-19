import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DatatransferService } from '../datatransfer.service'
declare var $;
@Component({
  selector: 'app-hdtbs-ganttview',
  templateUrl: './hdtbs-ganttview.component.html',
  styleUrls: ['./hdtbs-ganttview.component.css']
})



export class HdtbsGanttviewComponent implements OnInit {

  constructor(private router:Router, private getdata: DatatransferService) { }

  ngOnInit() {
  }
btnclick(){
  this.router.navigateByUrl("dashboard/hdtbs-gantt");
}
backpage(){
  this.router.navigateByUrl("dashboard/project")
}
datagrantt = {
  "apqpdevdetailsid": null, "years": [2018, 2019, 2020],
  "months": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]],

  "data": [{
    "activity": "QG Deliverables",
     "projectyear": [2018,2019,2020],  "projectmonth":  [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], 
     ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], 
     ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]]
  
  }]
}


projectmonth(year, month, index) {
  if (this.datagrantt.data[index].projectyear != null) {
    if ((this.datagrantt.data[index].projectyear).indexOf(year) != -1) {
      var yearIndex = (this.datagrantt.data[index].projectyear).indexOf(year);
      if (this.datagrantt.data[index].projectmonth[yearIndex].indexOf(month) != -1) {
        console.log(this.datagrantt.data[index].projectmonth[yearIndex].indexOf(month))

        return true;
      }
    }
  }

  else {
    return false;
  }
}
tooltiperror:any;
newproject() {
  this.router.navigateByUrl("dashboard/project");
}
modalname:any;
eyemodal() {
  this.modalname = 'download';
  this.tooltiperror = "";
  $("#ganttchat").modal("show");
}
conformeyemodal(){
  this.tooltiperror = ""
  
 
  this.getdata.showNotification('bottom', 'right', 'Updated successfully !!', "success");
  $("#edittooltip").modal("hide");
}
uploadmodal() {
  this.modalname = 'upload';
  $("#ganttchat").modal("show");
}
}
