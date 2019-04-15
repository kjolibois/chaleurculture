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
  </div>
)

export default Layout