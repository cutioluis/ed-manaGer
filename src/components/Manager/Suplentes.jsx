import React from "react";
import { connect } from "react-redux";

const Suplentes = ({ suplentes, quitarSuplente }) => {
  return (
    <section>
      <h2>Suplentes</h2>
      <div className="cancha">
        {suplentes.map((t) => (
          <article className="titular">
            <div>
              <img src={t.img} alt={t.nombre} />
              <button  onClick={() => quitarSuplente(t)}>X</button>
            </div>
            <p>{t.nombre}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  suplentes: state.suplentes,
});

const mapDispatchToProps = (dispatch) => ({
  quitarSuplente(play) {
    dispatch({
      type: "QUITAR_SUPLENTE",
      play,
    });
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
