import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    isAddRecipeFormDisplayed: false,
    recipes: [],
    newRecipeName: '',
    newRecipeInstructions: ''
  }
  handleRecipeName = this.handleRecipeName.bind(this);
  handleRecipeInstructions = this.handleRecipeInstructions.bind(this);
  

  toggleAddRecipeForm = () => {
    this.setState({isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed})
  
  }

  handleRecipeName(event) {
    event.preventDefault();
    //console.log(event.target.value)
    this.setState({newRecipeName: event.target.value});

  }

  handleRecipeInstructions(event) {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({newRecipeInstructions: event.target.value});
  }

  submitRecipe = (event) => {
    alert("this is the recipe: \n" + this.state.newRecipeName + "\n" + "this is the recipe instructions: \n" + this.state.newRecipeInstructions)
 
  this.setState({recipes: [
      {
        name: this.state.newRecipeName,
        instructions: this.state.newRecipeInstructions
      }
    ]
  })
  console.log(this.state.recipes)
  alert("this is the recipe: \n" + this.state.recipes[0])
  event.preventDefault()
}

// submitRecipe = (event) => {
//   event.preventDefault()
//   this.state.recipes.push({
//         name: this.state.newRecipeName,
//         instructions :this.state.newRecipeInstructions
//   })
// }


  render(){
    const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={this.submitRecipe}>
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text" id="newRecipeName" value={this.state.newRecipeName} onChange={this.handleRecipeName}/>
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea id="newRecipeInstructions" placeholder="write recipe instructions here..." value={this.state.newRecipeInstructions} onChange={this.handleRecipeInstructions}/>
        <input type="submit" />
      </form>
    )

    // const addNewRecipeForm = (
    //   <form id="recipe-form" onSubmit={this.submitRecipe}>
    //   </form>
    // )

    return (
      <div className="App">
        <h1 className="App-header">My Recipes</h1>
        {
          this.state.isAddRecipeFormDisplayed
           ? addNewRecipeForm
          : <button id="add-recipe" onClick={this.toggleAddRecipeForm}> Add Recipe</button>
        }
        <p>this is recipes:</p>
      </div>
    )
  }
}


export default App;
