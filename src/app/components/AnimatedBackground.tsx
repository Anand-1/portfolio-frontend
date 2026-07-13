const AnimatedBackground = () => {
  return (
    <div className="vectorBackground" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="vectorBackgroundSvg">
        <circle className="bgShape bgShape1" cx="20" cy="20" r="18" />
        <circle className="bgShape bgShape2" cx="80" cy="15" r="12" />
        <circle className="bgShape bgShape3" cx="50" cy="70" r="24" />
        <path
          className="bgLine"
          d="M12 68 C28 40, 40 32, 52 54 S78 90, 92 60"
          fill="none"
          strokeWidth="0.8"
        />
        <path
          className="bgLine bgLine2"
          d="M4 32 C18 14, 32 10, 44 26 S70 60, 92 48"
          fill="none"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
