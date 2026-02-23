import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        message.success("Вход выполнен успешно!");
      } else {
        message.error(data.message || "Ошибка авторизации");
      }
    } catch (error) {
      message.error("Ошибка сети или сервера");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 300 }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Введите имя пользователя!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Имя пользователя" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Введите пароль!" }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Пароль" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
