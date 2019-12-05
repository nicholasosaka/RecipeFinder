import { useRouter } from 'next/router';

export default function Post() {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.id}</h1>
            <p>This is the recipe content.</p>
        </Layout>
    );
}