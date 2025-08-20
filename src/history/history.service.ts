import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { history } from './entities/history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(history) private historRepository: Repository<history>,
  ) {}

  async getHistories(collection_id: number) {
    return await this.historRepository.find({
      where: {
        collection_id: { id: collection_id },
      },
    });
  }

  async CreateHistory(createHistoryDto: CreateHistoryDto) {
    if (
      !createHistoryDto ||
      !createHistoryDto.method ||
      !createHistoryDto.url ||
      !createHistoryDto.collection_id
    ) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: 'Invalid data' },
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const newHistory = this.historRepository.create({
        method: createHistoryDto.method,
        url: createHistoryDto.url,
        collection_id: createHistoryDto.collection_id as any,
      });
      return await this.historRepository.save(newHistory);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Could not create history',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async GetHistoryByid(id: number) {
    if (!id) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'invalid data',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      return this.historRepository.findOne({
        where: {
          id: id,
        },
      });
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: err.message as string,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
