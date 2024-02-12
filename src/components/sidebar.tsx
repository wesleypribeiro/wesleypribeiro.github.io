import { HomeOutlined, PersonOutlined, CodeOutlined, WorkOutlineOutlined, PhoneOutlined, South } from "@mui/icons-material"
import { useState } from "react";


export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  // TODO: Add links

  return (
    <aside
      className={`z-50 bg-[#2C3E50] h-full fixed top-0 left-0 text-[#FFFFFF] flex flex-col justify-between transition-all ease-in duration-300 ${isHovered ? 'w-[220px]' : 'w-[112px]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="text-center py-8 px-4 font-medium text-[#FFFFFF] text-5xl bg-[#1a2735]">W<span className='text-4xl'>R</span></p>
      <nav className="p-7">
        <ul className="list-none flex flex-col text-[0.75rem] font-light">
          <a href="#home" className="scroll-smooth"><li className="flex items-center gap-5 hover:shadow-lg hover:bg-[#344a5f] py-3 px-4 rounded-md cursor-pointer"><HomeOutlined sx={{ fontSize: '1.5rem' }} />{isHovered ? 'HOME' : ''}</li></a>
          <a href="#about" className="scroll-smooth"><li className="flex items-center gap-5 hover:shadow-lg hover:bg-[#344a5f] py-3 px-4 rounded-md cursor-pointer"><PersonOutlined sx={{ fontSize: '1.5rem' }} />{isHovered ? 'ABOUT' : ''}</li></a>
          <a href="#skills" className="scroll-smooth"><li className="flex items-center gap-5 hover:shadow-lg hover:bg-[#344a5f] py-3 px-4 rounded-md cursor-pointer"><CodeOutlined sx={{ fontSize: '1.5rem' }} />{isHovered ? 'SKILLS' : ''}</li></a>
          <a href="#projects" className="scroll-smooth"><li className="flex items-center gap-5 hover:shadow-lg hover:bg-[#344a5f] py-3 px-4 rounded-md cursor-pointer"><WorkOutlineOutlined sx={{ fontSize: '1.5rem' }} />{isHovered ? 'WORKS' : ''}</li></a>
          <a href="#contact" className="scroll-smooth"><li className="flex items-center gap-5 hover:shadow-lg hover:bg-[#344a5f] py-3 px-4 rounded-md cursor-pointer"><PhoneOutlined sx={{ fontSize: '1.5rem' }} />{isHovered ? 'CONTACT' : ''}</li></a>
        </ul>
      </nav>
      <div className="flex px-10 py-7 text-[0.75rem] font-light items-center gap-2 text-nowrap">
        <South />{isHovered ? 'Scroll down' : ''}
      </div>
    </aside>
  )
}