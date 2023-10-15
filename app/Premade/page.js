import Toogle from '@/Components/Toogle/Toogle'
import Link from 'next/link'
import './Premade.css'
const Premade=()=>{
    return(
      <div>
        <Toogle />
        <h2>List of templates 🛠️</h2>
        <ul>
        <Link href='/Wifi'><li>Wifi network</li></Link>
        <Link href='/About'><li>Contact information</li></Link>
        <Link href='/About'><li>Email</li></Link>
        <Link href='/About'><li>Location</li></Link>
        <Link href='/About'><li>Events details</li></Link>
        <Link href='/About'><li>Social Media</li></Link>
        <Link href='/About'><li>Survey</li></Link>
        <Link href='/About'><li>Coupon and Promotion</li></Link>
        </ul>
      </div>
    )
}
export default Premade