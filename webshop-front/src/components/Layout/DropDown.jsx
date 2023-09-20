import { useNavigate } from 'react-router-dom'
import styles from '../../styles/style'

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate()
  const submitHandle = (i) => {
    if (i.title === 'All Categories') {
      navigate('/products')
    } else {
      navigate(`/products?category=${i.title}`)
    }

    setDropDown(false)
    window.location.reload()
  }
  return (
    <div className="pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((i, index) => {
          return (
            <div
              className={`${styles.normalFlex} transition ease-in-out hover:text-red-600 hover:translate-x-0 hover:shadow-sm  hover:border-t-2 border-slate-50 `}
              key={index}
              onClick={() => submitHandle(i)}
            >
              <img
                src={i.image_Url}
                style={{
                  width: '25px',
                  height: '25px',
                  objectFit: 'contain',
                  marginLeft: '10px',
                  userSelect: 'none',
                }}
                alt=""
              />
              <h3 className="m-3 cursor-pointer select-none">{i.title}</h3>
            </div>
          )
        })}
    </div>
  )
}
export default DropDown
