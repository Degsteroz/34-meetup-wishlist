import styles from './SortControls.module.css';

export type SortOption = 'price' | 'priority' | 'none';

interface SortControlsProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export function SortControls({ sortBy, onSortChange }: SortControlsProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Сортировать:</label>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${sortBy === 'none' ? styles.active : ''}`}
          onClick={() => onSortChange('none')}
        >
          По умолчанию
        </button>
        <button
          className={`${styles.button} ${sortBy === 'price' ? styles.active : ''}`}
          onClick={() => onSortChange('price')}
        >
          По цене
        </button>
        <button
          className={`${styles.button} ${sortBy === 'priority' ? styles.active : ''}`}
          onClick={() => onSortChange('priority')}
        >
          По приоритету
        </button>
      </div>
    </div>
  );
}
