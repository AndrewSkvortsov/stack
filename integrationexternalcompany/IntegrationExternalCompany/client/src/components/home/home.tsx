
import React, {useEffect, useState } from 'react';
import { Breadcrumb, Card, Input, Layout, Space } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import { AlertButton } from '../shared/alert-button';
import { getInstriction } from '../../api/api.instruction';
import { Instruction } from '../shared/models/instruction.model';
const {Content } = Layout;

export const Home: React.FC = () => {
    const [instruction, setInstruction] = useState<Instruction>({url: 'Загрузка... Обновите страницу'});
    useEffect(() => {
        getInstriction("leasoft").then(x => setInstruction(x));
    }, []); 

    return (
        <Layout>
            <Space direction="vertical">
                <Breadcrumb >
                    <Breadcrumb.Item>Домашняя страница</Breadcrumb.Item>
                    <Breadcrumb.Item >Приложение</Breadcrumb.Item>
                    <Breadcrumb.Item>Инструкции</Breadcrumb.Item>
                </Breadcrumb>
            </Space>
            <h2 >Инструкция по установке системы</h2>
            <Space direction="vertical" size="small">
                    <Space direction="vertical">
                        <Content >
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
            </Space>
    </Layout>
    );
};