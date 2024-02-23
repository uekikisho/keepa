'use client'

import Image from "next/image";

// interface propType {
//     drData: any | undefined
// }

export default function ProductContainer({ drData }) {
    const { asin } = drData
    return <div id="p0" className="productContainer min-w-[210px]">
        <div className="title max-w-[210px] text-[14px] text-">{drData?.title}</div>
        <a href={`#!product/1-${asin}`}>
            <div className="productBox colorTipContainer whiteDeals" id="pB0">
                <div className="productImageDiv">
                    <div className="productImage">
                        <img className="active visible" alt="productImage" src="https://m.media-amazon.com/images/I/510dghkXbpL._SS180_.jpg" width={180} height={180} data-xblocker="passed" />
                    </div>
                </div>
                <div className="productSmallDescription ml-[6px]" >
                    <div className="flex h-[12px]">
                        <span title="1 month Amazon price history" className="mb-[2px] hh-[10px] w-[50px] inline-block" style={{
                            backgroundImage: `url(https://graph.keepa.com/pricehistory.png?asin=${asin}&domain=com&salesrank=0&amazon=0&new=0&used=0&bb=1&fba=0&fbm=0&pe=0&ld=0&bbu=0&wd=0&range=31&width=50&height=10&type=1)`
                        }}></span>
                        <span title="1 month Sales Rank history. Current Rank: # 118,430" className="grow text-right right-[13px] h-[10px] w-[50px] inline-block" style={{
                            backgroundImage: `url(https://graph.keepa.com/pricehistory.png?asin="${asin}"&domain=com&salesrank=1&amazon=0&new=0&used=0&bb=0&fba=0&fbm=0&pe=0&ld=0&bbu=0&wd=0&range=31&width=50&height=10&type=1) no-repeat right`
                        }}></span>
                        <br />
                    </div>
                    <div className="flex">
                        <div className="productDiscountBox">
                            <i className="fa fa-arrow-circle-down fa-18 arrowBlue text-[27px]"></i>
                            <span className="productSmallPercent-24">{`${drData?.deltaPercent[1][1]}%`}</span>
                        </div>
                        <div className="productDealTable">
                            <span className="productPriceTableTdSmallS">Average: $ 146.55</span>
                            <br />
                            <span className="productPriceTableTdLargeS">Now: $ 59.99</span>
                        </div>
                    </div>
                    <div className="productDealAgoBox">
                        <span className="productDealAgo">Deal found: 15 hours ago</span>
                        <br />
                        <span className="dealsFindRelatedDeals" data-catids="[11721155011,119764241011,5478067011,11549918011,119774357011]">Find related Deals</span>
                        <a className="externalAmazon absolute text-[#555] cursor-alias right-[7px] bottom-[7px]" href="https://dyn.keepa.com/r/?type=amazon&amp;smile=0&amp;domain=1&amp;asin=B005B84SIQ&amp;source=website&amp;path=dealsOverlay/AMAZON" title="Show on Amazon" target="_blank">
                            <i className="fa fa-amazon"></i>
                        </a>
                    </div>
                </div>
                <span className="colorTip w-[250px] top-[-55.0625px] ml-[-132px]" style={{ display: "none" }}>
                    <span className="colorTipContent">{"Aerosoles Women's Binocular Knee High Boot, Black, 8"}</span>
                    <span className="pointyTipShadow"></span>
                    <span className="pointyTip"></span>
                </span>
            </div>
        </a>
    </div>
}