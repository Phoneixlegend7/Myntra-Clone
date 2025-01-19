import React from 'react'

const BagSummary = (bagSummary) => {
  return (
    <main>
    <div className="bag-details-container">
  <div className="price-header">PRICE DETAILS ({bagSummary.totalItem} Items) </div>
  <div className="price-item">
    <span className="price-item-tag">Total MRP</span>
    <span className="price-item-value">{bagSummary.totalMRP }</span>
  </div>
  <div className="price-item">
    <span className="price-item-tag">Discount on MRP</span>
    <span className="price-item-value priceDetail-base-discount">{bagSummary.totalDiscount}</span>
  </div>
  <div className="price-item">
    <span className="price-item-tag">Convenience Fee</span>
    <span className="price-item-value">₹99</span>
  </div>
  <hr/>
  <div className="price-footer">
    <span className="price-item-tag">Total Amount</span>
    <span className="price-item-value">{bagSummary.finalpayment}</span>
  </div>
</div>
<button className="btn-place-order">
  <div className="css-xjhrni">PLACE ORDER</div>
</button>
  </main>
  )
}

export default BagSummary