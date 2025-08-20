import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TabsService } from './tabs.service';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';

@Controller('tabs')
export class TabsController {
  constructor(private readonly tabsService: TabsService) {}

  @Post()
  @ApiProperty({
    title: 'Create a new tab',
    description: 'Create a new tabs',
  })
  @ApiResponse({
    status: 200,
    description: 'Created a new tab successfully',
    example: {
      id: 56,
      method: 'GET',
      url: 'Untitled Request',
    },
  })
  @ApiResponse({ status: 400, description: 'Invalid query parameters' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async createTabs() {
    return this.tabsService.createTabs();
  }

  @Get()
  @ApiProperty({
    title: 'get all tabs',
    description: 'get all tabs',
  })
  @ApiResponse({
    status: 200,
    description: 'get all tab successfully',
    example: [
      {
        id: 56,
        method: 'GET',
        url: 'Untitled Request',
      },

      {
        id: 56,
        method: 'GET',
        url: 'Untitled Request',
      },
    ],
  })
  @ApiResponse({
    status: 400,
    description: 'Not found',
    example: {
      status: 'not found',
      message: 'Not found',
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getTabs() {
    return this.tabsService.getTabs();
  }

  @Delete(':id')
  @ApiProperty({
    title: 'delete tab by id',
    description: 'delete tab by id',
  })
  @ApiResponse({
    status: 200,
    description: 'get all tab successfully',
    example: {
      status: 'success',
      message: 'Deleted Successfully',
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Not found',
    example: {
      status: 'not found',
      message: 'Not found id',
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async deleteTabs(@Param('id') id: number): Promise<any> {
    return this.tabsService.Deletetabs(id);
  }
}
