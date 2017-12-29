import React from 'react';
import TweetEmbed from 'react-tweet-embed';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';

const divStyle={
    marginTop: 20
}

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'What\'s happening?'};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    render() {
        return (
        <div style={{backgroundColor: '#B2EBF2',
                     marginTop: 20,
                     paddingBottom: 10,
                     paddingTop: 10,
                     }}> 
          <form>
            <label>
            <div style={{position: "relative",
                         height: 40,
                         width: 490
                         }}>
              <img src="https://image.flaticon.com/icons/svg/61/61205.svg"
                   style={{width: 30, 
                           height: 30,
                           paddingLeft: 10,
                           display: "inline",
                           position: "absolute",
                           top: 5,
                           float: 'left',
                        }}/>
              <input type="text" 
                     value={this.state.value} 
                     onChange={this.handleChange}
                     style={{paddingBottom: 20,
                            width: "87%",
                            borderWidth: 2,
                            borderColor: 'grey',
                            borderRadius: 10,
                            backgroundImage: 'url(http://simpleicon.com/wp-content/uploads/picture.svg)',
                            backgroundPosition: "95%",
                            backgroundSize: 18,
                            backgroundRepeat: "no-repeat",
                            display: 'inline',
                            float: 'right',
                            paddingRight: 5
                         }} />
            </div>
            </label>
          </form>
        </div>
        );
      }
    }

const Tweets = () => (
 <div>
  <TweetEmbed id='945324527520804866' />
  <TweetEmbed id='945184495455621120' />
  <TweetEmbed id='945530257498521601' />
  <TweetEmbed id='945186717350346752' />
  <TweetEmbed id='945267389679026176' />
  <TweetEmbed id='945199485080260610' />
  <TweetEmbed id='945127436588593154' />
  <TweetEmbed id='944792314253230080' />
  <TweetEmbed id='944761955629146112' />
     
 </div>
);

export default class Contents extends React.Component{
    render() {
        return (
            <div>
            <NameForm />
            <Tweets />
            </div>
        )
    }
}