import { Component, Input } from '@angular/core';
import { NamesService } from './names.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private namesService: NamesService) { }
  submited = false;
  name: string

  onSubmit(){
    if(this.submited){
      this.namesService.addNames(this.name)
    }
    this.submited = !this.submited;
  }
}
