import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import RandomQuoteMachine from "../components/quote"

const Index = (props) => (
  <Layout>
    

    <h1>HEAT CULTURE = BEING THE HARDEST WORKING, BEST CONDITIONED, MOST PROFESSIONAL, UNSELFISH, TOUGHEST, MEANEST, NASTIEST TEAM IN THE NBA.</h1>
      
      Methodology: Start with Defensive Rating. subtract the percentage over the ideal weight for player's height, or add percentage under target weight. add blocks. multiply opponent second chance points and subtract from score. add rebounds. multiply charges drawn by two and add. 

      Current Rankings:<br/>
      Last Updated:
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    HEAT WISDOM CORNER
    <RandomQuoteMachine></RandomQuoteMachine>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index