import React from "react";

interface IProps {
  src: string;
  title: string;
}

const Skills = ({ src, title }: IProps) => (
  <li className="flex flex-col gap-1 justify-center text-center p-[10px] rounded-2xl w-[80px] bg-[#fff] border-[#eee] shadow hover:shadow-xl">
    <img src={src} alt={title} style={{ height: '35px' }} />
    <span className="text-[#333] text-sm">{title}</span>
  </li>
)

export default Skills