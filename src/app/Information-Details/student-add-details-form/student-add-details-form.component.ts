import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-add-details-form',
  templateUrl: './student-add-details-form.component.html',
  styleUrls: ['./student-add-details-form.component.css']
})
export class StudentAddDetailsFormComponent implements OnInit {
  studentAddress: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("./assets/studentAddressInfo.json").subscribe(data=>{
      console.log("dataAddress=> ",data);
      this.studentAddress=data;
    })
  }
  StudentAddFun(e: any, value: any, key: any) {
    console.log("e= ", e);
    console.log("value= ", value);
    console.log("key= ", key);
  }
}
