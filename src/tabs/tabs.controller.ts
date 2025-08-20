import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TabsService } from './tabs.service';

@Controller('tabs')
export class TabsController {
  constructor(private readonly tabsService: TabsService) {}

  @Post()
  async createTabs() {
    return this.tabsService.createTabs();
  }

  @Get()
  async getTabs() {
    return this.tabsService.getTabs();
  }

  @Delete(':id')
  async deleteTabs(@Param('id') id: number): Promise<any> {
    return this.tabsService.Deletetabs(id);
  }
}
