import './UtilisateurTable.css';
import { Component } from 'react';
import Search from '../Search/Search';
import { ModelAddUtilisateur } from './Modal/ModelAddUtilisateur';
import { ModelUpdateUtilisateur } from './Modal/ModelUpdateUtilisateur';



class UtilisateurTable extends Component {
    constructor(props){
      super(props);
      this.state ={
        searchArticl : '',
        id :1,
        nomUtil :'',
        entiteaffectation:1,
        prenomUtil:'',
        dateAffectation :'',
        showModalAdd :false,
        showModalUpdate :false,
        UtilisateurTable : []
      }

    }
    componentDidMount(){
      fetch('/utilisateur/all')
      .then(response => response.json())
      .then(data=>{     
          console.log(data)
          this.setState({UtilisateurTable :data})
      }) 
  }
    setShowModaladd=(bool)=>{
        this.setState({showModalAdd : bool});
    }
    setShowModalUpdate=(bool )=>{
      this.setState({showModalUpdate : bool});
    }
    setShowModalUpdateDate=(id ,nomUtil  ,entiteaffectation ,prenomUtil , dateAffectation)=>{
      this.setState({id : id});
      this.setState({nomUtil : nomUtil});
      this.setState({prenomUtil : prenomUtil});
      this.setState({dateAffectation : dateAffectation});
      if(entiteaffectation===!null){
        this.setState({entiteaffectation : entiteaffectation});
      }
    }
    onDeleate=(id)=>{
      var answer = window.confirm("Merci de confirmer la suppression ?");
      if (answer) {
          console.log('yesss modifier')
      }
      else {
          console.log('noooooo')
      }
    }
    onChangeSearch =(searchArticle)=>{
        this.setState({searchArticl : searchArticle});
    }
    onDeleate=(id)=>{
      var answer = window.confirm("Supprimer l'entite ?");
        if (answer) {
            console.log(this.state)
            fetch('/utilisateur/delete/'+id,{
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
    render (){
        const UtilisateurFiltrer = this.state.UtilisateurTable.filter(
          entreprise => entreprise.nomUtil.toUpperCase().includes(this.state.searchArticl.toUpperCase()));
        return (
            <div>
              <ModelAddUtilisateur showModalAdd={this.state.showModalAdd} setShowModaladd={this.setShowModaladd} />
              <ModelUpdateUtilisateur showModalAdd={this.state.showModalUpdate} setShowModaladd={this.setShowModalUpdate}
                 id={this.state.id} 
                 nomUtil={this.state.nomUtil}
                 prenomUtil={this.state.prenomUtil}
                 dateAffectation={this.state.dateAffectation}
                 entiteaffectation={this.state.entiteaffectation}
                 />
            <div>
              <Search onChangeSearch={this.onChangeSearch}/>
            </div>
            <p  className="AddProduit" onClick={()=>this.setShowModaladd(true)}>Ajouter</p>
            <h1 className='tilte'>Tables des utilisateurs</h1>
            <div className="ProduitTable">
              <table className="content-table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nom complete</th>
                    <th>Date affectation</th>
                    <th>Entite d'affectation</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {UtilisateurFiltrer.map((produit ,i)=>{
                            return (
                              <tr
                              key={i}
                              >
                                <td>{produit.id}</td>
                                <td>{produit.nomUtil +" "+produit.prenomUtil}</td>
                                <td>{produit.dateAffectation}</td> 
                                <td>{produit.entiteaffectation===null ? 'pas de entite' : produit.entiteaffectation.nomEntite }</td>
                                <td>
                                <p
                                  className='ProduitTableUpdate' 
                                  onClick={()=>{ 
                                    if(produit.entiteaffectation !==null){
                                      this.setShowModalUpdateDate(produit.id ,produit.nomUtil , produit.entiteaffectation.id ,produit.prenomUtil ,produit.dateAffectation);
                                    }else{
                                      this.setShowModalUpdateDate(produit.id ,produit.nomUtil , 1 ,produit.prenomUtil ,produit.dateAffectation)
                                    }
                                    this.setShowModalUpdate(true);
                                    }}
                                  >Modifier</p>



                                  <p 
                                    className='ProduitTableDel' 
                                    onClick={()=>this.onDeleate(produit.id)}
                                    >Supprimer</p>


                                    <p 
                                    className='ProduitTableDet'>
                                    Detail</p>
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

export default UtilisateurTable;
