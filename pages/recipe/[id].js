import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';


const Post = props => (
    <Layout>
        <h1>{props.recipe.title}</h1>
        <p>Rating: {props.recipe.rating}</p>
        <p>{props.recipe.desc}</p>
        <br/>
        <h3>Directions:</h3>
        <ul>
            {props.recipe.directions.map(item =>
            <li>
                {item}
            </li>)}
        </ul>
        <br/>
        <div id="nutitional">
            <h3>Nutritional Information</h3>
            <p>{props.recipe.calories} Calories</p>
            <p>{props.recipe.protein}g Protein</p>
            <p>{props.recipe.fat}g Fat</p>
            <p>{props.recipe.sodium}g Sodium</p>
        </div>
        <div id="ingredients">
            <h3>Ingredients</h3>
            <ul>
                {props.recipe.ingredients.map(item =>
                <li>
                    {item}
                </li>)}
            </ul>
        </div>
        <br/><br/><br/><br/>
        <div id="categories">
            {props.recipe.categories.map(item => item + ", ")}
        </div>
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
