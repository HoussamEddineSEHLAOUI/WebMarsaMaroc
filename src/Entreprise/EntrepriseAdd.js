
import { Component } from 'react';
import './EntrepriseAdd.css';





class EntrepriseAdd extends Component {
    constructor(props){
        super(props);
        this.state ={
            nomE : '',
            teleRespo :'',
            emailRespo:'',
            siteWeb:''
        }
    }
    onChangeInputNom=(e)=>{
        this.setState({nomE:e.target.value})
    }
    onChangeInputNumero=(e)=>{
        this.setState({teleRespo:e.target.value})
    }
    onChangeInputEmail=(e)=>{
        this.setState({emailRespo:e.target.value})
    }
    onChangeInputWeb=(e)=>{
        this.setState({siteWeb:e.target.value})
    }
    onClickInput=(e)=>{
        var answer = window.confirm("Ajouter une entreprise?");
        if (answer) {
            console.log(this.state)
            fetch('/Entreprise/add',{
                method :'POST',
                headers:{'Content-Type':'application/json'},
                body :JSON.stringify(
                    {
                        nomE : this.state.nomE,
                        teleRespo :this.state.teleRespo,
                        emailRespo:this.state.emailRespo,
                        siteWeb:this.state.siteWeb
                    }
                )
            })
            .then(response => response.json())
            .then(entite=>{
                console.log(entite);
                if( entite ==='Done'){
                    alert("Merci , ajouter avec succes de l'entreprise !")    
                }else{
                    alert("OH NO NO NO!")
                }
            })
        }
        else {
            console.log('noooooo')
        }
        window.location.reload(false);
    }
    render (){
        return (
            <div className="CategorieAdd">
                 <div class="page">
                <label class="field field_v1">
                    <input class="field__input" placeholder="Nom" onChange={this.onChangeInputNom}/>
                    <span class="field__label-wrap">
                    <span class="field__label">Nom entreprise</span>
                    </span>
                </label>
                <label class="field field_v1">
                    <input class="field__input" placeholder="+212" onChange={this.onChangeInputNumero}/>
                    <span class="field__label-wrap">
                    <span class="field__label">Numero responsable</span>
                    </span>
                </label>
                <label class="field field_v1">
                    <input class="field__input" placeholder="xsy@gmail.com" onChange={this.onChangeInputEmail}/>
                    <span class="field__label-wrap">
                    <span class="field__label">Email</span>
                    </span>
                </label>
                <label class="field field_v1">
                    <input class="field__input" placeholder="www.hey.com" onChange={this.onChangeInputWeb}/>
                    <span class="field__label-wrap">
                    <span class="field__label">Site web</span>
                    </span>
                </label>
                </div>
                <div className="CategorieAddPostPanel">
                    <p className="CategorieAddPost" onClick={this.onClickInput}>Ajouter</p>
                </div>
            </div>
          );
    }
}

export default EntrepriseAdd;
