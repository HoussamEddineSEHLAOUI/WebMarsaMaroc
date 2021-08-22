import './ProduitTable.css';
import { Component } from 'react';
import Search from '../Search/Search';
import { ModelAddproduit } from './Modal/ModelAddproduit';
import { ModalUpdateproduit } from './Modal/ModalUpdateproduit';


class ProduitTable extends Component {
    constructor(props){
      super(props);
      this.state ={
        searchArticl : '',
        showmodaladd :false,
        showmodalupdate :false,
        tableproduit : []
      }

    }
    componentDidMount(){
      fetch('/article/all')
      .then(response => response.json())
      .then(data=>{     
          console.log(data)
          this.setState({tableproduit :data})
      }) 
     }
    onChangeSearch =(searchArticle)=>{
        this.setState({searchArticl : searchArticle});
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
    render (){
      const produitFiltrer = this.state.tableproduit.filter(
          produit => produit.nomArticle.toUpperCase().includes(this.state.searchArticl.toUpperCase())
    );

        return (
            <div>
                {/* model in categorie */}
            <ModelAddproduit showModalAdd={this.state.showmodaladd} setShowModaladd={this.setShowModaladd} />
            <ModalUpdateproduit showModalAdd={this.state.showmodalupdate} setShowModaladd={this.setShowModalUpdate} nomEntite={this.state.nomEntite} id={this.state.id} />
            <div>
              <Search onChangeSearch={this.onChangeSearch}/>
            </div>
            {this.state.showmodaladd || this.state.showmodalupdate ? <p></p>:<p  className="AddProduit" onClick={()=>this.setShowModaladd(true)}>Ajouter</p>}
            <h1 className='tilte'>Tables des équipements</h1>
            <div className="ProduitTable">
              <table className="content-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>IMMO</th>
                    <th>N° Serie</th>
                    <th>Article</th>
                    <th>Categorie</th>
                    <th>Entreprise</th>
                    <th>Localisation</th>
                    <th>Utilisateur</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {produitFiltrer.map((produit ,i)=>{
                            return (
                              <tr
                              key={i}
                              >
                                <td>
                                  {produit.isInMaint ? <p className='ProduitTableMaint'>M</p>:<p></p> }
                                </td>
                                <td>{produit.immo}</td>
                                <td>{produit.numserie}</td>
                                <td>{produit.nomArticle}</td> 
                                <td>{produit.categorie=== null ? '':produit.categorie.nomCat}</td>
                                <td>{produit.entreprie === null ? '' :produit.entreprie.nomE}</td>
                                <td>{produit.entiteaffectation === null ? '': produit.entiteaffectation.nomEntite}</td>
                                <td>{produit.utilisateur=== null ? '':produit.utilisateur.nomUtil +" "+produit.utilisateur.prenomUtil}</td>
                                <td>
                                <p className='ProduitTableUpdate' 
                                  onClick={()=>{ 
                                    this.setShowModalUpdate(true);
                                    }}>Modifier</p>
                                  <p className='ProduitTableDel'>Supprimer</p>
                                  <p className='ProduitTableDet'>Détail</p>
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

export default ProduitTable;
