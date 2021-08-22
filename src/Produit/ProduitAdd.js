
import { Component } from 'react';
import SelectCategorie from '../Utilisateur/SelectCategorie';
import SelectEntite from '../Utilisateur/SelectEntite';
import SelectEntreprise from '../Utilisateur/SelectEntreprise';
import SelectUtilisateur from '../Utilisateur/SelectUtilisateur';
import './ProduitAdd.css';




class ProduitAdd extends Component {
    constructor(props){
        super(props);
        this.state ={
            nomArticle : '',
            IMMO : '',
            Numeroserie :'',
            Description :'',
            categorie :'',
            entreprise :'',
            entite :'',
            utilisateur :''

        }
    }
    onChangeInputnomArticle=(e)=>{
        this.setState({nomArticle:e.target.value})
    }
    onChangeInputIMMO=(e)=>{
        this.setState({IMMO:e.target.value})
    }
    onChangeInputNumeroserie=(e)=>{
        this.setState({Numeroserie:e.target.value})
    }
    onChangeInputDescription=(e)=>{
        this.setState({Description:e.target.value})
    }
    onChangeInputcategorie=(val)=>{
        this.setState({nom:val})
    }
    onChangeInputentreprise=(val)=>{
        this.setState({entreprise: val})
    }
    onChangeEntite=(val)=>{
        this.setState({entite:val})
    }
    onChangeInpututilisateur=(val)=>{
        this.setState({utilisateur :val})
    }























    onClickInput=(e)=>{
        // var answer = window.confirm("Ajouter la categorie ?");
        // if (answer) {
        //     console.log(this.state)
        //     fetch('/Categorie/add',{
        //         method :'POST',
        //         headers:{'Content-Type':'application/json'},
        //         body :JSON.stringify(
        //             {
        //                 id:null,
        //                 nomCat:this.state.nom,
        //                 description:'' ,
        //                 lineImage:''
        //             }
        //         )
        //     })
        //     .then(response => response.json())
        //     .then(categorie=>{
        //         console.log(categorie);
        //         if( categorie ==='echec'){
        //             alert("Merci , D'inserer un email ou c valide !")    
        //         }else{
        //             alert("Merci , votre categorie est bien ajouter !")
        //         }
        //     })
        // }
        // else {
        //     console.log('noooooo')
        // }
        // this.props.setShowModaladd(false);
        // window.location.reload(false);
        console.log(this.state)
    }
    render (){
        return (
            <div className="CategorieAdd">
                <div class="page_addproduit">
                <div className="componArticle">
                    <label class="field field_v1">
                        <input class="field__input_addpro" placeholder="scanner" onChange={this.onChangeInputnomArticle}/>
                        <span class="field__label-wrap">
                        <span class="field__label">Nom equipement</span>
                        </span>
                    </label>
                    <label class="field field_v1">
                        <input class="field__input_addpro" placeholder="scanner" onChange={this.onChangeInputIMMO}/>
                        <span class="field__label-wrap">
                        <span class="field__label">IMMO</span>
                        </span>
                    </label>
                    <label class="field field_v1">
                        <input class="field__input_addpro" placeholder="scanner" onChange={this.onChangeInputNumeroserie}/>
                        <span class="field__label-wrap">
                        <span class="field__label">Numero serie </span>
                        </span>
                    </label>
                    <textarea rows="10" class="field__input_adescrip" multiple='true' placeholder="Description" onChange={this.onChangeInputDescription}/>
                </div>
                <div className="componDetailArticle">
                            <div>
                                <p>Categorie</p>
                                <SelectCategorie 
                                onChangeInputcategorie={this.onChangeInputcategorie}
                                className="selectBoxy"/>
                            </div>
                            <div>
                                <p>Entreprise</p>
                                <SelectEntreprise
                                onChangeInputentreprise={this.onChangeInputentreprise}
                                className="selectBoxy"/>
                            </div>
                            <div>
                                <p>Entite</p>
                                <SelectEntite 
                                onChangeEntite={this.onChangeEntite}
                                className="selectBoxy"/>
                            </div>
                            <div>
                                <p>Utilisateur</p>
                                <SelectUtilisateur 
                                onChangeInpututilisateur={this.onChangeInpututilisateur}
                                className="selectBoxy"/>
                            </div>
                </div>         
                </div>
                <div className="CategorieAddPostPanel">
                    <p className="ProduiAddPost" onClick={this.onClickInput}>Ajouter</p>
                </div>
            </div>
          );
    }
}

export default ProduitAdd
