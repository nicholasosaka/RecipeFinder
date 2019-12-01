import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);
const hStyle = { color: 'white' };
//const element = <h1 style={ hStyle }>Hello world</h1>
export default function Blog() {
    return (
        <Layout>
            <h1 style={ hStyle }>My Blog</h1>
            <ul>
                <PostLink title="Hello Next.js" />
                <PostLink title="Learn Next.js is awesome" />
                <PostLink title="Deploy apps with Zeit" />
            </ul>
        </Layout>
    );
}