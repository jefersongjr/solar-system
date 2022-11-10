import React from 'react';
import Propstypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } className={`image${planetName}`} alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: Propstypes.string.isRequired,
  planetImage: Propstypes.string.isRequired,
};

export default PlanetCard;
