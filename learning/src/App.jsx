import React, { useState, useEffect } from 'react';
import './App.css';
import PageHeader from './PageHeader';
// import PageFooter from './PageFooter';
// import Topics from './Topics';
// import LoginPage from './LoginPage';
// import SignUpPage from './SignUpPage';
import LoginHeader from './LoginHeader';
import LoginPage from './LoginPage';
import HomePagePanel from './HomePagePanel';


const App = () => {

  const [state, setState] = useState({ 
      users: {},
      userName: '',
      isLoginPage:true,
      isProductDescriptionPage: false,
      isHomePage: false,
      alertMessage: ''
      
    });

    const loginUser= (evt) => {
      setState({
        isLoginPage:false,
        isHomePage:true
        });
    }
  
    const logoutUser= (evt) => {    
      setState({
        isLoginPage:true,
        isProductDescriptionPage:false,
        isHomePage:false,
        userName:"",
        alertMessage: ''
        });   
    }
    const recordUserName = (e) =>{
      setState({
          userName: e.target.value
        });
    }
    const goToHomePage= ()=> {    
      setState({
        isLoginPage:false,
        isProductDescriptionPage:false,
        isHomePage:true,
        alertMessage: ''
        });   
    }
    
    const goToOrdersPage= (e)=> {  
      // getProductsfromCart(e.target.id)  
      // .then(productsfromCart =>{
      //   this.setState({
      //     cartProductDetails: productsfromCart,
      //     isCartPage:true,
      //     isProductDescriptionPage:false,
      //     isLoginPage:false,
      //     isHomePage:false,
      //     alertMessage: ''
      //    })
      // }).catch(err =>{
      //   this.setState({        
      //     alertMessage: err.error
      // })});  
    }

      if(state.isLoginPage){
        return (        
          <div className="display-panel">
            <LoginHeader />
            <LoginPage loginUser={loginUser} recordUserName={recordUserName} userName={state.userName}/>
            {/* <PageFooter/> */}
          </div>
        );
      }
      else if(state.isHomePage){
      return (
        <div className="display-panel">
         {/* <PageHeader userName={state.userName} logoutUser={logoutUser}  alertMessage={state.alertMessage}/>  */}
         <HomePagePanel /> 
          {/* <ProductPanel addProductToCart={ this.addProductToCart } showProductDetails = { this.showProductDetails } productsRow1={ this.state.productsRow1 } productsRow2={ this.state.productsRow2 } productsRow3={ this.state.productsRow3 }/> */}
          {/* <PageFooter/> */}
        </div>
        );
      }
    
  return (
    <div className="app">
     <PageHeader />
      {/* <Nav /> 
      <HomePagePanel logoutUser={logoutUser} loginUser={loginUser} />  */}
      {/* { <PageFooter/> */}
    </div>
)
};

export default App;