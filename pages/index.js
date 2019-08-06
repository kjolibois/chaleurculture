import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import RandomQuoteMachine from "../components/quote"
import { Z_ASCII } from 'zlib';

const Index = (props) => (
  
  <Layout>

    <h1 style={{  fontSize: '3vw',border:'1px solid black',width:'100%'}}>THE HARDEST WORKING, BEST CONDITIONED, MOST PROFESSIONAL, UNSELFISH, TOUGHEST, MEANEST, NASTIEST TEAM IN THE NBA.</h1>
    <div className="container">
      Methodology: Start with Defensive Rating. =10 if player is 5% or under close to player's height, or add percentage under target weight. subtract blocks. multiply opponent second chance points and add to score. subtract rebounds. multiply charges drawn by 10 and subtract. 

      Current Rankings:<br/>
      Last Updated:
     All statistics are per/game
 
   <table>
<thead>
<tr>
  <th>
    Player Name
  </th>

<th>
Heat Culture Score
</th>
<th>
Rebounds 
</th>
<th>
Defensive Rating
</th>
<th>
weight/target weight
</th>
<th>
Blocks
</th>
<th>
Second Chance Points
</th>
<th>
Charges Drawn
</th>

</tr>


</thead>

     <tbody>
      {props.players.map(player => (
        <tr key={player.id}>
          <td>
            <Link as={`/p/${player.playerID}`} href={`/post?id=${player.playerID}`}>
              <a>{player.playerName}</a>
            </Link>
          </td>
          <td>
            {player.rank}
          </td>
          <td>
            {player.rebounds}
          </td>
          <td>
            {player.defRating}
          </td>
          <td>
            {player.weight}
          </td>
          <td>
            {player.blocks}
          </td>
          <td>
            {player.secondChancePoints}
          </td>
          <td>
            {player.chargesDrawn}
          </td>
       
        </tr>
      ))}
    </tbody>
       
     
    </table>
    </div>
    HEAT WISDOM CORNER
    <RandomQuoteMachine></RandomQuoteMachine>
    <br/>
  </Layout>
)
var calcranking= function(data){
  var statsbyplayer={};
 var playerIDS=[];
var missingstatsid=[]
  console.log("#########")
  data.RosterStats.map(function (x) {
    console.log(x.PLAYER_ID)
    statsbyplayer[x.PLAYER_ID]={
      'RosterStats':{},
      'HustleStats':{},
      'AdvancedStats':{},
      'BasicStats':{},
      'DefenseStats':{}
    }
  playerIDS.push(x.PLAYER_ID)
  statsbyplayer[x.PLAYER_ID]['RosterStats']=x
  })
  // 
 
  data.HustleStats.map(function (e) {

    if (playerIDS.indexOf(e.PLAYER_ID) == -1){
      statsbyplayer[e.PLAYER_ID]={
        'RosterStats':{},
        'HustleStats':{},
        'AdvancedStats':{},
        'BasicStats':{},
        'DefenseStats':{}
      }
    }

    
      statsbyplayer[e.PLAYER_ID]['HustleStats']=e
    
})
data.AdvancedStats.map(function (e) {

  if (playerIDS.indexOf(e.PLAYER_ID) == -1){
    statsbyplayer[e.PLAYER_ID]={
      'RosterStats':{},
      'HustleStats':{},
      'AdvancedStats':{},
      'BasicStats':{},
      'DefenseStats':{}
    }
  }

  
    statsbyplayer[e.PLAYER_ID]['AdvancedStats']=e
  
})

data.DefenseStats.map(function (e) {

  if (playerIDS.indexOf(e.PLAYER_ID) == -1){
    statsbyplayer[e.PLAYER_ID]={
      'RosterStats':{},
      'HustleStats':{},
      'AdvancedStats':{},
      'BasicStats':{},
      'DefenseStats':{}
    }
  }

  
    statsbyplayer[e.PLAYER_ID]['DefenseStats']=e
  
})

data.BasicStats.map(function (e) {

  if (playerIDS.indexOf(e.PLAYER_ID) == -1){
    statsbyplayer[e.PLAYER_ID]={
      'RosterStats':{},
      'HustleStats':{},
      'AdvancedStats':{},
      'BasicStats':{},
      'DefenseStats':{}
    }
  }

  
    statsbyplayer[e.PLAYER_ID]['BasicStats']=e
  
})

playerIDS.map(function (e) {
  console.log(e)
  console.log(statsbyplayer[e]);
  console.log("###################################");
  const RosterStats=statsbyplayer[e]['RosterStats'];
  const HustleStats=statsbyplayer[e]['HustleStats'];
  const AdvancedStats=statsbyplayer[e]['AdvancedStats'];
  const BasicStats = statsbyplayer[e]['BasicStats'];
  const DefenseStats= statsbyplayer[e]['DefenseStats'];
  if (
    Object.keys(RosterStats).length === 0 || Object.keys(HustleStats).length === 0 || Object.keys(AdvancedStats).length === 0 ||Object.keys(BasicStats).length === 0 
    || Object.keys(DefenseStats).length === 0
  ){
    missingstatsid.push(e)
    delete statsbyplayer[e];

  }
  })
  missingstatsid.map(function (e) {
      playerIDS.splice(    playerIDS.indexOf(e) 
      ,1)
    
  })
//
console.log(missingstatsid)
console.log(playerIDS)
var rankings=playerIDS.map(function (e) {
  var defRatingInt= parseFloat(statsbyplayer[e]['AdvancedStats']['DEF_RATING']);
  var weightInt=parseFloat(statsbyplayer[e]['RosterStats']['PCTDIFFWEIGHT']);
  var blk= parseFloat(statsbyplayer[e]['DefenseStats']['BLK']);
  var secondchance = parseFloat(statsbyplayer[e]['DefenseStats']['OPP_PTS_2ND_CHANCE'])
  var rebounds = parseFloat(statsbyplayer[e]['BasicStats']['REB']);
  var charges=parseFloat(statsbyplayer[e]['HustleStats']['CHARGES_DRAWN']);
  console.log("Def Rating:"+defRatingInt);
  console.log("Weight:"+  weightInt);
  console.log("Blocks:"+blk);
  console.log("2nd Chance Points:"+secondchance);
  console.log("Charges Drawn"+charges);
  console.log("Rebounds"+rebounds);

var rank=defRatingInt;
if (weightInt <0.05){
  rank-=10
}
else(
  rank+=10
)
rank-=blk
rank += (secondchance*2)
rank -= rebounds
rank -= (charges*10)

  

  return{'playerID':e,
  'defRating':defRatingInt,
  'rank':rank.toFixed(2),
  'rebounds':rebounds,
  'defRating':defRatingInt,
  'weight':  weightInt,
  'blocks':blk,
  'secondChancePoints':secondchance,
  'chargesDrawn':charges,
  'rebounds':rebounds,'playerName':statsbyplayer[e]['RosterStats']['PLAYER']}
  })
 rankings.sort((a, b) => parseFloat(a.rank) - parseFloat(b.rank));

  return rankings
  }
Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:8000/heatculture/ranking?format=json')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data}`)

  return {
    players:await calcranking(data)
  }
  }

export default Index