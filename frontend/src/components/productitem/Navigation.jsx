
import Products from './Products';
import {
    StyledNavigation,
    NavigationLinks,
    SelectedNavigation,
  } from './StyledNavigation'
  
  function Navigation() {
    return (
      <div>
      <StyledNavigation>
        <NavigationLinks>
          <a href="/">Home</a>
          <span>/</span>
          <a href="/">Clothing</a>
          <span>/</span>
          <a href="/">Women Dresses</a>
        </NavigationLinks>
        <SelectedNavigation>
          <span>Women Dresses</span>
          <span>&nbsp;- more items</span>
        </SelectedNavigation>
      </StyledNavigation>
      <Products/>
      </div>
    );
  }
  
  export default Navigation;