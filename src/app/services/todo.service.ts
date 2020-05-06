import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Todo } from "src/app/interfaces/todo";
import { User } from "src/app/interfaces/user";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  constructor(private afs: AngularFirestore) {}

  createTodo(name: string, uid: string) {
    const id = this.afs.createId();
    const params: Todo = {
      name,
      uid,
      id,
      list: "todo",
      isEdit: false,
    };
    this.afs.collection<Todo>("todos").doc(id).set(params);
  }

  putTodo(params: Todo) {
    this.afs.collection<Todo>("todos").doc(params.id).set(params);
  }

  getTodos() {
    return this.afs.collection<Todo>("todos").valueChanges();
  }

  deleteTodo(id: string) {
    this.afs.collection<Todo>("todos").doc(id).delete();
  }

  // 編集フラグの変更
  editTodo(id: string) {
    const updateRef = this.afs.collection<Todo>("todos").doc(id);
    updateRef.update({ isEdit: true });
  }

  // 編集内容の保存
  editSaveTodo(id: string, name: string) {
    const updateRef = this.afs.collection<Todo>("todos").doc(id);
    updateRef.update({ name: name, isEdit: false });
  }
}
