"use client"
import { saveAs } from 'file-saver';
import './Barcode.css'
import { useState } from 'react';
import Aboutus from '@/Components/AboutUS/Aboutus';
import MobilePcNaV from '@/Components/MobilePccNav/MobilePcNav';
import Toogle from '@/Components/Toogle/Toogle';
import { BsMenuUp, BsQrCodeScan, BsTwitter } from 'react-icons/bs'
const Barcode=()=>{
    const [data,setData] = useState('Qrify');
    const handleData = (e)=>{
    const newData = e.target.value;
    setData(newData)
    }
    const[lableText,setLableText] = useState('');
    const handlelableText = (e)=>{
    const newlableText = e.target.value;
    setLableText(newlableText);
    }
    const [lableSize,setLableSet] = useState('');
    const handleLableSize = (e)=>{
    const newLableSize = e.target.value;
    setLableSet(newLableSize);
    }
    const [type,setType] = useState('code128');
    const [format,setFormat] = useState('');
    const [imageUrl,setImageUrl] = useState('');
    const handleImageUrl = (e)=>{
    const newUrl = (e).target.src
    setImageUrl(newUrl)
}
    const downloadImg=()=>{
        saveAs(imageUrl,'qrifyQr')
    }
    return(
        <div>
            <div className="uppernav">
            <h3><BsQrCodeScan />Qrify</h3>
            <MobilePcNaV />
            <Toogle />
            </div>
        <div className='main'>
            <div className="barcodeImg">
                <img onLoad ={handleImageUrl} src={`https://barcode.orcascan.com/?data=${data}&type=${type}&text=${lableText}&fontsize=${lableSize}&format=${format}`}height={'230px'}></img>
                <button onClick={downloadImg} style={{backgroundColor:"teal", color:"white" ,borderRadius:"5px", padding:"11px 12px",fontSize:'12px',width:"180px", fontWeight:"bold",border:'none',cursor:'pointer'}}>Downlode</button>
            </div>
            <div className="barcodeSetting">
                <h2>Barcode setting</h2>
                <br></br>
                <h3>Select type: {type}</h3>
                <br></br>
                <button onClick={()=>{setType('code39')}}>Code39 (Digits,Capital letter)</button>
                <button onClick={()=>{setType('datamatrix')}}>datamatrix</button>
                <button onClick={()=>{setType('upce')}}>upce (Only digits)</button>
                <button onClick={()=>{setType('upca')}}>upca (Only digits)</button>
                <button onClick={()=>{setType('code128')}}>code128</button>
                <button onClick={()=>{setType('azteccode')}}>azteccode</button>
                <button onClick={()=>{setType('ean13')}}>ean13 (12-13 digits)</button>
                <button onClick={()=>{setType('ean13')}}>ean8 (12-13 digits)</button>
                <br></br>
                <h3>Enter data:</h3>
                <input onChange={handleData} type="text" placeholder="Qrify barcode"></input>
                <br></br>
                <h3>Enter lable text (optional):</h3>
                <input onChange={handlelableText} type="text" placeholder="Qrify"></input>
                <br></br>
                <h3>Lable font size (is applicable):{lableSize}px</h3>
                <input onChange={handleLableSize} type="range" min={20} max={80}></input>
                <br></br>
                <h3>Select format type:{format}</h3>
                <button onClick={()=>{setFormat('svg')}} >SVG (By default)</button>
                <button onClick={()=>{setFormat('png')}}>PNG</button>
                <button onClick={()=>{setFormat('jpg')}}>JPG</button>
            </div>
        </div>
        <Aboutus />
        </div>
    )
}
export default Barcode;