import React from 'react'
import rasm16 from '../../assets/Navbar-2.png'
import "./style.css"
import Aside from '../Aside'
function Main() {
  let datas=[
    {
      id:1,
      programm:"Kino"
    },
    {
      programm:"Comedy",
    },
    {
      programm:"Mix",
    },
    {
      programm:"Cartoons",
    },
    
    {
      programm:"Muzik",
    },
    {
      programm:"Fudbol",
    },
    {
      programm:"El sanatları ",
    },
    {
      programm:"UX Tasarım  ",

    },
      {
      programm:"Animasyon   ",
      
    },
    {
      programm:"Görsel sanatlar  ",
      
    },
    {
      programm:"Son yüklenenler   ",
      
    },
    
  ]
  return (
    <>
      <main>
       <div className='main1'>
        <div className='main2'>

{

  datas.map((val)=>{
    
    if(val.id==1){
      return <button style={{backgroundColor:"white",color:"black"}}>{val.programm}</button>
    }
return <button>{val.programm}</button>

  })
    

}
</div>
       </div>

  <Aside/>
        
      </main>
    </>
  )
}

export default Main
