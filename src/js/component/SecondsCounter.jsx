import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
  return (
    <div className="Contador">
      <div className="reloj">
        <i className="far fa-clock"></i>
      </div>
      <div className="sexto">{Math.floor(props.segundos / 100000) % 10}</div>
      <div className="quinto">{Math.floor(props.segundos / 10000) % 10}</div>
      <div className="cuarto">{Math.floor(props.segundos / 1000) % 10}</div>
      <div className="tercero">{Math.floor(props.segundos / 100) % 10}</div>
      <div className="segundo">{Math.floor(props.segundos / 10) % 10}</div>
      <div className="primero">{Math.floor(props.segundos / 1) % 10}</div>
    </div>
  );
};

SecondsCounter.propTypes = {
  segundos: PropTypes.number,
};

export default SecondsCounter;
