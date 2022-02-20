import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
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
  centerContainer: `absolute top-[15%] left-[50%] -translate-x-[50%] `,
  searchTop: `text-white text-md`,
  searchArea: `w-[55vw] h-[5rem] rounded-xl opacity-70 pl-[1.5rem] pr-[1.5rem] outline-none focus:border-0 focus:opacity-90 placeholder:text-black`,
  poweredContainer: `absolute left-[50%] -translate-x-[50%] flex flex-row items-center mt-[2rem]`,
  poweredText: `text-[#d3d3d3]`,
  poweredImg: ``,
  answerSection: `absolute left-[50%] -translate-x-[50%] top-[40%] text-white text-4xl text-center`,
  textHolder: `flex flex-row justify-center align-center items-center`,
  answer: `select-text`,
  emotes: `cursor-pointer text-white text-[3.5rem] flex justify-center pt-[0.5rem] pb-[0.6rem] mt-[3rem] mb-[2rem] animate-bounce`,
  submitBtn: `absolute left-[50%] -translate-x-[50%] cursor-pointer bg-white w-[7rem] h-[2.4rem] flex justify-center items-center rounded text-black hover:bg-black hover:text-white`,
  btnText: `text-xl`,
  bottomContainer: `absolute bottom-[30%] left-[50%] -translate-x-[50%]`,
};

const Tool = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [emoji, setEmoji] = useState<string>("🚀");

  const allEmotes = new Array(
    "🦊",
    "🚀",
    "🔥",
    "🍪",
    "🌏",
    "😎",
    "😍",
    "😴",
    "😄",
    "👋",
    "😍",
    "😅",
    "🤩",
    "🥱",
    "😠",
    "😇",
    "🥳",
    "🦄"
  );

  const onTweak = async () => {
    var randomIndex = Math.floor(Math.random() * 19);
    if (randomIndex === 18) {
      setEmoji("You're Cute!");
    } else {
      if (randomIndex === 17) {
        var audio = new Audio(
          "https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b2/Misc_soundboard_fall2021eventgame_reward7.mp3"
        );
        await audio.play();
      }
      setEmoji(allEmotes[randomIndex]);
    }
  };

  if (!description) {
    setDescription("Paste an Image URL up there!");
  }

  const onImgUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const onSubmit = async () => {
    const res = await axios.post(
      "https://azura-backend.herokuapp.com/describe",
      {
        imageUrl,
      }
    );
    setDescription(res.data);
  };

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
              value={imageUrl}
              onChange={onImgUrlChange}
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
              <div className={style.answer}>{description}</div>
              <span>”</span>
            </div>
            <style jsx>{`
              span {
                font-family: sans !important;
                font-weight: bold;
                font-size: 4rem;
              }
            `}</style>
          </div>
          <div className={style.bottomContainer}>
            <div onClick={onTweak} className={style.emotes}>
              {emoji}
            </div>
            <div onClick={onSubmit} className={style.submitBtn}>
              <div className={style.btnText}>Search</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tool;
