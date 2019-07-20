import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar:MatSnackBar) { }

  sendNotification(message, action?){
    this.snackBar.open(message, action || null, {
      duration: 500,
    });
  }
}
