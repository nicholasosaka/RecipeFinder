import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
    <Layout>
        <h1>{props.recipe.name}</h1>
        <p>{props.recipe.summary.replace(/<[/]?[pb]>/g, '')}</p>
    </Layout>
);

export default Post;
