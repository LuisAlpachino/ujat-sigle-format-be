import { Module } from '@nestjs/common';
import { SingleFormatService } from './single-format.service';
import { SingleFormatController } from './single-format.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SingleFormat } from './entities/single-format.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SingleFormat])],
  exports: [TypeOrmModule],
  controllers: [SingleFormatController],
  providers: [SingleFormatService],
})
export class SingleFormatModule {}
