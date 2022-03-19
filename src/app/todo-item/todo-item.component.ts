import { TodoItem } from './../todolist.service';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() label!: string;
  @Input() data!: TodoItem;
  @Output() update = new EventEmitter<Partial<TodoItem>>();
  @Output() remove = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(item: TodoItem): void {
    this.remove.emit(item);
  }

}
