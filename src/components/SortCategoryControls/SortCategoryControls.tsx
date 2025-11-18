import styles from './SortControls.module.css';
import type { Category } from '../../types';

export type SortOption = Category | 'all';

interface SortControlsProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export function SortCategoryControls({ sortBy, onSortChange }: SortControlsProps) {
  const categories: SortOption[] = [
    'all',
    'electronics',
    'audio',
    'gaming',
    'collectibles',
    'decor',
    'music',
    'style',
    'books',
    'contribution',
    'misc',
    'workspace',
    'clothing',
    'streaming',
  ];

  return (
    <div className={styles.container}>
      <label className={styles.label}>Категория:</label>
      <div className={styles.buttons}>
        {categories.map((category) => (
          <button
            className={`${styles.button} ${sortBy === category ? styles.active : ''}`}
            onClick={() => onSortChange(category)}
            key={category}
          >
            {category === 'all' ? 'Все' : category}
          </button>
        ))}
      </div>
    </div>
  );
}
