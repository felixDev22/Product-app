import React from 'react';
import { Button, FormCheck } from 'react-bootstrap';

const SideFilter = () => {
  return (
    <div className="filter-container">
      <span>
        <FormCheck
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id="{inline-1}"
        />
      </span>
      <span>
        <FormCheck
          inline
          label="Descending"
          name="group1"
          type="radio"
          id="{inline-2}"
        />
      </span>
      <span>
        <FormCheck
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id="{inline-3}"
        />
      </span>
      <span>
        <FormCheck
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id="{inline-4}"
        />
      </span>
      {/* <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating rating={rating} style={{ cursor: 'pointer' }} />
      </span> */}
      <Button variant="light" className="btn">
        clear
      </Button>
    </div>
  );
};

export default SideFilter;
