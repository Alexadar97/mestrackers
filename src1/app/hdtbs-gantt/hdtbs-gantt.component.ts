import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
declare var $;
@Component({
  selector: 'app-hdtbs-gantt',
  templateUrl: './hdtbs-gantt.component.html',
  styleUrls: ['./hdtbs-gantt.component.css']
})
export class HdtbsGanttComponent implements OnInit {


  addForm: any;

  // private granrdetailapi = this.getdata.appconstantpdp + 'apqpdevdetails/';
  // private addgrantapi = this.getdata.appconstantpdp + '/apqpdevdetails ';
  // private updateActualapi = this.getdata.appconstantpdp + 'apqpdevdetails/updateActual';



  constructor(private route: ActivatedRoute, private Formbuilder: FormBuilder, private router: Router,
  ) {


  }

  backpage() {
    this.router.navigateByUrl("dashboard/hdtbs-ganttview")
  }


  datagrantt = {
    "apqpdevdetailsid": null, "years": [2018, 2019, 2020],
    "months": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]],

    "data": [{
      "activity": "Engine Assembly Adaption", "values": 1.55, "ionumber": "Yet to Receive", "name": "I / O Needed by Jan",
      "projectyear": [2018], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP","DEC"]]
    },
    {
      "activity": "Engine Assembly Adaption", "values": 1.55, "ionumber": "Yet to Receive", "name": "I / O Needed by Jan",
      "projectyear": [2019], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP","DEC"]]
    },
    {
      "activity": "Engine Assembly Adaption", "values": 1.55, "ionumber": "Yet to Receive", "name": "I / O Needed by Jan",
      "projectyear": [2020], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP","DEC"]]
    },
    {
      "activity": "Engine Assembly Adaption", "values": 1.55, "ionumber": "Yet to Receive", "name": "I / O Needed by Jan",
      "projectyear": [2019], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP","DEC"]]
    },
    {
      "activity": "Engine Assembly Adaption", "values": 1.55, "ionumber": "Yet to Receive", "name": "I / O Needed by Jan",
      "projectyear": [2020], "projectmonth": [["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]], "qdata": [["JAN", "MAR", "JUN", "SEP","DEC"]]
    },
    

    ]
  }


  projectmonth(year, month, index) {
    if (this.datagrantt.data[index].projectyear != null) {
      if ((this.datagrantt.data[index].projectyear).indexOf(year) != -1) {
        var yearIndex = (this.datagrantt.data[index].projectyear).indexOf(year);
        if (this.datagrantt.data[index].projectmonth[yearIndex].indexOf(month) != -1) {
          if (this.datagrantt.data[index].qdata[yearIndex].indexOf(month) != -1) {
            if (month == "JAN"){
              return 1;
            }
           else if (month == "MAR"){
              return 2;
            }
            else if (month == "JUN"){
              return 3;
            }
            else if (month == "SEP"){
              return 4;
            }
            else if (month == "DEC"){
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


}
