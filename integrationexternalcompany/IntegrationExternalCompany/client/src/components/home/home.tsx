
import React, { useEffect, useState } from 'react';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

const items = [{
    key: "1",
    label: "Инструкция по интеграции для компании: ЭкономЛизинг",
}];

interface Instruction { 
    url: string;
}
export const Home: React.FC = () => {
    const [instruction, setInstruction] = useState<Instruction>();

    useEffect(() => {
        getInstriction();
    }, []); 
    
    const contents = instruction === undefined
        ? <p><em>Loading... Please refresh</em></p>
        :  <div>{instruction.url}</div>;

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

const copyTextToClipboard = async (text: any) => {
    await navigator.clipboard.writeText(text.props.children);
    alert('Текст успешно скопирован в буфер обмена!');  
    };
    
    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    height: '50px'
                }}
            >
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 , marginTop: '-15px' , height: '55px' }}
                />
            </Header>
            <Content style={{ padding: '0 208px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Домашняя страница</Breadcrumb.Item>
                    <Breadcrumb.Item>Приложение</Breadcrumb.Item>
                    <Breadcrumb.Item>Инструкции</Breadcrumb.Item>
                </Breadcrumb>

                <div><h5>Для устрановки выполните следующую команду на (Debian/Ubuntu):</h5></div>
                <div
                    style={{
                        padding: 24,
                        minHeight: 60,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <div style={{display: "flex" }}>
                        <div>
                            {contents} 
                        </div>
                        <div style={{marginLeft: "5px" , marginTop: "-5px"}}>
                            <Button style={{ color: 'black' }} type="link"  icon={<CopyOutlined />}  onClick={() => copyTextToClipboard(contents)}></Button>
                            
                        </div>
                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                ООО Сервис ©{new Date().getFullYear()}
            </Footer>
        </Layout>
    );

    async function getInstriction() {
        const response = await fetch('/instruction/leasoft');
        const data = await response.json();
        setInstruction(data);
    }
};