import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  createCat(cat: Cat) {
    this.cats.push(cat);
  }

  findAllCats(): Cat[] {
    return this.cats;
  }
  GetCatById(id: number): Cat {
    return this.cats.find((cat) => cat.id === id);
  }
}
