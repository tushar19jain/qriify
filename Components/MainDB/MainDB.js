"use client"
import { useState } from 'react'
import { saveAs } from 'file-saver';
import './MainDB.css'
import { FaStar, FaToggleOff, FaToggleOn } from 'react-icons/fa6';
const MainDB=()=>{
const [format, setFormat] = useState('');
const [qrData, setQrData] = useState('Welcome to Qrify');
const handleDtaInput = (e)=>{
    const newData = e.target.value;
    setQrData(newData);
}
const [Color,setColor] = useState('');
    const handleColor = (e)=>{
        const newbgColor = e.target.value;
        setColor(newbgColor);
        console.log(setColor)
    }
const [bgcolor,setBgcolor] = useState('')
const handleBgColor = (e)=>{
    const newBGcolor = e.target.value;
    setBgcolor(newBGcolor)
}
const [margin ,setMargin] = useState('5');
const handleMargin = (e)=>{
    const newMargin = e.target.value;
    setMargin(newMargin);
}
const [size,setSize] = useState('150');
const handleSize = (e)=>{
    const newSize = e.target.value;
    setSize(newSize)
}
const [middleImage,setMiddleImage] = useState('');
const handleImage = (e)=>{
    const newImage = e.target.value;
    setMiddleImage(newImage)
}
const [imageSize,setImageSize] = useState('');
const handleImageSize = (e)=>{
    const newImageSize = e.target.value
    setImageSize(newImageSize)
};

const [redundancy,setRedundancy] = useState('');
const [toggle,setToggle] = useState('true')

const [imageUrl,setImageUrl] = useState('');
const handleImageUrl = (e)=>{
    const newUrl = (e).target.src
    setImageUrl(newUrl)
}

const downloadImg=()=>{
    saveAs(imageUrl,'qrifyQr')
}

return(
    toggle ?
        <div className='main'>
           <p  className='toogleoff'>Normal version <FaToggleOff onClick={()=>{setToggle(!toggle)}} style={{fontSize:'30px'}} className='toggle'/></p> 

            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} className='Qrarea'>     
               <img onLoad ={handleImageUrl} download={'Qrify'} id='qrCode'src={`https://api.qrserver.com/v1/create-qr-code/?format=${format}&bgcolor=${bgcolor}&color=${Color}&size=${size}x${size}&data=${qrData}&margin=${margin}&ecc=${redundancy}`}></img>
               <button className='downlodeBtn' onClick={downloadImg} style={{backgroundColor:"teal", color:"white" ,borderRadius:"5px", padding:"11px 12px",fontSize:'12px',width:"180px", fontWeight:"bold",border:'none'}}>DOWNLODE</button>
            </div>
            <div className='Qrsettings'>
                <h1>QR Settings</h1>
                <br></br>
                <h2>Format: {format}</h2>
                <div className='formatBtn'>
                <button onClick={()=>{setFormat('gif')}}>GIF</button>
                <button onClick={()=>{setFormat('jpg')}}>JPG</button>
                <button onClick={()=>{setFormat('jpeg')}}>JPEG</button>
                <button onClick={()=>{setFormat('svg')}}>SVG</button>
                <button onClick={()=>{setFormat('esp')}}>ESP</button>
                <FaStar className='star2'/>
                <FaStar className='star'/>
                </div> 
                <br></br>
                <h2>Enter Url or a text</h2><br></br>
                <input onChange={handleDtaInput} id='qrdata' typeof='text' placeholder=''></input> <br></br>
                <h2>Set margin {margin}px</h2>
                <br></br>
                <input onChange={handleMargin} type='range' min={0} placeholder='max 50' max={50}></input>
                <br></br>
                <h2>Size in px : {size}px X {size}px</h2>
                <br></br>
                <input onChange={handleSize} type='range' min={10} max={500} placeholder='OOOOOO'></input>
                <br></br>
                <h2>Color : {Color}</h2>
                <br></br>
                <input onChange={handleColor} typeof='color' placeholder='000000'></input>
                <br></br>
                <h2>Background color : {bgcolor}</h2>
                <br></br>
                <input onChange={handleBgColor} typeof='color' placeholder='FFFFFF'></input>
                <br></br>
                <h2>Redundancy : {redundancy}</h2>
                <br></br>
                <div className='redundancyBtn'>
                <button style={{background:"linear-gradient(to right, #434343 0%, black 100%);", color:"white"}} onClick={()=>{setRedundancy('l')}}>Low</button>
                <button style={{background:"linear-gradient(to right, #434343 0%, black 100%);", color:"white"}} onClick={()=>{setRedundancy('m')}}>Middle</button>
                <button style={{background:"linear-gradient(to right, #434343 0%, black 100%);", color:"white"}} onClick={()=>{setRedundancy('q')}}>Quality</button>
                <button style={{background:"linear-gradient(to right, #434343 0%, black 100%);", color:"white"}} onClick={()=>{setRedundancy('h')}}>High</button>
                </div>
              </div>
        </div>
        :
        <div className='main'>
           <p  className='toogleoff'>Image version <FaToggleOn onClick={()=>{setToggle(!toggle)}} style={{fontSize:'30px'}} className='toggle'/></p> 
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}} className='Qrarea'>
               <img onLoad ={handleImageUrl} id='qrCode'src={`https://quickchart.io/qr?centerImageHeight=${imageSize}&centerImageWidth=${imageSize}&centerImageUrl=${middleImage}&text=${qrData}&format=${format}&size=${size}`}></img>
               <button onClick={downloadImg} style={{backgroundColor:"teal",color:"white" ,borderRadius:"5px", padding:"12px 13px", width:"180px",fontWeight:"bold",border:'none'}}>DOWNLODE</button>
            </div>
            <div className='Qrsettings'>
                <h1>QR Settings</h1>
                <br></br>
                <h2>Format: {format}</h2>
                <div className='formatBtn'>
                <button onClick={()=>{setFormat('png')}}>PNG</button>
                <button onClick={()=>{setFormat('svg')}}>SVG</button>
                <FaStar className='starAdvance'/>
                </div> 
                <div className='warning' style={{width:'280px',backgroundColor:'#FFF8E6',padding:'10px 15px',fontSize:'13px'}}>
                <h5>
                SVG format does not work if image is embeded in the QR
                </h5>
            </div>
                <br></br>
                <h2>Enter Url or a text</h2><br></br>
                <input onChange={handleDtaInput} id='qrdata' typeof='text' placeholder=''></input> <br></br>
                <br></br>
                <h2>Size in px : {size}px X {size}px</h2>
                <br></br>
                <input onChange={handleSize} type='range' min={10} max={500} placeholder='OOOOOO'></input>
                <br></br>
                <h2>Set middle image</h2>
                <br></br>
                <input onChange={handleImage} typeof='text'placeholder='Enter the url of image'></input>
                <br></br>
                <div className='warning' style={{width:'280px',backgroundColor:'#FFF8E6',padding:'10px 15px',fontSize:'13px'}}>
                    <h5>
                    You should always test the QR code after overlaying an image. This is because an image can potentially block critical portions of the QR code. You can guard against this by making sure the image covers less than ~30% of the available area.
                    </h5>
                </div>
                <br></br>
                <h2>Size of image {imageSize}px :</h2>
                <br></br>
                <input onChange={handleImageSize} min={30} max={500} type='range'></input>
                <br></br>
                <h2>Redundancy : {redundancy}</h2>
                <br></br>
                <div  className='redundancyBtn'>
                <button style={{background:"linear-gradient(to right, #434343 0%, black 100%);", color:"white"}} onClick={()=>{setRedundancy('l')}}>Low</button>
                <button style={{background:"linear-gradient(to right, #434343 0%, black 100%);", color:"white"}} onClick={()=>{setRedundancy('m')}}>Middle</button>
                <button style={{background:"linear-gradient(to right, #434343 0%, black 100%);", color:"white"}} onClick={()=>{setRedundancy('q')}}>Quality</button>
                <button style={{background:"linear-gradient(to right, #434343 0%, black 100%);", color:"white"}} onClick={()=>{setRedundancy('h')}}>High  <p className='highTag' style={{backgroundColor:'yellow',width:'65px',padding:'3px', borderRadius:'20px',color:'black',fontSize:'7px'}}>Best for QR with image</p></button>
                </div>
              </div>
        </div>
    )
}
export default MainDB