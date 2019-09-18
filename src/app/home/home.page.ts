import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private answers = ['Parrains.', 'Walk-ons.', 'Voodoo BBQ.',
             'LIT Pizza.', 'The Chimes.', 'Raising Canes.',
             'Nine Dragon.', 'Buffalo Wild Wings.', 'Five Guys.',
             'Izzos Illegal Burritos.', 'Rock-n-Sake.', 'Sonic.',
             'Tokyo Cafe.', 'Popeyes.', 'Now is not the time to eat.',
             'Ask again. I am undecided.', 'Pick your own place.', 'Subway.',
             'Mellow Mushroom', 'Something out of your fridge.', 'Check the pantry?']

  constructor(private toastCtrl: ToastController) {}

  giveAnswer() {
    let answer = this.answers[Math.floor(Math.random() * this.answers.length)];
    this.presentToast(answer);
  }

  async presentToast(answer) {
    const toast = await this.toastCtrl.create({
      message: answer,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }

}