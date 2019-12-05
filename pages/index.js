import Layout from '../components/MyLayout';
import Link from 'next/link';
import React from 'react';

const PostLink = props => (
    <li>
        <Link href={`/recipe?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);
export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title="Hello Next.js" />
                <PostLink title="Learn Next.js is awesome" />
                <PostLink title="Deploy apps with Zeit" />
            </ul>
        </Layout>
    );
}
