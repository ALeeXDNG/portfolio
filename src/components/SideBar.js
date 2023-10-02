import React from 'react';

function SideBar(props) 

{
  const { style } = props;

  const sidebarContainer = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 998,
    backdropFilter: style.display === 'none' ? 'blur(0)' : 'blur(5px)',
    transform: style.display === 'none' ? 'translateX(-100%)' : 'translateX(0)',
    transition: 'transform 0.8s ease-in',
 
  };

  const textContainer = {
    marginTop:'13rem' ,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
   
  };

  const textMenu = {
    padding: '2rem',
    color: '#FFF',
    fontSize: '1rem',
  };

  return (
    <div style={sidebarContainer}>
      <div style={textContainer}>
       
            <h2 style={textMenu}>HOME</h2>
            <h2 style={textMenu}>ABOUT</h2>
            <h2 style={textMenu}>CONTACT ME</h2>
         
      </div>
    </div>
  );
}

export default SideBar;
