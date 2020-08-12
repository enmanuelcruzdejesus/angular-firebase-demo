import { TodoTask } from './../models/todotask';
import { TodoService } from './../services/todo.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {


   task = new TodoTask();
  constructor(private service: TodoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.task.key = params["key"];
      this.task.id = params["id"];
      this.task.descrip = params["descrip"];
      this.task.created = params["created"];
      this.task.completed = params["completed"];
  });

  }

  editTask(){
 
    this.service.updateCustomerTodo(this.task.key,{descrip: this.task.descrip, created: this.task.created, completed: this.task.completed});
    this.router.navigate([""])
  }

}
