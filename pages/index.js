import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Form from "../components/Form";

const Index = (props) => (
    <Layout>
        <h1>Recipe Finder</h1>
        <p>Enter the ingredients that you want to use (comma separated):</p>

        <Form/>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://raw.githubusercontent.com/ProjectRecipe/RecipeFinder/master/datasets/recipes.json');
    const data = await res.json();

    console.log(`Recipe data fetched. Count: ${data.length}`);

    return {
        recipes: data
    };
};


export default Index;
