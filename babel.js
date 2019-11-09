const app = document.querySelector('#app')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  render() {
    const {users} = this.state
    return(
      <div>
        <form>
          <input />
          <button>Sign In</button>
        </form>
        {/*(<ul>
          {
          users.length === 0
          ? null
          : users.map((user, id) => {
          return <li key={id}>{user.name}</li>
          })
        }
      </ul>*/}
      </div>
    )
  }
}

ReactDOM.render(<App />, app)
