import { Component } from '@angular/core';
import './training.js';
import { Color } from '../enums/Color';
import { Collection } from '../collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  companyName: string = 'румтибет';

  constructor() {
    const browserCollection = new Collection<string>(['Chrome', 'Firefox', 'Safari']);
    console.log(browserCollection.getAll());

    const numberCollection = new Collection<number>([1, 2, 3, 4, 5]);
    numberCollection.replace(1, 10);
    console.log(numberCollection.getAll());
  }

  isMainColor(type: string): boolean {
    return Object.values(Color).includes(type as any);
  }

  saveLastVisitDate(): void {
    const currentDate = new Date().toLocaleString();
    localStorage.setItem('lastVisitDate', currentDate);
  }

  updateVisitCount(): void {
    const visitCount = localStorage.getItem('visitCount') ?? '0';
    localStorage.setItem('visitCount', (Number(visitCount) + 1).toString());
  }

}
