
'use client'

import { useGetUsersQuery } from '@/lib/services/userApi'

export default function Home() {

  const { data, error, isLoading, isFetching } = useGetUsersQuery(null)

  if (isFetching || isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div>
      <h1>Hello</h1>
      {
        data?.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  )
}
