import { Component } from '@angular/core';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css'],
})
export class RightSectionComponent {
  newPerson: string = '';
  deletedNames: string[] = [];
  addedPeople: { name: string; age: number }[] = [];

  addPerson() {
    const parts = this.newPerson.split(' ');
    if (parts.length === 2) {
      const name = parts[0];
      const age = parseInt(parts[1], 10);
      if (name && age > 0) {
        this.addedPeople.push({ name, age });
        this.newPerson = '';
      }
    }
  }

  deletePerson(name: string) {
    const index = this.addedPeople.findIndex((person) => person.name === name);
    if (index !== -1) {
      this.deletedNames.push(this.addedPeople[index].name);
      this.addedPeople.splice(index, 1);
    }
  }
}
