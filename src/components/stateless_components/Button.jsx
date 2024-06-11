const Button = ({ onClick, className, text, type }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {text}
    </button>
  )
}

export default Button
