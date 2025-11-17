import { useState, useMemo } from 'react';

import type { Category } from './types';

import { headerImageId, wishlist } from './data';
import { WishlistGrid, SortControls, type SortOption, SortCategoryControls } from './components';

import { getImageUrlById } from './utils/getImageUrl.ts';

import styles from './App.module.css';

function App() {
  const [sortBy, setSortBy] = useState<SortOption>('none');
  const [category, setCategory] = useState<Category | 'all'>('all');

  const sortedItems = useMemo(() => {
    if (sortBy === 'none' && category === 'all') {
      return wishlist;
    }

    const items =
      category === 'all'
        ? [...wishlist]
        : [...wishlist].filter((item) => item.category.includes(category));

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
  }, [sortBy, category]);

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
        <SortCategoryControls sortBy={category} onSortChange={setCategory} />
        <WishlistGrid items={sortedItems} />
      </main>
    </div>
  );
}

export default App;
