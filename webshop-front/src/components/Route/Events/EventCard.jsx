import { AiOutlineArrowRight } from 'react-icons/ai'

import CountDown from './CountDown'
import styles from '../../../styles/style'

const EventCard = ({ active }) => {
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? 'unset' : 'mb-12'
      } lg:flex p-2`}
    >
      <div className="w-full lg:w-[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/254gb</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa
          consequatur, nihil ipsum eum sed tempora placeat architecto facilis
          similique nesciunt esse sunt a, debitis beatae accusantium, quidem
          obcaecati quia. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Id culpa consequatur, nihil ipsum eum sed tempora placeat
          architecto facilis similique nesciunt esse sunt a, debitis beatae
          accusantium, quidem obcaecati quia.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>
          <span className="text-[#44a553] pr-5 font-[400] text-[17px]">
            120 sold
          </span>
        </div>
        <CountDown />
        <div className="flex  mt-4  ">
          <div
            className={`${styles.button} mr-9 rounded-[4px] h-11 hover:bg-teal-400 duration-300`}
          >
            <span className="text-[#fff] ">See Details</span>
          </div>
          <div
            className={`${styles.button}  rounded-[4px] h-11  hover:bg-teal-400 duration-300`}
          >
            <span className="text-[#fff] ">Buy Now</span>
          </div>
        </div>
        <span className="font-Roboto cursor-pointer hover:text-[red] duration-200 text-[#333] flex self-end text-[16px]  mr-3">
          See More Events
          <AiOutlineArrowRight className="self-center text-[16px] block ml-2" />
        </span>
      </div>
    </div>
  )
}
export default EventCard
