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

  focused: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mettreAJour(data: Partial<TodoItem>): void {
    this.update.emit(data);
  }

  delete(item: TodoItem): void {
    this.remove.emit(item);
  }

  log(message: any) {
    console.log(message);
  }

}
