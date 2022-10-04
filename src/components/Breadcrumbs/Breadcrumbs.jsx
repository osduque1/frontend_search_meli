import React from "react";
import PropTypes from 'prop-types';
import { v4 as randomUUID } from 'uuid';
import { FaChevronRight } from "react-icons/fa";
import "./Breadcrumbs.scss";

const Breadcrumbs = ({ data }) => {
  return (
    <ol className="Breadcrumbs">
      {data?.map((item, index) => {
        return (
          <>
            {index > 0 && (
              <span>
                <FaChevronRight size={8} style={{ minHeight: 26 }} />
              </span>
            )}
            <li key={randomUUID}>{item}</li>
          </>
        );
      })}
    </ol>
  );
};

Breadcrumbs.defaultProps = {
  data: []
};

Breadcrumbs.propTypes = {
  data: PropTypes.array
};

export default Breadcrumbs;
