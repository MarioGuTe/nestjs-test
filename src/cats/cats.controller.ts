import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
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

  @Post('create')
  @UsePipes(new ValidationPipe())
  async createCat(@Body() createCatDto: CreateCatDto) {
    this.catsService.createCat(createCatDto);
    console.log(createCatDto);
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAllCats();
  }
  @Get(':id')
  async GetCatById(@Param('id') id: string): Promise<Cat> {
    return this.catsService.GetCatById(Number(id));
  }
}
