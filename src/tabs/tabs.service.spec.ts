import { Test, TestingModule } from '@nestjs/testing';
import { TabsService } from './tabs.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { tabs } from './entities/tab.entity';

describe('TabsService', () => {
  let service: TabsService;
  let mockRepository;

  beforeEach(async () => {
    mockRepository = {
      find: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TabsService,
        {
          provide: getRepositoryToken(tabs),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<TabsService>(TabsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
