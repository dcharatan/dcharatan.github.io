import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const Page = ({ children }) => (
  <Container>
    <Row>
      <Col>
        <div className="bg-white p-5 mt-5 border">{children}</div>
      </Col>
    </Row>
  </Container>
);

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

export default Page;
