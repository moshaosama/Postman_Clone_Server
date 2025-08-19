import { Controller, Get, Post } from '@nestjs/common';
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
}
