//core
import React, { Component } from 'react'

//component
import GifCard from './GifCard'; 

//services
import { getGifsbyKeyWord } from '../../services/GiphyService';
import { history } from '../../services/DBService';

// Styles
import { InputArea, InputField, InputButton, ContentArea } from './styles';

export default class HomePage extends Component {
    state = {
        inputText: '',
        result: [],
    }

    onClick = () => {
        const { inputText } = this.state;
        this.saveKeyWord(inputText);
        getGifsbyKeyWord(inputText).then(res => this.setState({result: res.data.map(el => el.images.original.url)}));
    }

    onEnterPress = e => {
        const { inputText } = this.state;
        if (e.key === 'Enter') {
            this.saveKeyWord(inputText);
            getGifsbyKeyWord(inputText).then(res => this.setState({result: res.data.map(el => el.images.original.url)}));    
        }
    }

    saveKeyWord = keyWord => {
        history.findOne({keyWord}, (err, data) => {
            if (!data) {
                history.insert({keyWord});
            } 
        });
    } 

    render() {
        const { result } = this.state
        return (
            <React.Fragment>
                <InputArea>
                    <InputField onKeyDown={this.onEnterPress} onChange={e => this.setState({inputText: e.target.value})}/>
                    <InputButton onClick={this.onClick}>Find</InputButton>
                </InputArea>
                <ContentArea>
                    {result.map(item => <GifCard key={item} path={item}/>)}
                </ContentArea>
            </React.Fragment>
        )
    }
}
