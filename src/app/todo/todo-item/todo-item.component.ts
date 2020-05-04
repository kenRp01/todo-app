import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "src/app/interfaces/todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deleteTodo = new EventEmitter<string>();
  constructor() {}
  @Output() editTodo = new EventEmitter<string>();
  @Output() editNameTodo = new EventEmitter<string>();

  ngOnInit(): void {}
  remove(id: string) {
    this.deleteTodo.emit(id);
  }

  edit(id: string) {
    this.editTodo.emit(id);
  }
  // editName(id: string, name: string) {
  //   this.editNameTodo.emit(id, name);
  // }
}
