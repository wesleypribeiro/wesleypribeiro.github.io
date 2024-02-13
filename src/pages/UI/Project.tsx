import React, { Fragment } from "react";

interface IProps {
  image: string;
  title: string;
  technologies: string[];
  description: string[];
  live: string;
  repo: string;
}

const Project = ({image, title, technologies, description, live, repo}: IProps) => {
  return (
    <article className="md:bg-[#fff] w-full md:p-12 p-6 flex lg:flex-row flex-col gap-8 text-xl border-[1px] border-[#eee] rounded-2xl shadow-sm transition-all ease-in duration-300 md:hover:shadow-xl">
      <div className="h-auto">
        <img src={image} className="w-full rounded-[10px] border-[1px] border-[#ddd]" />
      </div>
      <div style={{ flex: '0 1 calc(100% - 350px)' }}>
        <h3 className="font-semibold">{title}</h3>
        <h4 className="text-lg mt-2 tracking-[1px] leading-5">
          Technologies Used:
          {
            technologies?.map((technology, index: number) => {
              if (index === technologies.length - 1) {
                return <span key={index} className="text-[#2C3E50]  inline-block px-1">{technology}</span>
              } else {
                return (<Fragment key={index}><span className="text-[#2C3E50] inline-block px-1">{technology}</span>,</Fragment>)
              }
            })
          }
        </h4>
        <ul className="list-disc list-inside text-base leading-5 tracking-[1px] mt-5 flex flex-col gap-2">
          {description?.map((description, index: number) => {
            return <li key={index}>{description}</li>
          })}
        </ul>
        <div className="mt-12">
          <a href={live} target="_blank" className="text-lg mr-5 text-[#2C3E50] inline-block underline">Live</a>
          <a href={repo} target="_blank" className="text-lg mr-5 text-[#2C3E50] inline-block underline">Repo</a>
        </div>
      </div>
    </article>
  );
}

export default Project;