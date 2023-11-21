// Filter Component
const Filter = ({ onCategoryChange }) => {
    const categories = ['All', 'Electronics', 'Clothing', 'Books']; // Example categories
  
    return (
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    );
  };