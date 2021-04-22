import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

const HeaderLink = ({ className, children, ...props }) => (
  <Nav.Link className={`${className} px-3 py-2`} {...props}>
    {children}
  </Nav.Link>
);

HeaderLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

HeaderLink.defaultProps = {
  className: '',
  children: null,
};

export default HeaderLink;
