
import { Component } from 'react';
import './SelectEntite.css';



class SelectEntreprise extends Component {
    constructor(props){
      super(props);
      this.state={
          value :'',
          listentreprise :[]
      }
    }
    componentDidMount(){
        fetch('/Entreprise/all')
        .then(response => response.json())
        .then(data=>{     
            console.log(data)
            this.setState({listentreprise :data})
        }) 
    }
    
    onChangeEntiteIn=(e)=>{
        console.log(e.target.value)
        this.setState({value :e.target.value})
        e.preventDefault();
    }
    render(){
        return(
            <select className='selectBox' name="entreprise" id="" placeholder="Enreprise" value={this.state.value} onChange={this.onChangeEntiteIn}>
                {this.state.listentreprise.map((entreprise , id)=>{
                    return(
                        <option key={id} value={entreprise.numE}>{entreprise.nomE}</option>
                    );
                })
                }
            </select>
        );
    }
}

export default SelectEntreprise;
