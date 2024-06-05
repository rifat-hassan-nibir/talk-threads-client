const Tag = ({ tagName }) => {
  return (
    <div>
      <p className="px-3 py-1 text-sm text-gray-100 transition-colors duration-300 transform bg-secondary rounded">{tagName}</p>
    </div>
  );
};

export default Tag;
