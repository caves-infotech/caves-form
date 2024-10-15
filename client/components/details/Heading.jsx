import { useGetContext } from '@/services/formStateContext';

export default function Heading({text}) {
    const { isVerticalNavbarOpen } = useGetContext();
  return (
    <div className={`  sm:left-[250px] w-full left-0 fixed top-14 backdrop-blur-sm py-4`}>
      <h2 className=' text-2xl mx-2 ml-9 sm:ml-4 font-bold px-5'>{text} </h2>
    </div>
  )
}
