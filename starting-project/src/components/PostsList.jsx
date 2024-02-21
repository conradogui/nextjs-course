import Post from "./Post.jsx";
import NewPost from './NewPost'
import classes from './PostsList.module.css'

function PostsList() {
    return (
        <>
        <NewPost/>
            <ul className={classes.posts}>
                <li><Post author="Guilherme" body='learning react'/></li>
                <li><Post author="Mariana" body='learning vue'/></li>
            </ul>
        </>
    )
}

export default PostsList;