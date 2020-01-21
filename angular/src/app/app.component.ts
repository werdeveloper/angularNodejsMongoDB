import { Component } from '@angular/core';
import { ConfirmationDialogService } from './shared/confirmation-dialog/confirmation-dialog.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private confirmationDialogService: ConfirmationDialogService
  ) {}
}
