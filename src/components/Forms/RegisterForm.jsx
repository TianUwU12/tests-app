import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { confirm, ...registerData } = values;

      const response = await fetch("http://localhost:3000/api/reg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        message.success("Регистрация прошла успешно!");
      } else {
        const errorData = await response.json();
        message.error(errorData.message, "Ошибка при регистрации");
      }
    } catch (error) {
      message.error("Не удалось связаться с сервером");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      name="register"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 400 }}
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          { type: "email", message: "Некорректный email!" },
          { required: true, message: "Введите email!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Nickname"
        rules={[{ required: true, message: "Введите nickname!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
        rules={[{ required: true, message: "Введите пароль!" }]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Подтвердите пароль"
        dependencies={["password"]}
        hasFeedback
        rules={[
          { required: true, message: "Подтвердите пароль!" },
          ({ getFieldValue }) => ({
            validator(__, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Пароли не совпадают!"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Введите имя!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
