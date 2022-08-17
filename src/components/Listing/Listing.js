import React from 'react'
import PropTypes from 'prop-types'

function Listing({items}) {

  return (
    items.map(item => (
      <div className="item-list" key={item.listing_id}>
        <div className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt="Картинка"/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title}</p>
            <p className="item-price">{item.currency_code}{item.price}</p>
            <p className="item-quantity level-medium">{item.quantity} left</p>
          </div>
        </div>
      </div>
    ))
  )
}

Listing.defaultProps = {
  items: []
}

Listing.propTypes = {
  listing_id: PropTypes.number,
  url: PropTypes.string,
  MainImage: PropTypes.string,
  title: PropTypes.string,
  currency_code: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number
}

export default Listing
