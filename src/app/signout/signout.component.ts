import { Component, OnInit } from '@angular/core';
import { IonButton, IonAlert} from '@ionic/angular/standalone';

@Component({
  selector: 'app-signout',
  standalone: true,
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss'],
  imports: [IonButton, IonAlert],
})
export class SignoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  
    alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel'
    },
    {
      text: 'Cerrar sesión',
      handler: () => {
        console.log('Sesión cerrada');
      }
    }
  ];
  
  setResult(event: any) {
  console.log(event);
}

}
