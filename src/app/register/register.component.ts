import { Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonButton, IonContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [IonInput, IonItem, IonButton, IonContent],
})
export class RegisterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
