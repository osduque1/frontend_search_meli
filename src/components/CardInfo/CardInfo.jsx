import React from "react";
import PropTypes from "prop-types";
import { FcHighPriority, FcIdea } from "react-icons/fc";
import "./CardInfo.scss";

const CardInfo = ({ error }) => {
  return (
    <div className="CardInfo">
      <div className="CardInfo__Container">
        {error ? (
          <>
            <FcHighPriority className="CardInfo__Container--icon" size={100} />
            <h2>¡Se presentó un problema técnico!</h2>
          </>
        ) : (
          <>
            <FcIdea size={100} />
            <h2>¡No se encontraron coincidencias en su búsqueda!</h2>
          </>
        )}
        <p>Por favor intenta nuevamente</p>
      </div>
    </div>
  );
};

CardInfo.defaultProps = {
  error: false,
};

CardInfo.propTypes = {
  error: PropTypes.bool,
};

export default CardInfo;
