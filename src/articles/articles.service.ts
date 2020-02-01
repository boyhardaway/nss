import { Injectable } from '@nestjs/common';
import { Article } from './article';
import { ArticlesQuery } from './articles.query';
import { CreateArticleInput } from './create-article.input';
import { UpdateArticleInput } from './update-article.input';

@Injectable()
export class ArticlesService {
  articles: Article[] = [
    { id: '1', title: 'Title#1', body: 'Body#1' },
    { id: '2', title: 'Title#2', body: 'Body#2' },
    { id: '3', title: 'Title#3', body: 'Body#3' },
    { id: '4', title: 'Title#4', body: 'Body#4' },
    { id: '5', title: 'Title#5', body: 'Body#5' },
    { id: '6', title: 'Title#6', body: 'Body#6' },
    { id: '7', title: 'Title#7', body: 'Body#7' },
    { id: '8', title: 'Title#8', body: 'Body#8' }
  ];

  findAll(query: ArticlesQuery): Article[] {
    return this.articles.filter(article => article.title === query.title);
  }

  findOne(id: string): Article {
    return this.articles.find(article => article.id === id);
  }

  create(input: CreateArticleInput): Article {
    const article = { ...input, id: `${+new Date()}` };

    this.articles.push(article);

    return article;
  }

  update(id: string, input: UpdateArticleInput): Article {
    let article = this.articles.find(article => article.id === id);

    for (let key in input) {
      article[key] = input[key];
    }

    return article;
  }

  delete(id: string) {
    this.articles = this.articles.filter(article => article.id !== id);
  }
}
