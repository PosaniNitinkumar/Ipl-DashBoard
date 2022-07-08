import {Component} from 'react'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    blogsdata: [],
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()
    const {teams} = data
    const formattedData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({blogsdata: formattedData})
  }

  render() {
    const {blogsdata} = this.state
    console.log(blogsdata)
    return (
      <div className="home_background">
        <div className="heading_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt=" ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="teamcard_container">
          {blogsdata.map(item => (
            <TeamCard blogData={item} key={item.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default Home
