import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatatransferService } from '../datatransfer.service'
declare var $;
@Component({
  selector: 'app-hdtbs-gantt',
  templateUrl: './hdtbs-gantt.component.html',
  styleUrls: ['./hdtbs-gantt.component.css']
})
export class HdtbsGanttComponent implements OnInit {

  list: any;
  addForm: any;

  // private granrdetailapi = this.getdata.appconstantpdp + 'apqpdevdetails/';
  // private addgrantapi = this.getdata.appconstantpdp + '/apqpdevdetails ';
  // private updateActualapi = this.getdata.appconstantpdp + 'apqpdevdetails/updateActual';



  constructor(private route: ActivatedRoute, private Formbuilder: FormBuilder, private router: Router, private getdata: DatatransferService) {


  }

  backpage() {
    this.router.navigateByUrl("dashboard/hdtbs-ganttview")
  }


  datagrantt = {
    "apqpdevdetailsid": null, "years": [2018, 2019, 2020],
    "months": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]],

    "data": [{
      "activity": "Engine Assembly Adaption", "values": 1.55, "ionumber": "Yet to Receive", "name": "I / O Needed by Jan",
      "projectyear": [2018], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP", "DEC"]], "img": 1, "tooltip": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    },
    {
      "activity": "Engine Sub Assem", "values": 0.50, "ionumber": "Yet to Receive", "name": "I / O Needed by Jan",
      "projectyear": [2019], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP", "DEC"]], "img": 0, "tooltip": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    },
    {
      "activity": "Position Ring Assembly Fixture ", "values": 0.50, "ionumber": "6355235565447", "name": "I / O Needed by Jan",
      "projectyear": [2020], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP", "DEC"]], "img": 0, "tooltip": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    },
    {
      "activity": "Position Ring Spueezer", "values": 1.55, "ionumber": "6355235565447", "name": "",
      "projectyear": [2019], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP", "DEC"]], "img": 1, "tooltip": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    },
    {
      "activity": "Engine Assembly DC tools", "values": 0.50, "ionumber": "6355235565447", "name": "I / O Needed by Jan",
      "projectyear": [2020], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP", "DEC"]], "img": 1, "tooltip": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    },
    {
      "activity": "Engine Assembly TDC Measurement", "values": 0.50, "ionumber": "6355235565447", "name": "",
      "projectyear": [2020], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP", "DEC"]], "img": 1, "tooltip": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    },
    {
      "activity": "Haussmann Controller", "values": 1.55, "ionumber": "Yet to Receive", "name": "",
      "projectyear": [2020], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP", "DEC"]], "img": 1, "tooltip": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    },
    {
      "activity": "Interface with Haussmann Box", "values": 0.50, "ionumber": "Yet to Receive", "name": "",
      "projectyear": [2020], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP", "DEC"]], "img": 1, "tooltip": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    },
    {
      "activity": "Ecom Interface", "values": 1.55, "ionumber": "Yet to Receive", "name": "I / O Needed by Jan",
      "projectyear": [2020], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP", "DEC"]], "img": 1, "tooltip": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    },
    {
      "activity": "Mechanical Modification &...", "values": 0.50, "ionumber": "Yet to Receive", "name": "I / O Needed by Jan",
      "projectyear": [2020], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP", "DEC"]], "img": 1, "tooltip": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    },
    {
      "activity": "Oil Farm / Diesel Line Changes", "values": 1.55, "ionumber": "Yet to Receive", "name": "I / O Needed by Jan",
      "projectyear": [2020], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP", "DEC"]], "img": 1, "tooltip": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    },
    {
      "activity": "Engine ECU / Flashing", "values": 0.50, "ionumber": "Yet to Receive", "name": "I / O Needed by Jan",
      "projectyear": [2020], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP", "DEC"]], "img": 1, "tooltip": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    },


    ]
  }
  edittooltipindex: any;
  tooltiperror: any;
  tooltip = "";
  edittooltip(index) {
    this.tooltip = "";
    this.tooltiperror = "";
    this.edittooltipindex = index;
    $("#edittooltip").modal("show");
  }
  emptyerror() {
    if (this.tooltip == "" || this.tooltip == null) {
      this.tooltiperror = "Text is required"
    }
    else {
    this.tooltiperror = "";
    }
  }
  confirmedittooltips() {
    if (this.tooltip == "" || this.tooltip == null) {
      this.tooltiperror = "Text is required";
      this.getdata.showNotification('bottom', 'right', 'Form is invalid..!!', "danger");
    }
    else {
      this.tooltiperror = ""
      $("#edittooltip").modal("hide");
      this.datagrantt.data[this.edittooltipindex].tooltip == this.tooltip;
      this.getdata.showNotification('bottom', 'right', 'Updated successfully !!', "success");
    }

  }
  projectmonth(year, month, index) {
    if (this.datagrantt.data[index].projectyear != null) {
      if ((this.datagrantt.data[index].projectyear).indexOf(year) != -1) {
        var yearIndex = (this.datagrantt.data[index].projectyear).indexOf(year);
        if (this.datagrantt.data[index].projectmonth[yearIndex].indexOf(month) != -1) {
          if (this.datagrantt.data[index].qdata[yearIndex].indexOf(month) != -1) {
            if (month == "JAN") {
              return 1;
            }
            else if (month == "MAR") {
              return 2;
            }
            else if (month == "JUN") {
              return 3;
            }
            else if (month == "SEP") {
              return 4;
            }
            else if (month == "DEC") {
              return 5;
            }
            else {
              return 6;
            }
          }
          else {
            return 6;
          }
        }
      }

      else {
        return 7;
      }
    }
  }

  granrid: any;

  ngOnInit() {

  }
  modalname: any;
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
