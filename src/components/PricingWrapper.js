import { Grid } from "tabler-react"
import Pricing from "./Pricing"
import React from "react"

export const data = [
  {
    name: "BASIC",
    description: "Whiteboard Video + Full-HD (1080p) + Background Music",
    timing: "30",
    isVoice: false,
    revision: true,
    delay: "5 to 7 days",
    numWords: "75",
    price: 80,
    bgMusic: true,
    numRevison: 2,
  },
  {
    name: "STANDARD",
    description:
      "Whiteboard Video + Full-HD (1080p) + Voiceover + Colored Details + Background Music",
    timing: "40",
    isVoice: true,
    revision: true,
    delay: "7 days",
    numWords: "90",
    price: 110,
    bgMusic: true,
    numRevison: 4,
  },
  {
    name: "PREMIUM",
    description: "Whiteboard Animation Production with Full features!",
    timing: "60",
    isVoice: true,
    revision: true,
    delay: "7 days",
    numWords: "100",
    price: 135,
    bgMusic: true,
    numRevison: "~Unlimited",
  },
]
const PricingWrapper = ({ props }) => {
  return (
    <div id="pricing" className="pricing">
      <h1>Pricing</h1>
      <Grid.Row className="cards-wrapper">
        {data.map((item, index) => {
          return (
            <Grid.Col key={index}>
              <Pricing offer={item} />
            </Grid.Col>
          )
        })}
      </Grid.Row>
    </div>
  )
}

export default PricingWrapper
