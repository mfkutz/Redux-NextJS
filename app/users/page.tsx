'use client'

import { useGetUsersQuery } from "@/lib/services/userApi";

const UsersPage = () => {

    const { data, error, isLoading, isFetching } = useGetUsersQuery(null)

    if (isFetching || isLoading) return <div>Loading...</div>
    if (error) return <div>Some error</div>
    return (
        <div>
            <h1>Physics</h1>
            {
                data?.map(users => (
                    <div key={users.id}>
                        <p>{users.id}</p>
                        <p>{users.name}</p>
                        <p>{users.username}</p>
                        <p>{users.email}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default UsersPage;