import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
      this.state = {
        isAddRecipeFormDisplayed: false,
        recipes: [],
        newRecipeName: '',
        newRecipeInstructions: '',
        instructions: '',
        holder: ''
      }
  this.handleRecipeName = this.handleRecipeName.bind(this);
  this.handleRecipeInstructions = this.handleRecipeInstructions.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.editInstructions = this.editInstructions.bind(this)
}
  
  toggleAddRecipeForm = () => {
    this.setState({isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed})
  }
  handleClick(input){
    //event.preventDefault();
    this.setState({instructions : input});
    //console.log("this should display the recipe: \n" + this.state.instructions)
  }

  editInstructions(input){
    //console.log("It works")
    // console.log(input)
    this.setState({holder : input.instructions});
    console.log(input);
  }

  saveInstructions(input) {
    input.instructions = this.state.holder;
    alert('Input instructions: ',input.instructions);
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

  handleEditInstructions(event) {
    event.preventDefault();
    //console.log(event.target.value)
    this.setState({holder: event.target.value});
  }

  submitRecipe = (event) => {
    event.preventDefault()
    //alert("this is the recipe: \n" + this.state.newRecipeName + "\n" + "this is the recipe instructions: \n" + this.state.newRecipeInstructions)
  this.state.recipes.push(
      {
        name: this.state.newRecipeName,
        instructions: this.state.newRecipeInstructions
      }
  )
 console.log(this.state.recipes)
  //alert("this is the recipes name: \n" + this.state.recipes[0].name + "\nthis is the recipes instuctions: \n" + this.state.recipes[0].instructions)
  this.setState({newRecipeInstructions: ''});
  this.setState({newRecipeName: ''});
}

  render(){
    //let recipes = this.state.recipes;
    const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={this.submitRecipe}>
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text" 
          id="newRecipeName" 
          value={this.state.newRecipeName}
          placeholder="write recipe name here" 
          onChange={this.handleRecipeName}/>
          <br/>
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea id="newRecipeInstructions" 
          placeholder="write recipe instructions here..." 
          value={this.state.newRecipeInstructions}
          onChange={this.handleRecipeInstructions}/>
        <input type="submit" />
      </form>
    )

    return (
      <div className="App">
        <h1 className="App-header">My Recipes</h1>
        {
          this.state.isAddRecipeFormDisplayed
           ? addNewRecipeForm
          : <button id="add-recipe" onClick={this.toggleAddRecipeForm}> Add Recipe</button>
        }
        {
      this.state.recipes.length > 0 ?
      <ul>
        {this.state.recipes.map((item, index)  => { 
          return( 
          <li id="" key={index} onClick={() => this.handleClick(item.instructions)}>
            {item.name} 
            <button onClick={() => this.editInstructions(item)}>Edit</button>
          </li>
          )
        }
        )}
      </ul> :
      <p>There are no recipes to list.</p>
      }
      <div className="Instructions-Header">Recipe Instructions:</div>
      <div>
        {
        this.state.instructions.length > 0 ?
        <p>
          {this.state.instructions} 
           </p> :
           <p>Select a recipe above to continue</p>
        }
        </div>

      </div>
    )
  }
}

export default App;


{/* <div>
<input type='text' 
placeholder='instructions go here'
value={this.state.holder}
onChange={this.handleEditInstructions}
/>
</div> */}