
import { Component } from 'react';
import './SelectEntite.css';



class SelectUtilisateur extends Component {
    constructor(props){
      super(props);
      this.state={
          value :'',
          listutilisateur:[]
      }
    }
    componentDidMount(){
        fetch('/utilisateur/all')
        .then(response => response.json())
        .then(data=>{     
            console.log(data)
            this.setState({listutilisateur :data})
        }) 
    }
    
    onChangeEntiteIn=(e)=>{
        console.log(e.target.value)
        this.setState({value :e.target.value})
        e.preventDefault();
    }
    render(){
        return(
            <select className='selectBox' name="utilisateur" id="" placeholder="utilisateur" value={this.state.value} onChange={this.onChangeEntiteIn}>
                {this.state.listutilisateur.map((utilisateur , id)=>{
                    return(
                        <option key={id} value={utilisateur.id}>{utilisateur.nomUtil +" "+utilisateur.prenomUtil}</option>
                    );
                })
                }
            </select>
        );
    }
}

export default SelectUtilisateur;
