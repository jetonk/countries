import React, { useEffect } from 'react';
import { Layout, Row, Col, List } from 'antd';
import { GlobalOutlined, RightOutlined } from '@ant-design/icons';
import useCountries from 'api/countries';
import Regions from 'api/regions.json';
import { AppHeader } from 'components/AppHeader';
import styles from './styles';
const { Content } = Layout;

const Main = () => {
  const [getCountriesByRegion, countries, errorMessage] = useCountries();

  useEffect(() => {
    getCountriesByRegion('europe');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectRegion = (region) => {
    console.log('region', region)
  }

  return (
    <Layout>
      <AppHeader />
      <Content>
        <Row type="flex" justify="center" align="top" style={styles.listContainer}>
          <Col span={8}>
            <List
              size="large"
              header={<div style={styles.listHeader}> <GlobalOutlined /> Regions</div>}
              bordered
              dataSource={Regions}
              renderItem={region => (
                <List.Item style={styles.listItem} onClick={() => selectRegion(region)}>
                  {region.name}
                  <RightOutlined style={styles.listItemIcon} />
                </List.Item>
              )
              }
            />
          </Col>
        </Row>
      </Content>
    </Layout >
  )
}

export default Main;