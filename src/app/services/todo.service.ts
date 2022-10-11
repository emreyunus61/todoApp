import { HttpClient } from '@angular/common/http';
import { Inject,Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(

    @Inject('apiUrl') private apiUrl: string,   
    private http: HttpClient
  ) { }


  addTodo(obj:any) {
    return this.http.post(this.apiUrl + '/todo', obj);
  }


  getAllTodos() {
    return this.http.get(this.apiUrl + '/todo');
  }

  updateTodo(obj:any) {
    return this.http.put(this.apiUrl + '/todo', obj);
  }

  removeTodo(id:any) {
    return this.http.delete(this.apiUrl + '/todo/' + id);
  }




}
