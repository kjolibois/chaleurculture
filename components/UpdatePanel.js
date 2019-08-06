import React, { Component } from 'react';

class UpdatePanel extends Component {
    constructor(props) {
        super(props);
        //console.log(props)
        // Don't call this.setState() here!
        this.state =  {
            header: props.author,
            content: "Content from state...",
            status:"",
            advancedstatsupdate:"",
         };
      }
 
  
    getRandomQuote = (props) => {
      console.log(props)
      this.setState({
          
        status: props.data,
      });
      
    }
     customHandleClick= async function(props) {  
        const res = await fetch('http://localhost:8000/heatculture/update')
    
        const data = await res.json()
        this.setState({
          status:data
        });
        console.log(`Show data fetcheddd. Count: ${data.length}`); 
        }
        triggerUpdate= async function(props) {  
          const res = await fetch('http://localhost:8000/heatculture/update', {
            method: 'post',
            headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':  'localhost:3000',
           'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',},
            body: {
             "first_name": this.state.firstName
            }
           });
  
          const data = await res.json()
          
          console.log(data); 
         
          }
    componentDidMount(props) {
        const _this = this;

        console.log(_this.props)
      this.getRandomQuote(_this.props);
    }
  
    render() {
     const state= this.state
      return (
        

        <div id="quote-box" style={{'border':'3px solid black;','backgroundColor':'black'}}>
            <button onClick={() => { this.triggerUpdate() }} >Update Stats from NBAAPI</button>
            <button onClick={() => { this.customHandleClick() }} >Refresh Update Page</button>

            <br/>
            Last Update:{state.status.insertionDate}<br/>

       Advanced:   <span>{state.status.AdvancedStatsStatus}</span> <br/>
          Hustle Stats:<span>{state.status.HustleStatsStatus}</span> <br/>
          Defense Stats:<span>{state.status.DefenseStatsStatus} </span><br/>
          Roster Stats:<span>{state.status.RosterStatsStatus} </span><br/>
          Regular Stats:<span>{state.status.RegStatsStatus} </span><br/>


        </div>
      );
    }
  }
  



  
  
  export default UpdatePanel;