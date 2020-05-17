import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Landing">
        <Row className="hero-container">
          <Col className="hero-wrapper" span={24}>
            <h1>BreakHQ</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Landing;
