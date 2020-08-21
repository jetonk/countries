import React, { useEffect } from 'react';
import { Layout, Row, Col, Card } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import useCountries from 'api/countries';
import Regions from 'api/regions.json';

const { Header, Footer, Content } = Layout;

const Main = () => {
  const [getCountriesByRegion, countries, errorMessage] = useCountries();

  useEffect(() => {
    getCountriesByRegion('europe');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('countries', countries)
  return (
    <Layout>
      <Header>
        Countries - App
      </Header>
      <Content>
        <Row>
          <Col span={8}>
          </Col>
          <Col span={8}>
            <GlobalOutlined /> <div>Regions </div>
            {Regions.map(region => (
              <div>{region.name}</div>
            ))}
          </Col>
        </Row>
      </Content>
      <Footer>
        Copyright
      </Footer>
    </Layout>
  )
}

export default Main;