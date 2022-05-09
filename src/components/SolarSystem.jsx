import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section>
          {
            planets.map((planet) => (
              <PlanetCard
                planetName={ planet.name }
                planetImage={ planet.image }
                key={ planet.name }
              />
            ))
          }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
