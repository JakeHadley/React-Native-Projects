import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm 
      onSubmit={(title, content) => {
        //the anonymous function is called with `callback()` in the BlogPostForm component
        addBlogPost(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

export default CreateScreen;
