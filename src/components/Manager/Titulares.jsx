import React from "react";
import { connect } from "react-redux";

const Titulares = ({ titulares, quitarTitular }) => {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="cancha">
        {titulares.map((plays) => (
          <article className="titular">
            <div>
              <img src={plays.img} alt={plays.nombre} />
              <button onClick={() => quitarTitular(plays)}>X</button>
            </div>
            <p>{plays.nombre}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispatchToProps = (dispatch) => ({
  quitarTitular(play) {
    dispatch({
      type: "QUITAR_TITULAR",
      play,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
