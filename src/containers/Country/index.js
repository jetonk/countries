/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Layout, Row, Col, List } from 'antd';
import { AppHeader } from 'components/AppHeader';
import styles from './styles';
const { Content } = Layout;

const Country = () => {
  let history = useHistory();
  const { country } = history.location.state;
  console.log('country', country);

  const renderData = (country, key) => {
    const value = country[key];
    if (typeof value === 'string' || typeof value === 'number') {
      return value;
    }
    if (Array.isArray(value)) {
      return renderArray(value);
    }
    if (value instanceof Object && !Array.isArray(value)) {
      return renderObject(value);
    }
  }

  const renderArray = (data) => {
    return data.map(value => {
      return <div style={styles.rowItem}>{typeof value !== 'object' ? value : value.name}</div>
    });
  }

  const renderObject = (data) => {
    return Object.keys(data).map(value => <div style={styles.rowItem}>{value}</div>);
  }

  const textFormatter = (string) => {
    return string.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  }

  return (
    <Layout>
      <AppHeader title={`${country.name} / ${country.nativeName}`} />
      <Content>
        <div style={styles.flagContainer}>
          <img src={country.flag} alt="country-flag" style={styles.image} />
        </div>
        {Object.keys(country).map((key) => (
          <Row
            type="flex"
            justify="center"
            align="top"
            style={styles.listContainer}
          >
            <Col span={6}>
              <div style={styles.name}>{textFormatter(key)}</div>
            </Col>
            <Col span={6}>
              <div style={styles.value}>{renderData(country, key)}</div>
            </Col>
          </Row>
        ))}
      </Content>
    </Layout>
  )
}

export default Country;