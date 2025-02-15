import PropTypes from "prop-types";
import React from "react";

const UnAuthencticatedLayout = ({ children }) => {
  return <div>{children}</div>;
};

UnAuthencticatedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UnAuthencticatedLayout;
