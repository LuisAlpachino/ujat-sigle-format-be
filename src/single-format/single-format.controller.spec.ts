import { Test, TestingModule } from '@nestjs/testing';
import { SingleFormatController } from './single-format.controller';
import { SingleFormatService } from './single-format.service';

describe('SingleFormatController', () => {
  let controller: SingleFormatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SingleFormatController],
      providers: [SingleFormatService],
    }).compile();

    controller = module.get<SingleFormatController>(SingleFormatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
