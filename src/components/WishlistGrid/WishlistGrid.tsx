import type { WishlistItem as WishlistItemType } from '../../../types';
import { WishlistItem } from '../WishlistItem/WishlistItem';

import { getImageUrlById } from '../../utils/getImageUrl.ts';
import { headerImageId } from '../../../data';

import styles from './WishlistGrid.module.css';

interface WishlistGridProps {
  items: WishlistItemType[];
}

export function WishlistGrid({ items }: WishlistGridProps) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <WishlistItem key={item.id} item={item} index={index} />
        ))}
        <img
          src={getImageUrlById(headerImageId)}
          className={styles.image}
          loading="lazy"
          alt="logo"
        />
      </div>
    </div>
  );
}
