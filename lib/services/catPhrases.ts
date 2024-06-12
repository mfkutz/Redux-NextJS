import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catPhrasesApi = createApi({
    reducerPath: 'catPhrasesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://catfact.ninja' }),
    endpoints: (builder) => ({
        getPhrases: builder.query({
            query: () => `fact`,
        })
    }),
});

export const {useGetPhrasesQuery} = catPhrasesApi