
import { Component } from 'react';
import './EntiteAdd.css';





class EntiteAdd extends Component {
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
        var answer = window.confirm("Ajouter une entite ?");
        if (answer) {
            console.log(this.state)
            fetch('/EntiteAffectation/add',{
                method :'POST',
                headers:{'Content-Type':'application/json'},
                body :JSON.stringify(
                    {
                        id:null,
                        nomEntite:this.state.nom
                    }
                )
            })
            .then(response => response.json())
            .then(entite=>{
                console.log(entite);
                if( entite ==='echec'){
                    alert("Merci , D'inserer valide !")    
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
            <div className="CategorieAdd">
                 <div class="page">
                <label class="field field_v1">
                    <input class="field__input" placeholder="scanner" onChange={this.onChangeInput}/>
                    <span class="field__label-wrap">
                    <span class="field__label">Nom entite</span>
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

export default EntiteAdd;
