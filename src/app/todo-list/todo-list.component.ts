import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem, TodoList, TodolistService } from '../todolist.service'

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input() titre!: string;

  todoListObs!: Observable<TodoList>;

  constructor(public service: TodolistService) {
    this.todoListObs = service.observable;
  }

  ngOnInit(): void {

  }

  trackByMethod(index: number, item: TodoItem): number {
    return item.id;
  }

}
