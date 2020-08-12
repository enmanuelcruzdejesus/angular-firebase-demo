import { TodoService } from './../services/todo.service';
import { TodoTask } from './../models/todotask';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : TodoTask[];
  t : any;
  searchTerm: string;
  constructor(private service: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.getTask(); 

  }


  
  createTask(){
    this.router.navigate(["/create-task"])
  }

  editTask(task: TodoTask){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "key": task.key,
          "id": task.id,
          "descrip": task.descrip,
          "created": task.created,
          "completed": task.completed
      }
  };
  
  this.router.navigate(["edit-task"], navigationExtras);
  }

  deleteTask(task: TodoTask) {
    this.service.deleteCustomerTodo(task.key);
  }

  getTask() {
    this.service.getallTask().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.tasks = data;
      console.log("printing");
      console.log(this.t);
    });
  }
 

}
