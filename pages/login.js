import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/MyLayout.js'
import { login } from '../utils/auth'

class Login extends Component {
  static getInitialProps ({ req }) {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'

    const apiUrl = 'http://localhost:8000/api/token/'

    return  {apiUrl}
  }

  constructor (props) {
    super(props)

    this.state = { username: '',textwrd:'', error: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    console.log([event.target.name])
    this.setState({ [event.target.name]: event.target.value,})
  }

  async handleSubmit (event) {
    event.preventDefault()
    const username = this.state.username
    const url = this.props.apiUrl
    const password = this.state.password

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':  'http://localhost:3000',
        'Access-Control-Allow-Methods': 'POST',
         'Access-Control-Allow-Headers': 'Content-Type'},
        body: JSON.stringify({ username ,password})
      })
      if (response.ok) {
        const  token  = await response.json().then(body => {
          if (response.status === 200) {
              return body
          } else {
              throw body
          }})
        console.log(token)
        //login( token )
      } else {
        console.log('Login failed.')
        // https://github.com/developit/unfetch#caveats
        let error = new Error(response.statusText)
        error.response = response
        return Promise.reject(error)
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )
      throw new Error(error)
    }
  }

  render () {
    return (
      <Layout>
        <div className='login'>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='username'>GitHub username</label>

            <input
              type='text'
              id='username'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              type='password'
              id='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />

            <button type='submit'>Login</button>

            <p className={`error ${this.state.error && 'show'}`}>
              {this.state.error && `Error: ${this.state.error}`}
            </p>
          </form>
        </div>
        <style jsx>{`
          .login {
            max-width: 340px;
            margin: 0 auto;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          form {
            display: flex;
            flex-flow: column;
          }
          label {
            font-weight: 600;
          }
          input {
            padding: 8px;
            margin: 0.3rem 0 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .error {
            margin: 0.5rem 0 0;
            display: none;
            color: brown;
          }
          .error.show {
            display: block;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Login