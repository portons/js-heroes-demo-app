import { connect } from 'react-redux';
import { toggleFavorite } from 'core/actions/recipes';
import { Link } from 'react-router';
import Recipe from './recipe';

const Recipes = ({ recipes, toggleFavorite }) => (
  <div>
    <ul>
      {
        recipes.map(recipe => (
            <Recipe key={ recipe.title }
                    recipe={ recipe }
                    toggleFavorite={ toggleFavorite }/>
          )
        )
      }
    </ul>
    <Link to="/add">Add recipe</Link>
  </div>
);

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps, { toggleFavorite })(Recipes);
