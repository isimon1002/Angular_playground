import { Component, OnInit, Input } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-name2',
  templateUrl: './name2.component.html',
  styleUrls: ['./name2.component.css']
})
export class Name2Component implements OnInit {
  names = this.namesService.names;
  @Input()name2: string;

  constructor(private namesService: NamesService) { }

  ngOnInit() {
  }

}
