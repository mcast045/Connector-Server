import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../reducers/actions/post';
import PostItem from '../Posts/postItem';
import { Link } from 'react-router-dom';
import CommentForm from './commentForm';
import CommentItem from './commentItem';


const Post = ({ getPost, post: { post, loading }, match }) => {

    useEffect(() => {
        getPost(match.params.id);
    }, [getPost])

    return (
        <Fragment>
            {loading || post === null ? <Spinner /> :
                <Fragment>
                    <Link to='/posts' className='btn'>Back To Posts</Link>
                    <PostItem post={post} showActions={false} />
                    <CommentForm postId={post._id} />
                    <div className='comments'>
                        {post.comments.map(comment => (
                            <CommentItem key={comment._id} comment={comment} postId={post._id} />
                        ))}
                    </div>
                </Fragment>}
        </Fragment>
    )
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost })(Post)
