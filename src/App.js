import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
import './App.css';
import CategorieTable from './Categorie/CategorieTable';
import EntiteTable from './Entite/EntiteTable';
import EntrepriseTable from './Entreprise/EntrepriseTable';
import MaintenanceTable from './Maintenance/MaintenanceTable';
import ProduitTable from './Produit/ProduitTable';
import UtilisateurTable from './Utilisateur/UtilisateurTable';
import btn from './images/bouton-plus-trois-points.png'











class App extends Component {
  constructor(){
    super();
    this.state={
      showSideBar : true
    }
  }
  showSideBar=()=>{
    this.setState({showSideBar:!this.state.showSideBar})
  }
  
  render() {
    return (
      <Router>
        <div className='pag'>
          <p onClick={()=>this.showSideBar()} className="btn_sideBar"><img alt='' src={btn}/></p>
         {this.state.showSideBar
           ?<p></p>
           :
           <div className='sidebar'>
           <div className='space'></div>
           <nav>
             <ul>
               <li><Link className='link' to="/">Equipement</Link></li>
               <li><Link className='link' to="/utilisateur">Utilisateur</Link></li>
               <li><Link className='link' to="/entreprise">Entreprise</Link></li>
               <li><Link className='link' to="/categorie">Categorie</Link></li>
               <li><Link className='link' to="/entite">Entite</Link></li>
               <li><Link className='link' to="/maintenance">Maintenance</Link></li>
               <li><Link className='link' to="/historique">Historique</Link></li>
             </ul>
           </nav>
         </div>
         }
          <main>
            <Switch>
              <Route exact path="/" component={ProduitTable} />
              <Route path="/utilisateur" component={UtilisateurTable} />
              <Route path="/entreprise" component={EntrepriseTable} />
              <Route path="/categorie" component={CategorieTable} />
              <Route exact path="/entite" component={EntiteTable} />
              <Route exact path="/maintenance" component={MaintenanceTable} />
              <Route exact path="/historique" component={EntiteTable} />
              <Route exact path="*" component={EntiteTable} />
            </Switch>
          </main>
        </div>
      </Router >
    );
  }
}
export default App;
