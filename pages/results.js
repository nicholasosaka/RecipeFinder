import Layout from '../components/MyLayout';
import Link from 'next/link';

const Results = props => (
    <Layout>
        <h1>Recipes</h1>
        <ul>
            {props.recipes.map(recipes => (
                <li key={recipes.id}>
                    <Link href="/recipe/[id]" as={`/recipe/${recipes.id}`}>
                        <a>{recipes.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

export default Results;
