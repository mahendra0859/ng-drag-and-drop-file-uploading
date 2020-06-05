import { Component } from '@angular/core';
@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
})
export class DragDropComponent {
  files: any = [];

  uploadFile(event) {
    console.log('event', event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      console.log('element', element);
      this.files.push(element.name);
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
  }
}
