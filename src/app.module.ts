import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SingleFormatModule } from './single-format/single-format.module';
import { SingleFormat } from './single-format/entities/single-format.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 49161,
      username: 'UJAT',
      password: 'oracle',
      sid: 'xe',
      entities: [SingleFormat],
      logging: true,
    }),
    SingleFormatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
