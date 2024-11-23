import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <img src={user.avatar} alt="User Avatar" style={{ borderRadius: '50%', width: '150px' }} />
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
    </div>
  );
};

export default Profile;
