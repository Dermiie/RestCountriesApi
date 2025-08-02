function Button({ children, onClick }) {
  return (
    <div>
      <button
        className="p-4 bg-white shadow-2xl inline-block"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
