import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'CategoryName';
  projectform:FormGroup;
  card:any;
  constructor(private router: Router,private Formbuilder: FormBuilder) {
    this.filterValues = this.eachValues;
    this.projectform = Formbuilder.group({
      'projecttype': ["Bothvalue", Validators.compose([Validators.required])],
  });

   }

  ngOnInit() {
    // this.records= [
    //   { CategoryID: 1,  CategoryName: "Beverages", Description: "Coffees, teas" },
    //   { CategoryID: 2,  CategoryName: "Condiments", Description: "Sweet and savory sauces" },
    //   { CategoryID: 3,  CategoryName: "Confections", Description: "Desserts and candies" },
    //   { CategoryID: 4,  CategoryName: "Cheeses",  Description: "Smetana, Quark and Cheddar Cheese" },
    //   { CategoryID: 5,  CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" },
    //   { CategoryID: 6,  CategoryName: "Beverages", Description: "Beers, and ales" },
    //   { CategoryID: 7,  CategoryName: "Condiments", Description: "Selishes, spreads, and seasonings" },
    //   { CategoryID: 8,  CategoryName: "Confections", Description: "Sweet breads" },
    //   { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
    //   { CategoryID: 10, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" }
    //  ];
  }
  ganttpage() {
    this.router.navigateByUrl("dashboard/hdtbs-ganttview");
  }
  newproject() {
    this.router.navigateByUrl("dashboard/new-project");
  }
  projectTytpes = {'1': 'Legislation','2': 'Export','3': 'Domestic'};

  eachValues=[{"value1":"1","value2":"MDT","value3":"HDT BS V1","value4":"status",
  "value5":"Planned Date","value6":"Line Readyness","value7":"24-04-19"},
  {"value1":"2","value2":"MDT","value3":"HDT BS V1","value4":"status",
  "value5":"Planned Date","value6":"Line Readyness","value7":"24-04-19"},
  {"value1":"3","value2":"MDT","value3":"HDT BS V1","value4":"status",
  "value5":"Planned Date","value6":"Line Readyness","value7":"24-04-19"},
  {"value1":"1","value2":"MDT","value3":"HDT BS V1","value4":"status",
  "value5":"Planned Date","value6":"Line Readyness","value7":"24-04-19"},
  {"value1":"2","value2":"MDT","value3":"HDT BS V1","value4":"status",
  "value5":"Planned Date","value6":"Line Readyness","value7":"24-04-19"},
  {"value1":"2","value2":"MDT","value3":"HDT BS V1","value4":"status",
  "value5":"Planned Date","value6":"Line Readyness","value7":"24-04-19"},
  {"value1":"2","value2":"MDT","value3":"HDT BS V1","value4":"status",
  "value5":"Planned Date","value6":"Line Readyness","value7":"24-04-19"},
  {"value1":"2","value2":"MDT","value3":"HDT BS V1","value4":"status",
  "value5":"Planned Date","value6":"Line Readyness","value7":"24-04-19"},
  
]
filterValues = [];1
  Currentvalue:any;
  selectvalues(id){
    this.filterValues = this.eachValues.filter(
      (data) =>
       data.value1 == id);
     console.log(id);

  }

}
