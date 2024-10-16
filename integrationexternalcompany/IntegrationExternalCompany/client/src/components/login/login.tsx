import { Button, Checkbox, Col, Form, Input, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../provider/authContext';
import { useContext } from 'react';
import { isAuthUser } from '../../api/api.user';
import { toast, ToastContainer } from 'react-toastify';
const { Header } = Layout;

export const Login = () => {
    const { authenticated, setAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation(); 
    const from = location.state?.from?.pathname || '/home'; 
    
    const onFinish = (values: any) => {
        isAuthUser(values).then(x => setAuthenticated (x) );
        if (authenticated) { navigate(from, { replace: true }); }
        else {toast.error("Не правильное имя пользователя или пароль"); }
    };

    const onFinishFailed = (errorInfo: any) => {
        toast.error("Ошибка:  " + errorInfo);
    };

    return <Layout style={{backgroundColor: "white"} }>
        <Header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: '50px'
        }}
            >
            <div />
        </Header>
    <Content>
        <Row style={{ marginTop: "10px" }}>
            <Col span={8} offset={8}>
                <Form
                    name="login-form"
                    labelCol={{ span: 16 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                        <Col span={14} offset={2}>
                            <Row >
                                <h2>
                                    Интеграция продуктов
                                </h2>
                            </Row>
                        </Col>

                        <Row>Логин</Row>
                        <Form.Item
                            name="login"
                            rules={[{ required: true, message: "Введите логин" }]}
                        >
                            <Input />
                        </Form.Item>
                        
                        <Row>Пароль</Row>
                        <Form.Item
                            name="key"
                            rules={[{ required: true, message:"Введите пароль" }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" >
                            <Checkbox>Запомнить</Checkbox>
                        </Form.Item>

                        <Form.Item >
                                <Button style={{width: "100%"}} type="primary" htmlType="submit">Войти</Button>
                        </Form.Item>
                </Form>
            </Col>
        </Row >
        </Content>
        <ToastContainer autoClose={1500} />
</Layout>  
};