import './EntiteTable.css';
import { Component } from 'react';
import Search from '../Search/Search';
import { ModelAddEntite } from './Modal/ModelAddEntite';
import { ModelUpdateEntite } from './Modal/ModelUpdateEntite';



class EntiteTable extends Component {
    constructor(props){
      super(props);
      this.state ={
        id :1,
        nomEntite :'',
        showModalAdd :false,
        showModalUpdate :false,
        searchArticl : '',
        Entite : []
      }

    }
  componentDidMount(){
      fetch('/EntiteAffectation/all')
      .then(response => response.json())
      .then(data=>{     
          console.log(data)
          this.setState({Entite :data})
      }) 
  }

  setShowModaladd=(bool)=>{
      this.setState({showModalAdd : bool});
  }
  setShowModalUpdate=(bool )=>{
    this.setState({showModalUpdate : bool});
  }
  setShowModalUpdateDate=(Id ,Nom )=>{
    this.setState({id : Id});
    this.setState({nomEntite : Nom});
  }
  onDeleate=(id)=>{
    var answer = window.confirm("Supprimer l'entite ?");
      if (answer) {
          console.log(this.state)
          fetch('/EntiteAffectation/delete/'+id,{
              method :'DELETE',
              headers:{'Content-Type':'application/json'},
          })
          .then(response => response.json())
          .then(msg=>{
              console.log(msg);
              if( msg ==='echec'){
                  alert("Merci , D'inserer un email ou c valide !")    
              }else{
                  alert("Merci !")
              }
          })
      }
      else {
          console.log('noooooo')
      }
      window.location.reload(false);
  }
    onChangeSearch =(searchArticle)=>{
        this.setState({searchArticl : searchArticle});
    }




  render (){
        const entitefilter = this.state.Entite.filter(
          e => e.nomEntite.toUpperCase().includes(this.state.searchArticl.toUpperCase()));
        return (
            <div>
            <ModelAddEntite showModalAdd={this.state.showModalAdd} setShowModaladd={this.setShowModaladd} />
            <ModelUpdateEntite showModalAdd={this.state.showModalUpdate} setShowModaladd={this.setShowModalUpdate} nomEntite={this.state.nomEntite} id={this.state.id} />
            <div>
              <Search onChangeSearch={this.onChangeSearch}/>
            </div>
            <p  className="AddProduit" onClick={()=>this.setShowModaladd(true)}>Ajouter</p>

            <h1 className='tilte'>Tables des entites</h1>
            <div className="ProduitTable">
              <table className="content-table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Entite</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {entitefilter.map((produit ,i)=>{
                            return (
                              <tr
                              key={i}
                              >
                                <td>{produit.id}</td>
                                <td>{produit.nomEntite}</td>
                                <td>
                                <p className='ProduitTableUpdate' 
                                  onClick={()=>{ 
                                    this.setShowModalUpdateDate(produit.id ,produit.nomEntite);
                                    this.setShowModalUpdate(true );
                                    }}>Modifier</p>
                                  <p className='ProduitTableDel' 
                                    onClick={()=>this.onDeleate(produit.id)}
                                    >Supprimer</p>
                                  
                                </td>
                              </tr>
                            );
                        })
                  }
                  <tr className="ProduitTableMaintVide"></tr>
                </tbody>
              </table>
            </div>
            </div>
          );

    }
}

export default EntiteTable;
