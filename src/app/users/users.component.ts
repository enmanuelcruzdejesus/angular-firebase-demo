import { TodoService } from './../services/todo.service';

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from 'firebase';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public data: User[];
  users: User[];

  constructor(private service: TodoService) { 
   
  }

  ngOnInit(): void {
   // this.getUser();
  }

  async getUser(){
  //   await this.service.getUserFromRealTimeDb().then(value =>{
  //     this.users = value  as User[]; 
  //   })
  //   this.data = this.users;
  //   console.log(this.data);
  }

 
}
