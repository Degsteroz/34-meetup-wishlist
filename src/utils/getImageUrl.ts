import type { WishlistItem } from '../types';

const CLOUDINARY_BASE_URL =
  'https://res.cloudinary.com/dtecpsig5/image/upload/c_scale,w_590/v1763312971/wishlist/';

/**
 * Возвращает URL картинки по ID элемента вишлиста.
 * Конкатенирует базовый Cloudinary URL и ID.
 */
export function getImageUrlById(id: string): string {
  return `${CLOUDINARY_BASE_URL}${String(id)}`;
}

/**
 * Получает URL изображения для конкретного элемента вишлиста.
 * Использует его `id` и Cloudinary как источник картинок.
 */
export function getImageUrl(item: WishlistItem): string {
  return getImageUrlById(item.id);
}
