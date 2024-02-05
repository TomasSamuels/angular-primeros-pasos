import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inferface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output() onNewCharacter: EventEmitter<Character>;

  public character: Character;

  constructor(){
    this.character = {
      name: '',
      power: 0
    };
    this.onNewCharacter  = new EventEmitter();
  }

  emitCharacter(): void{
    debugger;
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
  }

}
