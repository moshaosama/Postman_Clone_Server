import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { collection } from './entities/collection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectRepository(collection)
    private collectionModel: Repository<collection>,
  ) {}

  async CreateHistory(createHistoryDTO: CreateCollectionDto) {
    if (
      !createHistoryDTO ||
      !createHistoryDTO.history_id ||
      !createHistoryDTO.title
    ) {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: 'Invalid data' },
        HttpStatus.BAD_REQUEST,
      );
    }
    const newCollection = {
      title: createHistoryDTO.title,
      history_id: createHistoryDTO.history_id,
    };

    return this.collectionModel.create(newCollection);
  }

  async GetCollections() {
    const results = this.collectionModel.find();

    if ((await results).length === 0) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Not Found Data',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return results;
  }
}
