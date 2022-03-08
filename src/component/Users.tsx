import { FC, useState } from 'react'
import { Text } from '@chakra-ui/react'

const user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
}

type User = typeof user

// データをglobal管理
const dataMap: Map<string, unknown> = new Map()

function useData<T>(key: string): T {
  const usersData = dataMap.get(key) as T
  if (!dataMap.get(key)) {
    throw fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        dataMap.set(key, data)
      })
  }

  return usersData
}

type UsersProps = {
  id: string
}

export const Users: FC<UsersProps> = (props: UsersProps) => {
  const [users] = useState(useData<User[]>(props.id))
  return (
    <>
      <Text>hello world!!!!</Text>
      {users?.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </>
  )
}
