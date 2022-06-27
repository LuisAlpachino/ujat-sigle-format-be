import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SingleFormatModule } from './single-format/single-format.module';
import { SingleFormat } from './single-format/entities/single-format.entity';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.ORACLE_DATABASE_TYPE as 'oracle',
      host: process.env.ORACLE_DATABASE_HOST,
      port: Number.parseInt(process.env.ORACLE_DATABASE_PORT),
      username: process.env.ORACLE_DATABASE_USER,
      password: process.env.ORACLE_DATABASE_PASSWORD,
      sid: process.env.ORACLE_DATABASE_SID,
      entities: [SingleFormat],
      logging: true,
    }),
    SingleFormatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
