export default function Heading({ text , isVerticalNavbarOpen}) {
  return (
    <div className={`  ${
      isVerticalNavbarOpen
        ? " sm:left-64 "
        : " sm:left-24 "
    }  fixed sm:top-14 top-32 backdrop-blur-sm sm:py-4 py-2 w-full`}
    >
      <h2 className=" text-2xl mx-2 ml-9 sm:ml-4 font-bold px-5">{text} </h2>
    </div>
  );
}
