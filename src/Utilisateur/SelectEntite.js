
import { Component } from 'react';
import './SelectEntite.css';



class SelectEntite extends Component {
    constructor(props){
      super(props);
      this.state={
          value :'',
          listentite :[]
      }
    }
    componentDidMount(){
        fetch('/EntiteAffectation/all')
        .then(response => response.json())
        .then(data=>{     
            console.log(data)
            this.setState({listentite :data})
        }) 
    }
    
    onChangeEntiteIn=(e)=>{
        console.log(e.target.value)
        this.setState({value :e.target.value})
        this.props.onChangeEntite(e.target.value)
        e.preventDefault();
    }
    render(){
        return(
            <select className='selectBox' name="Entite" id="" placeholder="Entite d'Affectation" value={this.state.value} onChange={this.onChangeEntiteIn}>
                {this.state.listentite.map((entite , id)=>{
                    return(
                        <option key={id} value={entite.id}>{entite.nomEntite}</option>
                    );
                })
                }
            </select>
        );
    }
}

export default SelectEntite;
