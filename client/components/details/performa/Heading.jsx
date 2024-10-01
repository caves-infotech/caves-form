import { useGetContext } from '@/services/formStateContext';

export default function Heading({text}) {
    const { isVerticalNavbarOpen } = useGetContext();
  return (
    <div className={` ${ isVerticalNavbarOpen ? " sm:left-64 " : " sm:left-24 "} left-8 fixed top-24  ml-5 `}>
      <h2 className=' text-2xl mx-2 font-bold'>{text} </h2>
    </div>
  )
}
