import React from 'react'

const FormatPrice = ({price}) => {
  return (
    Intl.NumberFormat("en-DE", {
        style:"currency",
        currency:"EUR",
        maximumFractionDigit:2,
    }).format(price/100)
  )
}

export default FormatPrice