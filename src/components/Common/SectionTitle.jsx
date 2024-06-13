/* eslint-disable react/prop-types */
const SectionTitle = ({ title, isCenter }) => {
  return (
    <>
      <h2 className={`lg:text-2xl text-xl font-bold ${isCenter && "text-center"}`}>{title}</h2>
    </>
  );
};

export default SectionTitle;
