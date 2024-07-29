import React from 'react';
import { Layout, Menu } from 'antd';
import CarList from './components/CarList';
import AddCar from './components/AddCar';

const { Header, Content, Footer } = Layout;

const items = [
  {
    label: 'Home',
    key: '1',
  },
];

const App = () => {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items} />
      </Header>
      <Content style={{ padding: '50px 50px' }}>
        <div className="site-layout-content">
          <h1>Car Management</h1>
          <AddCar />
          <CarList />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Car Management ©2023 Created by Alimkulov
      </Footer>
    </Layout>
  );
};

export default App;
