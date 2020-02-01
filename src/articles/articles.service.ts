import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Article } from './article.entity';
import { ArticlesQuery } from './articles.query';
import { CreateArticleInput } from './create-article.input';
import { UpdateArticleInput } from './update-article.input';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>
  ) {}

  findAll(query: ArticlesQuery) {
    return this.articleRepository.find(query);
  }

  findOne(id: string) {
    return this.articleRepository.findOne(id);
  }

  create(input: CreateArticleInput) {
    // { title: '', body: '' }
    const article = this.articleRepository.create(input);
    // const article = new Article()

    // article.title = input.title
    // article.body = input.body

    this.articleRepository.save(article);
  }

  async update(id: string, input: UpdateArticleInput) {
    let article = await this.articleRepository.findOne(id);

    article = this.articleRepository.merge(article, input);
    // article => { id: 1, title: 'a', body: 'b'}
    // input => { title: 'y' }
    // { id: 1, title: 'y', body: 'b' } => Article
    this.articleRepository.save(article);
  }

  delete(id: string) {
    return this.articleRepository.delete(id);
  }
}
