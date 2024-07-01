import React from "react";
import Image from "next/image";
import logo from "../images/logo.png"

const Footer =() =>{
    return (
        <div className="w-full h-20 bg-amazon_light text-gray-400 flex items-center justify-center 
        gap-4">
            <div className="w-24">
                <Image src={logo} alt="logo" layout="responsive" />
            </div>
            <p className="text-sm">All rights reserved {" "} </p>
            <a
                className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-200"
                href="https://nikita-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
            >
                @nikita
            </a>
        </div>
    );
};

export default Footer;