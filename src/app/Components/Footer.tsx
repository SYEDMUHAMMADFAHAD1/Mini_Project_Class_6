import Link from "next/link"
export default function Footer (){
    return (
        <div className="justify-center text-gray-400 text-sm bg-gray-800 font-serif font-light py-2 cursor-pointer">
            <p className=" text-center">Copyright © 2003 - 2024 PakWheels (Pvt) Ltd. - All Rights Reserved.</p>
            <p className=" text-center">Terms of Service |  Privacy Policy</p> 
            <br/>
            <div className="text-center font-bold text-white text-xl font-sans py-2 hover:text-blue-600 cursor-pointer  ">
               <Link href="https://www.linkedin.com/in/syed-muhammad-fahad-64a01b2aa//" >Developed By: Syed Muhammad Fahad</Link>
               <p className=" text-center text-xl font-semibold text-white hover:text-yellow-200 cursor-pointer">HomeWork Done! Given By Sir <b>&quot;Ali Jawwad&quot;</b> Slot: Tuesday 7:00 PM To 10:00 PM</p>
            </div>
        </div>
            
        
    )
}
