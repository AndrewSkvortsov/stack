import React, { useContext } from 'react';
import { Col, Layout, Menu, Space } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/authContext';

const { Footer } = Layout;

const items = [
    {
        key: "home",
        label: <Link to="/home">Инструкция по интеграции для компании: ЭкономЛизинг</Link>
    },
    {
        key: "users",
        label: <Link to="/users">Пользователи</Link>
    }
];

export const Header: React.FC = () => {
    const { authenticated } = useContext(AuthContext)
    const location = useLocation();
    console.log('Header', authenticated);
    if (!authenticated) return <Navigate to="/login" state={{ from: location }} replace />
    return (
        <Layout>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
            />
            <Space direction="vertical" size="small" style={{display: 'flex', marginTop: "1%" }}>
                <Col offset={1}>
                        <Outlet></Outlet> 
                </Col>
                <Col offset={10}>
                    <Footer>
                            ООО Сервис ©{new Date().getFullYear()}
                    </Footer>
                </Col>
            </Space>
        </Layout>
    );
};