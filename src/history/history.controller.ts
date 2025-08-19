import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HistoryService } from './history.service';
import { ApiBody, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { CreateHistoryDto } from './dto/create-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get('collection/:collection_id')
  @ApiProperty({
    title: 'History',
    description: 'Get All History',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns all Histories',
    example: [
      {
        id: 1,
        method: 'Get',
        url: 'https://jsonplaceholder.typicode.com/todos',
      },

      {
        id: 2,
        method: 'Get',
        url: 'https://jsonplaceholder.typicode.com/products',
      },
    ],
  })
  @ApiResponse({ status: 400, description: 'Invalid query parameters' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async getHistories(@Param('collection_id') collection_id: number) {
    return this.historyService.getHistories(collection_id);
  }

  @Post()
  @ApiBody({
    description: 'Create History',
    examples: {
      example1: {
        summary: 'Get request example',
        value: {
          method: 'GET',
          url: 'http://localhost:3000/api/history',
          collection_id: '1',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Post new  History',
    example: {
      statusbar: 'sucess',
      message: 'Posted History Successfully',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Data is required',
    example: {
      status: 'not found',
      message: 'Invalid data',
    },
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public createHistory(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historyService.CreateHistory(createHistoryDto);
  }

  @Get(':id')
  @ApiProperty({
    title: 'Get History By id',
    description: 'Get History by id',
  })
  @ApiResponse({
    status: 200,
    description: 'Success get history by id',
    example: {
      id: 1,
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
      collection_id: '1',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Data is required',
    example: {
      status: 'not found',
      message: 'Invalid data',
    },
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async GetHistoryByid(@Param('id') id: number) {
    return this.historyService.GetHistoryByid(id as number);
  }
}
