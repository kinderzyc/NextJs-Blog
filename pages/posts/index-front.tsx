// import { NextPage } from "next";
// import { getPosts } from "lib/posts";

// type Props = {
//     posts: Post[];
// }

// const PostsIndex: NextPage<Props> = (props) => {
//     const { posts } = props;
//     return (
//         <div>
//             <h1>文章列表</h1>
//             {posts.map(p => <div key={p.id}>
//                 {p.id}
//             </div>)}
//         </div>
//     )
// }

// export default PostsIndex;

// export const getStaticProps = async () => {
//     const posts = await getPosts();
//     return {
//         props: {
//             posts: posts
//         }
//     }
// }

import { NextPage } from "next";
import { uesPosts } from "hooks/usePosts";


const PostsIndex: NextPage = () => {
    const { isLoading, isEmpty, posts } = uesPosts();
    return (
        <div>
            <h1>文章列表</h1>
            {isLoading ? <div>加载中</div> :
                isEmpty ? <div>没有文章</div> :
                    posts.map(p => <div key={p.id}>
                        {p.id}
                    </div>)}
        </div>
    )
}

export default PostsIndex;