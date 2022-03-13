import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details-form',
  templateUrl: './student-details-form.component.html',
  styleUrls: ['./student-details-form.component.css']
})
export class StudentDetailsFormComponent implements OnInit {
  data: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
this.http.get("./assets/studentDetails.json").subscribe(data=>{
  console.log(data);
  this.data=data;
})
  }

}
