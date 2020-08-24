import React from 'react';
import styles from './styles';
import { Layout, Row } from 'antd';
const { Header } = Layout;


export const AppHeader = ({ title }) => {
  return (
    <Header style={styles.header}>
      <div>{title ? title : `Countries - App`}</div>
    </Header>
  )
};