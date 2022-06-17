import { PartialType } from '@nestjs/mapped-types';
import { CreateSingleFormatDto } from './create-single-format.dto';

export class UpdateSingleFormatDto extends PartialType(CreateSingleFormatDto) {}
