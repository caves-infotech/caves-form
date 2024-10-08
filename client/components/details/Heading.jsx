import { useGetContext } from '@/services/formStateContext';

export default function Heading({text}) {
    const { isVerticalNavbarOpen } = useGetContext();
  return (
    <div className={`  sm:left-[250px] w-full left-6 fixed top-16 bg-opacity-95 bg-white border-white border-opacity-50 py-6`}>
      <h2 className=' text-2xl mx-2 font-bold px-5'>{text} </h2>
    </div>
  )
}
