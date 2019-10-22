import React, { Component } from "react";
import './login.less';
import logo from './img/logo.png';
import { Form, Icon, Input, Button} from 'antd';


class Login extends Component {
    handleSubmit = (event) => {

        // 阻止时间的默认行为
        event.preventDefault();

        //得到form对象
        const form = this.props.form;

        //对表单进行校验
        form.validateFields((err, values) => {
            if(!err) {
                console.log('校验成功', values);
            } else{
                console.log('校验失败', values);
            }
        })
        // 获取表单项的输入数据
        const values = form.getFieldsValue();

    }

    /*
        对密码进行自定义验证
    */
    validatePwd = (rule,value,callback) => {
        if(!value) {
            callback('密码不能为空');
        } else if (value.length<4) {
            callback('密码长度不能小于4位');
        } else if (value.length>12) {
            callback('密码长度不能大于12位');
        } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
            callback('密码必须是英文、数字或下划线');
        } else {
            callback() //验证通过
        }
    }
    render () {

        //得到form对象
        const form = this.props.form;
        const { getFieldDecorator } = form;

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt=""/>
                    <h1>React项目-管理后台</h1>
                </header>
                <section className="login-content">
                    <h2>用户登陆</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">

                        <Form.Item>
                            {getFieldDecorator('username', {
                                //声明式验证：直接使用别人定义好的验证规则进行验证
                                rules: [
                                    { required: true, whitespace: true, message: '请输入用户名' },
                                    { min: 4, message: '用户名至少4位' },
                                    { max: 12, message: '用户名至多12位' },
                                    { pattern: /^[a-zA-Z0-9]+$/, message: '用户名必须是英文、数字、或下划线组成' },
                                ],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入用户名"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    { validator: this.validatePwd }
                                ]
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="请输入密码"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                        
                    </Form>
                </section>
            </div>
        )
    }
}

/*
1. 高阶函数
    1). 一类特别的函数
        a. 接受函数类型的参数
        b. 返回值是函数
    2）. 常见
        a. 定时器：setTimeout()/setInterval()
        b. Promise: Promise(() => {}) then(valve => {}, reason => {})
        c. 数组遍历相关的方法： forEach()/filter()/map()/reduce()/find()/findIndex()
        d. 函数对象的dind()
2. 高阶组件
    1). 本质就是一个函数
    2). 接受一个组件（被包装组件）,返回一个新的组件（包装组件），包装组件会向被包装组件传入特定属性

*/

const WrapLogin = Form.create()(Login);
export default WrapLogin;