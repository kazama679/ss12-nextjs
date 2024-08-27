"use client"
import React, { useEffect, useState } from 'react'

export default function Page() {
    // đi call API lấy dữ liệu để đi render
    const [users,setUser]=useState([]);
    useEffect(()=>{
        // đi gọi API
        const getData=async ()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json();
            setUser(data);
        }
        getData();
    },[])
  return (
    <div>
      render dữ liệu phía client!
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <div>123</div>
      {users.map((item:any)=>{
        return <li key={item.id}>{item.name}</li>
      })}
      <div>123</div>
    </div>
  )
}
