import React from 'react';

interface IProps {
  introduction: string;
  title: string;
  children: React.ReactNode;
  id: string;
  style?: string;
}

const Section = ({ introduction, title, children, style, id }: IProps) => {
  return (
    <section id={id} className="flex flex-col justify-start relative gap-10">
      <div className="flex flex-col">
        <span className="relative pl-[80px] pb-[20px] text-[10px] tracking-[1px] before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[50px] before:h-[1px] before:bg-[#333]">{introduction}</span>
        <h1 className="text-2xl font-bold tracking-wider">{title}</h1>
      </div>
      <div className={`md:bg-[#fff] rounded-3xl md:p-8 text-[#333] ${style}`}>
        {children}
      </div>
    </section>
  );
}

export default Section;