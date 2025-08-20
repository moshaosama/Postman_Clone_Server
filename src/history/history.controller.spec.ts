import { Test, TestingModule } from '@nestjs/testing';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { HistoryDto } from './dto/history.dto';
import { CreateHistoryDto } from './dto/create-history.dto';

describe('HistoryController', () => {
  let controller: HistoryController;

  const MockFunctions = {
    getHistories: jest.fn(),
    CreateHistory: jest.fn(),
    GetHistoryByid: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoryController],
      providers: [
        {
          provide: HistoryService,
          useValue: MockFunctions,
        },
      ],
    }).compile();

    controller = module.get<HistoryController>(HistoryController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be get histories', async () => {
    const Histories: HistoryDto[] = [
      {
        id: 1,
        method: 'GET',
        url: 'http://localhost:3000/api/history',
        collection_id: 1,
      },
    ];

    const Collection_id: number = 1;
    MockFunctions.getHistories.mockResolvedValue(Histories);

    const result = await controller.getHistories(Collection_id);
    expect(result).toEqual(Histories);
  });

  it('should be create a new history', async () => {
    const createHistory: CreateHistoryDto = {
      method: 'Get',
      url: 'http://localhost:3000/api/history',
      collection_id: 1,
    };
    const resolvedData: HistoryDto = {
      id: 1,
      method: 'GET',
      url: 'http://localhost:3000/api/history',
      collection_id: 1,
    };

    MockFunctions.CreateHistory.mockResolvedValue(resolvedData);
    const result = await controller.createHistory(createHistory);
    expect(result).toEqual(resolvedData);
  });

  it('should be get a history by id', async () => {
    const id: number = 6;
    const resolvedValue = {
      id: 6,
      method: 'Get',
      url: 'https://jsonplaceholder.typicode.com/posts',
    };
    MockFunctions.GetHistoryByid.mockResolvedValue(resolvedValue);

    const result = await controller.GetHistoryByid(id);
    expect(result).toEqual(resolvedValue);
  });
});
