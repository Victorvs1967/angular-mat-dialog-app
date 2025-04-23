import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-dialog',
  imports: [ MatButtonModule ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.sass'
})
export class DialogComponent {

  readonly dialog = inject(MatDialog);
  readonly router = inject(Router);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      panelClass: 'dialog-container',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: '.concat(result));
      result ? this.loginDialog(): this.router.navigate(['dialog']);
    });
  }

  loginDialog() {
    const dialogRef = this.dialog.open(LoginFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: '.concat(result));
      result ? this.router.navigate(['table']) : this.router.navigate(['dialog']);
    });
  }

}
