import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';

const ResumeSection = ({ name, last, children, id }) => (
  <div className={last ? '' : 'mb-4'}>
    <HashLink id={id}>
      <h2 className="resume">{name}</h2>
    </HashLink>
    {children}
  </div>
);

ResumeSection.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  last: PropTypes.bool,
  children: PropTypes.node,
};

ResumeSection.defaultProps = {
  last: false,
  children: null,
};

export default ResumeSection;
