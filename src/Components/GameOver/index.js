import './index.css'

const GameOver = props => {
  const {yourScore, onPlayAgain} = props

  const playAgain = () => {
    onPlayAgain()
  }

  return (
    <div className="bgImage">
      <div className="trophyContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophyImage"
        />
        <p className="yourScoreText">YOUR SCORE</p>
        <h1 className="yourScoreNumber">{yourScore}</h1>
        <button type="button" className="playAgainBtn" onClick={playAgain}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default GameOver
