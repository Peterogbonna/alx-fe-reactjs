import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
    const { postId } = useParams();
    reture (
        <div>
            <h2>Blog Post #{postId</h2>
            <p>This page shows dynamic content for post ID: {postId}</p>
        </div>
    );
}

export default BlogPost;