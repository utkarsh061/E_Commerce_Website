"use client"

 function AboutUs(){
    return(
        <div className="mx-72 my-12 flex flex-wrap justify-center">
            <div className="basis-1/2 max-h-fit flex items-center">
                <img src="/Images/utkarshImage.jpeg" className="h-9/12 w-10/12"/>
            </div>
            <div className="basis-1/2">
                <div className="flex flex-col">
                    <h1 className="font-light text-8xl font-serif tracking-widest mt-16 -ml-48">ABOUT US</h1>
                    <p className="mt-6 text-center">
                     Welcome to <b>Ur's Store</b>!<br/> Designed & Developed by <b>Utkarsh Garg</b>,<br/><br/>
                     We are passionate about making online shopping easy and fun. Our goal is to bring you the best products 
                     from all over the world, right to your doorstep. Whether you're into fashion, gadgets, or home decor, 
                     we've got something for you. Our website is designed to make your shopping experience smooth, 
                     with fast delivery.<br/><br/>Join us on our journey to bring you top-notch products and hassle-free shopping. Let 
                     <b> Ur's Store</b> be your go-to place for all your shopping needs!</p>
                </div>
            </div>
        </div>
    )
 }
 export default AboutUs;