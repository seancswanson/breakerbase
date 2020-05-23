import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
              <Title>breakerbase</Title>
            </Row>
            <Row>
              <Title level={2}>The 21st century training companion.</Title>
            </Row>
            <Row gutter={[0, 18]}>
              <Text strong>
                Train smarter. Track progress. Rock the cypher.
              </Text>
            </Row>
            <Row>
              <Link to="/signup">
                <Button type="primary">Create a Free Account</Button>
              </Link>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Landing;
