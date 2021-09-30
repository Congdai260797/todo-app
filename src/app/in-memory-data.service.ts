import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Dr Nice', age: 24, phone: +84964533459, email: 'congdai0@gmail.com'},
      { id: 1, name: 'Narco', age: 22, phone: +84964533458, email: 'congdai1@gmail.com' },
      { id: 2, name: 'Bombasto', age: 22, phone: +84964533457, email: 'congdai2@gmail.com' },
      { id: 3, name: 'Celeritas', age: 24, phone: +84964533456, email: 'congdai3@gmail.com' },
      { id: 4, name: 'Magneta', age: 20, phone: +84964533455, email: 'congdai4@gmail.com' },
      { id: 5, name: 'RubberMan', age: 18, phone: +84964533454, email: 'congdai5@gmail.com' },
      { id: 6, name: 'Dynama', age: 24, phone: +84964533453, email: 'congdai6@gmail.com' },
      { id: 7, name: 'Dr IQ', age: 16, phone: +84964533452, email: 'congdai7@gmail.com' },
      { id: 8, name: 'Magma', age: 24, phone: +84964533451, email: 'congdai8@gmail.com' },
      { id: 9, name: 'Tornado', age: 18, phone: +84964533450, email: 'congdai9@gmail.com' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
