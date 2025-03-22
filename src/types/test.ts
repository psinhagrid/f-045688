export interface TestCase {
  id: string;
  name: string;
  description: string;
  tags: string[];
  code: string;
  createdAt: Date;
}
