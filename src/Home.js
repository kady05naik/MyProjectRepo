import React from 'react';
import "./Home.css";
import Product from './Product';
import BackImage from "./home_background.PNG";
import logo from './logo.PNG';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
            <img className="home_image" src={BackImage} alt="" />
                <div className="home_row">
                    <Product id ="1" title="Furniture Solid Wood 3 Seater Sofa"
                    price={13599}
                    image="https://rukminim1.flixcart.com/image/612/612/kua4r680/sofa-sectional/z/f/k/symmetrical-72-39-cream-cushion-cotton-177-8-36-hhfk-81-original-imag7fytx3hrkrcn.jpeg?q=70"/>
                
                    <Product id ="2" title="3+2+1 Seater Fabric Sofa Set"
                    price={34999}
                    image="https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=100,format=auto/in-resources/407e79ae-b096-4e8d-8e8f-44f6fc5ec664/Images/ProductImages/Source/ammrii/FLLSSSFBMTMR11761M-1.jpg"/>
                    
                    <Product id ="3" title="Wooden Diwan without BackRest"
                    price={14178}
                    image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR4FtfJg7NIvjdrg7EmC0aDqsHem7XS1v8mygjmTYFAzk0oK8e04xK9XC1rGiaBDyjL94RZQtFIMfgqIplbIXrPcOxRbAfuuwMd-h7wYT4J&usqp=CAc" />
                    
                    <Product id ="4" title="Wooden Diwan without BackRest"
                    price={14500}
                    image="https://cdn.shopify.com/s/files/1/1890/8745/products/Elegant-Wooden-Daybed-Divan-diwan-with-without-mattress-cushion-option_229fc34c-7d1e-44d8-bd75-c909d4fef8e4_1200x.jpg?v=1629051096" />
                       
                </div>

                <div className="home_row">
                    <Product id ="5" title="Beige Solid Fabric 3+2 Sofa Set "
                    price={35000}
                    image="https://f1af951e8abcbc4c70b9-9997fa854afcb64e87870c0f4e867f1d.lmsin.net/1000008280215-1000008280215-0401_01-710.jpg"/>
                    
                    <Product id ="6" title="Fabric 3 + 1 + 1 Black Grey Sofa Set"
                    price={38060}
                    image="https://rukminim1.flixcart.com/image/416/416/jtuej680/sofa-set/w/c/e/grey-chenille-nsagiblkgr311-3-1-1-bharat-lifestyle-black-grey-original-imaff3u6zwrvrh86.jpeg?q=70"/>

                    <Product id ="7" title="3 Seater Fabric Sofa Set "
                    price={12000}
                    image="https://www.ikea.com/in/en/images/products/friheten-3-seat-sofa-bed-skiftebo-blue__0690278_pe723201_s5.jpg?f=s"/>
                </div>
                    
                <div className="home_row">
                    <Product id ="8" title="Metal 4 Seater Dining Set "
                    price={17500}
                    image="https://rukminim1.flixcart.com/image/416/416/ku5ufm80/dining-set/t/k/f/100-blue-2-0-wrought-iron-5-square-49-81-18-40-4-seater-130-76-original-imag7cnmrx92fvwv.jpeg?q=70"/>
                    
                    <Product id ="9" title="Wood 2 Seater Dining Table"
                    price={19500}
                    image="https://rukminim1.flixcart.com/image/416/416/k2w6xe80/dining-table/a/g/k/2-seater-particle-board-ofdsw-studio-kook-sleeperwood-original-imafm5aczkyzfrfm.jpeg?q=70"/>

                    <Product id ="10" title="Wood Dining Table Without Chair"
                    price={8500}
                    image="https://m.media-amazon.com/images/I/61Gh3r2tUCL._SL1200_.jpg"/>

                    <Product id ="11" title="Dining Table- 4 Seater "
                    price={17999}                   
                    image="https://rukminim1.flixcart.com/image/416/416/kgtqhe80-0/dining-set/f/x/q/4-seater-black-tempered-glass-ds4c1bla06ac2-flipkart-perfect-original-imaf3mamcwvfgaby.jpeg?q=70"/>

                </div>

                <div className="home_row">
                    
                    <Product id ="12" title="Wood Four Door Wardrobe"
                    price={22099}
                    image="https://m.media-amazon.com/images/I/41pT9pWEOXL.jpg"/>
                    
                    <Product id ="13" title="7 Door With 3 Drawer Wardrobe"
                    price={36990}
                    image="https://storage.sg.content-cdn.io/cdn-cgi/image/width=520,height=520,quality=100,format=auto/in-resources/407e79ae-b096-4e8d-8e8f-44f6fc5ec664/Images/ProductImages/Source/JULIETA_7_DR_&_3_DRW_WARDROBE_FBIBWDPBMTWN68140I_(1).jpg"/>


                    <Product id ="14" title="Designer Wardrobe"
                    price={36990}
                    image="https://ii1.pepperfry.com/media/catalog/product/s/p/568x625/spectra-4-door-wardrobe-in-walnut-finish-by-home-centre-spectra-4-door-wardrobe-in-walnut-finish-by--5vl5ja.jpg"/>
                
                </div>

                <div className="home_row">
                    
                    <Product id ="15" title="Malaysian queen size Bed with hydraulic storage"
                    price={30000}
                    image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSq9FWA-Gn-4oArLaKK78bf6BEbEyzLi3zWRwPhIzp_Bl7BAfFqTgxFcxIGmDNpPV0yhD_2FtOmdSd1a7mnmjQ7jdEV8UoEmWLkUVrA5c8&usqp=CAE"/>

                    
                    <Product id ="16" title="king size designer bed with hydraulic storage "
                    price={45000}
                    image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSltz8_wD9GDbrLSU7SoO2ExU75nY34zAVQE8KYU8pcWfXjwNM_NfhmcSVkrt_W-Ciw24N0dNXcl1U3FjidZjehYDqxsbN2WA&usqp=CAE"/>
            
                </div>
            

            <div className='about'>
                <div className='first_col'>
                    <h5>About us -</h5>
                   
                    <div className='aboutUs'>
                        <h6>
                            <ul>
                                <b>Samarth Enterprises</b> works in below sectors:
                                <li>Interior Designing, Home Decor</li>
                                <li>All luxurious & turkey Lock & Key projects</li>
                                <li>Construction & Development Projects</li>
                                <li>Government & Private Contracts in Civil & Electricals</li>
                                <li>Chemical, Agricultural, Architechtural, Sofa & Furniture manufaturing</li>
                                
                            </ul>
                        </h6>
                    </div>
                </div>
                <div className='second_col'>
                    <h5>Careers-</h5>
                    <h6>
                        <ul>
                            Advantages of Joining : <b>SAMARTH ENTERPRISES</b>
                            <li>Business Opportunities with us</li>
                            <li>Part Time Income Source ( 5k to 50k )</li>
                            <li>For Flat, Car & Bike without Interest sceame available</li>
                            <li>Best Discount on your Facilitie residential, comercial, Industrial Project</li>
                            <li>5% Monthly Returns on Investment</li>
                            <li>Medical & Educational Facilities</li>
                            <li>Foreign Job Opportunities</li>
                            <li>All Skills Devlopement</li>
                            <li>Knowledge About All fields</li>

                        </ul>
                    </h6>
                </div>
               
                <div className='third_col'> 
                    <h5>Reach out-</h5>
                    <ul>
                        <   h6><b>Samarth Enterprises</b>, Khadi Machine Chowk, Kondhawa, <br></br>Pune- 411048</h6>
                        <h6><i>Call on - 7620087628</i></h6>
                    </ul>
                    
                </div>
                {/** 
                <div>
                    <Link to="/">
                        <img className="header_logo" src={logo} />            
                    </Link>
                </div>
                **/}
            </div>
            <div className='media'>
                    <a  href="https://www.instagram.com/invites/contact/?i=pfn7oo2p5j23&utm_content=72rj1as"  target="_blank">
                        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" />
                    </a>
                    <a  href="https://www.facebook.com/profile.php?id=100076502796097"  target="_blank">
                        <img src="https://freepngimg.com/save/65617-messenger-picture-icon-facebook-logo-download-hq-png/1600x1600" />
                    </a>
                    <a href="https://wa.me/c/917620087628"  target="_blank">
                        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />
                   </a>
                   <br></br>
                   <h3>Connect with us</h3>
            </div>
            </div>
        </div>
    );
}

export default Home
