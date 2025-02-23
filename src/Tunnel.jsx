import React, {useState} from 'react';  // Import React to use JSX
function TunnelPage() {
    return (
        <div style={{backgroundImage: `url("Tunnel.jpg")`, backgroundSize: 'contain', width:'100vw',height:'100vh',backgroundPosition: "center",backgroundRepeat: 'no-repeat'}} >
          <h1>Hello, React!</h1>
          <CountdownClock/>
        </div>
      );
  }
  
  export default TunnelPage;