import React from "react";
import "./styles/Players.scss";
import { connect } from "react-redux";

const Players = ({ players, addPlayers, addSuplentes }) => {
  return (
    <div>
      <h2 className="title-ed">Players</h2>
      <div className="container-players">
        {players.map((plays) => (
          <article>
            <img src={plays.img} alt="" />
            <div>
              <h3>{plays.nombre}</h3>
              <div>
                <button onClick={() => addPlayers(plays)}>Titulare</button>
                <button
                  className="btn btn-login"
                  onClick={() => addSuplentes(plays)}
                >
                  Suplent
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch) => ({
  addPlayers(play) {
    dispatch({
      type: "ADD_PLAYER",
      play,
    });
  },

  addSuplentes(play) {
    dispatch({
      type: "ADD_SUPLENT",
      play,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
