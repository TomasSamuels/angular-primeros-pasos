import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inferface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[];

  @Output() onDelete: EventEmitter<string>;

  constructor(){
    this.characterList = [{
      name: 'Trunks',
      power: 10
    }];
    this.onDelete = new EventEmitter();
  }

  onDeleteCharacter(id?: string): void{

    if(!id) return;

    this.onDelete.emit(id);
  }

}
