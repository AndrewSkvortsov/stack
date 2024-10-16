import { Breadcrumb, Col, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { IUser } from '../shared/models/user.model';
import { usersData } from '../../api/api.user';

export const Users = () => {
    const [users, setUsers] = useState<IUser[]>();
    useEffect(() => {
        usersData().then(x => setUsers(x));
    }, []);    

const columns = [
    {
        title: 'Идентификатор',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Логин пользователя',
        dataIndex: 'login',
        key: 'login',
    },
    {
        title: 'ФИО',
        dataIndex: 'fullName',
        key: 'fullName',
    },
    {
        title: 'Ключ',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'Компания',
        dataIndex: 'company',
        key: 'company',
    },
];

    return (        
        <Col>
            <Space direction="vertical">
                <Breadcrumb >
                    <Breadcrumb.Item>Домашняя страница</Breadcrumb.Item>
                    <Breadcrumb.Item >Приложение</Breadcrumb.Item>
                    <Breadcrumb.Item>Пользователи</Breadcrumb.Item>
                </Breadcrumb>
            </Space>
            <h2>Пользователи системы</h2>
            <Table dataSource={users} columns={columns} size="small" bordered />
        </Col>
    );


}
