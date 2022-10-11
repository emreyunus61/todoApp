import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:  any  = {};

  constructor(
 
    private todoService: TodoService

  ) { }

  ngOnInit(): void {

    this.getAllTodos();
    
  }
   //Sürükle bırak fonksiyonu
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);   
    }
    this.updateTodo();
  }

  addTodo(todo:any):void{

    const obj = { todo: todo.value };
    this.todoService.addTodo(obj)
       .subscribe((res)=>{
        console.log(res)
        this.getAllTodos();
        todo.value = '';

       }, (err)=>{

       console.log(err);

       });
  }

  getAllTodos() {
    this.todoService.getAllTodos()
      .subscribe((res) => {
        console.log(res);
        Object.keys(res).forEach((key) => {
        // this.data[key] = res[key];
         this.data = res;
        });
      }, (err) => {
        console.log(err);
      });
  }

  updateTodo() {
    this.todoService.updateTodo(this.data)
      .subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

  removeTodo(id: number) {
    
      this.todoService.removeTodo(id)
        .subscribe((res) => {
          console.log(res);
          this.getAllTodos();
        }, (err) => {
          console.log(err);
        });
    
  }

}


