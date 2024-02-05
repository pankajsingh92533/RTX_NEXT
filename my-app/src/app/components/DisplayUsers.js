"use client"
import React from 'react';
import { useSelector } from 'react-redux';

export default function DisplayUsers() {
  const userData = useSelector((data) => data.users);
  console.log(userData);

  return (
    <div>
      <h3>Users List</h3>
      {
        userData.map((item) => (
          <div key={item.id} >
            {item.name}
          </div>
        ))
      }
    </div>
  );
}
