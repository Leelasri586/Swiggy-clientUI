import React, { useState } from 'react'
import { itemData } from './Data'

const ItemsDisplay = () => {
    const [itemDisplay, setItemDisplay] = useState(itemData)
    
    console.log(itemData)
  return (
            <div className="itemSection">
                {itemDisplay.map((item)=>{
                    return(
                        <div className="gallary">
                            <img src={item.item_img} alt={item.item_img} />

                        </div>
                    )
                })}
            </div>
  )
}

export default ItemsDisplay