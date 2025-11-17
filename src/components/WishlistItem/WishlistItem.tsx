import type { WishlistItem as WishlistItemType } from '../../types';
import { getImageUrl } from '../../utils/getImageUrl';

import styles from './WishlistItem.module.css';

interface WishlistItemProps {
  item: WishlistItemType;
  index: number;
}

export function WishlistItem({ item, index }: WishlistItemProps) {
  const imageUrl = getImageUrl(item);
  const priceDisplay = `${item.priceRange.min}–${item.priceRange.max} ${item.priceRange.currency}`;

  const getPriorityClass = (priority: number) => {
    switch (priority) {
      case 3:
        return styles.priorityHigh;
      case 2:
        return styles.priorityMedium;
      case 1:
        return styles.priorityLow;
      case 0:
        return styles.priorityOptional;
      default:
        return '';
    }
  };

  const getPriorityLabel = (priority: number) => {
    switch (priority) {
      case 3:
        return 'Высокий';
      case 2:
        return 'Средний';
      case 1:
        return 'Низкий';
      case 0:
        return 'Опционально';
      default:
        return priority.toString();
    }
  };

  return (
    <>
      <article className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={item.name} className={styles.image} loading="lazy" />
          <div className={`${styles.priorityBadge} ${getPriorityClass(item.priority)}`}>
            {getPriorityLabel(item.priority)}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>{item.name}</h2>
            <span className={styles.category}>{item.category}</span>
          </div>

          <p className={styles.description}>{item.description}</p>

          <div className={styles.price}>
            <span className={styles.priceLabel}>Цена:</span>
            <span className={styles.priceValue}>{priceDisplay}</span>
          </div>

          {item.whereToBuy && item.whereToBuy.length > 0 && (
            <div className={styles.variants}>
              <h3 className={styles.variantsTitle}>Где смотреть:</h3>
              <ul className={styles.variantsList}>
                {item.whereToBuy.map((variant, index) => (
                  <li key={index} className={styles.variantItem}>
                    {variant}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.variants && item.variants.length > 0 && (
            <div className={styles.variants}>
              <h3 className={styles.variantsTitle}>Варианты:</h3>
              <ul className={styles.variantsList}>
                {item.variants.map((variant, index) => (
                  <li key={index} className={styles.variantItem}>
                    {variant}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.metadata && (
            <div className={styles.metadata}>
              {item.metadata.preferredMetals && (
                <div className={styles.metadataItem}>
                  <span className={styles.metadataLabel}>Металлы:</span>
                  <span>{item.metadata.preferredMetals.join(', ')}</span>
                </div>
              )}
              {item.metadata.style && (
                <div className={styles.metadataItem}>
                  <span className={styles.metadataLabel}>Стиль:</span>
                  <span>{item.metadata.style.join(', ')}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </article>
      {index === 2 && <div className={styles.secondCard} />}
    </>
  );
}
