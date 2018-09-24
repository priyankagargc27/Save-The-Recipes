import React, { Component } from "react"
import "./Drink.css"
//import APIManager from "./module/APIManager"


export default class DessertForm extends Component {

    
    state={
        title : "",
        cookTime:"",
        image:"",
        ingredients : "",
        direction: "",

        userId: JSON.parse(sessionStorage.getItem("userInfo")).userId
    }
    //const user = JSON.parse(sessionStorage.getItem("userinfo"))



    handleFieldChange = evt => {
        console.log("evt handleFieldChange", evt);
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
     }

     MakeNewDrink = evt => {
         evt.preventDefault()
         const drink = {
             title:this.state.title,
             cookTime:this.state.cookTime,
             image:this.state.image,
             ingredients:this.state.ingredients,
             direction:this.state.direction,
        userId: JSON.parse(sessionStorage.getItem("userInfo")).userId

            }
            this.props.addDrink(drink, "drink").then(() => this.props.history.push("/drinks"))
            console.log("drink",drink)
}

     render() {
        return (
           <React.Fragment>
               
               <div className="drinkContainer">
                 <h3>My drinks</h3>
              <form className="recipeForm">
                 <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="title"
                       placeholder="Title" />
                 </div>
                 <div className="form-group">
                    <label htmlFor="cookTime">Cook Time</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="cookTime" placeholder="cookTime" />
                 </div>
                 <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="image" placeholder="Image Url" />
                 </div>
                 <div className="form-group">
                    <label htmlFor="ingredients">Ingredients</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="ingredients"  placeholder="Ingredients" />
                 </div>
                 <div className="form-group">
                    <label htmlFor="direction">Direction</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="direction"  placeholder="Direction" />
                 </div>
                 {/* <div className="form-group">
                    <label htmlFor="employee">Assign to caretaker</label>
                    <select defaultValue="" name="employee" id="employee"
                       onChange={this.handleFieldChange}>
                       <option value="">Select an employee</option>
                       {
                          this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                       }
                    </select>
                 </div> */}
                 <button type="submit" onClick={this.MakeNewDrink} className="btn btn-primary">Submit</button>
              </form>
              </div>
           </React.Fragment>
        )
     }
  }