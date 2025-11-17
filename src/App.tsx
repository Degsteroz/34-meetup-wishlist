import { useState, useMemo } from 'react';
import { headerImageId, wishlist } from './data';
import { WishlistGrid, SortControls, type SortOption } from './components';
import styles from './App.module.css';
import { getImageUrlById } from './utils/getImageUrl.ts';

function App() {
  const [sortBy, setSortBy] = useState<SortOption>('none');

  const sortedItems = useMemo(() => {
    if (sortBy === 'none') {
      return wishlist;
    }

    const items = [...wishlist];

    if (sortBy === 'price') {
      return items.sort((a, b) => {
        const avgA = (a.priceRange.min + a.priceRange.max) / 2;
        const avgB = (b.priceRange.min + b.priceRange.max) / 2;
        return avgA - avgB;
      });
    }

    if (sortBy === 'priority') {
      return items.sort((a, b) => b.priority - a.priority);
    }

    return items;
  }, [sortBy]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Wishlist</h1>
          <p className={styles.subtitle}>Коллекция подарков, которые я хотел бы получить.</p>
          <p className={styles.subtitle}>Носит исключительно ознакомительный характер</p>
        </div>
        <img src={getImageUrlById(headerImageId)} className={styles.image} loading="lazy" />
      </header>
      <main className={styles.main}>
        <SortControls sortBy={sortBy} onSortChange={setSortBy} />
        <WishlistGrid items={sortedItems} />
      </main>
    </div>
  );
}

export default App;
