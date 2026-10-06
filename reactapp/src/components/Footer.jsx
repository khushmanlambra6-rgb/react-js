import React from 'react'

const Footer = () => {
  return (
    <div>
      <div style={{height:80,width:1530,backgroundColor:"#232322" ,marginTop:20 ,display:"flex",gap:60}}>
        <div style={{height:70,width:340}}>
          <img src='https://cdn-icons-png.flaticon.com/128/590/590836.png' style={{height:30, marginLeft:20}}></img>
        </div>
        <div style={{height:70,width:480}}>
        <nav style={{gap:40,display:"flex"}}>
          <a  href='' style={{textDecoration:"none",color:"white"}}>home</a>
           <a  href='' style={{textDecoration:"none",color:"white"}}>menu</a>
            <a  href='' style={{textDecoration:"none",color:"white"}}>contact</a>
        </nav>
        </div>
        <div style={{height:70,width:480}}>
         
         <img src='https://cdn-icons-png.flaticon.com/128/174/174855.png' style={{height:30}}></img>
         <img src='https://cdn-icons-png.flaticon.com/128/3670/3670051.png'style={{height:30}}></img>
          <img src='https://cdn-icons-png.flaticon.com/128/145/145802.png' style={{height:30}}></img>
        </div>
      </div>
    </div>
  )
}

export default Footer
