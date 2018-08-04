import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Jim Todo's";
  todos = [
    {
      label: "Bring Milk",
      done: false,
      priority: 3
    },
    {
      label: "Pay cell bill",
      done: true,
      priority: 1
    },
    {
      label: "clean shed",
      done: false,
      priority: 4
    },
    {
      label: "replace bathroom bulb",
      done: false,
      priority: 5
    }
  ];

  addTodo(newTodolabel) {
    var newTodo = {
      label: newTodolabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }
}
