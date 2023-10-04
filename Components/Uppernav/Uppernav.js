"use client"
import { BsMenuUp, BsQrCodeScan, BsTwitter } from 'react-icons/bs'
import './Uppernav.css'
import MobilePcNaV from '../MobilePccNav/MobilePcNav'
import Toogle from '../Toogle/Toogle'
import MainDB from '../MainDB/MainDB'
const Uppernav=()=>{
    return(
        <div>
            <div className="uppernav">
            <h3><BsQrCodeScan />Qrify</h3>
            <MobilePcNaV />
            <Toogle />
            </div>
            <div>
                <MainDB />
            </div>
        </div>

    )
}
export default Uppernav