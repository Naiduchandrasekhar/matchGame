import './index.css'

const Navbar = props => {
  const {timeInSeconds, score} = props
  return (
    <div>
      <div className="navbarContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="matchGameLogo"
        />
        <ul className="scoreTimeContainer">
          <li>
            <p className="scoreTag">
              Score: <span className="scoreNum">{score}</span>
            </p>
          </li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timerLogo"
          />
          <li>
            <p className="seconds">{timeInSeconds} sec</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
