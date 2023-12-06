const Button = ({ text, onClick }) => {
  return (
    <button
      className="text-base font-bold bg-[#33b37b] rounded-lg text-white p-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
