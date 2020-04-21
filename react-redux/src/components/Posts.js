import React from 'react';
import Post from './Post';

export default ({ posts }) => {
  if(!posts.length) {return <p>Posts Empty</p>}
    return posts.map((post) => <Post post={post} key={post} />);
};
