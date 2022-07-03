import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSingleFormatDto } from './dto/create-single-format.dto';
import { UpdateSingleFormatDto } from './dto/update-single-format.dto';
import { SingleFormat } from './entities/single-format.entity';
import singleFormatQuery from './querys/single-format';

@Injectable()
export class SingleFormatService {
  constructor(
    @InjectRepository(SingleFormat)
    private singleFormatRepository: Repository<SingleFormat>,
  ) {}

  create(createSingleFormatDto: CreateSingleFormatDto) {
    return 'This action adds a new singleFormat';
  }

  findAll(params: {
    monthStart: string;
    monthEnd: string;
    yearStart: string;
  }): Promise<SingleFormat[]> {
    const { monthStart, monthEnd, yearStart } = params;
    return this.singleFormatRepository.query(singleFormatQuery, [
      monthStart,
      monthEnd,
      yearStart,
    ]);
  }

  findOne(id: number) {
    return `This action returns a #${id} singleFormat`;
  }

  update(id: number, updateSingleFormatDto: UpdateSingleFormatDto) {
    return `This action updates a #${id} singleFormat`;
  }

  remove(id: number) {
    return `This action removes a #${id} singleFormat`;
  }
}
