
import { Component } from 'react';
import './EntrepriseUpdate.css';





class EntrepriseUpdate extends Component {
    constructor(props){
        super(props);
        this.state ={
            numE:this.props.numE,
            nomE : this.props.nomE,
            teleRespo :this.props.teleRespo,
            emailRespo:this.props.emailRespo,
            siteweb:this.props.siteWeb
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
        var answer = window.confirm("Modifier l'entite ?");
        if (answer) {
            console.log(this.state)
            fetch('/Entreprise/update',{
                method :'PUT',
                headers:{'Content-Type':'application/json'},
                body :JSON.stringify(
                    {
                        numE:this.state.numE,
                        nomE:this.state.nomE,
                        teleRespo :this.state.teleRespo,
                        emailRespo:this.state.emailRespo ,
                        siteWeb:this.state.siteWeb
                    }
                )
            })
            .then(response => response.json())
            .then(categorie=>{
                console.log(categorie);
                if( categorie ==='echec'){
                    alert("OOOHHH SHITTT TRY AGAIN !")    
                }else{
                    alert("Merci  !")
                }
            })
        }
        else {
            console.log('noooooo')
        }
        this.props.setShowModaladd(false);
        window.location.reload(false);
    }
    render (){
        return (
            <div className="CategorieUpdate">
                 <div className="page">
                 <label class="field field_v1">
                    <input class="field__input" placeholder={this.state.nomE} onChange={this.onChangeInputNom}/>
                    <span class="field__label-wrap">
                    <span class="field__label">Nom entreprise</span>
                    </span>
                </label>
                <label class="field field_v1">
                    <input class="field__input" placeholder={this.state.teleRespo} onChange={this.onChangeInputNumero}/>
                    <span class="field__label-wrap">
                    <span class="field__label">Numero responsable</span>
                    </span>
                </label>
                <label class="field field_v1">
                    <input class="field__input" placeholder={this.state.emailRespo} onChange={this.onChangeInputEmail}/>
                    <span class="field__label-wrap">
                    <span class="field__label">Email</span>
                    </span>
                </label>
                <label class="field field_v1">
                    <input class="field__input" placeholder={this.props.siteWeb} onChange={this.onChangeInputWeb}/>
                    <span class="field__label-wrap">
                    <span class="field__label">Site web</span>
                    </span>
                </label>
                </div>
                <div className="CategorieUpdatePostPanel">
                    <p className="CategorieAddPost" onClick={this.onClickInput}>Modifier</p>
                </div>
            </div>
          );
    }
}

export default EntrepriseUpdate;
