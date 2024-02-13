"use client";
import React from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            onClick={() => router.push("/")}
            alt={"HomeScape"}
            className={"cursor-pointer hidden md:block"}
            height = "200"
            width= "200"
            src={"/images/logo.png"}
        />
    );
};

export default Logo;