/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Layout, Row, Col, List } from 'antd';
import { AppHeader } from 'components/AppHeader';
import styles from './styles';
const { Content } = Layout;

const Country = () => {
  let { countryName } = useParams();
  let history = useHistory();
  const { country } = history.location.state;
  console.log('history', country);


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorterDirections: ['ascend' | 'descend'],
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Population',
      dataIndex: 'population',
      key: 'population',
      sorter: (a, b) => a.population - b.population,
      sorterDirections: ['ascend' | 'descend'],
      ellipsis: false,
      render: (population) => population.toLocaleString(),
    },
  ];

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
      return <div>{typeof value !== 'object' ? value : value.name}</div>
    });
  }

  const renderObject = (data) => {
    return Object.keys(data).map(value => <div>{value}</div>);
  }

  return (
    <Layout>
      <AppHeader title={`${country.name} / ${country.nativeName}`} />
      <Content>
        <Row type="flex" justify="center" align="top" style={styles.listcontainer}>
          <Col span={12}>
            <div style={styles.flagContainer}>
              <img src={country.flag} alt="country-flag" style={styles.image} />
            </div>
            {Object.keys(country).map((key) => (
              <div style={styles.rowContainer} key={key}>
                <div style={styles.name}>{key}</div>
                <div style={styles.value}>{renderData(country, key)}</div>
              </div>
            ))}
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Country;