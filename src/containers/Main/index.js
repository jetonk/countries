import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, List } from 'antd';
import { GlobalOutlined, RightOutlined } from '@ant-design/icons';
import Regions from 'api/regions.json';
import { AppHeader } from 'components/AppHeader';
import styles from './styles';
const { Content } = Layout;

const Main = () => {

  return (
    <Layout>
      <AppHeader />
      <Content>
        <Row type="flex" justify="center" align="top" style={styles.listContainer}>
          <Col xs={22} xl={8}>
            <List
              size="large"
              header={<div style={styles.listHeader}> <GlobalOutlined /> Regions</div>}
              bordered
              dataSource={Regions}
              renderItem={region => (
                <Link to={`${region.name}/countries`} >
                  <List.Item
                    style={styles.listItem}
                  >
                    {region.name}
                    <RightOutlined style={styles.listItemIcon} />
                  </List.Item>
                </Link>
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