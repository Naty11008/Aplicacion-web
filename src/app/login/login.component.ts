import { Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonButton, IonContent, IonText} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonInput, IonItem, IonButton, IonContent, IonText],
})
export class LoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
