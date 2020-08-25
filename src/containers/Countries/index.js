/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Layout, Row, Col, Table, Alert } from 'antd';
import useCountries from 'api/countries';
import { AppHeader } from 'components/AppHeader';
import styles from './styles';
const { Content } = Layout;

const Countries = () => {
  let { region } = useParams();
  let history = useHistory();
  const [getCountriesByRegion, countries, errorMessage] = useCountries();

  useEffect(() => {
    getCountriesByRegion(region);
  }, []);

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

  const navigateTo = (country) => {
    history.push(`/country/${country.name}`, { country })
  }
  return (
    <Layout>
      <AppHeader title={region} />
      <Content>
        <Row type="flex" justify="center" align="top" style={styles.tableContainer}>
          <Col xs={22} xl={12}>
            {errorMessage.length ? (
              <Alert message={errorMessage} type="error" />
            ) : (
                <Table
                  onRow={(country) => {
                    return {
                      onClick: () => navigateTo(country)
                    }
                  }}
                  columns={columns}
                  dataSource={countries}
                  rowKey="name"
                />
              )}
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Countries;