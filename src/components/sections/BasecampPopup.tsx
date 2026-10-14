import type { CSSProperties } from "react";
export default function BasecampPopup() {
  return (
    <>
      <div {...{ className: "bc-popup" }}>
        <div {...{ className: "w-layout-hflex bc-popup_heading-block" }}>
          <span {...{ className: "bc-popup_heading" }}>
            {"Sui Basecamp with Token2049"}
          </span>
          <div {...{ className: "bc-popup_close" }}>
            <svg
              {...{
                xmlns: "http://www.w3.org/2000/svg",
                width: "100%",
                viewBox: "0 0 7 7",
                fill: "none",
              }}
            >
              <path
                {...{
                  d: "M0.703433 6.3648L-0.00367403 5.65769L2.30547 3.34854L3.01258 4.05565L0.703433 6.3648ZM6.36443 5.65631L5.65732 6.36342L3.34887 4.05496L4.05598 3.34785L6.36443 5.65631ZM2.31031 3.0164L0.000469175 0.706562L0.707576 -0.000544694L3.01741 2.30929L2.31031 3.0164ZM4.05114 3.01709L3.34403 2.30998L5.65318 0.000836374L6.36029 0.707943L4.05114 3.01709Z",
                  fill: "currentColor",
                }}
              ></path>
            </svg>
          </div>
        </div>
        <div {...{ className: "w-layout-grid bc-popup_grid" }}>
          <img
            {...{
              loading: "lazy",
              src: "/assets/c7896378-6a689e599764a116387dcf88_basecamp-popup-img.png",
              alt: "",
              className: "bc-popup_img",
            }}
          />
          <div {...{ className: "w-layout-vflex gap-8 full-width" }}>
            <div {...{ className: "w-layout-vflex gap-4" }}>
              <span {...{ className: "bc-popup_name" }}>
                {"October 7-8, 2026"}
              </span>
              <span {...{ className: "bc-popup_desc" }}>
                {
                  "Spend two days exploring the infrastructure AI and the machine economy needs."
                }
              </span>
            </div>
            <a
              {...{
                href: "https://www.sui.io/basecamp",
                className: "bc-popup_link w-inline-block",
              }}
            >
              <span {...{ className: "bc-popup_link-text" }}>
                {"Register Now →"}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div {...{ className: "bacecamp_popup_button" }}>
        <svg
          {...{
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            viewBox: "0 0 19 19",
            fill: "none",
          }}
        >
          <path
            {...{
              d: "M9.68652 18.3877H8.68652L8.68652 10.8818H9.68652L9.68652 18.3877ZM18.3877 8.68457V9.68457L10.8818 9.68457V8.68457L18.3877 8.68457ZM7.50586 9.68457H0L0 8.68457H7.50586V9.68457ZM9.68652 7.50586H8.68652V0L9.68652 0V7.50586Z",
              fill: "currentColor",
            }}
          ></path>
        </svg>
      </div>
    </>
  );
}
