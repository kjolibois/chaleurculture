import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import UpdatePanel from '../components/UpdatePanel'


const Zillna = (props) => (
  <Layout>
    <button></button>
 
    
<div> {props.shows.HustleStatsStatus}</div>
  </Layout>
)

Zillna.getInitialProps = async function() {
  const res = await fetch('http://localhost:8000/heatculture/update')
  const data = await res.json()
  console.log(data)
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Zillna