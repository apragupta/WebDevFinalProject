import { createApi } from '@reduxjs/toolkit/query/react'
import axios from "axios";
const api = axios.create({withCredentials: true})

const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: "" }) =>
        async ({ url, method, data }) => {
            try {
                const result = await api.request({ url: baseUrl + url, method, data });
                return { data: result.data };
            } catch (axiosError) {
                let err = axiosError;
                return {
                    error: { status: err.response?.status, data: err.response?.data },
                };
            }
        };

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
    tagTypes: ['Post'],
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
        // The `getPosts` endpoint is a "query" operation that returns data
        getPosts: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: () => ({url: '/posts', method: "get"}),
            providesTags: ['Post']
        }),
        addNewPost: builder.mutation({
            query: initialPost => ({
                url: '/posts',
                method: 'post',
                // Include the entire post object as the body of the request
                data: initialPost
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: builder.mutation({
            query: post => ({
                url: `/posts/${post._id}`,
                method: 'delete'
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: builder.mutation({
            query: newPost => ({
                url: `/posts/${newPost._id}`,
                method: 'put',
                // Include the entire post object as the body of the request
                data: newPost
            }),
            invalidatesTags: ['Post']
        }),
        toggleBookmark: builder.mutation({
            query: postId => ({
                url: `/posts/${postId}/bookmark`,
                method: 'post'
            }),
            invalidatesTags: ['Post', 'User']
        }),
        getPostsByGameId: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: gid => ({
                url: `/game/${gid}/posts`,
                method: "get"
            }),
            providesTags: ['Post']
        }),
        getPostsByUserId: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: uid => ({
                url: `/users/${uid}/posts`,
                method: "get"
            }),
            providesTags: ['Post']
        }),
        getLikedPostsByUserId: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: uid => ({
                url: `/users/${uid}/likes`,
                method: "get"
            }),
            providesTags: ['Post']
        }),
        getDislikedPostsByUserId: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: uid => ({
                url: `/users/${uid}/dislikes`,
                method: "get"
            }),
            providesTags: ['Post']
        }),
        getBookmarkedPostsByUserId: builder.query({
            query: uid => ({
                url: `/users/${uid}/bookmarks`,
                method: "get"
            }),
            providesTags: ['Post']
        }),
        getFollowedPostsByUserId: builder.query({
            query: uid => ({
                url: `/users/${uid}/for-games-followed`,
                method: "get"
            }),
            providesTags: ['Post']
        }),
        getGame: builder.query({
            query: gid => ({
                url: `/game/${gid}`,
                method: "get"
            })
        }),
        getSearch: builder.query({
            query: term => ({
                url: `/search?term=${encodeURIComponent(term)}`,
                method: "get"
            })
        }),
        getUser: builder.query({
            query: uid => ({
                url: `/users/${uid}`,
                method: "get"
            }),
            providesTags: (result, error, arg) => [{ type: 'User', id: arg }]
        }),
        getUserGamesFollowed: builder.query({
            query: uid => ({
                url: `/users/${uid}/followed`,
                method: "get"
            }),
            providesTags: (result, error, arg) => [{ type: 'User', id: arg }]
        }),
        updateUser: builder.mutation({
            query: newUser => ({
                url: `/users/${newUser._id}`,
                method: 'put',
                data: newUser
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg._id }]
        }),
        followGame: builder.mutation({
            query: gid => ({
                url: `/users/follow-game/${encodeURIComponent(gid)}`,
                method: 'post'
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg._id }]
        }),
    })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
    useGetPostsQuery,
    useAddNewPostMutation,
    useDeletePostMutation,
    useUpdatePostMutation,
    useToggleBookmarkMutation,
    useGetPostsByGameIdQuery,
    useGetPostsByUserIdQuery,
    useGetLikedPostsByUserIdQuery,
    useGetDislikedPostsByUserIdQuery,
    useGetBookmarkedPostsByUserIdQuery,
    useGetFollowedPostsByUserIdQuery,
    useGetGameQuery,
    useGetSearchQuery,
    useGetUserQuery,
    useGetUserGamesFollowedQuery,
    useUpdateUserMutation,
    useFollowGameMutation
} = apiSlice

