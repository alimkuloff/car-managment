import React, { useState } from 'react';
import { useAddCarMutation } from '../services/carsApi';
import { Form, Input, Button, message } from 'antd';

const AddCar = () => {
  const [addCar] = useAddCarMutation();
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      await addCar(values).unwrap();
      message.success('Car added successfully');
      form.resetFields();
    } catch (err) {
      message.error('Failed to add car');
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="inline">
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input the car name!' }]}
      >
        <Input placeholder="Car name" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Car
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCar;
