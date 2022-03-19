import React from 'react';

const NoProducts = ({
  filteredCheckboxData,
}: {
  filteredCheckboxData: number;
}) => {
  const hideEmptyStyle = {
    display: 'none',
    fontSize: '24px',
  };

  const showEmptyStyle = {
    display: 'block',
    fontSize: '24px',
  };

  return (
    <section
      style={filteredCheckboxData === 0 ? showEmptyStyle : hideEmptyStyle}
    >
      <h5>Empty</h5>
    </section>
  );
};

export default NoProducts;
