import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonToggle, IonSelect, IonSelectOption, IonNote} from '@ionic/angular/standalone';


@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
   imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonToggle, IonSelect, IonSelectOption, IonNote, FormsModule],
})
export class SettingsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  darkMode = false;

  notifications: boolean = false;

  language: string = 'es';

  changeLanguage() {
    console.log('Idioma cambiado a:', this.language);
  }

    toggleDarkMode() {
    document.body.classList.toggle('dark', this.darkMode);
  }

}
