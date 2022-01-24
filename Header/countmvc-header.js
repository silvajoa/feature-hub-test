import React from 'react';

export default class Header extends React.Component {
    state = {count: this.props.countManager.getCount()}

    componentDidMount() {
        this.props.countManager.subscribe(() => {
            console.log('setState');
            this.setState({count: this.props.countManager.getCount()});
        })
    }

    render() {
        return (
            <>
                <h1>HEADER</h1>
                <p>Count: {this.state.count}</p>
            </>
        );
    }
}
