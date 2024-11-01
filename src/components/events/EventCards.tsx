import EventCard from "./EventCard";
import { eventCardInfo } from "@/data/eventCardInfo";

const EventCards = () => {
  return (
    <div className="mb-[10%] flex w-[70%] justify-between">
      {eventCardInfo.map((CARD, index) => (
        <div key={index}>
          <EventCard image={CARD.image} title={CARD.title} text={CARD.text} />
        </div>
      ))}
    </div>
  );
};
export default EventCards;
