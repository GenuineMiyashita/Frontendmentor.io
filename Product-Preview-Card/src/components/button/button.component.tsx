const Button = () => {
  return (
    <div className="flex justify-evenly py-1">
      <button className="rounded bg-gray-300 px-2 font-bold text-gray-800 hover:bg-gray-400">
        &larr; Prev
      </button>
      <button className="rounded bg-gray-300 px-2 font-bold text-gray-800 hover:bg-gray-400">
        Next &rarr;
      </button>
    </div>
  );
};

export default Button;
