import React from 'react'
import "./style.css"
import rasm1 from '../../youtube/Images.png'
import rasm2 from '../../youtube/Images1.png'
import rasm3 from '../../youtube/Images2.png'
import rasm4 from '../../youtube/Images3.png'
import rasm5 from '../../youtube/Images4.png'
import rasm6 from '../../youtube/Images5.png'
import rasm7 from '../../youtube/Images6.png'
import rasm8 from '../../youtube/Images7.png'
import rasm9 from '../../youtube/Images8.png'
import rasm10 from '../../youtube/Images9.png'
import rasm11 from '../../youtube/Images10.png'
import rasm12 from '../../youtube/Images11.png'

import user1 from '../../youtube/AvatarPhoto.svg'
import user2 from '../../youtube/AvatarPhoto1.jpg'
import user3 from '../../youtube/AvatarPhoto2.png'
import user4 from '../../youtube/AvatarPhoto3.png'
import user5 from '../../youtube/AvatarPhoto4.png'


function Aside() {
    let data = [
        {
          id: 1,
          img: rasm1,
          userImg: user1,
          userinfo: 'Lorem Ipsum is simply dummy text of the printing',
          chanelName: "LOREM IPSUM",
          seen: "156",
          posted: "4",
        },
        {
          id: 2,
          img: rasm2,
          userImg: user2,
          userinfo: 'Lorem Ipsum is simply dummy text of the printing',
          chanelName: "LOREM IPSUM",
          seen: "256",
          posted: "14",
        },

        {
            id: 3,
            img: rasm3,
            userImg: user3,
            userinfo: 'Lorem Ipsum is simply dummy text of the printing',
            chanelName: "LOREM IPSUM",
            seen: "456",
            posted: "15",
          },
  
         
          {
            id: 4,
            img: rasm4,
            userImg: user4,
            userinfo: 'Lorem Ipsum is simply dummy text of the printing',
            chanelName: "LOREM IPSUM",
            seen: "556",
            posted: "14",
          },
          {
            id: 5,
            img: rasm5,
            userImg: user5,
            userinfo: 'Lorem Ipsum is simply dummy text of the printing',
            chanelName: "LOREM IPSUM",
            seen: "246",
            posted: "44",
          },
          {
            id: 6,
            img: rasm6,
            userImg: user1,
            userinfo: 'Lorem Ipsum is simply dummy text of the printing',
            chanelName: "LOREM IPSUM",
            seen: "456",
            posted: "145",
          },
          {
            id: 7,
            img: rasm7,
            userImg: user2,
            userinfo: 'Lorem Ipsum is simply dummy text of the printing',
            chanelName: "LOREM IPSUM",
            seen: "356",
            posted: "12",
          },
          {
            id: 8,
            img: rasm8,
            userImg: user3,
            userinfo: 'Lorem Ipsum is simply dummy text of the printing',
            chanelName: "LOREM IPSUM",
            seen: "25",
            posted: "141",
          },
          {
            id: 9,
            img: rasm9,
            userImg: user4,
            userinfo: 'Lorem Ipsum is simply dummy text of the printing',
            chanelName: "LOREM IPSUM",
            seen: "251",
            posted: "11",
          },
  
          {
            id: 10,
            img: rasm10,
            userImg: user5,
            userinfo: 'Lorem Ipsum is simply dummy text of the printing',
            chanelName: "LOREM IPSUM",
            seen: "56",
            posted: "10",
          },
          {
            id: 11,
            img: rasm11,
            userImg: user1,
            userinfo: 'Lorem Ipsum is simply dummy text of the printing',
            chanelName: "LOREM IPSUM",
            seen: "257",
            posted: "14",
          },
          
  
          {
            id: 12,
            img: rasm12,
            userImg: user2,
            userinfo: 'Lorem Ipsum is simply dummy text of the printing',
            chanelName: "LOREM IPSUM",
            seen: "211",
            posted: "111",
          },
          
      ];
      
  return (
    <>
      <aside >
<div className="aside1">
{

    data.map((val)=>(
<div className='aside2' key={val.id}>

<img src={val.img}></img>
<div className='aside3'>
<img src={val.userImg} alt="" />

<div className='aside4'>
  <p>{val.userinfo}</p>
  <h2>{val.chanelName}</h2>
  <div className='aside5'>
<p>{val.seen} Görüntüleme</p>
<p> &#9679;</p>
<p>{val.posted} Dakika önce</p>

  </div>
</div>

</div>

</div>

    ))
}

</div>
        
      </aside>
    </>
  )
}

export default Aside
