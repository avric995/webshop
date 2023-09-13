import { Link } from 'react-router-dom'
import styles from '../../../styles/style'
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from 'react-icons/ai'
import { useState } from 'react'

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false)
  const [open, setOpen] = useState(false)

  const d = data.name
  const product_name = d.replace(/\s+/g, '-')

  const { url } = data.image_Url[0]

  return (
    <>
      <div className=" w-full h-[370px] rounded-lg relative bg-white p-3 shadow-sm hover:scale-105 transition-transform">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img src={url} alt="" className="w-full h-[170px] object-contain" />
        </Link>
        <Link to={`/`}>
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? `${data.name.slice(0, 40)}...` : data.name}
          </h4>
        </Link>
        <div className="flex">
          <AiFillStar
            size={20}
            color="#F6BA00"
            className="mr-2 cursor-pointer"
          />
          <AiFillStar
            size={20}
            color="#F6BA00"
            className="mr-2 cursor-pointer"
          />
          <AiFillStar
            size={20}
            color="#F6BA00"
            className="mr-2 cursor-pointer"
          />
          <AiFillStar
            size={20}
            color="#F6BA00"
            className="mr-2 cursor-pointer"
          />
          <AiOutlineStar
            size={20}
            color="#F6BA00"
            className="mr-2 cursor-pointer"
          />
        </div>
        <div className="flex py-2 items-center justify-between mt-2">
          <div className="flex">
            <h5 className={`${styles.productDiscountPrice}`}>
              {data.price === 0 ? data.price : data.discount_price}$
            </h5>
            <h4 className={styles.price}>
              {data.price ? data.price + ' $' : null}
            </h4>
          </div>

          <span className="font-[400] text-[17px] font-medium  text-[#68d284]">
            {data.total_sell ? data.total_sell : null} sold
          </span>
        </div>
        {/* side opion */}
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className=" cursor-pointer absolute top-5 right-2"
              onClick={() => setClick(!click)}
              color={click ? 'red' : '#333'}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute top-5 right-2"
              onClick={() => setClick(!click)}
              color={click ? 'red' : '#333'}
              title="Add to  wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute top-14 right-2"
            onClick={() => setClick(!open)}
            color="#333"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute top-24 right-2"
            onClick={() => setClick(!open)}
            color="#444"
            title="Add to cart"
          />
        </div>
      </div>
    </>
  )
}
export default ProductCard
