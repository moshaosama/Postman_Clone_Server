import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tabs } from './entities/tab.entity';
import { Repository } from 'typeorm';
import { CreateTabDto } from './dto/create-tab.dto';
import { UpdateTabDto } from './dto/update-tab.dto';

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

  async GetTabsById(id: number) {
    if (!id) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'id is required',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const result = await this.tabsModel.find({
      where: {
        id: id,
      },
    });

    if (!result) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_IMPLEMENTED,
          error: 'data is not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return result;
  }

  async UpdateTabs(id: number, updateTabsDTO: UpdateTabDto) {
    const result = await this.tabsModel.findOne({
      where: { id: id },
    });

    if (!result) {
      throw new NotFoundException(`result with ID ${id} not found`);
    }

    Object.assign(result, {
      method: updateTabsDTO.method ?? result?.method,
      url: updateTabsDTO.url ?? result?.url,
    });
    return this.tabsModel.save(result);
  }
}
