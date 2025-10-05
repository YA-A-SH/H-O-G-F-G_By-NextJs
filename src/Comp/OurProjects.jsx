import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function OurProjects({ projAnimate }) {
  const { t } = useTranslation("common");

  const projects = [
    {
      img: "/Screenshot 2025-09-25 122241.png",
      title: t("provideWater", "Provide Water"),
      date: "18/9/2025",
      quantity: t("waterQuantity", "Over 10000 Liter of WATER"),
      cost: "1000$",
      place: t("khanYouns", "Khan Youns"),
      donor: t("hogfTeam", "H-O-G-F-G Team"),
      desc: t(
        "waterDescription",
        "Our director decided that our first initiative would be to provide water..."
      ),
      video:
        "https://www.instagram.com/reel/DPCbf9QjbXV/?igsh=b2o1ZDVucTUycmR3",
    },
    {
      img: "/Screenshot 2025-09-25 122241.png",
      title: t("foodAid", "Food Distribution"),
      date: "2/10/2025",
      quantity: t("foodQuantity", "Over 200 food packages"),
      cost: "1500$",
      place: t("gazaCity", "Gaza City"),
      donor: t("hogfTeam", "H-O-G-F-G Team"),
      desc: t(
        "foodDescription",
        "We distributed food packages to families in need during difficult times..."
      ),
      video: "https://www.instagram.com/reel/NEWPROJECT",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const p = projects[index];

  return (
    <div className="ourProjectMainFram">
      <div className="left" onClick={prev}>
        <img className="leftImg" src="/left-chevron.png" alt="left"></img>
      </div>

      <div className={`OurProjPlace ${projAnimate ? "animateProj" : ""}`}>
        <h1 className="OuProj">{t("ourProjects", "Our Projects")}</h1>

        <div className="firstProject">
          <div className="firstProjectInfo">
            <img className="teamImg" src={p.img} alt={p.title} />
            <h3 className="proTitle">{p.title}</h3>

            <div className="theMainInfo">
              <div className="infoRow">
                <span className="infoLabel">{t("date", "Date:")}</span>
                <span className="infoValue">{p.date}</span>
              </div>
              <div className="infoRow">
                <span className="infoLabel">{t("quantity", "Quantity:")}</span>
                <span className="infoValue">{p.quantity}</span>
              </div>
              <div className="infoRow">
                <span className="infoLabel">{t("cost", "Cost:")}</span>
                <span className="infoValue">{p.cost}</span>
              </div>
              <div className="infoRow">
                <span className="infoLabel">{t("place", "Place:")}</span>
                <span className="infoValue">{p.place}</span>
              </div>
              <div className="infoRow">
                <span className="infoLabel">{t("donor", "Donor:")}</span>
                <span className="infoValue">{p.donor}</span>
              </div>
              <div className="infoRow">
                <span className="infoLabel">
                  {t("description", "Description:")}
                </span>
                <span className="infoValue">{p.desc}</span>
              </div>
            </div>

            <a
              rel="noreferrer"
              className="proVideo"
              target="_blank"
              href={p.video}
            >
              {t("seeFullVideo", "See The Full Video")}
            </a>
          </div>
        </div>
        <p className="projCounter">
          {index + 1} / {projects.length}
        </p>
      </div>

      <div className="right" onClick={next}>
      <img className="rightImg" src="/right-chevron.png" alt="right"></img>
      </div>
    </div>
  );
}
