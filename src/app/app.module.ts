import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsFormComponent } from './Information-Details/student-details-form/student-details-form.component';
import { StudentAddDetailsFormComponent } from './Information-Details/student-add-details-form/student-add-details-form.component';
import { HttpClientModule} from '@angular/common/http';
import { StudentDataComponent } from './Information-Details/student-data/student-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsFormComponent,
    StudentAddDetailsFormComponent,
    StudentDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
