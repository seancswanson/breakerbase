import React, { Component } from 'react';
import StackGrid from 'react-stack-grid';
import sizeMe from 'react-sizeme';

import { Card } from 'antd';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      size: { width },
    } = this.props;

    return (
      <StackGrid columnWidth={width <= 768 ? '100%' : '33.33%'}>
        <Card title="185 hours">
          <p>
            ... is the number of hours you've logged throughout your sessions on
            BreakerBase.
          </p>
        </Card>
        <Card title="Default size card">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Default size card">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </StackGrid>
    );
  }
}

export default sizeMe()(Overview);
