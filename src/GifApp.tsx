import { useState } from 'react';
import { AddCategory, Gifgrid } from './components';



const GifApp: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([...categories, newCategory]);
  };

  return (
    <div>
      <h1>GifApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <Gifgrid key={category} category={category} />
      ))}
    </div>
  );
};

export default GifApp;
