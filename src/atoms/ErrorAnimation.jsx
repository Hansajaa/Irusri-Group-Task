import animationData from '../assets/animations/not-found-animation.json'
import Lottie from 'lottie-react'

const ErrorAnimation = ({error}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Lottie animationData={animationData} style={{ height: 400, width: 400 }}></Lottie>
        <p className='text-[#656576] m-0 -mt-5 font-bold text-xl'>{error && error}</p>
    </div>
  )
}

export default ErrorAnimation