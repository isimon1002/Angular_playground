import { Component, Input } from '@angular/core';
import { NamesService } from './names.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private namesService: NamesService) { }
  item: string;
  todoList = [];

  onSubmit(){
    this.todoList.push(this.item)
    console.log(this.todoList)
  }

  onDelete(index){
    this.todoList.splice(index, 1)
  }

}
