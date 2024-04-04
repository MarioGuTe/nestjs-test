import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsRepository {
  private cats = [
    {
      id: 1,
      name: 'Mampato',
      age: 1,
      breed: 'orange',
    },
    {
      id: 2,
      name: 'Whiskers',
      age: 3,
      breed: 'calico',
    },
    {
      id: 3,
      name: 'Socks',
      age: 2,
      breed: 'tuxedo',
    },
    {
      id: 4,
      name: 'Fluffy',
      age: 4,
      breed: 'persian',
    },
  ];

  async getCats() {
    return this.cats;
  }

  async getCatById(id: number) {
    return this.cats.find((cats) => cats.id === id);
  }
}
