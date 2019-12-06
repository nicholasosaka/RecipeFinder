import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';


const Post = props => (
    <Layout>
        <h1>{props.recipe.title}</h1>
        <p>{props.recipe.desc}</p>
        <br/>
        <p>Directions: {props.recipe.title}</p>
    </Layout>
);

function linearSearch(index, data) {
    for(let i =0; i < data.length; i++){
        if(parseInt(data[i].index) === index){
            return i;
        }
    }
    return -1;
}

Post.getInitialProps = async function(context) {
    const index = parseInt(context.query.id);

    const res = await fetch('https://raw.githubusercontent.com/ProjectRecipe/RecipeFinder/master/datasets/clean_recipes_smaller.json');
    const data = await res.json();

    let recipe = data[linearSearch(index,data)];

    console.log(`Fetched recipe: ${recipe.title}`);

    return { recipe };
};

export default Post;
