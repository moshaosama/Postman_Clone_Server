import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Post()
  @ApiProperty({
    title: 'create new collection',
    description: 'create a new collection in a database',
  })
  @ApiResponse({
    status: 200,
    description: 'Success Create Collection in DB',
    example: {
      statusbar: 'success',
      message: 'created successfully',
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
  createHistory(createCollectionDTO: CreateCollectionDto) {
    return this.collectionsService.CreateHistory(createCollectionDTO);
  }
}
