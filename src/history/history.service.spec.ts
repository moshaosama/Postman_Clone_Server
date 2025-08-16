import { Test, TestingModule } from '@nestjs/testing';
import { HistoryService } from './history.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { history } from './entities/history.entity';

describe('HistoryService', () => {
  let service: HistoryService;

  const mockRepository = {
    find: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HistoryService,
        {
          provide: getRepositoryToken(history),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<HistoryService>(HistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
