import React, { Component } from 'react';

var PATWISDOM=[   "There are only two options regarding commitment; you’re either in or you’re out.",
"Don't let other people tell you what you want." ,
"Excellence happens when you try each day to both do and be, a little better than you were yesterday!", 
"Anytime you stop striving to get better, you're bound to get worse.",
"The most DIFFICULT thing for individuals to do when they become part of a team is to sacrifice, it is much EASIER to be selfish.",
"Hard work doesn't guarantee anything, but without it you don't have a chance.",
"There's no such thing as coulda, shoulda, or woulda. If you shoulda and coulda, you woulda done it.", 
"No rebounds, no rings.",
"You're either in or out. There's no in between.", 
"After his last two stops he might not be in Miami Heat condition. I told him, 'You just ate your last meal with pancakes and syrup and strawberries. You're back on veggies.",
"Giving yourself permission to lose guarantees a loss."]


class RandomQuoteMachine extends Component {

    state = {quote: ''}
  
    getRandomQuote = () => {
      const randQuote = PATWISDOM[Math.floor(Math.random() * PATWISDOM.length)];
      this.setState({
        quote: randQuote
      });
      return randQuote;
    }
    
    changeQuote = () => {
      this.setState({
        quote: this.getRandomQuote()
      })    
    }
  
    componentDidMount() {
      this.getRandomQuote();
    }
  
    render() {
      const {quote} = this.state;
      return (
        <div id="quote-box" style={{'border':'3px solid black;','backgroundColor':'black'}}>
          <QuoteBox author="Pat Riley" quote={quote} changeQuote={this.changeQuote} />
          
        </div>
      );
    }
  }
  
  function QuoteBox({quote, changeQuote,author}) {
      return (
        <div className="quotes" style={{'color':'#41B6E6'}}>
          <p id="text">{quote}</p>
          <AuthorBox author={author}/>
          <Tweet quote={quote} author={author}/>
          <button  style={{'color':'#DB3EB1','backgroundColor':'black'}} id="new-quote" onClick={changeQuote}>New Quote</button>
        </div>
      )
  }
  
  function Tweet({quote,author}) {
    return (
      <a className="tweet" href={`https://twitter.com/intent/tweet?text= ${encodeURIComponent(quote+'-'+author)}` }>
        <button style={{'color':'#DB3EB1','backgroundColor':'black'}} id="tweet-quote" >Tweet</button>
      </a>
    )
  }
  
  function AuthorBox({author}) {
    return (
      <div  id="author">
        <p>{author}</p>
      </div>
    )
  }
  
  
  export default RandomQuoteMachine;
  