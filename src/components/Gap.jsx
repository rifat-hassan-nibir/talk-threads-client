/* eslint-disable react/prop-types */
const Gap = ({ bigGap }) => {
  return (
    <div>
      <div className={bigGap ? "lg:my-14 my-12" : "lg:my-8 my-6"}></div>
    </div>
  );
};

export default Gap;
