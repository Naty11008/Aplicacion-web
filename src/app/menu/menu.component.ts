import { Component, OnInit } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonSearchbar, IonContent, IonChip, IonLabel, IonCard, IonIcon, IonCardHeader, IonCardTitle, IonCardSubtitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonSearchbar, IonContent, IonChip, IonLabel, IonCard, IonIcon, IonCardHeader, IonCardTitle, IonCardSubtitle],
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
