import React from "react"
import { PricingCard } from "tabler-react"

const Pricing = ({ offer }) => {
  return (
    <PricingCard className="cards">
      <PricingCard.Category>{offer.name}</PricingCard.Category>
      <PricingCard.Price>{`$${offer.price}`} </PricingCard.Price>
      <PricingCard.AttributeList>
        <PricingCard.AttributeItem hasIcon available={offer.bgMusic}>
          {"Background Music"}
        </PricingCard.AttributeItem>
        <PricingCard.AttributeItem hasIcon available={offer.isVoice}>
          {"Voice Over"}
        </PricingCard.AttributeItem>
        <PricingCard.AttributeItem hasIcon available={offer.revision}>
          {`Revisions(${offer.numRevison})`}
        </PricingCard.AttributeItem>
        <PricingCard.AttributeItem>
          <strong>{offer.numWords} </strong>
          {"word"}
        </PricingCard.AttributeItem>

        <PricingCard.AttributeItem>
          <strong> Delivery in {offer.delay} </strong>
        </PricingCard.AttributeItem>
      </PricingCard.AttributeList>
      <button className="choose">{"Choose plan"} </button>
    </PricingCard>
  )
}
export default Pricing
