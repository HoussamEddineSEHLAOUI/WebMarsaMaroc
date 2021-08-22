
import { Component } from 'react';
import './EntiteUpdate.css';





class EntiteUpdate extends Component {
    constructor(props){
        super(props);
        this.state ={
            id :this.props.id ,
            nomEntite : this.props.nomEntite
        }
    }
    onChangeInput=(e)=>{
        this.setState({nomEntite:e.target.value})
    }
    onClickInput=()=>{
        var answer = window.confirm("Modifier l'entite ?");
        if (answer) {
            console.log(this.state)
            fetch('/EntiteAffectation/update',{
                method :'PUT',
                headers:{'Content-Type':'application/json'},
                body :JSON.stringify(
                    {
                        id:this.state.id,
                        nomEntite:this.state.nomEntite
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
                <label className="field field_v1">
                    <input className="field__input"  onChange={this.onChangeInput}/>
                    <span className="field__label-wrap">
                    <span className="field__label">{this.props.nomEntite}</span>
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

export default EntiteUpdate;
