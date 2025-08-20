import { Test, TestingModule } from '@nestjs/testing';
import { TabsController } from './tabs.controller';
import { TabsService } from './tabs.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { tabs } from './entities/tab.entity';

const mockFunctions = {
  createTabs: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  delete: jest.fn(),
  findOne: jest.fn(),
};

describe('TabsController', () => {
  let controller: TabsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabsController],
      providers: [
        TabsService,
        {
          provide: getRepositoryToken(tabs),
          useValue: mockFunctions,
        },
      ],
    }).compile();

    controller = module.get<TabsController>(TabsController);
  });

  it('should create a new tab', async () => {
    const newTab = { id: 56, method: 'GET', url: 'Untitled Request' };

    mockFunctions.create.mockResolvedValue(newTab);
    mockFunctions.save.mockResolvedValue(newTab);

    const result = await controller.createTabs();
    expect(result).toEqual(newTab);
  });

  it('should be get all tabs', async () => {
    const resolvedValue = [{ id: 56, method: 'GET', url: 'Untitled Request' }];

    mockFunctions.find.mockResolvedValue(resolvedValue);

    const result = await controller.getTabs();
    expect(result).toEqual(resolvedValue);
  });

  it('should be delete tab by id', async () => {
    const resolvedValue = {
      status: 'success',
      message: 'Deleted Successfully',
    };

    const id = 1;

    mockFunctions.delete.mockResolvedValue(resolvedValue);

    const result = await controller.deleteTabs(1);

    expect(result).toEqual(resolvedValue);
  });
});
