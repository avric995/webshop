import styles from '../../../styles/style'
import EventCard from './EventCard'

const Events = () => {
  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Popular Events</h1>
      </div>
      <div className="w-full grid mb-12">
        <EventCard />
      </div>
    </div>
  )
}
export default Events
