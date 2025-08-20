import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tabs } from './entities/tab.entity';
import { Repository } from 'typeorm';
import { CreateTabDto } from './dto/create-tab.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { error } from 'console';

@Injectable()
export class TabsService {
  constructor(@InjectRepository(tabs) private tabsModel: Repository<tabs>) {}

  async createTabs() {
    const newTabs: CreateTabDto = {
      method: 'GET',
      url: 'Untitled Request',
    };

    if (!newTabs) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid data',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const created = this.tabsModel.create(newTabs);
    return await this.tabsModel.save(created);
  }

  async getTabs() {
    const Tabs = await this.tabsModel.find();

    if (Tabs.length < 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Data not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return Tabs;
  }

  async Deletetabs(id: number) {
    if (!id) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Data not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    await this.tabsModel.delete(id);

    return { status: 'success', message: 'Deleted Successfully' };
  }
}
