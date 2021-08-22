
import { Component } from 'react';
import SelectCategorie from '../Utilisateur/SelectCategorie';
import SelectEntite from '../Utilisateur/SelectEntite';
import SelectEntreprise from '../Utilisateur/SelectEntreprise';
import SelectUtilisateur from '../Utilisateur/SelectUtilisateur';
import './ProduitAdd.css';




class ProduitUpdate extends Component {
    constructor(props){
        super(props);
        this.state ={
            nom : ''
        }
    }
    onChangeInput=(e)=>{
        this.setState({nom:e.target.value})
    }
    onClickInput=(e)=>{
        var answer = window.confirm("Ajouter la categorie ?");
        if (answer) {
            console.log(this.state)
            fetch('/Categorie/add',{
                method :'POST',
                headers:{'Content-Type':'application/json'},
                body :JSON.stringify(
                    {
                        id:null,
                        nomCat:this.state.nom,
                        description:'' ,
                        lineImage:''
                    }
                )
            })
            .then(response => response.json())
            .then(categorie=>{
                console.log(categorie);
                if( categorie ==='echec'){
                    alert("Merci , D'inserer un email ou c valide !")    
                }else{
                    alert("Merci , votre categorie est bien ajouter !")
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
            <div className="CategorieAdd">
                <div class="page_addproduit">
                <div className="componArticle">
                    <label class="field field_v1">
                        <input class="field__input_addpro" placeholder="scanner" onChange={this.onChangeInput}/>
                        <span class="field__label-wrap">
                        <span class="field__label">Nom equipement</span>
                        </span>
                    </label>
                    <label class="field field_v1">
                        <input class="field__input_addpro" placeholder="scanner" onChange={this.onChangeInput}/>
                        <span class="field__label-wrap">
                        <span class="field__label">IMMO</span>
                        </span>
                    </label>
                    <label class="field field_v1">
                        <input class="field__input_addpro" placeholder="scanner" onChange={this.onChangeInput}/>
                        <span class="field__label-wrap">
                        <span class="field__label">Numero serie </span>
                        </span>
                    </label>
                    <textarea rows="10" class="field__input_adescrip" multiple='true' placeholder="Description" onChange={this.onChangeInput}/>
                </div>
                <div className="componDetailArticle">
                            <div>
                                <p>Categorie</p>
                                <SelectCategorie className="selectBoxy"/>
                            </div>
                            <div>
                                <p>Entreprise</p>
                                <SelectEntreprise className="selectBoxy"/>
                            </div>
                            <div>
                                <p>Entite</p>
                                <SelectEntite className="selectBoxy"/>
                            </div>
                            <div>
                                <p>Utilisateur</p>
                                <SelectUtilisateur className="selectBoxy"/>
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

export default ProduitUpdate ;
