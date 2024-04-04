import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CatsRepository } from './cats.repository';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  constructor(private catsRepository: CatsRepository) {}

  createCat(cat: Cat) {
    this.cats.push(cat);
  }

  findAllCats(): Promise<Cat[]> {
    return this.catsRepository.getCats();
  }

  GetCatById(id: number): Promise<Cat> {
    return this.catsRepository.getCatById(id);
  }
}
