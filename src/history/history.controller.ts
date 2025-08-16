import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HistoryService } from './history.service';
import { ApiBody, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { history } from './entities/history.entity';
import { HistoryDto } from './dto/history.dto';
import { CreateHistoryDto } from './dto/create-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
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
  public async getHistories() {
    return this.historyService.getHistories();
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
}
