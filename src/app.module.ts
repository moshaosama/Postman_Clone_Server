import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryModule } from './history/history.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { history } from './history/entities/history.entity';

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
      entities: [history],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
