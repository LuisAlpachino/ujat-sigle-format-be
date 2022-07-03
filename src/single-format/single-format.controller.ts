import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Header,
  Query,
} from '@nestjs/common';
import { SingleFormatService } from './single-format.service';
import { CreateSingleFormatDto } from './dto/create-single-format.dto';
import { UpdateSingleFormatDto } from './dto/update-single-format.dto';

@Controller('single-format')
export class SingleFormatController {
  constructor(private readonly singleFormatService: SingleFormatService) {}

  @Post()
  create(@Body() createSingleFormatDto: CreateSingleFormatDto) {
    return this.singleFormatService.create(createSingleFormatDto);
  }

  @Get()
  @Header('Content-Type', 'application/json')
  async findAll(@Query() query) {
    const { monthStart, monthEnd, yearStart } = query;
    const response = await this.singleFormatService.findAll({
      monthStart,
      monthEnd,
      yearStart,
    });
    return {
      count: response.length,
      data: response,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.singleFormatService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSingleFormatDto: UpdateSingleFormatDto,
  ) {
    return this.singleFormatService.update(+id, updateSingleFormatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.singleFormatService.remove(+id);
  }
}
