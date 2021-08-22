
import { Component } from 'react';
import './SelectEntite.css';



class SelectCategorie extends Component {
    constructor(props){
      super(props);
      this.state={
          value :'',
          listcategorie :[]
      }
    }
    componentDidMount(){
        fetch('/Categorie/all')
        .then(response => response.json())
        .then(data=>{     
            console.log(data)
            this.setState({listcategorie :data})
        }) 
    }
    
    onChangeEntiteIn=(e)=>{
        console.log(e.target.value)
        this.setState({value :e.target.value})
        e.preventDefault();
    }
    render(){
        return(
            <select className='selectBox' name="Categorise" id="" placeholder="Categories" value={this.state.value} onChange={this.onChangeEntiteIn}>
                {this.state.listcategorie.map((categorie , id)=>{
                    return(
                        <option key={id} value={categorie.id}>{categorie.nomCat}</option>
                    );
                })
                }
            </select>
        );
    }
}

export default SelectCategorie;
