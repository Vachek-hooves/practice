import {Link} from 'react-router-dom';

const posts = [
    {
        id:1,
        title:'Post 1',
        description: 'First post description'
    },
    {
        id:2,
        title:'Post 2',
        description: 'First post description'
    },
    {
        id:3,
        title:'Post 3',
        description: 'First post description'
    },
    
]

function Blog(){
    return (
        <section>
            <h2>Blog</h2>
            {posts.map((post)=> <article key={post.id}>
                <h3>
                    {post.title}
                </h3>
                <p>
                    {post.description}
                </p>
                <Link to={`/blog/${post.id}`}>
                    More
                </Link>
            </article>)}
        </section>
    )

}

export default Blog;