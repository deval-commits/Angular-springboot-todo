import { Component, OnInit } from '@angular/core';

class Todo {

  constructor(
    public id: number,
    public desc: String,
    public targetDate: Date,
    public status: boolean) {


  }
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  //non we create array or list of obj
  todos: Todo[] = [

    new Todo(1, 'learning angluar',  new Date(), false),
    new Todo(2, 'learning springboot', new Date(), false),
    new Todo(3, 'learning React', new Date(), false)

  ]

  //obj creation in angular
  // todo = {  
  //   id: 1 ,
  //   desc:'learning Angular course'
  // }
  constructor() { }

  ngOnInit() {
  }

}
