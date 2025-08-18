import { Test, TestingModule } from '@nestjs/testing';
import { CollectionsController } from './collections.controller';
import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';

describe('CollectionsController', () => {
  let controller: CollectionsController;

  const MockFunctions = {
    CreateHistory: jest.fn(),
    GetCollections: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectionsController],
      providers: [CollectionsService],
    }).compile();

    controller = module.get<CollectionsController>(CollectionsController);
  });

  it('should be create a new collections', async () => {
    const newcollection: CreateCollectionDto = {
      history_id: 1,
      title: 'Postman_clone',
    };

    const resolvedData = {
      statusbar: 'success',
      message: 'created successfully',
    };

    await MockFunctions.CreateHistory.mockResolvedValue(resolvedData);

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

    await MockFunctions.GetCollections.mockResolvedValue(resolvedData);

    const result = await controller.getCollections();
    expect(result).toEqual(resolvedData);
  });
});
