import React, { Component } from 'react';
import { Button, Row, Col, Typography } from 'antd';
const { Title, Text } = Typography;

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Landing">
        <Row className="hero-container" justify="center" align="middle">
          <Col className="hero-wrapper" span={16} offset={-2}>
            <Row>
              <Title>BreakerBase</Title>
            </Row>
            <Row>
              <Title level={2}>Your 21st century training companion.</Title>
            </Row>
            <Row gutter={[0, 18]}>
              <Text strong>Train smarter. Dance better. Rock the cypher.</Text>
            </Row>
            <Row>
              <Button type="primary">Create a Free Account</Button>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Landing;
