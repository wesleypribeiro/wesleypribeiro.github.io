import { Email, EmailRounded, GitHub, LinkedIn, Menu } from "@mui/icons-material";
import Sidebar from "../components/sidebar";
import Skills from "./UI/Skills";
import Project from "./UI/Project";
import Section from "@/pages/UI/Section";
import { Fragment, useState } from "react";

export default function Home() {
  const [isOpenedSidebar, setIsOpenedSideBar] = useState(false);

  return (
    <Fragment>
      <main
        className={`flex min-h-screen pb-20`}
      >
        <Sidebar isOpenedSidebar={isOpenedSidebar} setIsOpenedSideBar={setIsOpenedSideBar} />
        <div className="flex flex-col py-0 lg:px-40 md:px-10 px-5 lg:max-w-screen-xl max-w-full my-0 mx-auto gap-20">
          <Menu className="lg:invisible visible text-[40px] right-[25px] top-[30px] cursor-pointer z-50" onClick={() => setIsOpenedSideBar(!isOpenedSidebar)} />
          <div className="flex justify-center py-20 lg:py-0" id="home">
            <header className="flex lg:flex-row flex-col h-[100vh] items-center">
              <div className="rounded-full w-[350px] h-[350px] bg-[url('/profile_pic.jpeg')] bg-cover bg-center" />
              <div className="py-20 md:px-20 lg:w-[600px] flex flex-col gap-4 lg:items-start items-center w-full">
                <h1>HI THERE! I'M</h1>
                <div className="flex gap-2 text-4xl font-bold text-nowrap">
                  <span className="text-[#B0B0B0]">WESLEY P.</span><span> RIBEIRO</span>
                </div>
                <p className="tracking-[1px] text-[1rem] leading-6 text-[#333333] font-light lg:text-start text-center">A <span className="text-[#B0B0B0]">Full Stack Web Developer</span> that always loved programming and is always looking for new challenges.</p>
                <div className="flex gap-4 justify-between">
                  <button className="bg-[#2C3E50] text-[#FFFFFF] px-4 py-2 rounded-full transition-all ease-in duration-300 hover:shadow-2xl" onClick={() => window.open('/WesleyPaulo_Resume_EN.pdf', '_blank')}>Resumé</button>
                  <ul className="flex gap-4">
                    <a href='https://www.linkedin.com/in/wesleypribeiro' target="_blank"><li className="border-2 border-[#eee] bg-[#FFF] p-2 rounded-md shadow-2xl hover:shadow-xl cursor-pointer transition-all ease-in duration-300"><LinkedIn style={{ color: '#2C3E50' }} /></li></a>
                    <a href='https://github.com/wesleypribeiro' target="_blank"><li className="border-2 border-[#eee] bg-[#FFF] p-2 rounded-md shadow-2xl hover:shadow-xl cursor-pointer transition-all ease-in duration-300"><GitHub style={{ color: '#2C3E50' }} /></li></a>
                    <a href='mailto:wesley_paulo00@hotmail.com' target="_blank"><li className="border-2 border-[#eee] bg-[#FFF] p-2 rounded-md shadow-2xl hover:shadow-xl cursor-pointer transition-all ease-in duration-300"><Email style={{ color: '#2C3E50' }} /></li></a>
                  </ul>
                </div>
              </div>
            </header>
          </div>
          <Section introduction="SOME INFO" id="about" title="ABOUT ME" style='text-2xl font-light'>
            I always loved programming since when I was a teenager, when I believed I would become a hacker once I learned how to program! I work from the back end to the front end of applications, always using best practices.

            I graduated in Systems Analysis and Development in 2020 and have been working in the <span className="text-[#B0B0B0]">Full Stack Web Development for over 2 years.</span> In 2021, I completed a Full Stack Web Development course at Trybe school, which was a crucial step in propelling my career.

            I am a dedicated and enthusiastic professional in web development. Throughout my journey, I have been building and enhancing my skills.
          </Section>
          <Section introduction="CHECK OUT MY" id="skills" title="SKILLS">
            <ul className="grid md:grid-cols-[repeat(auto-fill,minmax(80px,1fr))] grid-cols-[repeat(3,minmax(80px,1fr))] gap-x-[50px] gap-y-[50px]">
              <Skills src='/skills/react.svg' title='React' />
              <Skills src='/skills/nodejs.svg' title='NodeJS' />
              <Skills src='/skills/aws.svg' title='AWS' />
              <Skills src='/skills/mongodb.svg' title='MongoDB' />
              <Skills src='/skills/mysql.svg' title='MySQL' />
              <Skills src='/skills/css.svg' title='CSS3' />
              <Skills src='/skills/html.svg' title='HTML' />
              <Skills src='/skills/api.svg' title='Rest API' />
              <Skills src='/skills/javascript.svg' title='Javascript' />
              <Skills src='/skills/typescript.svg' title='Typescript' />
              <Skills src='/skills/git.svg' title='Git' />
              <Skills src='/skills/jest.svg' title='Jest' />
              <Skills src='/skills/linux.svg' title='Linux' />
              <Skills src='/skills/react-native.svg' title='React Native' />
            </ul>
          </Section>
          <Section introduction=" TAKE A LOOK AT MY" id="projects" title="PROJECTS" style="flex flex-col gap-10">
            <Project
              title='Kitchen Memories'
              technologies={['React', 'Rest API', 'Node']}
              description={['A cooking app about recipes, foods and drinks', 'You can sign up and save your favorite recipes', 'Ps.: Sign in with an 8 characters email and password']}
              image="/projects/KitchenMemories.png"
              live="https://wesleypribeiro.github.io/KitchenMemories/"
              repo="https://github.com/wesleypribeiro/KitchenMemories"
            />
            <Project
              title='The Burger'
              technologies={['Vanilla JS', 'HTML', 'CSS']}
              description={['An interactive and digital menu to place orders at a fictional burger.', 'Inspired by a famous brazilian burger totem called Jeronimo.', 'Built using vanilla JS']}
              image="/projects/TheBurger.png"
              live="https://wesleypribeiro.github.io/TheBurger/"
              repo="https://github.com/wesleypribeiro/TheBurger"
            />
            <Project
              title='Gigawallet'
              technologies={['React', 'JS', 'Rest API']}
              description={['A financial management app', 'It contains a value converter from one currency to another using an external API', 'Ps.: Sign in with an 8 characters email and password']}
              image="/projects/Gigawallet.png"
              live="https://wesleypribeiro.github.io/GigaWallet/"
              repo="https://github.com/wesleypribeiro/GigaWallet"
            />
            <Project
              title="My To-do list"
              technologies={['React', 'JS', 'CSS']}
              description={['A simple to-do list management and creator app']}
              image="/projects/TodoList.png"
              live="https://wesleypribeiro.github.io/todo-list/"
              repo="https://github.com/wesleypribeiro/todo-list"
            />
          </Section>
          <Section introduction="SAY HELLO" id="contact" title="CONTACT">
            <h3 className="font-semibold text-xl mb-6">Get in Touch</h3>
            <div className="p-4 rounded-lg flex flex-col items-center justify-center border-[#ddd] border-[1px] shadow-md transition-all ease-in duration-300 md:hover:shadow-xl">
              <EmailRounded sx={{ fontSize: '32px' }} />
              <a href='mailto: wesley_paulo00@hotmail.com' className="font-semibold underline">wesley_paulo00@hotmail.com</a>
              <p className="text-sm font-semibold text-[#2C3E50]">Email me</p>
            </div>
            <div className="mt-12 flex flex-col">
              <h3 className="font-semibold text-xl mb-6">Contact Form</h3>
              <form
                action="https://formspree.io/f/mzbwlkqj"
                method="POST"
                className="mb-9 flex flex-col gap-5"
                id="contactForm"
              >
                <div className="grid lg:grid-cols-[repeat(2,1fr)] gap-y-5 gap-x-[25px]">
                  <input type="text" name="name" id="contact-name" placeholder="Your name*" required className="border-[1px] border-[#eee] py-[11px] px-[20px] text-base w-full tracking-[1px] font-semibold focus:border-[1px] focus:border-[#587592] focus:outline-none focus:shadow-[0px_0px_0px_3px_rgba(44,62,80,0.25)]" />
                  <input type="text" name="email" id="contact-email" placeholder="Your Email*" required className="border-[1px] border-[#eee] py-[11px] px-[20px] text-base w-full tracking-[1px] font-semibold focus:border-[1px] focus:border-[#587592] focus:outline-none focus:shadow-[0px_0px_0px_3px_rgba(44,62,80,0.25)]" />
                </div>
                <input type="text" name="subject" id="subjectInput" placeholder="Subject*" required className="border-[1px] border-[#eee] py-[11px] px-[20px] text-base w-full tracking-[1px] font-semibold focus:border-[1px] focus:border-[#587592] focus:outline-none focus:shadow-[0px_0px_0px_3px_rgba(44,62,80,0.25)]" />
                <textarea placeholder="Your message*" required name="message" id="contact-message" className="border-[1px] border-[#eee] py-[11px] px-[20px] text-base w-full tracking-[1px] col-start-1 col-end-3 resize-none font-semibold focus:border-[1px] focus:border-[#587592] focus:outline-none focus:shadow-[0px_0px_0px_3px_rgba(44,62,80,0.25)]"></textarea>
              </form>
              <button formTarget="_blank" type="submit" form="contactForm" className="text-[#fff] bg-[#2C3E50] rounded-[40px] w-[140px] my-0 mx-auto py-2 px-10 hover:shadow-2xl transition-all ease-in duration-300">SEND</button>
            </div>
          </Section>
        </div>
      </main>
      <footer className="p-5 bg-[#fff]">
        <p className="my-0 mx-auto text-[1rem] text-center w-full font-normal">© Wesley Paulo Ribeiro 2024</p>
      </footer>
    </Fragment>
  );
}
