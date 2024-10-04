import { Button, Checkbox, Col, Form, Input, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from "react-router-dom";
const { Header } = Layout;
export const Login = () => {
    const navigate = useNavigate();
    const onFinish = async (values: any) => {
        console.log("values", values);
        if (values.login === 'ЭкономЛизинг') { navigate("/"); }
        else { alert("Не правильное имя пользователя или пароль"); }
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo); 
    };
//Todo refactoting
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
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                        <div style={{margin: "35px 100px 1px 45px "}} >
                            <h2>
                                Интеграция продуктов
                            </h2>
                        </div>
                        <div style={{ margin: "5px" }}>Логин</div>
                        <Form.Item

                            name="login"
                                rules={[{ required: true, message: <div style={{fontSize:'12px'}}>Введите логин</div> }]}
                        >
                            <Input />
                        </Form.Item>
                        <div style={{ margin: "5px" }}>Пароль</div>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: <div style={{fontSize:'12px'}}>Введите пароль</div> }]}
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
    </Layout>  
};

export const Component = () => <Login />;