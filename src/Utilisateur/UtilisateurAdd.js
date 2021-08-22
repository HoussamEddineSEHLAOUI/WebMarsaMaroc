
import { Component } from 'react';
import SelectEntite from './SelectEntite';
import './UtilisateurAdd.css';






class UtilisateurAdd extends Component {
    constructor(props){
        super(props);
        this.state ={
            NomUtil : '',
            PrenomUtil:'',
            DateAffectation:'',
            Entite:''
        }
    }
    onChangeInputNom=(e)=>{
        this.setState({NomUtil:e.target.value})
    }
    onChangeInputPreNom=(e)=>{
        this.setState({PrenomUtil:e.target.value})
    }
    onChangeInputdateAffect=(e)=>{
        this.setState({DateAffectation:e.target.value})
    }
    onChangeEntite=(value)=>{
        this.setState({Entite:value})
    }
    onClickInput=(e)=>{
        var answer = window.confirm("Ajouter unn utilisateur ?");
        if (answer) {
            console.log(this.state)
            fetch('/utilisateur/add-on-entity/'+this.state.Entite,{
                method :'POST',
                headers:{'Content-Type':'application/json'},
                body :JSON.stringify(
                    {
                        nomUtil:this.state.NomUtil,
                        prenomUtil:this.state.PrenomUtil,
                        dateAffectation :this.state.DateAffectation
                    }
                )
            })
        }
        else {
            console.log('noooooo')
        }
    }
    render (){
        return (
            <div className="CategorieAdd">
                 <div className="page">
                <label className="field field_v1">
                    <input className="field__input" placeholder="Nom" onChange={this.onChangeInputNom}/>
                    <span className="field__label-wrap">
                    <span className="field__label">Nom </span>
                    </span>
                </label>
                <label className="field field_v1">
                    <input className="field__input" placeholder="Nom" onChange={this.onChangeInputPreNom}/>
                    <span className="field__label-wrap">
                    <span className="field__label">Prenom </span>
                    </span>
                </label>
                <label className="field field_v1">
                    <input className="field__input" placeholder="yyyy-mm-jj" onChange={this.onChangeInputdateAffect}/>
                    <span className="field__label-wrap">
                    <span className="field__label">Date Affecttation</span>
                    </span>
                </label>
                <SelectEntite onChangeEntite={this.onChangeEntite}/>
                </div>
                <div className="CategorieAddPostPanel">
                    <p className="CategorieAddPost" onClick={this.onClickInput}>Ajouter</p>
                </div>
            </div>
          );
    }
}

export default UtilisateurAdd;
