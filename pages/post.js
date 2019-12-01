import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';
const hstyle = { color: 'white' };
const Page = () => {
    const router = useRouter();

    return (
        <Layout>
            <h1 style={ hStyle }>{router.query.title}</h1>
            <p>This is the blog post content.</p>
        </Layout>
    );
};

export default Page;