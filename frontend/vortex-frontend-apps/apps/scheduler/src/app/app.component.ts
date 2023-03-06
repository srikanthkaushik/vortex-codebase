import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'vortex-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showMenu = false;
  title = 'Scheduler';
  selectedItem =
    'bg-gray-400 text-white rounded-md px-3 py-2 text-sm font-medium';
  availableItem =
    'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium';

  doClick() {
    console.log('clicking menu');
    this.showMenu = !this.showMenu;
  }
}
