import React from 'react'
import './InfoGallery.css'
import pic1 from "../../images/pic1.png";
import game from "../../images/game.png";
import btn from "../../images/btn.png";
import clean from "../../images/clean.png";
import ta from "../../images/ta.png";
import eco from "../../images/eco.png";
function InfoGallery() {
  return (
    <div>
        <div
        className="textbox"
        style={{
          backgroundImage: `url(${pic1})`,
          height: "657px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text">
          <p>THE BIG IDEA</p>
          <h5>Waterless</h5>
          <h2>
            We asked ourselves, why are we paying to ship heavy, plastic bottles
            of (mostly) water around the world, when we are already showering in
            water?
          </h2>
          <h3>
            By removing added water from our formulas, we can create cutting
            edge formulas that are ultra clean, plant-based and leave your hair
            and skin happy and healthy.
          </h3>
          <h4>
            One of the many reasons to <span>go waterless.</span>
          </h4>
        </div>
      </div>
      <div className="split">
        <img src={game} alt="" />
        <div className="rets">
          <p>High Performance</p>
          <h5>It works, we pinky promise.</h5>
          <h2>
            We know that if your personal care products don't make your hair and
            skin feel amazing, nothing else matters.
          </h2>
          <h3>
            We have high expectations of our hair and body care and our formulas
            won't disappoint. From a deep cleansing lather to our signature
            fresh scent, we've captured the sensorial shower experience you
            love.
          </h3>

          <img className="b" src={btn} alt="" />
        </div>
      </div>

      <div className="shets">
        <p>Super Clean</p>
        <h5>Always clean, as it should be.</h5>
        <h2>
          By removing the water from our formulas, Everist products can be
          formulated to a new standard of clean.
        </h2>
        <h3>
          Everist products are plant-based, vegan and cruelty-free as well as
          being free-from sulfates, silicones, dyes and synthetic fragrances. No
          small feat.
        </h3>
        <img src={clean} alt="" />
      </div>
      <div className="vas">
        <img className="b" src={ta} alt="kglhj;k'l" />
        <div className="yets">
          <p>Made for Eco-Optimists</p>
          <h5>It's the future
          of beauty.
          </h5>
          <h2>Our products are thoughtfully designed, inside and out, as is the way we do business.</h2>
          <h3>Everist products are single-use plastic free (our tubes are pure 100% recycled aluminum) and we take our caps back through our CapBack program. We also use biodegradable ingredients for our formulas and produce with the smallest carbon footprint possible (which is then offset, to be certified carbon neutral).</h3>
          <img src={eco} alt="" />
        </div>
      </div>
    </div>
  )
}

export default InfoGallery