import { Test, TestingModule } from '@nestjs/testing';
import { CollectionsController } from './collections.controller';
import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { getRepositoryToken } from '@nestjs/typeorm';
import { collection } from './entities/collection.entity';

describe('CollectionsController', () => {
  let controller: CollectionsController;

  const MockFunctions = {
    createHistory: jest.fn(),
    getCollections: jest.fn(),
    create: jest.fn(),
    find: jest
      .fn()
      .mockResolvedValue([{ title: 'PostMan_Clone', history_id: 1 }]),
    save: jest.fn().mockResolvedValue({
      statusbar: 'success',
      message: 'created successfully',
    }),
    length: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectionsController],
      providers: [
        CollectionsService,
        {
          provide: getRepositoryToken(collection),
          useValue: MockFunctions,
        },
      ],
    }).compile();

    controller = module.get<CollectionsController>(CollectionsController);
  });

  it('should be create a new collections', async () => {
    const newcollection: CreateCollectionDto = {
      title: 'Postman_clone',
    };

    const resolvedData = {
      statusbar: 'success',
      message: 'created successfully',
    };

    await MockFunctions.createHistory.mockResolvedValue(resolvedData);

    const result = await controller.createHistory(newcollection);
    expect(result).toEqual(resolvedData);
  });

  it('should get all collections in db', async () => {
    const resolvedData = [
      {
        title: 'PostMan_Clone',
        history_id: 1,
      },
    ];

    await MockFunctions.getCollections.mockResolvedValue(resolvedData);

    const result = await controller.getCollections();
    expect(result).toEqual(resolvedData);
  });
});
