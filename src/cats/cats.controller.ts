import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('breed')
  findBreed(): string {
    return 'Orange Cat';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
  @Post('create')
  async createCat(@Body() createCatDto: CreateCatDto) {
    this.catsService.createCat(createCatDto);
    console.log(createCatDto);
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAllCats();
  }
}
