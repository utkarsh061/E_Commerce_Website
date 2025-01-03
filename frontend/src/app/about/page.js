"use client"

 function AboutUs(){
    return(
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto my-8">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-l-lg" src="/Images/utkarshImage.jpeg" alt="Utkarsh Garg's Image"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">About Us</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Welcome to <b>Ur&apos;s Store</b>!<br/> Designed & Developed by <b>Utkarsh Garg</b>,<br/><br/>
            We are passionate about making online shopping easy and fun. Our goal is to bring you the best products 
            from all over the world, right to your doorstep. Whether you&apos;re into fashion, gadgets, or home decor, 
            we&apos;ve got something for you. Our website is designed to make your shopping experience smooth, 
            with fast delivery.<br/><br/>Join us on our journey to bring you top-notch products and hassle-free shopping.Let  
            <b> Ur&apos;s Store</b> be your go-to place for all your shopping needs!
        </p>
    </div>
</div>
    )
 }
 export default AboutUs;