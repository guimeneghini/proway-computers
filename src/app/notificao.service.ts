import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificaoService {

  constructor(
    private scnakBar: MatSnackBar
  ) { }

  notificar(mensagem:string) {
    this.scnakBar.open(mensagem, "Ok", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    });
  }
}
