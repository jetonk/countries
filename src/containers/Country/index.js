/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import { AppHeader } from 'components/AppHeader';
import styles from './styles';
import { TextFormatter } from 'utils/TextFormatter';
import shortid from 'shortid';
const { Content } = Layout;

const Country = () => {
  let history = useHistory();
  const { country } = history.location.state;

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
      return <div style={styles.rowItem}
        key={shortid.generate()}>
        {typeof value !== 'object' ? value : value.name}
      </div>
    });
  }

  const renderObject = (data) => {
    return Object.keys(data).map(value =>
      <Col
        xs={12} xl={24}
        style={styles.rowItem}
        key={shortid.generate()}
      >
        {value}
      </Col>);
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
            key={shortid.generate()}
          >
            <Col xs={4} xl={3}>
              <div style={styles.name}>{TextFormatter(key)}</div>
            </Col>
            <Col xs={14} xl={3}>
              <div style={styles.value}>{renderData(country, key)}</div>
            </Col>
          </Row>
        ))}
      </Content>
    </Layout>
  )
}

export default Country;