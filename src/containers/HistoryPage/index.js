//core
import React, { Component } from 'react'

//services
import { history } from '../../services/DBService';

// Styles
import { ContentArea, KeyWord } from './styles';

export default class HistoryPage extends Component {
    state = {
        results: [],
    }

    componentDidMount() {
        history.find({}, (err, data) => this.setState({results: data}));
    }
    
    render() {
        const { results } = this.state;
        return (
            <ContentArea>
                {results.map(el => <KeyWord key={el._id}>{el.keyWord}</KeyWord>)}
            </ContentArea>
        )
    }
}
