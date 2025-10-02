
import { useState } from "react";

export default function Card({
  img,
  name,
  about,
  animate,
  index,
  faceLink,
  instaLink,
  tiktokLink,
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`mainCard ${animate ? "cardAnimate" : ""}`} // طبق صنف الحركة هنا
      style={{ transitionDelay: `${index * 0.4}s` }} // استخدم index لعمل تأخير لكل بطاقة
    >
      <div
        className={`theCard ${flipped ? "isFlipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="imgFace">
          <img className="cardImg" src={img} alt={name} />
        </div>
        <div className="textFace">
          <h1>{name}</h1>
          <p>{about}</p>
          <div className="socialIcons">
            <a
              href={faceLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/facebook.png"
                alt="Facebook"
                className="icon"
                onClick={(e) => e.stopPropagation()}
              />
            </a>
            <a
              href={instaLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <img src="/instagram.png" alt="Instagram" className="icon" />
            </a>
            <a
              href={tiktokLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <img src="/tiktok.png" alt="TikTok" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
