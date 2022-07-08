import './index.css'

const TeamCard = props => {
  const {blogData} = props
  const {name, teamImageUrl} = blogData
  return (
    <div className="teamcard">
      <img src={teamImageUrl} alt={name} className="logo_card" />
      <p className="heading_card">{name}</p>
    </div>
  )
}
export default TeamCard
