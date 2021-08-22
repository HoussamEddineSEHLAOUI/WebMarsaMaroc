import './EntrepriseTable.css';
import { Component } from 'react';
import Search from '../Search/Search';
import { ModelAddEntreprise } from './Modal/ModelAddEntreprise';
import { ModelUpdateEntreprise } from './Modal/ModelUpdateEntreprise';




class EntrepriseTable extends Component {
    constructor(props){
      super(props);
      this.state ={
        numE :1,
        nomE :'',
        emailRespo:'',
        teleRespo:'',
        siteWeb :'',
        showModalAdd :false,
        showModalUpdate :false,
        searchArticl : '',
        tableentreprise : []
      }

    }
    componentDidMount(){
      fetch('/Entreprise/all')
      .then(response => response.json())
      .then(data=>{     
          console.log(data)
          this.setState({tableentreprise :data})
      }) 
    }
    
    setShowModaladd=(bool)=>{
        this.setState({showModalAdd : bool});
    }
    setShowModalUpdate=(bool )=>{
      this.setState({showModalUpdate : bool});
    }
    setShowModalUpdateDate=(numE ,nomE  ,emailRespo ,teleRespo , siteWeb)=>{
      this.setState({numE : numE});
      this.setState({nomE : nomE});
      this.setState({emailRespo : emailRespo});
      this.setState({teleRespo : teleRespo});
      this.setState({siteWeb : siteWeb});
    }
    onDeleate=(id)=>{
      var answer = window.confirm("Supprimer l'entite ?");
        if (answer) {
            fetch('/Entreprise/delete/'+id,{
                method :'DELETE',
                headers:{'Content-Type':'application/json'},
            })
            .then(response => response.json())
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
      const EntrepriseFiltrer = this.state.tableentreprise.filter(
          entreprise => entreprise.nomE.toUpperCase().includes(this.state.searchArticl.toUpperCase())

    );

        return (
            <div>
                 <ModelAddEntreprise showModalAdd={this.state.showModalAdd} setShowModaladd={this.setShowModaladd} />
                 <ModelUpdateEntreprise showModalAdd={this.state.showModalUpdate} setShowModaladd={this.setShowModalUpdate}
                 numE={this.state.numE} 
                 nomE={this.state.nomE}
                 emailRespo={this.state.emailRespo}
                 teleRespo={this.state.teleRespo}
                 siteWeb={this.state.siteWeb}
                 />
            <div>
              <Search onChangeSearch={this.onChangeSearch}/>
            </div>
            <p  className="AddProduit" onClick={()=>this.setShowModaladd(true)}>Ajouter</p>
            <h1 className='tilte'>Tables des entreprises</h1>
            <div className="ProduitTable">
              <table className="content-table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nom entreprise</th>
                    <th>Telephone</th>
                    <th>Email</th>
                    <th>site web</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {EntrepriseFiltrer.map((produit ,i)=>{
                            return (
                              <tr
                              key={i}
                              >
                                <td>{produit.numE}</td>
                                <td>{produit.nomE}</td>
                                <td>{produit.teleRespo}</td>
                                <td>{produit.emailRespo}</td> 
                                <td>{produit.siteWeb}</td>
                                <td>
                                <p className='ProduitTableUpdate' 
                                  onClick={()=>{ 
                                    this.setShowModalUpdateDate(produit.numE ,produit.nomE ,produit.emailRespo ,produit.teleRespo ,produit.siteWeb);
                                    this.setShowModalUpdate(true );
                                    }}>Modifier</p>
                                  <p className='ProduitTableDel' 
                                    onClick={()=>this.onDeleate(produit.numE)}
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

export default EntrepriseTable;
