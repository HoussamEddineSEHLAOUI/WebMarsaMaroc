
import { Component } from 'react';
import SelectEntite from './SelectEntite';
import './UtilisateurAdd.css';





class UtilisateurUpdate extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:this.props.id,
            nomUtil : this.props.nomUtil,
            prenomUtil :this.props.prenomUtil,
            dateAffectation:this.props.dateAffectation,
            entiteaffectation:this.props.entiteaffectation,
        }
    }
    onChangeInputNom=(e)=>{
        this.setState({nomUtil:e.target.value})
    }
    onChangeInputNumero=(e)=>{
        this.setState({prenomUtil:e.target.value})
    }
    onChangeInputdateAffect=(e)=>{
        this.setState({dateAffectation:e.target.value})
    }
    onChangeEntite=(value)=>{
        this.setState({entiteaffectation:value})
    }
    onClickInput=(e)=>{
        var answer = window.confirm("Modifier l'utilisateur ?");
        if (answer) {
            console.log("start")
            console.log(this.state)
            console.log(this.state)
            console.log(this.state)
            fetch('/utilisateur/update/'+this.state.entiteaffectation,{
                method :'PUT',
                headers:{'Content-Type':'application/json'},
                body :JSON.stringify(
                    {
                        id:this.state.id,
                        nomUtil :this.state.nomUtil,
                        prenomUtil :this.state.prenomUtil,
                        dateAffectation : this.state.dateAffectation 
                    }
                )
            })
            .then(response => response.json())
            .then(msg=>{
                console.log(msg);
                if( msg ==='Done'){
                    alert("raak adii assi houssam  !")    
                }else{
                    alert("Merci  de ressayer!")
                }
            })
        }
        else {
            console.log('noooooo')
        };
        // window.location.reload(false);
    }
    render (){
        return (
            <div className="CategorieUpdate">
                 <div className="page">
                 <label className="field field_v1">
                    <input className="field__input" placeholder={this.state.nomUtil} onChange={this.onChangeInputNom}/>
                    <span className="field__label-wrap">
                    <span className="field__label">Nom </span>
                    </span>
                </label>
                <label className="field field_v1">
                    <input className="field__input" placeholder={this.state.prenomUtil} onChange={this.onChangeInputNumero}/>
                    <span className="field__label-wrap">
                    <span className="field__label">Prenom </span>
                    </span>
                </label>
                <label className="field field_v1">
                    <input className="field__input" placeholder={this.state.dateAffectation} onChange={this.onChangeInputdateAffect}/>
                    <span className="field__label-wrap">
                    <span className="field__label">Date Affecttation</span>
                    </span>
                </label>
                <SelectEntite onChangeEntite={this.onChangeEntite}/>
                </div>
                <div className="CategorieUpdatePostPanel">
                    <p className="CategorieAddPost" onClick={this.onClickInput}>Modifier</p>
                </div>
            </div>
          );
    }
}

export default UtilisateurUpdate;
