import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
const { Footer } = Layout;

const style = {
  padding: '10px',
  color: '#f3f3f3',
  fontSize: '12px',
  background: '#333',
};

const MyFooter = () => {
  return (
    <Footer style={style}>
      Made with ♡ by Sean Swanson 2020 <InfoCircleOutlined />
    </Footer>
  );
};

export default MyFooter;
