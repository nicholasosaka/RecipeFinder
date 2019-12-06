import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/Link'
import Form from '../components/Form';

const Index = (props) => (
    <Layout>
        <h1>Recipe Finder</h1>
        <p>Enter the ingredients that you want to use (comma separated):</p>
        <Form />

        <p>FOR DEBUG ONLY</p>
        <ul>
            {props.recipes.map(recipe =>(
                <li key={recipe.title}>
                    <Link href="/recipe/[id]" as={`/recipe/${recipe.title}`}>
                        <a>{recipe.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://raw.githubusercontent.com/ProjectRecipe/RecipeFinder/master/datasets/clean_recipes.json');
    const data = await res.json();

    console.log(res);
    console.log(`Recipe data fetched. Count: ${data.length}`);

    return {
        recipes: data
    };
};


export default Index;
