/* eslint-disable react/prop-types */
const Tag = ({ tagName, setSearch }) => {
  return (
    <button onClick={() => setSearch(tagName)}>
      <p className="px-3 py-1 capitalize text-sm text-gray-100 transition-colors duration-300 transform bg-secondary rounded">{tagName}</p>
    </button>
  );
};

export default Tag;
