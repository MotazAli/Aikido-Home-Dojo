import React ,{PureComponent} from 'react';
import './footer.css';

class Footer extends PureComponent{


  render(){
    return (
      <footer id="footer">


  <div className="container">
    <div className="copyright">
      &copy; Copyright on <strong>Mohamed Mostafe</strong>. All Rights Reserved
    </div>
    <div className="credits">
      
      Designed by M A - <a href="#Aion">Aion Company</a>
    </div>
  </div>
</footer>

  );
  }

    
}

export default Footer;