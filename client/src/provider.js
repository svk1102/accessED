import { createContext, useState } from 'react';

const PostContext = createContext();

function Provider(props) {
  const [post, setPost] = useState(null);

  const createPost = async (data) => {
    const response = await fetch('http://127.0.0.1:8000/api/isl/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    setPost(json);
  };

  return (
    <PostContext.Provider value={{ post, createPost }}>
      {props.children}
    </PostContext.Provider>
  );
}

export { PostContext, Provider };