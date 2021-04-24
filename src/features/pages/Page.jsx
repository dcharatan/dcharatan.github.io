import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const Page = ({ title, subtitle, invisible, children }) => (
  <Container>
    <Row>
      <Col>
        <div className="my-5">
          <div className="p-5 border bg-white">
            <h1 className="m-0">{title}</h1>
            {subtitle ? <div className="mt-2">{subtitle}</div> : null}
          </div>
          <div className={invisible ? '' : 'p-5 border border-top-0 bg-white'}>
            {children}
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node,
  invisible: PropTypes.bool,
  children: PropTypes.node,
};

Page.defaultProps = {
  subtitle: null,
  invisible: false,
  children: null,
};

export default Page;
