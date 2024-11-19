export default function Heading({ text , isVerticalNavbarOpen}) {
  return (
    <div className={`  ${
      isVerticalNavbarOpen
        ? " sm:left-64 "
        : " sm:left-24 "
    }  fixed top-14  backdrop-blur-sm py-4 w-full`}
    >
      <h2 className=" text-2xl mx-2 ml-9 sm:ml-4 font-bold px-5">{text} </h2>
    </div>
  );
}
