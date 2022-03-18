import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TodoList, TodolistService } from '../todolist.service'

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input() label!: string;

  constructor(public service: TodolistService) { }

  ngOnInit(): void {

  }

}
