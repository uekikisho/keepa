import React from "react";

const BodyPanel = () => {
  return (
    <div
      id="grid-wrapper-manage"
      className="grid-wrapper manage"
      style={{ height: "789px", width: "900px", position: 'relative' }}
    >
      <div id="grid-manage" className="grid ag-theme-balham">
        <div className="ag-root-wrapper ag-layout-normal ag-ltr">
          <div>
            <div className="ag-column-drop ag-unselectable ag-column-drop-horizontal ag-column-drop-row-group ag-hidden">
              <div>
                <span
                  className="ag-icon ag-icon-group ag-column-drop-icon ag-faded"
                  unselectable="on"
                ></span>
              </div>
              <span className="ag-column-drop-empty-message">
                Drag here to set row groups
              </span>
              <div className="ag-column-drop-list"></div>
            </div>
            <div className="ag-column-drop ag-unselectable ag-column-drop-horizontal ag-column-drop-pivot ag-hidden">
              <div>
                <span
                  className="ag-icon ag-icon-pivot ag-column-drop-icon ag-faded"
                  unselectable="on"
                ></span>
              </div>
              <span className="ag-column-drop-empty-message">
                Drag here to set column labels
              </span>
              <div className="ag-column-drop-list"></div>
            </div>
          </div>

          {/* <div className="ag-status-bar" ref="statusBar">
            <div ref="eStatusBarLeft" className="ag-status-bar-left"></div>
            <div ref="eStatusBarCenter" className="ag-status-bar-center"></div>
            <div ref="eStatusBarRight" className="ag-status-bar-right"></div>
          </div>
          <div className="ag-paging-panel ag-unselectable ag-hidden">
            <span
              ref="eSummaryPanel"
              className="ag-paging-row-summary-panel"
              style={{ display: "none" }}
            >
              <span ref="lbFirstRowOnPage"></span> to{" "}
              <span ref="lbLastRowOnPage"></span> of{" "}
              <span ref="lbRecordCount"></span>
            </span>
            <span
              className="ag-paging-page-summary-panel"
              style={{ display: "none" }}
            >
              <div ref="btFirst" className="ag-paging-button">
                <span
                  className="ag-icon ag-icon-first"
                  unselectable="on"
                ></span>
                <button type="button">First</button>
              </div>
              <div ref="btPrevious" className="ag-paging-button">
                <span
                  className="ag-icon ag-icon-previous"
                  unselectable="on"
                ></span>
                <button type="button">Previous</button>
              </div>
              Page <span ref="lbCurrent"></span> of <span ref="lbTotal"></span>
              <div ref="btNext" className="ag-paging-button">
                <span className="ag-icon ag-icon-next" unselectable="on"></span>
                <button type="button">Next</button>
              </div>
              <div ref="btLast" className="ag-paging-button">
                <span className="ag-icon ag-icon-last" unselectable="on"></span>
                <button type="button">Last</button>
              </div>
            </span>
          </div>
          <div className="ag-watermark ag-hidden">
            <div ref="eLicenseTextRef" className="ag-watermark-text"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BodyPanel;
