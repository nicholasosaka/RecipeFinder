import Layout from '../components/MyLayout';
import { useRouter } from 'next/router';

const Results = props => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <Layout>
            <h1>Recipes</h1>
            <p>{slug}</p>
        </Layout>
    );
};

export default Results;
