import React from "react"

const Header = ({colorValue, hexValue, isDarkText}) => {
  return (
    <section className='square'
        style={{
          backgroundColor:colorValue,
          color:isDarkText ? "black" : "white"
        }}
        >
          <p>{colorValue ? colorValue : "Empty Value"}</p>
          <p>{hexValue ? hexValue :null}</p>
        </section>
  )
}
square.defaultProps = {
  colorValue:"Empty Color Value"
}
export default Header