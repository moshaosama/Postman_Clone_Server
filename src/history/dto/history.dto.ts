import { collection } from '../../collections/entities/collection.entity';

export class HistoryDto {
  id: number;
  method: string;
  url: string;
  collection_id: collection | number;
}
