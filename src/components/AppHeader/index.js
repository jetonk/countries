import React from 'react';
import styles from './styles';
import { Layout, Row, Col } from 'antd';
const { Header } = Layout;


export const AppHeader = ({ title }) => {
  return (
    <Header style={styles.header}>
      <Row>
        <Col xs={24} xl={24}>{title ? title : `Countries - App`}</Col>
      </Row>
    </Header>
  )
};