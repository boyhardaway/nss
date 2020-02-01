import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from 'src/articles/articles.module';
import { UsersModule } from 'src/users/users.module';
import { CommentsModule } from 'src/comments/comments.module';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ArticlesModule,
    UsersModule,
    CommentsModule,
    CategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
