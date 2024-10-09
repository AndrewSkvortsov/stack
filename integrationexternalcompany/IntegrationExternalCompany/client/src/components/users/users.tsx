import { Table } from 'antd';
import { useEffect, useState } from 'react';

interface IUser {
    id: number;
    login: string;
    fullName: string;
    key: string;
}

export const Users = () => {
    const [users, setUsers] = useState<IUser[]>();

    useEffect(() => {
        usersData();
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
];

    return (        
        <div>
            <h2 id="tableLabel">Пользователи системы</h2>
            <Table dataSource={users} columns={columns} size="small"  bordered  />;
        </div>
    );

    async function usersData() {
        const response = await fetch('get');
        const data = await response.json();
        setUsers(data);
    }
}
