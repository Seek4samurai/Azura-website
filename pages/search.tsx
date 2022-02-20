import Image from "next/image";
import React from "react";
import azuraLogo from "../public/svgs/azuraLogo.svg";
import AzureLogo from "../public/images/Microsoft_Azure.png";

const style = {
  bgContainer: `select-none font-light`,
  imgContainer: `before:absolute z-[1] before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url(../public/images/azura-website-bg.jpg)] before:bg-cover before:bg-center`,

  navContainer: `absolute select-none text-white w-[100vw]`,
  navBar: `flex flex-row justify-between p-[1.2rem] font-[LEMON MILK] text-2xl`,
  logo: `flex flex-row items-center`,
  logoImage: ``,
  meetDev: ``,
  centerContainer: `absolute top-[25%] left-[50%] -translate-x-[50%] `,
  searchTop: `text-white text-md`,
  searchArea: `w-[55vw] h-[5rem] rounded-xl opacity-70 pl-[1.5rem] pr-[1.5rem] outline-none focus:border-0 focus:opacity-90 placeholder:text-black`,
  poweredContainer: `absolute left-[50%] -translate-x-[50%] flex flex-row items-center mt-[2rem]`,
  poweredText: `text-[#d3d3d3]`,
  poweredImg: ``,
  answerSection: `absolute left-[50%] -translate-x-[50%] top-[50%] text-white text-4xl text-center`,
  textHolder: `flex flex-row justify-center align-center items-center`,
  answer: ``,
  emotes: `flex justify-center pt-[3.2rem] animate-bounce`,
};

const Tool = () => {
  return (
    <>
      <div className={style.bgContainer}>
        <div className={style.imgContainer}>
          <div className={style.navContainer}>
            <div className="textHere">
              <div className={style.navBar}>
                <a href="/" className={style.logo}>
                  <Image
                    src={azuraLogo}
                    alt="azure"
                    width={40}
                    height={40}
                    className={style.logoImage}
                  />
                  <div>Azura</div>
                </a>
                <a
                  href="https://www.github.com/seek4samurai"
                  target="_blank"
                  className={style.meetDev}
                >
                  Meet Developer
                </a>
              </div>
            </div>
            <style jsx>{`
              .textHere {
                font-family: LEMON MILK !important;
              }
            `}</style>
          </div>
          <div className={style.centerContainer}>
            <p className={style.searchTop}>SEARCH BY IMAGE URL</p>
            <input
              type="url"
              placeholder="PASTE HERE"
              className={style.searchArea}
            />
            <div className={style.poweredContainer}>
              <div className={style.poweredText}>
                Powered by Microsoft Azure
              </div>
              <div className={style.poweredImg}>
                <a href="https://azure.microsoft.com/" target="_blank">
                  <Image src={AzureLogo} alt="Azure" width={39} height={39} />
                </a>
              </div>
            </div>
          </div>
          <div className={style.answerSection}>
            <div className={style.textHolder}>
              <span>“</span>
              <div className={style.answer}>Paste an Image URL here!</div>
              <span>”</span>
            </div>
            <style jsx>{`
              span {
                font-family: LEMON MILK !important;
                font-size: 4rem;
              }
            `}</style>
            <div id="myRocket" className={style.emotes}>
              🚀
            </div>
            <style jsx>{`
              #myRocket {
                cursor: pointer;
                font-size: 3.5rem;
                transition: 1s;

                // animation: rocketWave 2s ease-in infinite;

                // @keyframes rocketWave {
                //   0% {
                //     font-size: 4rem;
                //   }
                //   50% {
                //     font-size: 3.5rem;
                //   }
                //   100% {
                //     font-size: 4rem;
                //   }
                // }
              }
            `}</style>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tool;
