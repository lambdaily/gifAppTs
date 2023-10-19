import React, { useState } from 'react';

interface AddCategoryProps {
  onNewCategory: (newCategory: string) => void;
}

const AddCategory: React.FC<AddCategoryProps> = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length < 3) {
      alert('Debe ingresar por lo menos 3 caracteres');
      return;
    }
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={inputValue} type="text" placeholder="buscar gif" onChange={onInputChange} />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddCategory;
