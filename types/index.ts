// 0 - опционально, 1 - низкий, 2 - средний, 3 - высокий
export type Priority = 0 | 1 | 2 | 3;

export type Category =
  | 'electronics'
  | 'audio'
  | 'gaming'
  | 'collectibles'
  | 'decor'
  | 'music'
  | 'style'
  | 'books'
  | 'contribution'
  | 'misc'
  | 'workspace'
  | 'clothing'
  | 'streaming';

export interface PriceRange {
  min: number;
  max: number;
  currency: string;
}

export interface WishlistItemMetadata {
  preferredMetals?: string[];
  style?: string[];
}

export interface WishlistItem {
  id: string;
  name: string;
  category: Category[];
  priceRange: PriceRange;
  description: string;
  variants: string[];
  priority: Priority;
  metadata?: WishlistItemMetadata;
  whereToBuy: string[];
  quantity: number;
}
