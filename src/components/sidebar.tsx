import { HomeOutlined, PersonOutlined, CodeOutlined, WorkOutlineOutlined, PhoneOutlined, South } from "@mui/icons-material"

interface IProps {
  isOpenedSidebar: boolean
  setIsOpenedSideBar: (value: boolean) => void
}

export default function Sidebar({ isOpenedSidebar, setIsOpenedSideBar }: IProps) {
  return (
    <aside
      className={`z-50 bg-[#2C3E50] h-full fixed top-0 left-0 text-[#FFFFFF] lg:flex lg:opacity-100 ${!!isOpenedSidebar ? 'flex opacity-100' : 'hidden opacity-0'} flex-col lg:justify-between transition-all ease-in duration-300 ${isOpenedSidebar ? 'w-[220px]' : 'w-[112px]'}`}
      onMouseEnter={() => window.matchMedia('(min-width: 1024px)').matches && setIsOpenedSideBar(true)}
      onMouseLeave={() => window.matchMedia('(min-width: 1024px)').matches && setIsOpenedSideBar(false)}
    >
      <p className="text-center py-8 px-4 font-medium text-[#FFFFFF] text-5xl bg-[#1a2735]">W<span className='text-4xl'>R</span></p>
      <nav className="p-7">
        <ul className="list-none flex flex-col text-[0.75rem] font-light">
          <a href="#home" className="scroll-smooth"><li className="flex items-center gap-5 hover:shadow-lg hover:bg-[#344a5f] py-3 px-4 rounded-md cursor-pointer"><HomeOutlined sx={{ fontSize: '1.5rem' }} />{isOpenedSidebar ? 'HOME' : ''}</li></a>
          <a href="#about" className="scroll-smooth"><li className="flex items-center gap-5 hover:shadow-lg hover:bg-[#344a5f] py-3 px-4 rounded-md cursor-pointer"><PersonOutlined sx={{ fontSize: '1.5rem' }} />{isOpenedSidebar ? 'ABOUT' : ''}</li></a>
          <a href="#skills" className="scroll-smooth"><li className="flex items-center gap-5 hover:shadow-lg hover:bg-[#344a5f] py-3 px-4 rounded-md cursor-pointer"><CodeOutlined sx={{ fontSize: '1.5rem' }} />{isOpenedSidebar ? 'SKILLS' : ''}</li></a>
          <a href="#projects" className="scroll-smooth"><li className="flex items-center gap-5 hover:shadow-lg hover:bg-[#344a5f] py-3 px-4 rounded-md cursor-pointer"><WorkOutlineOutlined sx={{ fontSize: '1.5rem' }} />{isOpenedSidebar ? 'WORKS' : ''}</li></a>
          <a href="#contact" className="scroll-smooth"><li className="flex items-center gap-5 hover:shadow-lg hover:bg-[#344a5f] py-3 px-4 rounded-md cursor-pointer"><PhoneOutlined sx={{ fontSize: '1.5rem' }} />{isOpenedSidebar ? 'CONTACT' : ''}</li></a>
        </ul>
      </nav>
      <div className="lg:flex hidden px-10 py-7 text-[0.75rem] font-light items-center gap-2 text-nowrap">
        <South />{isOpenedSidebar ? 'Scroll down' : ''}
      </div>
    </aside>
  )
}