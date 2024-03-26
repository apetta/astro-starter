import confetti from "canvas-confetti";

function Button({ children }: { children: string }) {
  return (
    <button
      className="appearance-none py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
      onClick={() => confetti()}
    >
      {children}
    </button>
  );
}
export default Button;
