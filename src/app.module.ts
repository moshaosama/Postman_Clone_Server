import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryModule } from './history/history.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { history } from './history/entities/history.entity';
import { CollectionsModule } from './collections/collections.module';
import { collection } from './collections/entities/collection.entity';
import { TabsModule } from './tabs/tabs.module';
import { tabs } from './tabs/entities/tab.entity';

@Module({
  imports: [
    HistoryModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      database: 'postman_clone',
      username: 'root',
      password: '',
      synchronize: true,
      entities: [history, collection, tabs],
    }),
    CollectionsModule,
    TabsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
