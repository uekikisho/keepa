'use client'
import { useState } from "react";
import LeftPanelBox from "./LeftPanelBox";
interface propType {
    // deltaPercentRange: number[],
    // deltaRange: number[],
    // currentRange: number[],
    // sortType: number,
    // dateRange: number,
    // priceTypes: number,
    // houseConditions: boolean[],
    // setDeltaPercentRange: any,
    // setdeltaRange: any,
    // setCurrentRange: any,
    // setSortType: any,
    // setDateRange: any,
    // setPriceTypes: any,
    // setHouseConditions: any
}
export default function LeftPanel(
    // { deltaPercentRange, deltaRange, currentRange, sortType, dateRange, priceTypes, houseConditions,
    // setDeltaPercentRange, setdeltaRange, setCurrentRange, setSortType, setDateRange, setPriceTypes, setHouseConditions }: propType
) {
    const [deltaPercentRange, setDeltaPercentRange] = useState([0, 0])
    const [deltaRange, setDeltaRnage] = useState([0, 0])
    const [currentRange, setCurrentRange] = useState([0, 0])
    const [sortType, setSortType] = useState(4)
    const [dateRange, setDateRange] = useState(0);
    const [priceTypes, setPriceTypes] = useState(18);
    const [houseConditions, setHouseConditions] = useState([false, false, false, false]);


    return <div id="leftPanel" className="block">
        <div title="You can blacklist words by prefixing a minus sign, like this: &quot;-keyword&quot;">
            <input maxLength={2000} id="dealSearchBar" placeholder="Search deals" />
            <span id="submitDealSearch"></span>
        </div>
        <LeftPanelBox
            title="View as"
            contentDivId="dealsViewType"
            bgColor="#11171f80"
        >
            <div data-viewtype="1">
                Table &nbsp;
                <i className="fa fa-table" />
            </div>
            <div data-viewtype="0" className="active">
                Product Boxes&nbsp;
                <i className="fa fa-th-large"></i>
            </div>
        </LeftPanelBox>
        <LeftPanelBox
            title="Choose Deal type"
            contentDivId="dealPriceTypesFilter"
        >
            <div data-type="3" className={priceTypes == 3 ? "active" : ""} onClick={() => setPriceTypes(3)}>Sales Rank</div>
            <div className="h-[5px]"></div>
            <div data-type="18" className={priceTypes == 18 ? "active" : ""} onClick={() => setPriceTypes(18)}>Buy Box 🚚</div>
            <div data-type="0" className={priceTypes == 0 ? "active" : ""} onClick={() => setPriceTypes(0)}>Amazon</div>
            <div data-type="1" className={priceTypes == 3 ? "active" : ""} onClick={() => setPriceTypes(1)}>New</div>
            <div data-type="10" className={priceTypes == 10 ? "active" : ""} onClick={() => setPriceTypes(10)}>New, 3rd Party FBA</div>
            <div data-type="7" className={priceTypes == 7 ? "active" : ""} onClick={() => setPriceTypes(7)}>New, 3rd Party FBM 🚚</div>
            <div data-type="33" className={priceTypes == 33 ? "active" : ""} onClick={() => setPriceTypes(33)}>New, Prime exclusive</div>
            <div data-type="8" className={priceTypes == 8 ? "active" : ""} onClick={() => setPriceTypes(8)}>Lightning Deals</div>
            <div className="h-[5px]"></div>
            <div data-type="32" className={priceTypes == 32 ? "active" : ""} onClick={() => setPriceTypes(32)}>Buy Box Used 🚚</div>
            <div data-type="2" className={priceTypes == 2 ? "active" : ""} onClick={() => setPriceTypes(2)}>Used</div>
            <div data-type="19" className={priceTypes == 19 ? "active" : ""} onClick={() => setPriceTypes(19)}>Used, like new 🚚</div>
            <div data-type="20" className={priceTypes == 20 ? "active" : ""} onClick={() => setPriceTypes(21)}>Used, very good 🚚</div>
            <div data-type="21" className={priceTypes == 21 ? "active" : ""} onClick={() => setPriceTypes(22)}>Used, good 🚚</div>
            <div data-type="22" className={priceTypes == 22 ? "active" : ""} onClick={() => setPriceTypes(22)}>Used, acceptable 🚚</div>
            <div data-type="9" className={priceTypes == 9 ? "active" : ""} onClick={() => setPriceTypes(9)}>
                Warehouse Deals
                <div className="sub-deal-type-filter sub-deal-type-filter-9">
                    <div>
                        <input id="sub-deal-type-filter-9-2" type="checkbox" checked={houseConditions[0]} data-warehousecondition="2" onChange={() => setHouseConditions([!houseConditions[0], houseConditions[1], houseConditions[2], houseConditions[3]])} />
                        <label htmlFor="sub-deal-type-filter-9-2">Used - Like New</label>
                    </div>
                    <div>
                        <input id="sub-deal-type-filter-9-3" type="checkbox" checked={houseConditions[1]} data-warehousecondition="3" onChange={() => setHouseConditions([houseConditions[0], !houseConditions[1], houseConditions[2], houseConditions[3]])} />
                        <label htmlFor="sub-deal-type-filter-9-3">Used - Very Good</label>
                    </div>
                    <div>
                        <input id="sub-deal-type-filter-9-4" type="checkbox" checked={houseConditions[2]} data-warehousecondition="4" onChange={() => setHouseConditions([houseConditions[0], houseConditions[1], !houseConditions[2], houseConditions[3]])} />
                        <label htmlFor="sub-deal-type-filter-9-4">Used - Good</label>
                    </div>
                    <div>
                        <input id="sub-deal-type-filter-9-5" type="checkbox" checked={houseConditions[3]} data-warehousecondition="5" onChange={() => setHouseConditions([houseConditions[0], houseConditions[1], houseConditions[2], !houseConditions[3]])} />
                        <label htmlFor="sub-deal-type-filter-9-5">Used - Acceptable</label>
                    </div>
                </div>
            </div>
            <div className="h-[5px]"></div>
            <div data-type="6" className={priceTypes == 6 ? "active" : ""} onClick={() => setPriceTypes(6)}>Refurbished</div>
            <div data-type="5" className={priceTypes == 5 ? "active" : ""} onClick={() => setPriceTypes(5)}>Collectible</div>
            <div data-type="30" className={priceTypes == 30 ? "active" : ""} onClick={() => setPriceTypes(30)}>Trade-In</div>
            <div className="h-[5px]"></div>
        </LeftPanelBox>
        <LeftPanelBox
            title="Limit Drop Interval"
            contentDivId="dealDateRange"

        >
            <div className={dateRange == 0 ? "active" : ""} data-daterange="0" onClick={() => setDateRange(0)}>Day</div>
            <div className={dateRange == 1 ? "active" : ""} data-daterange="1" onClick={() => setDateRange(1)}>Week</div>
            <div className={dateRange == 2 ? "active" : ""} data-daterange="2" onClick={() => setDateRange(2)}>Month</div>
            <div className={dateRange == 3 ? "active" : ""} data-daterange="3" onClick={() => setDateRange(3)}>3 Months</div>
            <div className={dateRange == 4 ? "active" : ""} data-daterange="4" onClick={() => setDateRange(4)}>All</div>
        </LeftPanelBox>
        <LeftPanelBox
            title={
                <a title="disable range selections" id="panelRangeSelectionDisableCross">
                    <i className="fa fa-caret-down"></i>{" "}
                    Select Ranges
                </a>
            }
            contentDivId="panelRangeSelection"
            // contentDivClassName="ui-rangeSlider ui-rangeSlider-withArrows relative"
            contentDivStyle={{
                marginTop: "12px",
                marginBottom: "-14px"
            }}
            className="filterbar__box filterbar__box--range"
        >

            <div id="deltaPercentRange" className="ui-rangeSlider ui-rangeSlider-withArrows relative">
                <div className="ui-rangeSlider-container absolute w-[123px]">
                    <div className="ui-rangeSlider-innerBar absolute top-0 left-0 w-[123px]"></div>
                    <div className="ui-rangeSlider-bar absolute top-0 left-[12.3028px] w-[98.4px]"></div>
                    <div className="ui-rangeSlider-handle ui-rangeSlider-leftHandle absolute top-0 left-[12.3155px]">
                        <div className="ui-rangeSlider-handle-inner"></div>
                    </div>
                    <div className="ui-rangeSlider-handle ui-rangeSlider-rightHandle absolute top-0 left-[103.701px]">
                        <div className="ui-rangeSlider-handle-inner"></div>
                    </div>
                </div>
                <div className="ui-rangeSlider-arrow ui-rangeSlider-leftArrow absolute left-0">
                    <div className="ui-rangeSlider-arrow-inner"></div>
                </div>
                <div className="ui-rangeSlider-arrow ui-rangeSlider-rightArrow absolute right-0">
                    <div className="ui-rangeSlider-arrow-inner"></div>
                </div>
                <div className="ui-rangeSlider-label ui-rangeSlider-leftLabel absolute block right-[105.872px]">
                    <div className="ui-rangeSlider-label-value">10%</div>
                    <div className="ui-rangeSlider-label-inner"></div>
                </div>
                <div className="ui-rangeSlider-label ui-rangeSlider-rightLabel absolute block right-[14.4719px]">
                    <div className="ui-rangeSlider-label-value">90%</div>
                    <div className="ui-rangeSlider-label-inner"></div>
                </div>
            </div>
            <div className="filterbar__label filterbar__label--up">
                Drop Percent Range
            </div>
            <div id="deltaRange" className="ui-rangeSlider ui-rangeSlider-withArrows relative">
                <div className="ui-rangeSlider-container absolute w-[123px]">
                    <div className="ui-rangeSlider-innerBar absolute top-0 left-0 w-[123px]"></div>
                    <div className="ui-rangeSlider-bar absolute top-0 w-[110.7px] left-0"></div>
                    <div className="ui-rangeSlider-handle ui-rangeSlider-leftHandle absolute top-0 left-0">
                        <div className="ui-rangeSlider-handle-inner"></div>
                    </div>
                    <div className="ui-rangeSlider-handle ui-rangeSlider-rightHandle absolute top-0 left-[103.701px]">
                        <div className="ui-rangeSlider-handle-inner"></div>
                    </div>
                </div>
                <div className="ui-rangeSlider-arrow ui-rangeSlider-leftArrow absolute left-0">
                    <div className="ui-rangeSlider-arrow-inner"></div>
                </div>
                <div className="ui-rangeSlider-arrow ui-rangeSlider-rightArrow absolute right-0">
                    <div className="ui-rangeSlider-arrow-inner"></div>
                </div>
                <div className="ui-rangeSlider-label ui-rangeSlider-leftLabel absolute block right-[121.711px]">
                    <div className="ui-rangeSlider-label-value">$ 0</div>
                    <div className="ui-rangeSlider-label-inner"></div>
                </div>
                <div className="ui-rangeSlider-label ui-rangeSlider-rightLabel absolute block right-[14.5031px]">
                    <div className="ui-rangeSlider-label-value">$ 90</div>
                    <div className="ui-rangeSlider-label-inner"></div>
                </div>
            </div>
            <div className="filterbar__label filterbar__label--up">
                Drop Range
            </div>
            <div id="deltaRange" className="ui-rangeSlider ui-rangeSlider-withArrows relative">
                <div className="ui-rangeSlider-container absolute w-[123px]">
                    <div className="ui-rangeSlider-innerBar absolute top-0 left-0 w-[123px]"></div>
                    <div className="ui-rangeSlider-bar absolute top-0 w-[110.7px] left-0"></div>
                    <div className="ui-rangeSlider-handle ui-rangeSlider-leftHandle absolute top-0 left-0">
                        <div className="ui-rangeSlider-handle-inner"></div>
                    </div>
                    <div className="ui-rangeSlider-handle ui-rangeSlider-rightHandle absolute top-0 left-[103.701px]">
                        <div className="ui-rangeSlider-handle-inner"></div>
                    </div>
                </div>
                <div className="ui-rangeSlider-arrow ui-rangeSlider-leftArrow absolute left-0">
                    <div className="ui-rangeSlider-arrow-inner"></div>
                </div>
                <div className="ui-rangeSlider-arrow ui-rangeSlider-rightArrow absolute right-0">
                    <div className="ui-rangeSlider-arrow-inner"></div>
                </div>
                <div className="ui-rangeSlider-label ui-rangeSlider-leftLabel absolute block right-[121.711px]">
                    <div className="ui-rangeSlider-label-value">$ 58</div>
                    <div className="ui-rangeSlider-label-inner"></div>
                </div>
                <div className="ui-rangeSlider-label ui-rangeSlider-rightLabel absolute block right-[14.5031px]">
                    <div className="ui-rangeSlider-label-value">$ 400</div>
                    <div className="ui-rangeSlider-label-inner"></div>
                </div>
            </div>
            <div className="filterbar__label filterbar__label--up">
                Price Range
            </div>
            <div id="salesRankRange" className="flex">
                <span>
                    Min. #
                    <div id="srRangeMin" contentEditable="true" title="Enter sales rank limit. Leave empty to set no limit. If a value is set all products with no sales rank will be excluded!">
                        All
                    </div>
                </span>
                <span>
                    Max. #
                    <div id="srRangeMax" contentEditable="true" title="Enter sales rank limit. Leave empty to set no limit. If a value is set all products with no sales rank will be excluded!">
                        All
                    </div>
                </span>
            </div>
            <div className="filterbar__label filterbar__label">Sales Rank Range</div>
            <div id="minRating" className="filterbar__filter filterbar__filter--star">
                <i className="fa fa-star" data-rating="10"></i>
                <i className="fa fa-star-o" data-rating="20"></i>
                <i className="fa fa-star-o" data-rating="30"></i>
                <i className="fa fa-star-o" data-rating="40"></i>
                <i className="fa fa-star-o" data-rating="50"></i>
            </div>
            <div className="filterbar__label">Min. Rating</div>

        </LeftPanelBox>
        <LeftPanelBox
            title={
                <a title="disable filters" id="panelFilterSelectionDisableCross">
                    <i className="fa fa-caret-down"></i>{" "}
                    Apply filter
                </a>
            }
            contentDivId="dealCheckBoxes"
        >
            <div>
                <input id="checkboxLowestEver" type="checkbox" />
                <label htmlFor="checkboxLowestEver">Lowest ever</label>
            </div>
            <div>
                <input id="checkboxLowestAll" type="checkbox" />
                <label title="only show products with the lowest of all new offers (Amazon, Marketplace New)" htmlFor="checkboxLowestAll">Lowest New offer</label>
            </div>
            <div>
                <input id="checkboxOutOfStock" type="checkbox" />
                <label htmlFor="checkboxOutOfStock">Out of stock</label>
            </div>
            <div>
                <input id="checkboxMustHaveAmazonOffer" type="checkbox" />
                <label htmlFor="checkboxMustHaveAmazonOffer">Has Amazon offer</label>
            </div>
            <div>
                <input id="checkboxMustNotHaveAmazonOffer" type="checkbox" />
                <label htmlFor="checkboxMustNotHaveAmazonOffer">No Amazon offer</label>
            </div>
            <div>
                <input id="checkboxHasReviews" type="checkbox" />
                <label htmlFor="checkboxHasReviews">Must have reviews</label>
            </div>
            <div>
                <input id="checkboxIsPrimeExclusive" type="checkbox" />
                <label htmlFor="checkboxIsPrimeExclusive">Is Prime exclusive (beta)</label>
            </div>
            <div>
                <input id="checkboxFilterErotic" checked={true} type="checkbox" />
                <label htmlFor="checkboxFilterErotic">Filter adult items</label>
            </div>
            <div>
                <input id="checkboxSingleVariation" checked={true} type="checkbox" />
                <label htmlFor="checkboxSingleVariation" className="w-[132px]">Show only one variation per product</label>
            </div>
        </LeftPanelBox>
        <LeftPanelBox
            title="Sort by"
            contentDivId="dealSortType"
        >
            <div className={sortType == 4 ? "active" : ""} data-sort="percentage" onClick={() => { setSortType(4) }}>Percentage&nbsp;{sortType == 4 && <i className="fa fa-sort-numeric-desc"></i>}</div>
            <div className={sortType == 2 ? "active" : ""} data-sort="drop" onClick={() => setSortType(2)}>Drop&nbsp;{sortType == 2 && <i className="fa fa-sort-numeric-desc"></i>}</div>
            <div className={sortType == 5 ? "active" : ""} data-sort="price" onClick={() => setSortType(5)}>Price&nbsp;{sortType == 5 && <i className="fa fa-sort-numeric-desc"></i>}</div>
            <div className={sortType == 1 ? "active" : ""} data-sort="newest" onClick={() => setSortType(1)}>Newest&nbsp;{sortType == 1 && <i className="fa fa-sort-numeric-desc"></i>}</div>
            <div className={sortType == 3 ? "active" : ""} data-sort="salesRank" title="Products with no sales rank will be excluded!" onClick={() => setSortType(3)}>Sales Rank&nbsp;{sortType == 3 && <i className="fa fa-sort-numeric-desc"></i>}</div>
        </LeftPanelBox>
        <div className="pr-[10px]">
            <div className="text-[#8a8a8a] text-[12px] text-right mb-[6px] mt-[-4px]">
                {" "}🚚 = shipping included
            </div>
            <div id="resetSettings" title="reset selections to default values"><i className="fa fa-undo"></i>{" "}Reset Selections</div>
            <div id="clearVisited"><i className="fa fa-eraser"></i>{" "}Clear visited deals</div>
            <div id="clearVisitedSetting"><i className="fa fa-sliders"></i>{" "}Set clearing interval</div>
            <br />
            <div id="queryJSON" title="show Deals API query"><i className="fa fa-file-code-o"></i>{" "}Show API query</div>
            <br /> <br />
            <div id="leftPanelMarkAllVisited"><i className="fa fa-check-square-o fa-lg"></i><br /><span>Mark all as seen</span></div>
            <div>
                <div className="leftPanelBottomMenu none" id="leftPanelBackToTop">
                    <i className="fa fa-arrow-up fa-lg"></i><br />
                    <span>Back to top</span>
                </div>
            </div>
        </div>

    </div >
}