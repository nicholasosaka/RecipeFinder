import Link from 'next/Link';
import Router from 'next/router';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keywords: '',
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.keywords);
        this.state.keywords = this.state.keywords.split(",").map(word => word.trim);
    };

    onSubmit = (e) => {
        e.preventDefault();
        let { keywords } = this.state;

        keywords = keywords
            .trim()
            .split(",")
            .map(word => word.trim());

        Router.push({
            pathname: '/results',
            query: { q: keywords },
        })

    };

    render() {

        const { keywords } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="keywords"
                    value={keywords}
                    onChange={this.onChange}
                />
                <button onClick={this.onSubmit}>Submit</button>
            </form>
        );
    }
}

// import React from 'react';
// import Link from 'next/link';
//
// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {formSubmission: ''};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({formSubmission: event.target.formSubmission});
//         console.log(this.state.formSubmission)
//     }
//
//     handleSubmit(event) {
//         this.state.formSubmission = this.state.formSubmission
//             .split(",")
//             .map(word => word.trim());
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Ingredients:
//                     <input type="text" value={this.state.formSubmission} onChange={this.handleChange} />
//                 </label>
//                 <Link href='/results/[results]' as={`/results/${this.state.formSubmission}`}>
//                     <a>Submit</a>
//                 </Link>
//             </form>
//         );
//     }
// }
//
export default Form;
