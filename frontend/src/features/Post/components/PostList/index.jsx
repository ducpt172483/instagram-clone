import React from 'react';
import PostItem from '../PostItem';

PostList.propTypes = {
    
};

function PostList(props) {
    const {postList} = props;

    return (
        <div>
            {postList.map((post, idx) => (
                <PostItem post={post} key={idx} />
            ))}
            
        </div>
    );
}

export default PostList;