import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  HttpCode,
  HttpStatus
} from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
  articles = [
    { id: '1', title: 'Title#1', body: 'Body#1' },
    { id: '2', title: 'Title#2', body: 'Body#2' },
    { id: '3', title: 'Title#3', body: 'Body#3' },
    { id: '4', title: 'Title#4', body: 'Body#4' },
    { id: '5', title: 'Title#5', body: 'Body#5' },
    { id: '6', title: 'Title#6', body: 'Body#6' },
    { id: '7', title: 'Title#7', body: 'Body#7' },
    { id: '8', title: 'Title#8', body: 'Body#8' }
  ];

  @Get('/')
  findAll() {
    return this.articles;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.articles.find(article => article.id === id);
  }

  @Post('/')
  create(@Body() input) {
    const article = { ...input, id: +new Date() };

    this.articles.push(article);

    return article;
  }

  @Patch(':id')
  update(@Param('id') id, @Body() body) {
    let article = this.articles.find(article => article.id === id);

    for (let key in body) {
      article[key] = body[key];
    }

    return article;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  // @HttpCode(204)
  delete(@Param('id') id) {
    this.articles = this.articles.filter(article => article.id !== id);
  }
}
