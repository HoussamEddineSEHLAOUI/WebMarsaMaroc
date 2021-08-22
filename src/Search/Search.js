
import { Component } from 'react';
import './Search.css';





class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            onChangeSearch : this.props.onChangeSearch 
        }
    }
    
    onChangeRecherhce=(event)=>{
        this.state.onChangeSearch(event.target.value)
        console.log(event.target.value)
    }
    render (){
        return (
            <div className="search">
                <input 
                placeholder='Recherche ...'
                onChange={this.onChangeRecherhce}
                />
            </div>
          );
    }
}

export default Search;
