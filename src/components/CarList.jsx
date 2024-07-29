import React, { useState } from 'react';
import { useGetCarsQuery, useDeleteCarMutation } from '../services/carsApi';
import { List, Button, Typography, message } from 'antd';
import EditCar from './EditCar';

const { Title } = Typography;

const CarList = () => {
  const { data: cars, error, isLoading } = useGetCarsQuery();
  const [deleteCar] = useDeleteCarMutation();
  const [editingCarId, setEditingCarId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleDelete = async (id) => {
    try {
      await deleteCar(id).unwrap();
      message.success('Car deleted successfully');
    } catch (err) {
      message.error('Failed to delete car');
    }
  };

  const handleEdit = (id) => {
    setEditingCarId(id);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setEditingCarId(null);
  };

  return (
    <div>
      <Title level={2}>Car List</Title>
      <List
        itemLayout="horizontal"
        dataSource={cars}
        renderItem={(car) => (
          <List.Item
            actions={[
              <Button type="link" onClick={() => handleEdit(car.id)}>
                Edit
              </Button>,
              <Button type="primary" danger onClick={() => handleDelete(car.id)}>
                Delete
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={car.name}
              description={`Car ID: ${car.id}`}
            />
          </List.Item>
        )}
      />
      {editingCarId && (
        <EditCar
          carId={editingCarId}
          visible={isModalVisible}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default CarList;
