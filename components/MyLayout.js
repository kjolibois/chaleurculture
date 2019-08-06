import ExNav from './navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
//import RequestWidget from './Popover';
//<RequestWidget></RequestWidget>

const Layout = props => (
  <div style={{'height':'100%'}} >
    
  <ExNav></ExNav>
    
    {props.children}

            <style jsx global>{`
              body {
                background-color:#98002E;
                color:#F9A01B;
              }
      #Popover1{
        position: fixed;
        bottom: 0px;
        right: 0px; 
    }`}   </style>
    <footer style={{'background-color':'#F9A01B',textAlign:'center',marginTop:'15px'}} className="footer fixed-bottom">
    
  <div className="container">
    <span className="text-muted">A K.J joint.</span><br/>
    <span className="text-muted">Corner 63 + Noble Assemblee + L.O.N+ 55th Ave LSA</span>

  </div>
</footer>
  </div>
)

export default Layout