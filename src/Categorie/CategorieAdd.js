
import { Component } from 'react';
import './CategorieAdd.css';





class CategorieAdd extends Component {
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
                 <div class="page">
                <label class="field field_v1">
                    <input class="field__input" placeholder="scanner" onChange={this.onChangeInput}/>
                    <span class="field__label-wrap">
                    <span class="field__label">Nom categorie</span>
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

export default CategorieAdd;
