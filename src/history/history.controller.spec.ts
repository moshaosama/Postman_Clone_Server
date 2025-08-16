import { Test, TestingModule } from '@nestjs/testing';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { HistoryDto } from './dto/history.dto';
import { CreateHistoryDto } from './dto/create-history.dto';

describe('HistoryController', () => {
  let controller: HistoryController;
  let service: HistoryService;

  const MockFunctions = {
    getHistories: jest.fn(),
    CreateHistory: jest.fn(),
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
    service = module.get<HistoryService>(HistoryService);
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
      },
    ];
    MockFunctions.getHistories.mockResolvedValue(Histories);

    const result = await controller.getHistories();
    expect(result).toEqual(Histories);
  });

  it('should be create a new history', async () => {
    const createHistory: CreateHistoryDto = {
      method: 'Get',
      url: 'http://localhost:3000/api/history',
    };
    const resolvedData: HistoryDto = {
      id: 1,
      method: 'GET',
      url: 'http://localhost:3000/api/history',
    };

    MockFunctions.CreateHistory.mockResolvedValue(resolvedData);
    const result = await controller.createHistory(createHistory);
    expect(result).toEqual(resolvedData);
  });
});
