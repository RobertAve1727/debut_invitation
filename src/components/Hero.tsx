import Butterfly from "./icons/Butterfly";
import Silhouette from "./icons/Silhouette";
import RibbonDivider from "./icons/RibbonDivider";
import { eventDetails } from "../data/eventDetails";
import "./Hero.css";

/** The opening section: name, occasion, date, time, venue, and a link to details. */
export default function Hero() {
  return (
    <section className="hero">
      <Butterfly className="hero__butterfly hero__butterfly--top-left" />
      <Butterfly
        className="hero__butterfly hero__butterfly--top-right"
        wingColorLight="#E7BFC9"
        wingColorDeep="#DDA9B8"
      />

      <div className="hero__inner">
        <p className="hero__eyebrow">You're invited to</p>

        <Silhouette className="hero__silhouette" />

        <h1 className="hero__name">
          {eventDetails.celebrantPossessive} {eventDetails.age}
          <sup>th</sup>
        </h1>
        <div className="hero__occasion">{eventDetails.occasion}</div>

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

        <a href="#details" className="hero__cta">
          See details
        </a>
      </div>

      <Butterfly className="hero__butterfly hero__butterfly--bottom-right" />
    </section>
  );
}
