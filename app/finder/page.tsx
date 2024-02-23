import Link from "next/link";

export default function Finder() {

    return <div id="contentAlign" className="mt-[160px] min-w-[650px] max-w-[850px] mr-[40px] ml-[40px] relative w-[1461px]">
        <div id="bodyPanel" className="content">
            <div id="grid-form-finder" className="grid-filter-form" style={{ display: 'block', opacity: 1 }}>
                <form name="loadForm" id="filterForm">
                    <section className="paper section-about">
                        <h6 className="mdc-typography--subtitle1">About the Product Finder
                            <span></span>
                        </h6>
                        <p>
                            Find products matching any criteria by searching our entire product database! You can search for and sort by almost any product attribute.
                            For example you could search for all electronic products with an Amazon price within the range
                            of $50 and $100, a sales rank average no higher than 5,000, manufactured by Sony and with less than 5 sellers on the product listing
                            - and have the output sorted in ascending order by sales rank. Sorting can be specified via the search result table, default sort
                            order is by sales rank.
                            <br />
                            Have suggestions or found bugs? You can provide feedback through our Comment section.
                        </p>
                        <br />
                        <p>
                            <b>
                                Each search returns a maximum of 10,000 ASINs depending on your table row setting and pagination. As all filters and sort operations are executed remotely
                                (and not in your locally loaded table) we advice to use a low row setting as it will speed up loading and reduce quota usage.
                                Only use a higher row setting when you want to export the table or want to see more products of your current selection.</b>
                        </p>
                        <br />
                        <p>
                            Once you have submitted your query you can always go back to make changes by clicking on "Advanced Filter" above the product table. But you can also add or remove filters or change the sort direction directly from the table using the column menus. In either case your query will be encoded in the URL so you can save a browser bookmark of your selection. Navigating away from the Finder will clear all filters.

                        </p>
                        <br />
                        <p>
                            <i>Each filter attribute will be joined by AND condition.</i>
                            <i>Fields where multiple entries are possible (e.g. Manufacturer) each entry is considered OR wise and a maximum of 50 entries are supported.</i>
                            <i>Multiple entries can be provided at once by using ### as a separator.</i>
                            <i>The Finder searches our database and might not find all products available on Amazon matching your query.
                            </i>
                        </p>
                    </section>

                    <section className="paper section-csv">
                        <div>
                            <h6 className="mdc-typography--subtitle1">Sales Rank & Price Types</h6>
                        </div>
                    </section>
                    <section className="paper section-csv">
                        <div>
                            <h6 className="mdc-typography--subtitle1">Sales Rank & Price Types</h6>
                        </div>
                    </section>
                    <section className="paper section-csv">
                        <div>
                            <h6 className="mdc-typography--subtitle1">Sales Rank & Price Types</h6>
                        </div>
                    </section>
                    <section className="paper section-csv">
                        <div>
                            <h6 className="mdc-typography--subtitle1">Sales Rank & Price Types</h6>
                        </div>
                    </section>
                    <section className="paper section-csv">
                        <div>
                            <h6 className="mdc-typography--subtitle1">Sales Rank & Price Types</h6>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    </div>

}