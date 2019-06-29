//core
import React, { Component } from 'react'

//service
import { likes } from '../../../services/DBService'

// Styles
import { Card, ImageBox, Image, LikeBox, LikeButton, LikeImage, LikeAmount } from './styles';

export default class GifCard extends Component {
    state = {
        like: 0, 
    }

    componentDidMount() {
        const { path } = this.props;
        likes.findOne({path: path}, (err, data) => {
            if (data) this.setState({like: data.like}) 
        });
    }

    onClick = () => {
        const { path } = this.props;
        likes.findOne({path: path}, (err, data) => {
            if (data) {
                likes.update({path: path}, {path: path, like: data.like + 1})
                this.setState({like: data.like + 1})
            } else {
                likes.insert({path: path, like: 1})
                this.setState({like: 1})
            } 
        });
    }

    render() {
        const { path } = this.props;
        const { like } = this.state;
        return (
            <Card>
                <ImageBox>
                    <Image src={path} alt='GIF'/>
                    <LikeBox>
                        <LikeButton onClick={this.onClick}><LikeImage src='http://pngimg.com/uploads/like/like_PNG55.png'/></LikeButton>
                        <LikeAmount>{like}</LikeAmount>
                    </LikeBox>
                </ImageBox>
            </Card>
        )
    }
}
