import React from 'react'
import './Footer.css'
import InstagramIcon from '../../assets/icons/instagramIcon.png'
import WhatsappIcon from '../../assets/icons/whatsappIcon.png'
import XIcon from '../../assets/icons/xIcon.png'
import FacebookIcon from '../../assets/icons/facebookIcon.png'
import MediumIcon from '../../assets/icons/mediumIcon.png'
// import Icon from '../../assets/icons/instagramIcon.png'
import LinkedinIcon from '../../assets/icons/linkedinIcon.png'
import logo from '../../assets/Housing-Quest-PNG.png'


const Footer = () => {
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='footer'>
            <div className='d-flex justify-content-between gap-3'>
                <div className='d-flex text-white align-items-center gap-2'>
                    {/* <h1 className='logo m-0'>HQ</h1>
                <p className='logo-name m-0'>Housing <br />Quest</p> */}
                    <img src={logo} alt='Housing Quest' width={100} height={50} />

                </div>
                <div className='d-flex gap-2 flex-wrap text-white align-items-center justify-content-evenly w-100'>
                    <span style={{ cursor: "pointer" }} onClick={() => handleScroll('home')}>Home</span>
                    <span style={{ cursor: "pointer" }} onClick={() => handleScroll('about')}>About Us</span>
                    <span style={{ cursor: "pointer" }} onClick={() => handleScroll('service')}>Service</span>
                    <span style={{ cursor: "pointer" }} onClick={() => handleScroll('property')}>Property</span>
                    <span style={{ cursor: "pointer" }} onClick={() => handleScroll('contact')}>Contact</span>
                </div>
                <div className='d-flex align-items-center gap-3'>
                    <a href='https://www.instagram.com/housingquest?igsh=MTZscXM4dGs1eG5jcA%3D%3D&utm_source=qr' target='_blank' ><img src={InstagramIcon} alt='instagram' width={20} height={20} /></a>
                    <a href='https://medium.com/@housingquestrealestates' target='_blank' ><img src={MediumIcon} alt='x' width={20} height={20} /></a>
                    <a href='https://wa.me/+971563600699' target='_blank' ><img src={WhatsappIcon} alt='Whatsapp' width={20} height={20} /></a>
                    <a href="https://www.facebook.com/people/Housing-Quest-Real-Estates/61574138710378/"><img src={FacebookIcon} alt='Facebook' width={20} height={20} /></a>
                    <a href='https://x.com/Hqrealestates' target='_blank' ><img src={XIcon} alt='Medium' width={20} height={20} /></a>
                    <a href='https://www.linkedin.com/company/106353735/admin/dashboard/'><img src={LinkedinIcon} alt='Linkedin' width={20} height={20} /></a>
                </div>
            </div>
            <div className='text-center'>
                <a className='footer-author' href='https://www.pixelpanda.ae/' target='_blank'>This website is Designed and Developed by <b>The Pixel Panda Technology</b></a>
            </div>
        </div>
    );
}

export default Footer