import { useTranslation } from "react-i18next";

export default function Foot({ mode }) {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="htsu">
        <h1 className="htsuText">{t("howToSupportUs", "How To Support Us")}</h1>
        <div className="finishWord">
          {t(
            "supportDescription1",
            "You can support us in several ways: Share our website with your friends or relevant organizations in your area. Contact us via"
          )}
          <p className="WANUM">
            {t("whatsAppNumber", "WhatsApp (+970 595 107 867)")}
          </p>
          {t(
            "supportDescription2",
            "to arrange your donation or dedicate it to a specific cause (such as water supply, food kitchens, gifts for orphans, and more). Donate directly through this link:"
          )}
          <p className="DonateLinkk">
            <a
              target="_blank"
              href="https://chuffed.org/project/150702-be-the-hand-of-giving-for-gaza"
            >
              {t("clickHereToDonate", "Click here to donate")}
            </a>
          </p>
          . ✅{" "}
          {t(
            "assurance",
            "We assure you that every single dollar will be documented and directed towards charitable projects that truly serve the people of Gaza."
          )}{" "}
          {t(
            "finalMessage",
            "And finally, from the heart we say: Be the Hand of Giving for Gaza ❤️ Thank you for your priceless time and care."
          )}
        </div>
        <div className="sosialMedeaIcons">
          <a
            href="https://www.facebook.com/profile.php?id=61581146969788"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/facebook.png"
              alt={t("facebook", "Facebook")}
              className="iconForFinish"
            />
          </a>
          <a
            href="https://www.instagram.com/hand_of_giving_for_gaza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/instagram.png"
              alt={t("instagram", "Instagram")}
              className="iconForFinish"
            />
          </a>
          <a
            href="https://www.tiktok.com/@hand_of_giving_for?_r=1&_d=emdgc7jj5a3kl3&sec_uid=MS4wLjABAAAAbNKCji5BGfdelyFVQjrfwrgGFsDKNyE2Zv-a25P355JOuM69U33bpcloLr41ITZb&share_author_id=7551703330658534418&sharer_language=ar&source=h5_m&u_code=emdgcjlblk8061&timestamp=1758870613&user_id=7551703330658534418&sec_user_id=MS4wLjABAAAAbNKCji5BGfdelyFVQjrfwrgGFsDKNyE2Zv-a25P355JOuM69U33bpcloLr41ITZb&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7551703335104120584&share_link_id=8fef4185-e107-4dba-9fd9-de7e84fc6524&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/tiktok.png"
              alt={t("tiktok", "TikTok")}
              className="iconForFinish"
            />
          </a>
        </div>
      </div>
    </>
  );
}
