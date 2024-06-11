import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User ={
    id: number,
    name: string,
    email:string,
    username: string
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[],null>({
            query: () => `users` //http://domain/users
        })
    }),
})

export const { useGetUsersQuery } = userApi