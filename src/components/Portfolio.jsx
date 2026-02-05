import React from 'react'
// import "../assets/CSS/vk.css"
const Portfolio = () => {
    let player = {
        name: "Virat Kohli",
        nickname: "Chiku",
        description: "One of the most successful batsmen in international cricket",
        age: 35,
        team: "India",
        role: "Right hand Batsman",
        avg: 58.16,
        strikeRate: 93.17,
        hobby: "Collecting Tropies",
        achievements: [
            "ICC Cricket World Cup Winner (2011)",
            "ICC Champions Trophy Winner (2013)",
            "ICC T20 World Cup Winner (2025)",
            "ICC Champion's Trophy Winner (2025)",]
    }
    return (
        <div className="portfolio">
            <img className="profile-img" src="/vk.png" alt="Virat Kohli" />
            <div className='content' >
                <h1>{player.name}</h1>
                <p>{player.description}</p>
                <p>Age: {player.age}</p>
                <p>Team: {player.team}</p>
                <p>Role: {player.role}</p>
                <p>Average: {player.avg}</p>
                <p>Strike Rate: {player.strikeRate}</p>
                <p>Hobby: {player.hobby}</p>
                <h2>Achievements:</h2>
                <ul>
                    {player.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Portfolio
