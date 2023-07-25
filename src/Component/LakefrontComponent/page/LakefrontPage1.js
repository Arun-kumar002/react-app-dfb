import React, { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useNavigate} from 'react-router-dom';

 function LakefrontPage1() {const navigate = useNavigate();
 const [date, setDate] = useState(new Date());
 const images =[
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/97ed7862-45f6-43cf-a220-1daee37ee561.jpeg?im_w=1200" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/ed71a58c-c051-4277-a805-7b1677fccc12.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/d278e9d9-5371-4a96-8d31-6f43afe33ba2.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/f1c53fc1-60b6-48f6-8890-c72c2b895163.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/cb62bfd8-7ef8-49c8-9657-a044260d9590.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/655c2655-0de7-4ee5-9c49-9996d9cc9748.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/b79b0a6d-56d0-4032-8ea0-fe72582078ef.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/6a1f7815-0ef1-423b-9497-559e9ee0cb65.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/5d6aa957-25e4-4d46-8d4b-1d105021751e.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/1d568ce9-92fa-4f61-bcf4-41d8d2a148b6.jpeg?im_w=1200" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/6d92b1da-6a96-4c4c-9e3d-609fd1f7f4dc.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/e69e45e1-c81d-471a-a20c-ac68c49171a0.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/9c949075-e3be-4a0f-baab-a8dfa8456806.jpeg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/f6efeabc-77de-49e6-acf9-fc5b3c78cb85.jpeg?im_w=1200" },
   { "url": "https://a0.muscache.com/im/pictures/miso/Hosting-43817960/original/118cf3ea-49b4-42a2-8dfc-14051b8a0401.jpeg?im_w=1200" }
 ]
     const [counter, setCounter] = useState(1);
     const incrementCounter = () => { 
      if(counter<10) {
         setCounter(counter + 1);
      }
   };
     let decrementCounter = () => { 
      if(counter>1) {
         setCounter(counter - 1);
      }
   };
   const [counter1, setCounter1] = useState(0);
   const AddCounter = () => { 
    if(counter1<9) {
       setCounter1(counter1 + 1);
    }
 };
   let MinusCounter = () => { 
    if(counter1>0) {
       setCounter1(counter1 - 1);
    }
 };
 const [count, setCount] = useState(0);
 const AddCount = () => { 
  if(count<5) {
     setCount(count + 1);
  }
};
 let MinusCount = () => { 
  if(count>0) {
     setCount(count - 1);
  }
};
return (
<>
    <nav className="navbar navbar-light bg-secondary">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" width="150" height="45" className="d-inline-block align-top" alt="" style={{marginLeft:"40px",margin:"15px"}}/>
        <div style={{fontSize:"35px", color:"red", marginRight:"50px"}}><b>Explore Your Place To Stay</b></div>
    </nav>
    <h3 style={{ margin:"40px 0px 10px 100px"}}>Cedar Peak • 2 Bedroom Barrier-Free Chalet</h3>
    <div style={{ color: "orange", marginLeft:"100px"}}>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span> <b>5.0</b>
    </div>
    <div style={{ margin:"40px 0px 20px 100px"}}>
       <SimpleImageSlider
        width={1200}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        navSize={40}
        autoPlay={true}
        />
    </div>
   
   <div style={{border: "1px solid black", boxShadow:" 10px 10px 5px #aaaaaa", position:"absolute",top:"1000px",right:"50px",width:"400px",left:"900px",height:"600px", padding: "20px", borderRadius: "15px"}} id="sticky">
      <h4>₹21,549 night</h4>
    <div class="container">
      <div class="row">
         <div style={{border: "1px solid black",width:"350px",height:"60px"}} class="col">
         {date.length > 0 ? (
   <p>
     <span><b>CHECK-IN:</b></span>{' '} {date[0].toDateString()}
     <br/>
     <span><b>CHECK-OUT:</b></span> {date[1].toDateString()}
   </p> ): (
        <p>
        
      </p>
         )}
            </div>
      </div>
      <div class="row">
         <div style={{border: "1px solid black",width:"700px",height:"230px",padding:"15px"}} class="col">
          <div class="row">
           <div style={{display: "flex", flexDirection: "column"}} class="col">
            <h5>Adults</h5>
            <p >Age 13+</p></div>
            <div style={{display: "flex"}} class="col" >
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={incrementCounter}>+</button>  
            <div style={{margin: "0px 10px"}}>{counter}  </div>
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={decrementCounter}>-</button>
            </div>
            </div> 
            <div class="row">
           <div style={{display: "flex", flexDirection: "column"}} class="col">
            <h5>Children</h5>
            <p >Ages 2–12</p></div>
            <div style={{display: "flex"}} class="col" >
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={AddCounter}>+</button>  
            <div style={{margin: "0px 10px"}}>{counter1}  </div>
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={MinusCounter}>-</button>
            </div>
            </div> 
            <div class="row">
           <div style={{display: "flex", flexDirection: "column"}} class="col">
            <h5>Infants</h5>
            <p >Under 2</p></div>
            <div style={{display: "flex"}} class="col" >
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={AddCount}>+</button>  
            <div style={{margin: "0px 10px"}}>{count}  </div>
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={MinusCount}>-</button>
            </div>
            </div> 
           </div>
      </div>
    </div>
    <button style={{width:"355px", margin:"15px 3px"}} type="button" class="btn btn-danger" onClick={()=>navigate("/payment1")}>Reserve</button>
    <div class="row">
      <div style={{display: "flex", flexDirection: "column"}} class="col">
         <h6>₹21,549 x 7 nights</h6></div>
      <div style={{display: "flex"}} class="col" >
            <p >₹1,50,843</p></div>     
    </div> 
    <div class="row">
      <div style={{display: "flex", flexDirection: "column"}} class="col">
         <h6> Cleaning fee</h6></div>
      <div style={{display: "flex"}} class="col" >
            <p >₹6,062</p></div>    
    </div> 
    <div class="row">
      <div style={{display: "flex", flexDirection: "column"}} class="col">
         <h6>Service fee</h6></div>
      <div style={{display: "flex"}} class="col" >
            <p >₹25,475</p></div>     
    </div> 
    <hr style={{ margin:"5px"}} class="col-11"/>
    <div class="row">
      <div style={{display: "flex", flexDirection: "column"}} class="col">
         <h6> Total before taxes</h6></div>
      <div style={{display: "flex"}} class="col" >
            <p >₹1,82,381</p></div>     
    </div> 
   </div>
   
        <h4 style={{ margin:"40px 0px 15px 100px"}}>Entire chalet hosted by Geoffrey</h4>
    <ul style={{ marginLeft:"80px",display:"flex",columnGap:"20px"}}>
        <li>4 guests</li>
        <li>2 bedrooms</li>
        <li>2 beds</li>
        <li>1 bathrooms</li>
    </ul>
    <hr style={{ marginLeft:"100px"}} class="col-6"/>
    <div class="row">
       <div style={{ marginLeft:"115px"}} class="col-sm-0">
         <i class="fa fa-certificate fa-2x" aria-hidden="true"></i>
       </div>
       <div class="col-6">
        <p><b>Geoffrey is a Superhost</b></p>
        <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for their guests.</p>
       </div>
    </div>
    <div class="row">
       <div style={{ marginLeft:"115px"}} class="col-sm-0">
       <i class="fa fa-key fa-2x" aria-hidden="true"></i>
       </div>
       <div class="col-6">
        <p><b>Great check-in experience</b></p>
        <p>100% of recent guests gave the check-in process a 5-star rating.</p>
       </div>
    </div>
    <div class="row">
       <div style={{ marginLeft:"115px"}} class="col-sm-0">
       <i class="fa fa-calendar-check-o fa-2x" aria-hidden="true"></i>
       </div>
       <div class="col-6">
        <p>Free cancellation for 48 hours.</p>
       </div>
    </div>
    <hr style={{ marginLeft:"100px"}} class="col-6"/>

    {/* aircover */}
    <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="aircover" width="130" height="28" style={{ marginLeft:"100px"}}/>
    <div style={{ marginLeft:"85px",marginTop:"15px",marginBottom:"15px"}} class="col-6">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</div>
    <div class="row">
      <div class="col-sm-3" style={{ marginLeft:"100px"}}>
        <p><b>Booking Protection Guarantee</b></p>
        <p style={{ textAlign: "justify"}}>In the unlikely event that a Host needs to cancel your booking within 30 days of check-in, we’ll find you a similar or better home or we’ll refund you.</p>
      </div>
      <div class="col-sm-3" style={{ marginLeft:"50px"}}>
        <p><b>Check-In Guarantee</b></p>
        <p style={{ textAlign: "justify"}}>If you can’t check into your home and the Host cannot resolve the issue, we’ll find you a similar or better home for the length of your original stay or we’ll refund you.</p>
      </div>
    </div>
    <div class="row">
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><b>Get-What-You-Booked Guarantee</b></p>
        <p style={{ textAlign: "justify"}}>If at any time during your stay you find your listing isn't as advertised – for example, the refrigerator stops working and your Host can’t easily fix it, or it has fewer bedrooms than listed – you'll have three days to report it and we’ll find you a similar or better home, or we’ll refund you.</p>     
       </div>
       <div class="col-6 col-sm-3" style={{ marginLeft:"50px"}}>
        <p><b>24-hour Safety Line</b></p>
        <p style={{ textAlign: "justify"}}>If you ever feel unsafe, you’ll get priority access to specially trained safety agents, day or night.</p>
       </div>
    </div>
    <hr style={{ marginLeft:"100px"}} class="col-6"/>

    {/* About the space */}
    <div class="col-6" style={{ marginLeft:"90px"}}>
    <h4>About the space</h4>
    <p>Relax with the whole family at this peaceful 5 Bedroom Villa overlooking Hout Bay Beach</p>
    <p>** LOADSHEDDING BACK UP FROM DEC ONWARDS *</p>
    <p>5 BEDROOMS – 3 BATHROOMS</p>
    <p>This spacious modern family home boasting 5 bedrooms. The main bedroom ( en-suite) has a king-size bed, the remaining four bedrooms have queen-sized beds.</p>
    <p>Open plan kitchen and lounge area with fire place overlooking the mountains.</p>
    <p>The kitchen is fully equipped.</p>
    <p><b>The space</b></p>
    <p>There is an outdoor pizza oven, BBQ grill, large garden and swimming pool.</p>
    <p>Main Bedroom - King size bed (ensuite)</p>
    <p>Remaining 4 Bedrooms do have Queen size beds and share 2 bathrooms</p>
    <p>Housekeeping included from Monday to Friday</p>
    </div>
    <hr style={{ marginLeft:"100px"}} class="col-6"/>

    {/* What this place offers */}
    <h4 style={{ marginLeft:"100px"}}>What this place offers</h4>
    <div class="row">
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-picture-o" aria-hidden="true"></i>   Bay view</p>
       </div>
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-sun-o" aria-hidden="true"></i> Beach view</p>
       </div>
    </div>
    <div class="row">
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-cutlery" aria-hidden="true"></i> Kitchen</p>
       </div>
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-wifi" aria-hidden="true"></i> Wifi</p>
       </div>
    </div>
    <div class="row">
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-car" aria-hidden="true"></i> Free parking on premises</p>
       </div>
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-map" aria-hidden="true"></i> Pool</p>
       </div>
    </div>
    <div class="row">
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-television" aria-hidden="true"></i> HDTV</p>
       </div>
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-shower" aria-hidden="true"></i> Outdoor shower</p>
       </div>
    </div>
    <hr style={{ marginLeft:"100px"}} class="col-6"/>

    {/* Select checkout date */}
    <h4 style={{ marginLeft:"100px"}}>Select checkout date</h4>
    <p style={{ marginLeft:"100px"}}>Minimum stay: 5 nights</p>
    
    <div style={{ marginLeft:"100px"}}>
     <Calendar onChange={setDate} value={date} showDoubleView={true} selectRange={true}/>
     {date.length > 0 ? (
   <p>
   <span><b>CHECK-IN:</b></span>{' '} {date[0].toDateString()}
   <br/>
   <span><b>CHECK-OUT:</b></span> {date[1].toDateString()}
 </p> ): (
         <p></p>
         )}
   </div>
   

{/* Review */}
<hr style={{ marginLeft:"100px"}} class="col-10"/>
<div style={{marginLeft:"100px", display:"flex",columnGap:"10px", fontSize:"20px"}}>
        <span class="fa fa-star checked"></span>
        <b>5.0</b><ul ><li >5 reviews</li></ul>
</div>
   <div class="row">
       <div style={{ marginLeft:"115px"}} class="col-sm-0">Cleanliness</div>
       <div class="col-4">
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>5.0
       </div>
       <div  class="col-sm-0">Accuracy</div>
       <div class="col-4">
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>5.0
       </div>
   </div>
   <div class="row">
       <div style={{ marginLeft:"115px"}} class="col-sm-0">Communication</div>
       <div class="col-4">
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>5.0
       </div>
       <div  class="col-sm-0">Location</div>
       <div class="col-4">
         <progress  style={{ margin:"10px"}} id="file" max="100" value="94"></progress>4.4
       </div>
   </div>
   <div class="row">
       <div style={{ marginLeft:"115px"}} class="col-sm-0">Check-in</div>
       <div class="col-4">
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>5.0
       </div>
       <div  class="col-sm-0">Value</div>
       <div class="col-4">
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>5.0
       </div>
   </div>

   <div class="row">
      <div style={{ marginLeft:"100px", textAlign: "justify",marginRight:"50px", marginTop:"30px"}} class="col-4">
         <h5>Lydia</h5>
         <p>Jen was a wonderfully responsive and helpful host and Thandi, who did housekeeping was a marvel. We tried to be respectful and do most of own cleaning but for such w big group having help made our lives a lot easier. I would highly recommend this place.</p>
      </div>
      <div style={{ textAlign: "justify",marginRight:"50px", marginTop:"30px"}} class="col-4">
         <h5>Zimkitha</h5>
         <p>The pictures don't do any justice to how beautiful the villa is.Jen welcomed us with such warm hands even though we were late.There was also complimentary wine on arrival and pizza as well.The house was fully equipped.</p>
         <p>Absolutely beautiful stay, thank you Jen for being such a great host❤️. </p>
      </div>
   </div>

   <div class="row">
      <div style={{ marginLeft:"100px", textAlign: "justify",marginRight:"50px"}} class="col-4">
         <h5>Thokozani</h5>
         <p>Beautiful place, tranquil and Jenny is a great host. Really enjoyed our group stay.</p>
      </div>
      <div style={{ textAlign: "justify",marginRight:"50px"}} class="col-4">
         <h5>Craig</h5>
         <p>Greta value, great spot, well kept and great value for money. The VIEW is INCREDIBLE - !</p>
      </div>
   </div>

   {/* Footer */}

   <footer className="bg-secondary text-center">
  <div className="container p-2 pb-0">
    <section className="text-white mb-0">    
      <a className="btn text-white btn-floating m-1" style={{backgroundColor: "blue"}} 
         href="https://www.facebook.com" role="button"><i className="fa fa-facebook-official" aria-hidden="true"></i>
      </a>
     
      <a className="btn text-white btn-floating m-1" style={{backgroundColor: "skyblue"}}  
         href="https://twitter.com" role="button"><i className="fa fa-twitter" aria-hidden="true"></i>
      </a>
      
      <a className="btn text-white btn-floating m-1" style={{backgroundColor: "red"}} 
        href="https://www.google.co.in" role="button"><i className="fa fa-google" aria-hidden="true"></i>
      </a>

      <a className="btn text-white btn-floating m-1" style={{backgroundColor: "violet"}} 
        href="https://www.instagram.com" role="button"><i className="fa fa-instagram" aria-hidden="true"></i>
      </a>
    </section>
  </div>
  <div className="text-white text-center p-2" >© 2023 Airbnb,Inc.</div>
</footer>
</>
);
}
export default LakefrontPage1;