import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "src/app/interfaces/todo";
import { FormBuilder, Validators } from "@angular/forms";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deleteTodo = new EventEmitter<string>();
  constructor(private fb: FormBuilder, private todoService: TodoService) {}
  @Output() editTodo = new EventEmitter<string>();
  @Output() editSaveTodo = new EventEmitter<string>();
  form = this.fb.group({
    name: ["", [Validators.required, Validators.maxLength(10)]],
  });

  ngOnInit(): void {}
  remove(id: string) {
    this.deleteTodo.emit(id);
  }

  // フラグの変更
  edit(id: string) {
    this.editTodo.emit(id);
  }

  // 更新処理
  editSave(id: string, name: string) {
    this.todoService.editSaveTodo(id, name);
  }
}
