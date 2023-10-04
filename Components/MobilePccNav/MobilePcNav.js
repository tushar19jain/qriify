import {FaLinkedinIn, FaXTwitter} from 'react-icons/fa6'
import {FaProductHunt} from 'react-icons/fa'
import './MPN.css'
import Link from 'next/link'
const MobilePcNaV=()=>{
    return(
        <div className='navbar'>
              <ul className='uppernavLinks'>
               <a href='https://linktr.ee/jaintushar'><li>More products</li></a> 
               <a href='https://x.com/tushar20jain'><li><FaXTwitter /></li></a> 
               <a href='https://www.producthunt.com/@tushar_jain13'><li><FaProductHunt /></li></a> 
               <a href='https://www.linkedin.com/in/tusharjain2003'><li><FaLinkedinIn /></li></a> 
               <Link href = '/About'>About version</Link>
            <h3>Qrify 2023</h3>  
            </ul>
        </div>
    )
}
export default MobilePcNaV;