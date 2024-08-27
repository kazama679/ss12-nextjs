"use client"
import React, { useEffect, useState } from 'react'

export default function Bai3() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setUsers(data)
        }
        getData()
    }, []);
    return (
        <div>
            {users.map((item: any) => {
                return (
                    <li key={item.id}>{item.name}</li>
                );
            })}
        </div>
    )
}