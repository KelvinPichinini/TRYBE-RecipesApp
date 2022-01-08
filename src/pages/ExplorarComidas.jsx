import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import getRandomID from '../helpers/surpriseMe';

function ExplorarComidas() {
  const history = useHistory();
  return (
    <div>
      <Header name="Explorar Comidas" show="false" />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explorar/comidas/ingredientes') }
        >
          Por Ingredientes
        </button>
        <button
          type="button"
          data-testid="explore-by-area"
          onClick={ () => history.push('/explorar/comidas/area') }
        >
          Por Local de Origem
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => {
            const id = getRandomID('comidas');
            console.log(id);
            history.push(`/comidas/:${id}`);
          } }
        >
          Me Surpreenda!
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
