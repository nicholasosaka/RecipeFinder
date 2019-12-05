import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/MyLayout';
import data from '../datasets/epirecipes/full_format_recipes';
import fetch from 'isomorphic-unfetch';

const Index = () => (
    <Layout>
        <h1>Recipe Finder</h1>
        <p>Enter the ingredients that you want to use (comma seperated):</p>
        <form>
            <input type="text" name="Ingredients"/>
            <input type="submit" value="Search"/>
        </form>
    </Layout>
);

Index.getInitialProps = async function(){
    const res = await fetch('https://raw.githubusercontent.com/ProjectRecipe/RecipeFinder/master/datasets/clean_recipes.json');
    const data = await res.json();

    console.log('found data: ' + data.length)
    return {
        recipes: data
    }
}

export default Index;
