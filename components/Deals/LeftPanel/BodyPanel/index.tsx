'use client'
import { useEffect, useState } from "react";
import ProductContainer from "./ProductContainer";

export default function BodyPanel() {
    const [data, setData] = useState<any | null>([])
    useEffect(() => {
        async function getData() {
            try {
                // Fetch data from external API
                const raw = JSON.stringify(
                    {
                        "page": 0,
                        "domainId": "1",
                        "excludeCategories": [],
                        "includeCategories": [],
                        "priceTypes": [
                            18
                        ],
                        "deltaRange": [
                            4950,
                            7000
                        ],
                        "deltaPercentRange": [
                            20,
                            30
                        ],
                        "salesRankRange": [
                            -1,
                            -1
                        ],
                        "currentRange": [
                            100,
                            40000
                        ],
                        "minRating": -1,
                        "isLowest": false,
                        "isLowestOffer": false,
                        "isOutOfStock": false,
                        "titleSearch": "",
                        "isRangeEnabled": true,
                        "isFilterEnabled": false,
                        "filterErotic": true,
                        "singleVariation": true,
                        "hasReviews": false,
                        "isPrimeExclusive": false,
                        "mustHaveAmazonOffer": false,
                        "mustNotHaveAmazonOffer": false,
                        "sortType": 4,
                        "dateRange": "0",
                        "warehouseConditions": [
                            2,
                            3,
                            4,
                            5
                        ]
                    }

                );

                const res = await fetch("/keepa/deal?key=32avvnhiou8erajg5iq7ia0n8u2rv9re0bhq844dha59hs2hdm1ok9nia8t471pv", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: raw,
                    redirect: "follow"
                });
                const data = await res.json()
                console.log(data)
                setData(data)
            } catch (error) {
                console.log(error);
                setData(null)
            }

        };
        getData();

    }, [])
    useEffect(() => {
        async function getData() {
            try {
                // Fetch data from external API
                const res = await fetch("api/user/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify({
                        "name": 'csh',
                        "password": 'csh'
                    }),
                    redirect: "follow"
                });
                const data = await res.json()
                console.log(data)
                setData(data)
            } catch (error) {
                console.log(error);
                setData(null)
            }

        };
        getData();
    }, [])
    let allCategoryCount = 0;
    data?.deals?.categoryCount?.forEach((ele: any) => {
        allCategoryCount = allCategoryCount + ele
    });
    return <div className="content" id="bodyPanel">
        <div id="dealsSaveBox" className="flex">
            <div className="saveSlotBox">
                <span title="load bookmark" data-slot="0" className="dealsSaveSlot">Your Deals #0</span>
                <ul>
                    <li data-type="0">Overwrite with current selection</li>
                    <li data-type="1">Rename</li>
                    <li data-type="2">Delete</li>
                </ul>
                <span title="edit bookmark" className="editSaveSlot">
                    <i className="fa fa-pencil"></i>
                </span>
            </div>
            <div id="dealsSaveSlotAdd" title="create bookmark for this selection">
                <i className="fa fa-plus-circle fa-lg"></i>
            </div>
        </div>
        <div id="dealsNotice" className="hidden text-[12px] absolute">
            <aside className="ml-[50px]">
                <span id="betaNotice"></span>
            </aside>
        </div>
        <div className="filterContainer unselectable">
            <div className="text-right w-[90%] min-w-[740px] m-auto relative">
                <label htmlFor="dealCategoryIncludeMeta" className="cursor-pointer pr-5 text-xs">
                    <input id="dealCategoryIncludeMeta" name="dealCategoryIncludeMeta" value="1" type="checkbox" /> Show meta categories
                </label>
                <input className="w-[200px]" maxLength={28} id="dealCategorySearchBar" placeholder="Search for subcategories" />
                <span className="right-[3px]" id="submitDealCategorySearch"></span>
            </div>
            <div id="filterBar" className="filterBar lightShadow">
                <div id="categorySearchResults"></div>
                <div id="filterBarContent">
                    <div id="filterCats">
                        <span className="text-[#444] whitespace-nowrap" style={{ textShadow: "#ccc 1px 1px 2px" }}>Show all ({allCategoryCount})</span>
                        <hr className="mt-[9px] border-[#0a285280]" />
                        {
                            data?.deals?.categoryIds?.map((categoryId: any, index: number) => {
                                return (
                                    <span className="whitespace-nowrap ml-[-6px]" key={index}>
                                        <a rel={categoryId}>{`${data?.deals?.categoryNames[index]} (${data?.deals?.categoryCount[index]})`}</a>
                                        <a className="removeCat ml-[-15px]" rel={categoryId}>
                                            <i className="fa fa-times"></i>
                                        </a>
                                    </span>
                                )
                            })

                        }
                    </div>
                    <div id="removedCats"></div>
                </div>
            </div>
        </div>
        <div className="text-[12px] text-[#999] pl-[36px]" id="dealsTitleSearchResults"></div>
        <div id="productPage0" className="productPage">
            {
                data?.deals?.dr?.map((drData: any, index: number) => {
                    if (index == 100) {
                        return
                    }
                    return (
                        <ProductContainer drData={drData} key={index} />
                    )
                })
            }

        </div>
        <div id="loadingIcon" style={{ display: "none" }}></div>
        <div className="button" id="submitDealQuery" style={{ display: "none" }}>Find Deals!</div>
    </div>
}

