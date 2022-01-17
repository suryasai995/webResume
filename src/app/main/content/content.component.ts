import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  spinner: any = [
    { name: "Angular", color: "primary", value: 60 },
    { name: "HTML", color: "primary", value: 80 },
    { name: "CSS", color: "#c5cae9", value: 65 },
    { name: "MYSQL", color: "wprimary", value: 40 },

    { name: "JAVASCARIP", color: "blue", value: 30 }
  ]

  public details: any = [{

    name: "SURYA SAI.D",
    title: "Angular Developer",
    email: "suryasai009@gamil.com",
    phno: '9959998729'
  }
  ]
  constructor() {
    console.log(this.details)
  }

  ngOnInit(): void {
  }

}
