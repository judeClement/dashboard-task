import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users/all',
        }),
        addUser: builder.mutation({
            query: (newUser) => ({
                url: 'users/add',
                method: 'POST',
                body: newUser,
            }),
        }),
    }),
});

export const { useGetUsersQuery, useAddUserMutation } = userApi;
