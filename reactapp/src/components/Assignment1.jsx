
import { useState } from 'react';
const Assignment1 = () => {
  // const[count,setCount]=useState(0);
  // const change=()=>{
  //     setCount(count+1);
  // }
  // const click=()=>{
  //     setCount(count-1);
  // }
  // const reset=()=>{
  //     setCount(0);
  // }


  // ques2
    // const[pass,setPass]=useState("password")
    // const change=()=>{
    //   setPass(pass==="password"?"text":"password")
    // }




  // ques3
  // const [theme, setTheme] = useState("light")
  // const togglebutton = () => {
  //   setTheme(theme === "light" ? "dark" : "light")
  // }

  //  qiues4

  // const[login,setLogin]=useState(false)
  // const click=()=>{
  //   setLogin(true)
  // }

  // const show=()=>{
  //   setLogin(false)
  // }


  // ques5

  const[details,setDetails]=useState(false)
  const change=()=>{
    setDetails(!details)
  }



  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={change}>change</button>
      <button onClick={click}>click</button>
      <button onClick={reset}>reset</button> */}


      {/* ques2 */}
      {/* <input type={pass} placeholder='enterpassword'/>
      <button onClick={change}>{pass==="password"?"show password":"hide password"}</button> */}
    

    
     

      {/* ques3 */}
      {/* <div style={{ backgroundColor: theme === "light" ? "white" : "black", height: "100vh", width: "100vw" }}>
      //   <button onClick={togglebutton}>{theme === "light" ? "switch to dark" : "switch to light"}</button> */}
      {/* // </div> */}

      {/* ques4 */}
      {/* {
        login?(
          <div>
          <h1>welcome user</h1>
          <button onClick={show}>logout</button>
          </div>
        ):(
          <button onClick={click}>login</button>

        )
      } */}

      {/* ques5 */}

      <button onClick={change}>{details?"hidedetails":"showdetails"}</button>
      {
        details && (
          <p>helo myself khushman</p>
        )
      }



    </div>
  )
}

export default Assignment1;
