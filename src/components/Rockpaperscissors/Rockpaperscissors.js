import rock from './rock.png'

const Rockpaperscissors = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={rock} className="card-img-top" alt="rockpaperscissors" id="rock" />
      <div class="card-body">
        <h5 class="card-title tuck">Rock Paper Scissors</h5>
        <p class="card-text tuck">Press the link to play now! You vs. the NPC in an epic showdown of a best of 5
        Rock
        Paper
        Scissors game.
            </p>
        <a href="https://tuckerpikula.github.io/rockpaperscissorsgame/" class="btn btn-dark tuck"
          target="_blank">Play
              Now!</a>
      </div>
    </div>
  )
}
export default Rockpaperscissors