import React from 'react';
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='bottom-0 -z-40 fixed bg-[#4E4A46] w-screen h-[80vh]'>
      <div className='flex justify-between items-start px-24 pt-24'>
        <div>
          <div>
            <img className='w-[3.81vw] cursor-pointer' src="FooterLogo.png" alt="" />
          </div>
          <div className='mt-6'>
            <p className='text-[1.091vw] text-white font-InterTight'>Because running a practice doesn’t have <br /> to be a lonely journey. </p>
          </div>
        </div>
        <div className='text-white font-IvyOraheadline2'>
          <ul>
            <li className='text-[1.429vw] mt-4'>About</li>
            <li className='text-[1.429vw] mt-4 '>Community</li>
            <li className='text-[1.429vw] mt-4 '>Blog</li>
          </ul>
        </div>
        <div className='flex justify-between items-center text-white mt-4'>
          <a className='p-[.595vw] block text-[1.6rem] px-6' href="#">
            <BiLogoInstagramAlt />
          </a>
          <a className='p-[.595vw] block text-[1.6rem]' href="#">
            <FaYoutube />
          </a>
          <a className='p-[.595vw] block text-[1.6rem] px-6' href="#">
            <FaXTwitter />
          </a>
          <a className='p-[.595vw] block text-[1.6rem]' href="#">
            <FaFacebookSquare />
          </a>
        </div>
      </div>

      <div className='flex justify-between mt-[30vh] px-24'>
        <div>
          <p className='text-white text-[1.071vw] font-InterTight'>Fireside, Inc.© 2025</p>
        </div>
        <div>
          <a className='text-white text-[1.071vw] font-InterTight' href="">Privacy Policy</a>
          <a className='text-white text-[1.071vw] font-InterTight ml-14' href="">Accessibility</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;