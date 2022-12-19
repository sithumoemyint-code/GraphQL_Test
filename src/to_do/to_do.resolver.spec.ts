import { Test, TestingModule } from '@nestjs/testing';
import { ToDoResolver } from './to_do.resolver';
import { ToDoService } from './to_do.service';

describe('ToDoResolver', () => {
  let resolver: ToDoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToDoResolver, ToDoService],
    }).compile();

    resolver = module.get<ToDoResolver>(ToDoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
