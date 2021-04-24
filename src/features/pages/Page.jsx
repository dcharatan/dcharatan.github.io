import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const Page = ({ title, subtitle, children }) => (
  <Container>
    <Row>
      <Col>
        <div className="bg-white my-5 border">
          <div className="p-5 border-bottom">
            <h1 className="m-0">{title}</h1>
            {subtitle ? <div className="mt-2">{subtitle}</div> : null}
          </div>
          <div className="p-5">{children}</div>
        </div>
      </Col>
    </Row>
  </Container>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node,
  children: PropTypes.node,
};

Page.defaultProps = {
  subtitle: null,
  children: null,
};

export default Page;
