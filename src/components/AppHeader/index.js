import React from 'react';
import styles from './styles';
import { Layout, Row } from 'antd';
const { Header } = Layout;


export const AppHeader = (props) => {
  return (
    <Header style={styles.header}>
      <div>Countries - App</div>
    </Header>
  )
};