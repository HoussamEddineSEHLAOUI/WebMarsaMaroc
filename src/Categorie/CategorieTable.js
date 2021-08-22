import './CategorieTable.css';
import { Component } from 'react';
import Search from '../Search/Search';
import { ModelAdd } from './Modal/ModelAdd';
import { ModelUpdate } from './Modal/ModelUpdate';




class CategorieTable extends Component {
    constructor(props){
      super(props);
      this.state ={
        id :1,
        nomCat :'',
        showmodaladd :false,
        showmodalupdate :false,
        searchArticl : '',
        CategorieTable : []
      }

    }
    componentDidMount(){
      fetch('/Categorie/all')
      .then(response => response.json())
      .then(data=>{     
          console.log(data)
          this.setState({CategorieTable :data})
      })
  } 
   setShowModaladd=(bool)=>{
        this.setState({showmodaladd : bool});
    }
    setShowModalUpdate=(bool )=>{
      this.setState({showmodalupdate : bool});
    }
    setShowModalUpdateDate=(Id ,Nom )=>{
      this.setState({id : Id});
      this.setState({nomCat : Nom});
    }
    onDeleate=(id)=>{
      var answer = window.confirm("Supprimer la categorie ?");
      if (answer) {
          console.log(this.state)
          fetch('/Categorie/delete/'+id,{
              method :'DELETE',
              headers:{'Content-Type':'application/json'},
          })
          .then(response => response.json())
          .then(categorie=>{
              console.log(categorie);
              if( categorie ==='echec'){
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
        const CategorieFiltrer = this.state.CategorieTable.filter(
          categorie => categorie.nomCat.toUpperCase().includes(this.state.searchArticl.toUpperCase()));
        return (
            <div>
                {/* model in categorie */}
            <ModelAdd showModalAdd={this.state.showmodaladd} setShowModaladd={this.setShowModaladd} />
            <ModelUpdate showModalAdd={this.state.showmodalupdate} setShowModaladd={this.setShowModalUpdate} Nom={this.state.nomCat} Id={this.state.id} />
            <div>
              <Search onChangeSearch={this.onChangeSearch}/>
            </div>
          
            <p  className="AddProduit" onClick={()=>this.setShowModaladd(true)}>Ajouter</p>
            <h1 className='tilte'>Tables des categories</h1>
            <div className="ProduitTable">
              <table className="content-table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nom categorie</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {CategorieFiltrer.map((produit ,i)=>{
                            return (
                              <tr
                              key={i}
                              >
                                <td>{produit.id}</td>
                                <td>{produit.nomCat}</td>
                                <td> 
                                    {/* modifier categorie */}
                                  <p className='ProduitTableUpdate' 
                                  onClick={()=>{ 
                                    this.setShowModalUpdateDate(produit.id ,produit.nomCat);
                                    this.setShowModalUpdate(true );
                                    }}>Modifier</p>
                                    {/* delaate categorie */}
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

export default CategorieTable;
