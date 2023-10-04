"use client"
import { useState } from 'react'
import './Toogle.css'
import {FaLinkedinIn, FaXTwitter, FaXmark} from 'react-icons/fa6'
import {FaBars, FaProductHunt} from 'react-icons/fa'
import Link from 'next/link'
const Toogle=()=>{
    const [isOpen, setIsOpen] = useState(false)
    return(
        isOpen ?
        <div className='openMenu'>
            <h4><FaXmark onClick={()=>{setIsOpen(!isOpen)}} /></h4>
            <a href='https://linktr.ee/jaintushar'><li>More products</li></a>
            <a href='https://x.com/tushar20jain'><li><FaXTwitter /></li></a>
           <a href='https://www.producthunt.com/@tushar_jain13'><li><FaProductHunt /></li></a>
           <a href='https://www.linkedin.com/in/tusharjain2003'><li><FaLinkedinIn /></li></a>
            <Link href='/About'><li>About version</li></Link>
            <h3>Qrify 2023</h3>  
        </div>
        :
        <div>
            <h4><FaBars onClick={()=>{setIsOpen(!isOpen)}} /></h4>
        </div>
    )
}
export default Toogle;