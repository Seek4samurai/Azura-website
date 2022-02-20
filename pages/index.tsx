import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Splash from "../public/images/Splash.svg";
import AzureLogo from "../public/images/Microsoft_Azure.png";
import Timeline from "../public/svgs/Timeline";

const style = {
  bgContainer: ``,
  imgContainer: `before:absolute z-[1] before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url(../public/images/azura-website-bg.jpg)] before:bg-cover before:bg-center`,
  leftSide: `flex flex-row absolute left-[1rem] top-[50%] -translate-y-[50%]`,
  listContainer: `flex flex-col absolute left-[5rem] top-[50%] -translate-y-[50%] w-[300px]`,
  textList: `flex flex-col justify-between h-[16rem]`,
  listItem: `font-inter text-white text-2xl font-regular pl-[1rem] transition-all duration-100 hover:scale-[1.1]`,
  rightSide: `absolute top-[50%] right-[8%] -translate-y-[50%]`,
  Splash: ``,
  poweredContainer: `absolute bottom-[1rem] left-[50%] -translate-x-[50%] flex flex-row items-center`,
  poweredText: `text-[#d3d3d3]`,
  poweredImg: ``,
};

const Home: NextPage = () => {
  return (
    <>
      <div className={style.bgContainer}>
        <div className={style.imgContainer}></div>
        <div className={style.leftSide}>
          <Timeline></Timeline>
          <div className={style.listContainer}>
            <ul className={style.textList}>
              <li className={style.listItem}>
                <Link href="./search">
                  <a>Check Out 🚀</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href="https://github.com/seek4samurai">
                  <a target="_blank">Meet Creator! 😇</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href="https://github.com/seek4samurai/azura">
                  <a target="_blank">Repository 🌏</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.rightSide}>
          <Image
            src={Splash}
            alt="Azura"
            width={800}
            height={800}
            className={style.Splash}
          />
        </div>
        <div className={style.poweredContainer}>
          <div className={style.poweredText}>Powered by Microsoft Azure</div>
          <div className={style.poweredImg}>
            <Image src={AzureLogo} alt="Azure" width={39} height={39} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
