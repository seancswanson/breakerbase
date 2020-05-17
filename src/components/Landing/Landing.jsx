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
        <Row>
          <Col span={24}>col</Col>
        </Row>
      </div>
    );
  }
}

export default Landing;
