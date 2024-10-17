
function GoTopBouncer({ scrollToTop }) {
  return (
    <div className="fixed bottom-5 right-5 sm:right-8 ">
      <button
        className="bg-black animate-bounce hover:bg-yellow-600 p-2 sm:p-5 rounded-full"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 -960 960 960"
          width="36px"
          fill="#FFFFFF"
        >
          <path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z" />
        </svg>
      </button>
    </div>
  );
}

export default GoTopBouncer;
