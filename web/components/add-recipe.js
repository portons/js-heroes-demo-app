import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { addRecipe } from 'core/actions/recipes';

class AddRecipe extends React.Component {
  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <div>
          <div>Title</div>
          <input ref="title" type="text"/>
        </div>

        <div>
          <div>Description</div>
          <textarea ref="description" type="text"/>
        </div>

        <button>Add</button>
        <Link to="/">Back</Link>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.addRecipe(
      this.refs.title.value,
      this.refs.description
    );

    browserHistory.push('/');
  }
}

AddRecipe.propTypes = {
  addRecipe: React.PropTypes.func.isRequired
};

export default connect(null, { addRecipe })(AddRecipe);