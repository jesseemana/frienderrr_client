import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    mode: 'light',
    user: null,
    token: null,
    posts: []
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setMode: function(state, action) {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setLogin: function(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: function(state, action) {
            state.user = null;
            state.token = null;
        },
        setFriends: function(state, action) {
            if(state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.log('user friends nonexistent :(')
            }
        },
        setPosts: function(state, action) {
            state.posts = action.payload.posts
        },
        setPost: function(state, action) {
            const updatedPost = state.posts.map(post => {
                if(post._id === action.payload.post_id) return action.payload.post
                return post
            })
            state.posts = updatedPost
        }
    }
})

export const {setMode, setFriends, setLogin, setLogout, setPost, setPosts} = authSlice.actions
export default authSlice.reducer