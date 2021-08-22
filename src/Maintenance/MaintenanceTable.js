import './MaintenanceTable.css';
import { Component } from 'react';
import Search from '../Search/Search';


class MaintenanceTable extends Component {
    constructor(props){
      super(props);
      this.state ={
        searchArticl : '',
        tableproduit : [
          {
            IMMO : '0001010199',
            Serie :'RBG567' ,
            Article :'PC portable',
            PraistataireMaint :'DELL',
            DateDebut :'09/08/2021' ,
            DateSortie :'28/08/2021'
          }
        ]
      }

    }
    onChangeSearch =(searchArticle)=>{
        this.setState({searchArticl : searchArticle});
    }
    render (){
      const produitFiltrer = this.state.tableproduit.filter(
          produit => produit.Article.toUpperCase().includes(this.state.searchArticl.toUpperCase())
       || produit.Serie.toUpperCase().includes(this.state.searchArticl.toUpperCase())
       || produit.PraistataireMaint.toUpperCase().includes(this.state.searchArticl.toUpperCase())
    );

        return (
            <div>
            <div>
              <Search onChangeSearch={this.onChangeSearch}/>
            </div>
            <h1 className='tilte'>Maintenance</h1>
            <div className="ProduitTable">
              <table className="content-table">
                <thead>
                  <tr>
                    <th>IMMO</th>
                    <th>N° Serie</th>
                    <th>Article</th>
                    <th>prestataire de maintenance</th>
                    <th>De</th>
                    <th>A</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {produitFiltrer.map((produit ,i)=>{
                            return (
                              <tr
                              key={i}
                              >
                                <td>{produit.IMMO}</td>
                                <td>{produit.Serie}</td>
                                <td>{produit.Article}</td>
                                <td>{produit.PraistataireMaint}</td> 
                                <td>{produit.DateDebut}</td>
                                <td>{produit.DateSortie}</td>
                                <td>
                                  <p className='ProduitTableUpdate'>Detail</p>
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

export default MaintenanceTable;
