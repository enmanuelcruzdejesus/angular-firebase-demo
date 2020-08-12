import { Router } from '@angular/router';
import { TodoService } from './../services/todo.service';
import { TodoTask } from './../models/todotask';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task = new TodoTask();
  constructor(private service: TodoService, private router:Router) { }

  ngOnInit(): void {
  }

  createJob(){
    this.service.createTodo(this.task);
    this.router.navigate(['']);
  }

}
