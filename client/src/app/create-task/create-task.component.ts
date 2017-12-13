import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task: Task = <Task>{};
  errors: Object = {};
  showMessage: boolean=false;
  message:string;
  alertType: string;
  @ViewChild("createForm") form;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onSaveTask() {
    this.http.post('http://localhost:3000/task', { name: this.task.name, priority: this.task.priority, dueDate: this.task.dueDate })
      .subscribe(
      res => {
        this.message = "Task registered successfully";
        this.alertType = "success";
        this.showMessage = true; 
      }, err => {
        err.error.forEach(element => {
          this.errors[element.name] = element.message;
          this.form.controls[element.name].setErrors({ "serverError": true });
        });

      })
  }
  alertClose(){
    this.showMessage = false;
    this.message = "";
  }
}

interface Task {
  name:string;
  priority: number;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  id: number;
}
