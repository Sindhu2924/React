import React from 'react'
import { useSelector } from 'react-redux'

export default function UserInfo() {
    const data = useSelector((state) => state.user)
  return (
    <div>
        <h1>Welcome to Redux</h1>
        <h2>{data.userName}, {data.balance}</h2>
    </div>
  )
}
