import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { history } from './entities/history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([history])],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
