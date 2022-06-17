import { Test, TestingModule } from '@nestjs/testing';
import { SingleFormatService } from './single-format.service';

describe('SingleFormatService', () => {
  let service: SingleFormatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SingleFormatService],
    }).compile();

    service = module.get<SingleFormatService>(SingleFormatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
