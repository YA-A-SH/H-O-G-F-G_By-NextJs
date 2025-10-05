import { useEffect, useState } from "react";
import Card from "./Card";
import OurProjects from "./OurProjects";
import { useTranslation } from "react-i18next";

export default function Body({ mode }) {
  const { t } = useTranslation("common");

  const [loaded, setLoaded] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [projAnimate, setProjAnimate] = useState(false);

  useEffect(() => {
    function handleScroll2() {
      if (window.scrollY >= 650) {
        setProjAnimate(true);
      }
    }
    window.addEventListener("scroll", handleScroll2);
    return () => window.removeEventListener("scroll", handleScroll2);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 200) {
        setAnimate(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const team = [
    {
      name: t("Hana"),
      img: "/hanaImg.jpg",
      about: t("hanaAbout"),
      index: 0,

      insta: "https://www.instagram.com/hanaa_mohmmed21/",
    },
    {
      name: t("Obaida"),
      img: "/upidaImg.jpg",
      about: t("obaidaAbout"),
      index: 1,
      insta: "https://www.instagram.com/eng.ubida.13/",
    },
    {
      name: t("Yaser"),
      img: "/me.jpg",
      about: t("yaserAbout"),
      index: 2,
      insta: "https://www.instagram.com/yasershkfa/",
    },
    {
      name: t("Yahya"),
      img: "/yahya.jpg",
      about: t("yahyaAbout"),
      index: 3,
      insta: "https://www.instagram.com/yahayaalqarinawi/",
    },
  ];

  const teamShow = team.map((mem) => {
    return (
      <Card
        key={mem.index}
        img={mem.img}
        name={mem.name}
        about={mem.about}
        animate={animate}
        index={mem.index}
        instaLink={mem.insta}
      />
    );
  });

  return (
    <>
      <div className="mainBody">
        <div className="cards">
          <div className="wiogAll">
            <div
              className={`wiog ${mode === "dark" ? "darkWiog" : "lightWiog"} ${
                loaded ? "loaded" : ""
              }`}
            >
              <h2 className="wiogTextHead">
                {t("ourGoal", "What Is Our Goal?")}
              </h2>
              <p className="wiogTextBody">
                {t(
                  "goalDescription",
                  "Our main focus is raising donations to carry out initiatives that help the people of Gaza who are in difficult situations."
                )}
                <br />
                {t(
                  "goalDescription2",
                  "Simply put, we try to be there for the people, ease their burden a little, and make sure any support reaches them directly and honestly."
                )}
              </p>
            </div>
          </div>

          <div className="wawAll">
            <div
              className={`waw ${mode === "dark" ? "darkWaw" : "lightWaw"} ${
                loaded ? "loaded" : ""
              }`}
            >
              <h2 className="wawTextHead">{t("whoAreWe", "Who We Are?")}</h2>
              <p className="wawTextBody">
                {t(
                  "whoAreWeDescription",
                  "We are a small team of four people, led by Ms. Hanaa Mohamed, and we are all from Gaza 💚."
                )}
                <br />
                {t(
                  "transparency",
                  "We are fully committed to transparency; everything we do is clear and open to you, and our intentions are genuine."
                )}
                <br />
                {t(
                  "noExploitation",
                  "There is no theft or exploitation like some other initiatives."
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className={`cardsBody ${animate ? "animateCards" : ""}`}>
          {teamShow}
        </div>

        <div className="line" style={{ marginTop: "60px" }}></div>

        <OurProjects projAnimate = {projAnimate} />

        <div className="line"></div>
      </div>
    </>
  );
}
