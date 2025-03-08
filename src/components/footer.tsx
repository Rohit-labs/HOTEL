function Footer() {

return(
    <>
      <div className="w-full min-h-[590px] bg-[#2F2F2F] py-8 md:py-12 px-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start border-t border-b border-white py-6 gap-y-4">
        <div className="flex-1 text-white">
           <h2 className="font-playfair font-bold text-4xl mb-6">Get in Touch</h2>

            <div className="flex items-start gap-3 mb-4">
                <img src="/Address.png" alt="Address Icon" className="w-12 h-12 mt-6" />
              <div>
                 <p className="text-xl font-bold">Address:</p>
                 <p>Delicacy Resto & Bar</p>
                 <p>Ramdev Park Road, Mira Road,</p>
                 <p>Thane 401107.</p>
                </div>
            </div>

            <div className="mb-4 flex items-start gap-3">
               <img src="/Email.png" alt="Email Icon" className="w-12 h-12 mt-1" />
               <div>
                 <p className="text-xl font-bold">Email:</p>
                   <p>delicacy007@gmail.com</p>
                </div>
            </div>

            <div className="flex items-start gap-3">
               <img src="/Phone.png" alt="Phone Icon" className="w-12 h-12 mt-1" />
               <div>
                   <p className="text-xl font-bold">Telephone:</p>
                    <p>0222 76XX XX34</p>
                </div>
            </div>

       </div>
         <div className="flex-1 mt-6 md:mt-0">
            <h2 className="font-bold text-white text-4xl">Quick Links</h2>
            <ul className="mt-4 text-xl">
                <li className="mb-2">
                    <a href="#" className="text-white">• Home</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-white">• About Us</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-white">• Menu</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-white">• Contact</a>
                </li>
            </ul>    
         </div>
          <div className="flex-1 mt-6 md:mt-0">
          <h2 className="font-bold text-white text-4xl">Follow Us On:</h2>
          <div className="flex mt-4 m-4">
            <a href="#" className="mr-4">
                <img src="/twitter.png" alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="#" className="mr-4">
                <img src="/youtube.png" alt="Youtube" className="w-8 h-8" />
            </a>
            <a href="#" className="mr-4">
                <img src="/instagram.png" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="#" className="mr-4">
                <img src="/linked in.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
            </div>   
          </div>
        </div>
      </div>
    </>
)
}
export default Footer