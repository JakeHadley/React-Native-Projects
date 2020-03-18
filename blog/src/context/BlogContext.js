import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'remove_blog_post':
      //this doesn't return an edited object, 
      //but returns a new state object that is returned from `map()`
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_blog_post':
      //same here
      return state.map(post => (post.id === action.payload.id ? action.payload : post));
    case 'get_blog_posts':
      return action.payload;
    default:
      return state;
  }
};

//these actions return a function
//i'm not sure why, but it acts like a thunk
const getBlogPosts = dispatch => async () => {
  const response = await jsonServer.get('/blogposts');
  dispatch({ type: 'get_blog_posts', payload: response.data });
};
const addBlogPost = () => async (title, content, callback) => {
  await jsonServer.post('/blogposts', { title, content });
  if (callback) callback();
};
const removeBlogPost = dispatch => async id => {
  await jsonServer.delete(`/blogposts/${id}`);
  dispatch({ type: 'remove_blog_post', payload: id });
};
const editBlogPost = dispatch => async (id, title, content, callback) => {
  await jsonServer.put(`/blogposts/${id}`, { title, content });
  dispatch({
    type: 'edit_blog_post',
    payload: { id, title, content }
  });
  if (callback) callback();
};

export const { Context, Provider } = createDataContext(
  //reducer
  blogReducer,
  
  //actions
  {
    addBlogPost,
    removeBlogPost,
    editBlogPost,
    getBlogPosts
  },
  
  //initialState
  []);
