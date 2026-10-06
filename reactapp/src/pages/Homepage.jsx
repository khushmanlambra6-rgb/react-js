import React from 'react'
import Footer from '../components/Footer'
const Homepage = () => {
  return (
    <div>
      <div style={{
        height: 30, width: 1500, backgroundColor: "#D9C2AD",
        display: "flex", justifyContent:'space-between',
        alignItems: "center",
        padding: 10,
      }}>

        <img src='./logo.png' style={{ height: 40, width: 40 }} />
        <nav style={{gap:50,display:"flex"}}>
        <a href='' style={{color:"black",textDecoration:"none",fontSize:20}}> home </a>
        <a href='' style={{color:"black",textDecoration:"none",fontSize:20}}>menu</a>
        <a href='' style={{color:"black",textDecoration:"none",fontSize:20}}>about</a>
        <a href='' style={{color:"black",textDecoration:"none",fontSize:20}}>contact</a>
       

        </nav>
        <button style={{backgroundColor:'#FFE4E1',height:40,width:100,}}>order now</button>

      </div>
      <div style={{ width: "100%", height: "800px",
         backgroundImage: "url('./backgroundimage.png')", 
         backgroundSize: "cover", backgroundRepeat: "no-repeat",
         
          }}>
         
         <h1 style={{paddingTop:200,paddingLeft:120,fontSize:40}}>start your day with great coffee</h1>
         <p style={{paddingLeft:120}}>freshly brewed perfectly blended our coffee brings people togther
          
         </p>
          </div>
          <div style={{backgroundColor:"beige",height:300,width:"100%",display:'flex',gap:90,marginTop:20}}>
            <div style={{height:300,width:300}}>
              <img src='https://cdn-icons-png.flaticon.com/128/924/924514.png' style={{height:80}}></img>
             <p style={{fontSize:20}}>only the best beans for the best taste</p>
            </div>
             <div style={{height:300,width:300}}>
              <img src='https://cdn-icons-png.flaticon.com/128/497/497384.png'style={{height:80}}></img>
              <p style={{fontSize:20}}>made fresh every single day</p>
             </div>
             <div style={{height:300,width:300}}>
              <img src='https://cdn-icons-png.flaticon.com/128/151/151910.png' style={{height:80}}></img>
              <p style={{fontSize:20}}>A perfect place to relax and unwind</p >
             </div>
             <div style={{height:300,width:300}}>
              <img src='https://cdn-icons-png.flaticon.com/128/3085/3085481.png'style={{height:80}}></img>
             <p style={{fontSize:20}}>always here with a smile</p>
             </div>
          </div>
          <div main style={{backgroundColor:"#FFE4E1",  height:200,display:"flex",gap:40 , marginTop:"20px" , marginBottom:"20px"}} >
           
             <div style={{height:200,width:320}}>
              <p style={{color:"brown",paddingLeft:60,paddingTop:20,fontSize:20}}>our menu</p>
              <h1 style={{paddingLeft:30}}>popular drink</h1>
              <p style={{paddingBottom:50,paddingLeft:30,color:"brown"}}>discover our most loved coffee creation and refreshing bevrages</p>
              </div>
             <div style={{height:200,width:250}}>
              <img src='./firstimage.png' style={{height:200,width:250}}/>
             </div>
              <div  style={{height:200,width:250}}>
                <img src='./secondimage.png' style={{height:200,width:250}}/>
              </div>
               <div  style={{height:200,width:250}}>
                <img src='./fifthimage.png' style={{height:200,width:250}}/>
               </div>
                <div  style={{height:200,width:250}}>
                  <img src='./forthimage.png' style={{height:200,width:250}}/>
                </div>
          </div>
          <div style={{backgroundColor:"#F5F5DC",height:200,display:"flex",gap:460}}>
          <div style={{height:200,width:380,marginLeft:90}}>
          <p style={{color:"brown",fontSize:"20",paddingTop:20}}>ABOUT US</p>
          <h1>Our Coffee Story</h1>
          <p style={{}}>CoffeeNest was born from a simple idea —
            that great coffee brings people together.
            We're passionate about serving high-quality
            coffee and creating a warm, welcoming space
            for everyone.</p>
          </div>
          <div style={{height:200,width:350}}>
            <img src='./sideimage.png' style={{height:200}}></img>
          </div>
          </div>



      <Footer/>
          
    </div>
  )
}

export default Homepage
