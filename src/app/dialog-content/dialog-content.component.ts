import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  imports: [ MatButtonModule, MatDialogModule ],
  templateUrl: './dialog-content.component.html',
  styleUrl: './dialog-content.component.sass'
})
export class DialogContentComponent {

}
