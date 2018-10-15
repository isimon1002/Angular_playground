import { Component, Input } from '@angular/core';
import { NamesService } from './names.service';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private namesService: NamesService) {
   }
  fullItem: {};
  item: string;
  todoList = [];
  done = false;

  onSubmit(){
    this.fullItem = {item: this.item, done: this.done}
    console.log(this.fullItem)
    this.todoList.push(this.fullItem)
    console.log(this.todoList)
  }

  onDelete(index){
    this.todoList.splice(index, 1)
  }

  comp(index){
    this.todoList[index].done = !this.todoList[index].done 
  }

}
