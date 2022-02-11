import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodolistService, TodoList } from './todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'l3m-tpX-todolist-angular-y2022';
  todoList: TodoList | any;
  todoListObs!: Observable<TodoList>;

  constructor(public service: TodolistService) {
    this.todoListObs = service.observable;
  }

  ngOnInit() {
    this.service.observable
      .subscribe( reponse => {
        this.todoList = reponse;
        console.log(reponse);
      })
  }
}
