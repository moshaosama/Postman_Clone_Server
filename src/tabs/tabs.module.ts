import { Module } from '@nestjs/common';
import { TabsService } from './tabs.service';
import { TabsController } from './tabs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tabs } from './entities/tab.entity';

@Module({
  imports: [TypeOrmModule.forFeature([tabs])],
  controllers: [TabsController],
  providers: [TabsService],
})
export class TabsModule {}
