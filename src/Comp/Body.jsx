import { useEffect, useState } from "react";
import Card from "./Card";
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
      face: "",
      insta: "https://www.instagram.com/hanaa_mohmmed21/",
      tiktok: "",
    },
    {
      name: t("Obaida"),
      img: "/upidaImg.jpg",
      about: t("obaidaAbout"),
      index: 1,
      face: "https://www.facebook.com/eng.ubidamohammed",
      insta: "https://www.instagram.com/eng.ubida.13/",
      tiktok: "https://www.tiktok.com/@ubida97",
    },
    {
      name: t("Yaser"),
      img: "/me.jpg",
      about: t("yaserAbout"),
      index: 2,
      face: "https://www.facebook.com/yaser.shkfa",
      insta: "https://www.instagram.com/yasershkfa/",
      tiktok: "https://www.tiktok.com/@ya.a.s",
    },
    {
      name: t("Yahya"),
      img: "/yahya.jpg",
      about: t("yahyaAbout"),
      index: 3,
      face: "https://www.facebook.com/profile.php?id=61581178117602",
      insta: "https://www.instagram.com/yahayaalqarinawi/",
      tiktok: "",
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
        faceLink={mem.face}
        instaLink={mem.insta}
        tiktokLink={mem.tiktok}
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

        <div className={`OurProjPlace ${projAnimate ? "animateProj" : ""}`}>
          <h1 className="OuProj">{t("ourProjects", "Our Projects")}</h1>

          <div className="firstProject">
            <div className="firstProjectInfo">
              <img
                className="teamImg"
                src="/Screenshot 2025-09-25 122241.png"
                alt={t("teamMember", "Team Member")}
              />
              <h3 className="proTitle">{t("provideWater", "Provide Water")}</h3>

              <div className="theMainInfo">
                <div className="infoRow">
                  <span className="infoLabel">{t("date", "Date:")}</span>
                  <span className="infoValue">18/9/2025</span>
                </div>
                <div className="infoRow">
                  <span className="infoLabel">
                    {t("quantity", "Quantity:")}
                  </span>
                  <span className="infoValue">
                    {t("waterQuantity", "Over 10000 Liter of WATER")}
                  </span>
                </div>
                <div className="infoRow">
                  <span className="infoLabel">{t("cost", "Cost:")}</span>
                  <span className="infoValue">1000$</span>
                </div>
                <div className="infoRow">
                  <span className="infoLabel">{t("place", "Place:")}</span>
                  <span className="infoValue">
                    {t("khanYouns", "Khan Youns")}
                  </span>
                </div>
                <div className="infoRow">
                  <span className="infoLabel">{t("donor", "Donor:")}</span>
                  <span className="infoValue">
                    {t("hogfTeam", "H-O-G-F-G Team")}
                  </span>
                </div>
                <div className="infoRow">
                  <span className="infoLabel">
                    {t("description", "Description:")}
                  </span>
                  <span className="infoValue">
                    {t(
                      "waterDescription",
                      "Our director decided that our first initiative would be to provide water, due to its vital importance for the people and the severe shortage of clean water. We carried it out urgently using our own funds, and although it was one of the most exhausting tasks, it was also one of the most beneficial and significant."
                    )}
                  </span>
                </div>
              </div>

              <a
                className="proVideo"
                target="_blank"
                href="https://www.instagram.com/reel/DPCbf9QjbXV/?igsh=b2o1ZDVucTUycmR3"
              >
                {t("seeFullVideo", "See The Full Video")}
              </a>
            </div>

            <video width="200" controls>
              <source src="/firstProj.mp4" type="video/mp4" />

              {t(
                "videoNotSupported",
                "Your browser does not support the video tag."
              )}
            </video>
          </div>
        </div>

        <div className="line"></div>
      </div>
    </>
  );
}
