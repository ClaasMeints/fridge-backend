import { required_content } from './required_content.entity';

export const required_content_providers = [
  {
    provide: 'REQUIRED_CONTENT_REPOSITORY',
    useValue: required_content,
  },
];
