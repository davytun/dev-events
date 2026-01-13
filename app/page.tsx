import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";

export default function Home() {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev Event You Mustn't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups,and Conferences, All in One Place.
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h2>Featured Events</h2>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard
                title={event.title}
                image={event.image}
                slug={event.slug}
                date={event.date}
                location={event.location}
                time={event.time}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
