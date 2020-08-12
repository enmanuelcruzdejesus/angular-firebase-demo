
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateTaskComponent } from './todotask/create-task.component';
import { EditTaskComponent } from './todotask/edit-task.component';
import { TaskListComponent } from './todotask/task-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '' , redirectTo: "/tasks" , pathMatch: 'full'},
  {path:'tasks' , component: TaskListComponent},
  {path:'edit-task' , component: EditTaskComponent},  
  {path:'create-task' , component: CreateTaskComponent}, 
  {path: '**' , component: PagenotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [TaskListComponent,EditTaskComponent,CreateTaskComponent,PagenotfoundComponent];

