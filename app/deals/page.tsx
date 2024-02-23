'use client'
import LeftPanel from "@/components/Deals/LeftPanel";
import BodyPanel from "@/components/Deals/LeftPanel/BodyPanel";
import LeftPanelBox from "@/components/Deals/LeftPanel/LeftPanelBox";
import { Suspense, useState } from "react";
export default function Deals() {
    const [deltaPercentRange, setDeltaPercentRange] = useState([0, 0])
    const [deltaRange, setDeltaRnage] = useState([0, 0])
    const [currentRange, setCurrentRange] = useState([0, 0])
    const [sortType, setSortType] = useState(4)
    const [dateRange, setDateRange] = useState(0);
    const [priceTypes, setPriceTypes] = useState(18);
    const [houseConditions, setHouseConditions] = useState([false, false, false, false]);


    return (
        <>
            <LeftPanel
            // deltaPercentRange={deltaPercentRange} deltaRange={deltaRange} currentRange={currentRange} sortType={sortType} dateRange={dateRange} priceTypes={priceTypes} houseConditions={houseConditions}
            // setDeltaPercentRange={setDeltaPercentRange} setdeltaRange={setDeltaRnage} setCurrentRange={setCurrentRange} setSortType={setSortType} setDateRange={setDateRange} setPriceTypes={setPriceTypes} setHouseConditions={setHouseConditions}
            />
            <div id="contentAlign" className="mt-[130px] w-auto mr-[5px] ml-[180px] min-w-[650px] relative">
                <Suspense fallback={
                    <div id="loadingIcon" className="d-block">
                        loading...
                    </div>
                }>
                    <BodyPanel />
                </Suspense>
            </div>
        </>
    );
}