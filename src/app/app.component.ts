import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TodolistService, TodoList, TodoItem } from './todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'l3m-tpX-todolist-angular-y2022';
  todoList: TodoList | any;
  todoListObs!: Observable<TodoList>;

  @Input() data!: TodoItem;
  @Output() update = new EventEmitter<Partial<TodoItem>>();
  @Output() remove = new EventEmitter<TodoItem>();

  constructor(public service: TodolistService) {
    this.todoListObs = service.observable;
  }

  ngOnInit() {
    this.service.observable
      .subscribe( reponse => {
        this.todoList = reponse;
        //console.log(reponse); DEBUG
      })
  }

  trackByMethod(index: number, item: TodoItem): number {
    return item.id;
  }

  delete(item: TodoItem): void {
    this.remove.emit(item);
  }

  log(message: any) {
    console.log(message);
  }
}
