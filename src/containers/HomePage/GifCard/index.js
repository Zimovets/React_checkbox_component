//core
import React, { Component } from 'react'

// Styles
import { Card, ImageBox, Image, LikeBox, LikeButton, LikeImage, LikeAmount } from './styles';

export default class GifCard extends Component {
    render() {
        const { path } = this.props
        return (
            <Card>
                <ImageBox>
                    <Image src={path} alt='GIF'/>
                    <LikeBox>
                        <LikeButton><LikeImage src='http://pngimg.com/uploads/like/like_PNG55.png'/></LikeButton>
                        <LikeAmount>0</LikeAmount>
                    </LikeBox>
                </ImageBox>
            </Card>
        )
    }
}
