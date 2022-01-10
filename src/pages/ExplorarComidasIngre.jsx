import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  fecthIngredientIMG,
  fecthIngredientName, fetchRecipesByIngredient } from '../helpers/exploreByIngredient';

function ExplorarComidasIngre() {
  const { setRecipeList } = useContext(RecipesContext);
  // const history = useHistory();
  // const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([{
    name: 'Sem dados',
    img: '',
  }]);

  useEffect(() => {
    const allFetchs = async () => {
      const ingredientsName = await fecthIngredientName('comida');
      const ingredientsIMG = await fecthIngredientIMG(ingredientsName);
      const arr = ingredientsName.map((ingredient, index) => ({
        name: ingredient,
        img: ingredientsIMG[index],
      }));
      setIngredients(arr);
      // setIsLoading(false);
    };
    allFetchs();
  }, []);

  // if (isLoading) return <p>Loading</p>;

  return (
    <>
      <Header name="Explorar Ingredientes" show="false" />
      <div className="row">
        {ingredients.map(({ name, img, index }) => (
          <Link
            to="/comidas"
            onClick={ () => setRecipeList(fetchRecipesByIngredient(name, 'comida')) }
            key={ name + index }
          >
            <div
              className="card col-6"
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                src={ img }
                className="card-img-top"
                alt={ name }
                data-testid={ `${index}-card-img` }
              />
              <div className="card-body">
                <h5
                  className="card-title text-center"
                  data-testid={ `${index}-card-name` }
                >
                  { name }
                </h5>
                {/* <button
                  type="button"
                  className="btn btn-primary"
                  onClick={ () => history.push() }
                >
                  Ver Receitas
                </button> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default ExplorarComidasIngre;
