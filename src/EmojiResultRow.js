import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './EmojiResultRow.css';

class EmojiResultRow extends PureComponent{
    render(){
        const codePointHex = this.props.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return(
            <div className="component-emoji-row copy-to-clipboard" data-clipboard-text={this.props.symbol}>
                <img src={src} alt={this.props.title}/>
                <span className="title">{this.props.title}</span>
                <span className="info">Click to copy Emoji</span>
            </div>
        );
    }
}
EmojiResultRow.PropTypes={
    title: PropTypes.string,
    symbol: PropTypes.string,
};
export default EmojiResultRow;