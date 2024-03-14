import { Test, TestingModule } from '@nestjs/testing';
import { PostBulletinService } from './postBulletin.service';

describe('PostService', () => {
  let service: PostBulletinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostBulletinService],
    }).compile();

    service = module.get<PostBulletinService>(PostBulletinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
