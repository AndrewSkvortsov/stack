
import React, { useEffect, useState } from 'react';
import { Breadcrumb, Card, Col, Input, Layout, Menu, Space } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import { AlertButton } from '../shared/alert-button';


const { Header, Content, Footer } = Layout;

const items = [{
    key: "1",
    label: "Инструкция по интеграции для компании: ЭкономЛизинг",
}];
const menu: React.CSSProperties = { flex: 1, minWidth: 0, marginTop: '-15px', height: '55px' };
const space: React.CSSProperties = { display: 'flex', marginTop: "1%" };
const header: React.CSSProperties = { position: 'sticky', top: 0,zIndex: 1, width: '100%', display: 'flex',alignItems: 'center', height: '50px'};

interface Instruction { 
    url: string;
}

export const Home: React.FC = () => {
    const [instruction, setInstruction] = useState<Instruction>({url: 'Загрузка... Обновите страницу'});
    
    useEffect(() => {
        getInstriction();
    }, []); 
    
    return (
        <Layout>
            <Header style={header}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={menu}
                />
            </Header>
            <Space direction="vertical" size="small" style={space}>
                <Col offset={1}>
                    <Space direction="vertical">
                        <Breadcrumb >
                            <Breadcrumb.Item>Домашняя страница</Breadcrumb.Item>
                            <Breadcrumb.Item>Приложение</Breadcrumb.Item>
                            <Breadcrumb.Item>Инструкции</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ marginTop: '10px'}}>
                            <Card title="Для устрановки выполните следующую команду на (Debian/Ubuntu):" size="small">
                                <Space.Compact block>
                                <Input
                                    value={instruction.url}
                                />
                                <AlertButton messages={instruction.url}></AlertButton>
                                </Space.Compact>
                            </Card>
                        </Content>
                    </Space>
                </Col>
                <Col offset={10}>
                    <Footer>
                            ООО Сервис ©{new Date().getFullYear()}
                    </Footer>
                </Col>
            </Space>
    </Layout>
    );

    async function getInstriction() {
        const response = (await fetch('/instruction/leasoft')).json();
        setInstruction(await response);
    }
};