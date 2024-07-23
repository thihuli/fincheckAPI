import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from 'src/shared/database/repositories/categories.repositories';

@Injectable()
export class CategoriesService {
  constructor(private readonly categpriesRepo: CategoryRepository) {}

  findAllByUserId(userId: string) {
    return this.categpriesRepo.findMany({
      where: {
        userId
      }
    })
  }

  // create(createCategoryDto: CreateCategoryDto) {
  //   return 'This action adds a new category';
  // }


  // findOne(id: number) {
  //   return `This action returns a #${id} category`;
  // }

  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} category`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}
