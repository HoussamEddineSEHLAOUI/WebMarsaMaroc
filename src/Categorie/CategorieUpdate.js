
import { Component } from 'react';
import './CategorieUpdate.css';





class CategorieUpdate extends Component {
    constructor(props){
        super(props);
        this.state ={
            id: this.props.Id,
            nom : this.props.Nom
        }
    }
    onChangeInput=(e)=>{
        this.setState({nom:e.target.value})
    }
    onClickInput=(e)=>{
        var answer = window.confirm("Modifier la categorie ?");
        if (answer) {
            console.log(this.state)
            fetch('/Categorie/update',{
                method :'PUT',
                headers:{'Content-Type':'application/json'},
                body :JSON.stringify(
                    {
                        id:this.state.id,
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
                    alert("Merci , votre categorie est bien modifier !")
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
                <label className="field field_v1">
                    <input className="field__input"  onChange={this.onChangeInput}/>
                    <span className="field__label-wrap">
                    <span className="field__label">{this.props.Nom}</span>
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

export default CategorieUpdate;
