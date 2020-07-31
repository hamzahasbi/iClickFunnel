import React, {useState} from "react"

import CustomPopUp from "./CustomPopUp";
import PaypalButton from "./Payment"
import { PricingCard } from "tabler-react"

const Pricing = ({ offer }) => {

  const [processed, setProcessed] = useState(-1);
  const closePopUp = () => {
    setProcessed(-1);
  }
  const onSuccess = (payment) => {
    setProcessed(1);

  }	        
  const onCancel = (data) => {
      setProcessed(0);

  }	        
  const onError = (err) => {
      console.log("Error!", err);
      setProcessed(0); 
  }		
  const client = {
    sandbox:    PAYPAL_CLIENT_ID_SANDBOX, // sandbox client ID
    production: PAYPAL_CLIENT_ID_PRODUCTION,// production client ID
  };     
  const currency = 'USD'; // or you can set this value from your props or state   
  console.log(PAYPAL_ENV_DEV);
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
        {/* <button className="choose">{"Choose plan"} </button> */}
        <PaypalButton 
        currency={currency}
        total={offer.price}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
        client={client}
        env={PAYPAL_ENV_DEV}
        />
        {processed === 1 &&       
        <CustomPopUp popUpText="You're Payment has been processed succefully we will reach out to you soon" 
        closePopUp={closePopUp} 
        PopUpButton="YEY!!"/>
        }

        {processed === 0 && 
          <CustomPopUp popUpText="Payment Cancelled !" closePopUp={closePopUp} PopUpButton="Understood"/>
        }
      </PricingCard>
  )
   
}
export default Pricing
