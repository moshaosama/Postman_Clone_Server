import { Test, TestingModule } from '@nestjs/testing';
import { CollectionsService } from './collections.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { collection } from './entities/collection.entity';

describe('CollectionsService', () => {
  let service: CollectionsService;

  const mockRepository = {
    find: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CollectionsService,
        {
          provide: getRepositoryToken(collection),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CollectionsService>(CollectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
