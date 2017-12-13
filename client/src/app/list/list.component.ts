import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 overdueTasks:Task;
  pendingTasks:Task; 
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Task>('http://localhost:3000/task?overdue=true').subscribe(
      data=> {       
          this.overdueTasks=data;
        });
    this.http.get<Task>('http://localhost:3000/task?overdue=false').subscribe(
      data=> {       
              this.pendingTasks=data;
    });
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