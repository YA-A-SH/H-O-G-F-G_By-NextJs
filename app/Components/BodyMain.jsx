import Card from "./Card";
import OurProjects from "./OurProjects";
import { useTranslation } from "react-i18next";

export default function BodyMain({
  animate,
  mode,
  loaded,
  projAnimate,
  index,
  setIndex,
}) {
  const { t } = useTranslation("common");

  const team = [
    {
      name: t("Hana"),
      img: "/hanaImg.jpg",
      about: t(
        "Hana, the 24-year-old team leader, is the mastermind behind the project and the original creator of the idea. With her vision and leadership, she guides the team towards achieving its goals."
      ),

      index: 0,

      insta: "https://www.instagram.com/hanaa_mohmmed21/",
    },
    {
      name: t("Obaida"),
      img: "/upidaImg.jpg",
      about: t(
        "Obaida, 22 years old, is known for always cutting people off when they speak, yet he remains indispensable to the team. When everyone else falls apart, he is the one who stays strong."
      ),
      index: 1,
      insta: "https://www.instagram.com/eng.ubida.13/",
    },
    {
      name: t("Yaser"),
      img: "/me.jpg",
      about: t(
        "Yaser, 20, a fourth-year Software Engineering student and Front-End Web Developer. Rarely sad or angry, he’s known for his humor, love of laughter, and — most importantly — his commitment to deadlines. Fun fact: he’s the one who built this website!"
      ),
      index: 2,
      insta: "https://www.instagram.com/yasershkfa/",
    },
    {
      name: t("Yahya"),
      img: "/yahya.jpg",
      about: t(
        "Yahya, 22, is the most dedicated to helping others, trustworthy, and always elegant. He avoids conflicts, constantly motivates us to move forward, and was one of the initiators behind the idea of forming this team."
      ),
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
              <h2 className="wawTextHead">{t("Who We Are ?")}</h2>
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
                  "There is no theft or exploitation like some other initiatives (It Becomes Aloooot Sence 7 Oct)."
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

        <OurProjects
          projAnimate={projAnimate}
          index={index}
          setIndex={setIndex}
        />

        <div className="line"></div>
      </div>
    </>
  );
}
