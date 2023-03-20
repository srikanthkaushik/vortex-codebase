import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vortex-apps-shared-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-lib.component.html',
  styleUrls: ['./shared-lib.component.scss'],
})
export class SharedLibComponent {
  constructor() {
    console.log('shared-lib.component.ts constructor');
  }
}
