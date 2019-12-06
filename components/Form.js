class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {formSubmission: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({formSubmission: event.target.formSubmission});
    }

    handleSubmit(event) {
        const keywords = this.state.formSubmission.split(",");
        keywords.map(word => word.trim());
        this.state.formSubmission = keywords;

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Ingredients:
                    <input type="text" value={this.state.formSubmission} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
