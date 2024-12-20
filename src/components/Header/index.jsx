import React from 'react'

import './style.css'
import home from '../../assets/Home.svg'
import rasm from '../../assets/2.svg'
import rasm1 from '../../assets/subscriptions.svg'
import rasm2 from '../../assets/bookshelf.svg'
import rasm3 from '../../assets/rasm3.svg'
import rasm4 from '../../assets/your-videos.svg'
import rasm5 from '../../assets/watch-later.svg'
import rasm6 from '../../assets/like.svg'
import rasm7 from '../../assets/downarrow.svg'
import rasm8 from '../../assets/rasm8.svg'
import rasm9 from '../../assets/rasm9.svg'
import rasm10 from '../../assets/rasm10.svg';
import rasm11 from '../../assets/rasm11.svg';
import rasm12 from '../../assets/rasm12.svg';

import rasm13 from '../../assets/rasm13.svg';
import rasm14 from '../../assets/rasm14.svg';
import rasm15 from '../../assets/discover.svg'
import Main from '../Main'

function Header() {

    let data = [
        {
         
       img:home,
       info:"Anasayfa"

        },
        {
         info:"Kesfet",
         img:rasm,
        },
        {
            info:"Aboneliklar",
             img:rasm1,
        },
      
       


      ];


      let data1 = [
        
        {
            info:"Kitaplik",
             img:rasm2,
        },
{

    info:"Geçmiş",
    img:rasm3

},

{
    info:"Videolarınız",
     img:rasm4,
},

{
    info:"Daha sonra izle",
     img:rasm5,
},
{
    info:"Beğendiğim videolar",
     img:rasm6,
},

{
    info:"Daha fazla göster",
     img:rasm7,
},

      ];
    let data2=[

        {
            info:"The Game",
             img:rasm8,
        
    },
    {
        info:"Lean Yo",
         img:rasm9,
    },
    {
        info:"Best Kuaför",
         img:rasm10,
    },
{
    info:"Meyau Seu",
     img:rasm11,
}
,{
    info:"Discover Design",
     img:rasm12,
},
{
    info:"Build Game",
     img:rasm13,
},
{
    info:"Vlogger Man",
     img:rasm14,
},
{
    info:"Daha fazla göster",
     img:rasm7
}
    ]
      
      
  return (

    
    <div className='container100'>
      <header>
<div className='container1'>
{

    data.map((item, index1) => {
      return (
        <div className='container' key={index1}>
   <img style={{width:"24px",height:"24px"}} src={item.img} alt="" />
        <p>{item.info}</p>
        
        </div>
        
      )
    })
  
}

</div>


<div className='container2'>
{

    data1.map((item, index) => {
      if(index==0){

        return   <div style={{backgroundColor:"grey"}} className='container' key={index}>
        <img style={{width:"24px",height:"24px"}} src={item.img} alt="" />
             <p>{item.info}</p>
             
             
             
             </div>
      }
      
             
             
      
      return (
        <div className='container' key={index}>
   <img style={{width:"24px",height:"24px"}} src={item.img} alt="" />
        <p>{item.info}</p>
        
        
        
        </div>
        
      )
    })
  
}

</div>


<div className='container3'>
<h2  style={{paddingLeft:"26px",color:"#FFFFFF99"}}>ABONELİKLER</h2>
{
  

    data2.map((item, index) => {
      return (
        
        <div className='container' key={index}>
           
   <img style={{width:"24px",height:"24px"}} src={item.img} alt="" />
        <p>{item.info}</p>
        
        </div>
        
      )
    })
  
}

</div>

<div className='container4'>

  <h1 style={{paddingLeft:"26px"}} >YOUTUBE’DEN DAHA FAZLA İÇERİK</h1>
  <div className='container' >
   <img style={{width:"24px",height:"24px"}} src={rasm15} alt="" />
        <p>Youtube Premium</p>
        
        </div>
</div>

      </header>
<Main/>
    </div>
    
  )
}


export default Header;