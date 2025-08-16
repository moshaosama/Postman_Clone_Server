import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { history } from './entities/history.entity';
import { Repository } from 'typeorm';
import { HistoryDto } from './dto/history.dto';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(history) private historRepository: Repository<history>,
  ) {}

  async getHistories(): Promise<HistoryDto[]> {
    return this.historRepository.find();
  }

  async CreateHistory(createHistoryDto: CreateHistoryDto) {
    if (
      !createHistoryDto ||
      !createHistoryDto.method ||
      !createHistoryDto.url
    ) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: 'Invalid data' },
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const newHistory = this.historRepository.create(createHistoryDto);
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
}
