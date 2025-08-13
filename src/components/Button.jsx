function Button({ children, onClick }) {
  return (
    <div>
      <button
        className="py-2 px-8 bg-white shadow-2xl inline-block"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
