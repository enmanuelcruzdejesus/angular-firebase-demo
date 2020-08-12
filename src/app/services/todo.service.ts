import { TodoTask } from './../models/todotask';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private dbPath = "/todotasks"

  private todotaskDB: AngularFireList<TodoTask>;

  constructor(private db: AngularFireDatabase) { 


    this.todotaskDB = this.db.list("/todotasks");


  }

  createTodo(todo: TodoTask){
    this.todotaskDB.push(todo).then(value =>{
      console.log(value);
    });
  }

  updateCustomerTodo(key: string, value: any): Promise<void>{
    return this.todotaskDB.update(key,value);

  }

  deleteCustomerTodo(key: string): Promise<void>{
    return this.todotaskDB.remove(key);
  }




  getTask(){
    return new Promise((resolve,reject)=>{
      this.db.list(this.dbPath).valueChanges().subscribe(value=>{
        resolve(value);
      })
    })
  }

  getallTask(): AngularFireList<any>{
    return this.db.list(this.dbPath);
    
  }

  
}
