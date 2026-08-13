import Butterfly from "./icons/Butterfly";
import RibbonDivider from "./icons/RibbonDivider";
import { eventDetails } from "../data/eventDetails";
import watercolorBg from "../assets/hero/watercolor-bg.png";
import branch from "../assets/hero/branch.png";
import gownSilhouette from "../assets/hero/gown-silhouette.png";
import "./Hero.css";

/** The opening screen: name, occasion, date, time, venue, and a button into details. */
export default function Hero({ onSeeDetails }: { onSeeDetails: () => void }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${watercolorBg})` }}
    >
      <img
        src={branch}
        alt=""
        className="hero__branch hero__branch--top-left"
      />
      <img src={branch} alt="" className="hero__branch hero__branch--right" />

      <Butterfly className="hero__butterfly hero__butterfly--top-left" />
      <Butterfly
        className="hero__butterfly hero__butterfly--top-right"
        wingColorLight="#E7BFC9"
        wingColorDeep="#DDA9B8"
      />

      <div className="hero__inner">
        <p className="hero__eyebrow">You're invited to</p>

        <h1 className="hero__name">
          {eventDetails.celebrantPossessive} {eventDetails.age}
          <sup>th</sup>
        </h1>
        <div className="hero__occasion">{eventDetails.occasion}</div>

        <img src={gownSilhouette} alt="" className="hero__gown" />

        <RibbonDivider className="hero__divider" />

        <div className="hero__date-row">
          <span className="hero__day">{eventDetails.day}</span>
          <span className="hero__num">{eventDetails.date}</span>
          <span className="hero__month">{eventDetails.month}</span>
        </div>

        <div className="hero__venue-block">
          <p className="hero__venue-time">{eventDetails.time}</p>
          <p className="hero__venue-place">{eventDetails.venue}</p>
        </div>

        <button type="button" className="hero__cta" onClick={onSeeDetails}>
          See details
        </button>
      </div>

      <Butterfly className="hero__butterfly hero__butterfly--bottom-right" />
    </section>
  );
}
