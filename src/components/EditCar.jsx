import React, { useState, useEffect } from 'react';
import { useUpdateCarMutation, useGetCarQuery } from '../services/carsApi';
import { Form, Input, Button, message, Modal } from 'antd';

const EditCar = ({ carId, visible, onClose }) => {
  const [updateCar] = useUpdateCarMutation();
  const { data: car, isLoading } = useGetCarQuery(carId);
  const [form] = Form.useForm();

  useEffect(() => {
    if (car) {
      form.setFieldsValue(car);
    }
  }, [car, form]);

  const handleSubmit = async (values) => {
    try {
      await updateCar({ id: carId, ...values }).unwrap();
      message.success('Car updated successfully');
      onClose();
    } catch (err) {
      message.error('Failed to update car');
    }
  };

  return (
    <Modal
      visible={visible}
      title="Edit Car"
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input the car name!' }]}
        >
          <Input placeholder="Car name" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Update Car
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditCar;
