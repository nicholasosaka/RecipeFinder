import React from 'react';
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {formSubmission: ''};

    }

    static async getInitialProps(){
        const res = await fetch('https://raw.githubusercontent.com/ProjectRecipe/RecipeFinder/master/datasets/clean_recipes_smaller.json');
        const data = await res.json();

        console.log(`Recipe data fetched. Count: ${data.length}`);

        return {
            recipes: data
        };
    }

    render() {
        return(
            <Layout>
                <h1>Recipe Finder</h1>
                <p>Enter the ingredients that you want to use (comma separated):</p>


                <input type="text"/>


                <p>FOR DEBUG ONLY</p>
                <ul>
                    {this.props.recipes.map(recipe =>(
                        <li key={recipe.index}>
                            <Link href="/recipe/[id]" as={`/recipe/${recipe.index}`}>
                                <a>{recipe.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Layout>
        )
    }
}

export default Index;
