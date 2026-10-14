import type { CSSProperties } from "react";
export default function Navigation() {
  return (
    <>
      <div
        {...{
          id: "navigation",
          "data-animation": "default",
          "data-collapse": "medium",
          "data-duration": "400",
          "data-easing": "ease",
          "data-easing2": "ease",
          role: "banner",
          className: "navbar w-nav",
        }}
      >
        <div
          {...{ "nav-banner": "", className: "w-layout-hflex pencil_layout" }}
        >
          <div {...{ className: "w-layout-hflex gap-8 align-center" }}>
            <div
              {...{
                "data-wrapper-banner": "",
                className: "mw-264 overflowhidden",
              }}
            >
              <a
                {...{
                  "data-nav-link": "",
                  "data-banner": "",
                  href: "https://www.sui.io/basecamp?utm_source=pencil_banner",
                  target: "_blank",
                  className: "ts-12px letter-spacing_0-5 link color-white",
                  rel: "noopener noreferrer",
                }}
              >
                {"Explore AI & the machine economy at Sui Basecamp →"}
              </a>
              <div {...{ className: "mob_fader align_left" }}></div>
              <div {...{ className: "mob_fader align_right" }}></div>
            </div>
          </div>
          <svg
            {...{
              xmlns: "http://www.w3.org/2000/svg",
              width: "100%",
              viewBox: "0 0 13 13",
              fill: "none",
              className: "icon-x",
            }}
          >
            <path
              {...{
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.40468 6.34394L12.3745 11.3137L11.3138 12.3744L6.34402 7.4046L1.06074 12.6879L8.45562e-05 11.6272L5.28336 6.34394L8.45562e-05 1.06066L1.06074 5.29399e-07L6.34402 5.28328L11.3138 0.313503L12.3745 1.37416L7.40468 6.34394Z",
                fill: "currentColor",
              }}
            ></path>
          </svg>
        </div>
        <div {...{ className: "padding-global mob_no-padd" }}>
          <div
            {...{
              "nav-overflow-target": "",
              className: "container-1400 w-container",
            }}
          >
            <div {...{ className: "w-layout-hflex navbar_layout" }}>
              <div {...{ className: "w-layout-vflex navbar_brand-block" }}>
                <a
                  {...{
                    href: "/",
                    "aria-current": "page",
                    className: "navbar-brand w-nav-brand w--current",
                  }}
                >
                  <img
                    {...{
                      loading: "lazy",
                      src: "/assets/551ea43d-691b669368b8677fe201e79a_logo-sui.svg",
                      alt: "",
                      className: "object-contain full_height sui-logo",
                    }}
                  />
                </a>
                <div
                  {...{
                    "data-w-id": "c0170b70-3725-f98b-de4f-9ce8fdb3ecb7",
                    className: "w-layout-hflex hm_back-button",
                  }}
                >
                  <svg
                    {...{
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "100%",
                      viewBox: "0 0 5 11",
                      fill: "none",
                      className: "hm_back-icon",
                    }}
                  >
                    <path
                      {...{
                        d: "M5 4.37114e-07L5 1.74362L1.02546e-06 5.86127L1.28781e-06 4.11765L5 4.37114e-07Z",
                        fill: "currentColor",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M5 10.0151L5 8.27152L1.99174e-06 4.15387L1.96663e-06 5.89749L5 10.0151Z",
                        fill: "currentColor",
                      }}
                    ></path>
                  </svg>
                  <span {...{ className: "hm_back-text" }}>{"All"}</span>
                </div>
              </div>
              <nav
                {...{ role: "navigation", className: "navbar-menu w-nav-menu" }}
              >
                <div {...{ className: "navbar_link" }}>
                  <div
                    {...{
                      global: "shuffleHover",
                      className: "navbar-dd_toggle",
                    }}
                  >
                    <div
                      {...{
                        "global-target": "",
                        className: "navbar_link-text",
                      }}
                    >
                      {"Stack"}
                    </div>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 10 10",
                        fill: "none",
                        className: "navbar-dd_icon",
                      }}
                    >
                      <path
                        {...{
                          d: "M5.49609 10.001H4.49609V5.91895H5.49609V10.001ZM10 4.49512V5.49512H5.91797V4.49512H10ZM4.08203 5.49512H0V4.49512H4.08203V5.49512ZM5.49609 4.08301H4.49609V0.000976562L5.49609 0V4.08301Z",
                          fill: "currentColor",
                          className: "transformorigincenter",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "navbar-content" }}>
                    <div {...{ className: "navbar-dd_inner-wrapper" }}>
                      <div {...{ className: "w-layout-vflex navbar-dd_block" }}>
                        <span {...{ className: "navbar-dd_category" }}>
                          {"Overview/"}
                        </span>
                        <a
                          {...{
                            "global-src":
                              "/assets/c39d34e8-692e8ee2a284f5a96ea725c8_00_-_Intro_to_Sui_Stack.json",
                            global: "mainHover,lottieReveal",
                            href: "https://www.sui.io/intro-to-sui",
                            className:
                              "navbar-dd_link-block platform-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div {...{ className: "navbar-dd_link-icon" }}>
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 21 22",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M9.37586 19.2781L18.7522 13.3348H18.7573V15.3867L9.3756 21.3333L0 15.3871V13.3348H0.00497212L9.37586 19.2781ZM13.4148 2.56159V4.61667L9.37586 2.05664L0.00497212 8L9.37586 13.9434L18.7522 8H18.7573V10.052L9.3756 15.9986L0 10.0523V5.94766L9.3756 0.00143229L13.4148 2.56159ZM18.0496 0C18.5956 1.14043 19.481 2.97505 19.7877 3.59518C19.9896 4.00329 20.1026 4.46224 20.1026 4.94492C20.1026 6.63421 18.7264 8.00371 17.0289 8.00378C15.3313 8.00376 13.9549 6.63424 13.9549 4.94492C13.9549 4.46223 14.0681 4.00329 14.27 3.59518C14.5813 2.96602 15.4472 1.1527 16.0045 0H18.0496ZM17.0263 1.88893C16.5546 2.87003 16.0495 3.92256 15.8327 4.36081C15.746 4.53601 15.6969 4.73352 15.6969 4.94492C15.6969 5.67694 16.2933 6.27043 17.0289 6.27044C17.7644 6.27038 18.3607 5.67691 18.3607 4.94492C18.3607 4.73353 18.3116 4.53601 18.2249 4.36081C18.0051 3.91643 17.4983 2.86906 17.0263 1.88893Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-4" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"Intro to Sui Stack"}
                            </span>
                            <span {...{ className: "navbar-dd_link-desc" }}>
                              {"Modular decentralized infrastructure"}
                            </span>
                          </div>
                        </a>
                      </div>
                      <div
                        {...{
                          className:
                            "w-layout-vflex navbar-dd_block has-border",
                        }}
                      >
                        <span {...{ className: "navbar-dd_category" }}>
                          {"Finance/"}
                        </span>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://deepbook.tech/",
                            target: "_blank",
                            className:
                              "navbar-dd_link-block platform-dd_link-block w-inline-block",
                            rel: "noopener noreferrer",
                          }}
                        >
                          <div {...{ className: "navbar-dd_link-icon" }}>
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 24 14",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M0 0H18.5998C21.565 0 23.9688 2.40378 23.9688 5.36899V5.99219H0V0Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M0 13.4175H18.5998C21.565 13.4175 23.9688 11.0137 23.9688 8.04849V7.42529H0V13.4175Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-4" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"DeepBook"}
                              </span>
                              <div
                                {...{ className: "navbar-dd_external-icon" }}
                              >
                                <svg
                                  {...{
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    viewBox: "0 0 7 7",
                                    fill: "none",
                                    className: "object-cover",
                                  }}
                                >
                                  <path
                                    {...{
                                      d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                                      fill: "currentColor",
                                    }}
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <span {...{ className: "navbar-dd_link-desc" }}>
                              {"Programmable liquidity layer"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/hashi",
                            className:
                              "navbar-dd_link-block platform-dd_link-block w-inline-block",
                          }}
                        >
                          <div {...{ className: "navbar-dd_link-icon" }}>
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 23 23",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M8.96 10.24H13.44V6.4H15.52V16H13.44V12.32H8.96V16H6.88V6.4H8.96V10.24Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  fillRule: "evenodd",
                                  clipRule: "evenodd",
                                  d: "M22.4 22.4H0V0H22.4V22.4ZM2.08 20.32H20.32V2.08H2.08V20.32Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-4" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Hashi"}
                              </span>
                            </div>
                            <span {...{ className: "navbar-dd_link-desc" }}>
                              {"Native Bitcoin collateralization"}
                            </span>
                          </div>
                        </a>
                      </div>
                      <div
                        {...{
                          className:
                            "w-layout-vflex navbar-dd_block has-border",
                        }}
                      >
                        <span {...{ className: "navbar-dd_category" }}>
                          {"Data/"}
                        </span>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://seal.mystenlabs.com/",
                            target: "_blank",
                            className:
                              "navbar-dd_link-block platform-dd_link-block w-inline-block",
                            rel: "noopener noreferrer",
                          }}
                        >
                          <div {...{ className: "navbar-dd_link-icon" }}>
                            <div {...{ className: "object-contain w-embed" }}>
                              <svg
                                {...{
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "100%",
                                  viewBox: "0 0 25 13",
                                  fill: "none",
                                }}
                              >
                                {"\n"}
                                <path
                                  {...{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M1.91492 9.20776L5.62369 12.6059C5.47753 12.6059 1.3851 12.6059 1.25721 12.6059C0.416797 12.5877 -0.295725 11.4915 0.581226 10.5597C0.946622 10.1761 1.73222 9.40873 1.91492 9.20776Z",
                                    fill: "currentColor",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M6.02603 12.6065C3.5048 12.6613 2.09802 11.218 1.95186 9.37272C1.73263 6.3582 3.1394 4.45814 6.15392 3.19753C8.65688 2.17442 10.1002 0.256088 13.2974 0.183009C18.0841 0.0733899 19.7101 2.88694 22.1217 9.53715C22.1948 9.73811 23.108 10.2188 23.6929 10.7247C24.5838 11.4951 24.0763 12.643 23.108 12.643C22.4868 12.643 6.66547 12.6065 6.02603 12.6065Z",
                                    fill: "currentColor",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    d: "M3.63672 10.3443C4.56848 10.3626 4.8608 9.43082 4.87906 8.73657C4.80599 10.7645 6.99836 10.8741 7.74742 9.17505",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M4.8587 8.77189C4.76735 8.73535 4.49331 8.53438 4.38369 8.40649C3.74425 7.65743 5.4068 7.493 5.6443 7.98629C5.79046 8.24206 5.58949 8.42476 5.44334 8.51611C5.13275 8.71708 4.8587 8.77189 4.8587 8.77189Z",
                                    fill: "black",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M4.53137 5.3365C4.95158 5.29996 5.22563 5.66536 5.15255 6.15864C5.0612 6.65193 4.64099 7.07213 4.20252 7.12694C3.78231 7.16348 3.50826 6.79809 3.59961 6.3048C3.69096 5.81152 4.11117 5.37304 4.53137 5.3365Z",
                                    fill: "black",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M7.12508 5.3365C7.56356 5.29996 7.83761 5.66536 7.74626 6.15864C7.65491 6.65193 7.2347 7.07213 6.8145 7.12694C6.37602 7.16348 6.10197 6.79809 6.19332 6.3048C6.28467 5.81152 6.70488 5.37304 7.12508 5.3365Z",
                                    fill: "black",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M7.94548 5.72032C7.94548 5.46454 8.09163 6.04918 8.09163 6.21361C8.09163 6.37803 7.98201 6.79824 7.83586 6.83478C7.70797 6.87132 7.39738 7.25498 7.52527 7.05402C7.65316 6.83478 7.41565 6.65208 7.26949 6.52419C7.06852 6.37803 7.06852 6.1588 7.3243 6.08572C7.54354 6.01264 7.92721 6.01264 7.94548 5.72032Z",
                                    fill: "currentColor",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M5.35063 5.72032C5.35063 5.46454 5.49679 6.04918 5.49679 6.21361C5.49679 6.37803 5.3689 6.79824 5.24101 6.83478C5.11312 6.87132 4.80254 7.25498 4.93043 7.05402C5.05832 6.83478 4.82081 6.65208 4.65638 6.52419C4.47368 6.37803 4.47368 6.1588 4.72946 6.08572C4.9487 6.01264 5.33236 6.01264 5.35063 5.72032Z",
                                    fill: "currentColor",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    d: "M13.4419 8.42163C13.7707 8.69568 14.2457 9.2255 14.5015 9.48128C15.4698 10.4496 15.89 11.3631 15.3236 12.0573C14.94 12.5141 13.9717 12.6054 12.6562 12.6237",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M3.83203 10.3231C4.47147 10.2683 4.69071 9.88464 4.74552 9.57406C4.74552 9.53752 4.8186 9.70195 4.89168 9.7933C5.03784 9.97599 5.09265 10.2866 6.06095 10.3597L3.83203 10.3231Z",
                                    fill: "black",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M14.5391 12.5356C15.1785 12.4626 16.0555 11.8962 15.3064 10.4529C15.2699 10.3615 14.9775 10.0144 14.9775 10.0144C15.0141 10.0144 17.517 12.5722 17.517 12.5722L14.5391 12.5356Z",
                                    fill: "black",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M4.71487 12.5704C3.76485 12.3146 3.16194 11.931 2.44942 10.9992C2.19364 10.6704 1.80998 10.104 1.82825 9.6838C1.82825 9.66553 1.79171 9.57418 1.77344 9.55591C2.13883 11.0723 2.43115 11.8214 1.77344 12.5704H4.71487Z",
                                    fill: "black",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M7.99882 2.28418L5.73336 3.39864C5.67856 3.41691 6.40935 3.19767 7.2863 3.19767C8.12671 3.19767 9.66137 3.19767 9.66137 3.19767C9.18636 3.16113 8.16325 2.92362 7.99882 2.28418Z",
                                    fill: "black",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    d: "M21.9023 8.95386L22.6331 11.4934",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M22.1953 9.7373L22.5972 11.3085C22.3963 10.8152 22.5972 10.4681 22.8896 10.2306C22.9444 10.1758 22.2684 9.75557 22.1953 9.7373Z",
                                    fill: "black",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    d: "M6.68323 4.53107L6.46484 4.42188",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                                <path
                                  {...{
                                    d: "M5.20312 4.53338L5.40331 4.44238",
                                    stroke: "black",
                                    strokeWidth: "0.359641",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }}
                                ></path>
                                {"\n"}
                              </svg>
                            </div>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-4" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Seal"}
                              </span>
                              <div
                                {...{ className: "navbar-dd_external-icon" }}
                              >
                                <svg
                                  {...{
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    viewBox: "0 0 7 7",
                                    fill: "none",
                                    className: "object-cover",
                                  }}
                                >
                                  <path
                                    {...{
                                      d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                                      fill: "currentColor",
                                    }}
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <span {...{ className: "navbar-dd_link-desc" }}>
                              {"Encryption with access control"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/nautilus",
                            className:
                              "navbar-dd_link-block platform-dd_link-block w-inline-block",
                          }}
                        >
                          <div {...{ className: "navbar-dd_link-icon" }}>
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 19 19",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M17.118 18.8718H1.7533V17.1196H17.118V18.8718ZM18.8718 17.1196H17.1197V1.75256H18.8718V17.1196ZM1.75211 17.1194H0V1.75256H1.75211V17.1194ZM11.4753 13.052V5.55079H13.0798V13.3177H9.9629L7.39791 5.81654V13.3177H5.79347V5.55079H8.92048L11.4753 13.052ZM17.1184 1.75216H1.7529V0H17.1184V1.75216Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-4" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"Nautilus"}
                            </span>
                            <span {...{ className: "navbar-dd_link-desc" }}>
                              {"Verifiable offchain compute"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.walrus.xyz/",
                            target: "_blank",
                            className:
                              "navbar-dd_link-block platform-dd_link-block w-inline-block",
                            rel: "noopener noreferrer",
                          }}
                        >
                          <div {...{ className: "navbar-dd_link-icon" }}>
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 24 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M8.26624 11.6973L9.32779 0H13.7124L14.7735 11.6973L15.37 11.8116C15.9403 10.4787 17.5145 5.78133 17.9072 0H23.0402L19.082 15.1386H12.8706L11.8266 7.56928H11.2139L10.1698 15.1386H3.95819L0 0H5.13301C5.52576 5.78133 7.09973 10.4787 7.67019 11.8118L8.26624 11.6975V11.6973Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-4" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Walrus"}
                              </span>
                              <div
                                {...{ className: "navbar-dd_external-icon" }}
                              >
                                <svg
                                  {...{
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    viewBox: "0 0 7 7",
                                    fill: "none",
                                    className: "object-cover",
                                  }}
                                >
                                  <path
                                    {...{
                                      d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                                      fill: "currentColor",
                                    }}
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <span {...{ className: "navbar-dd_link-desc" }}>
                              {"Trusted data layer"}
                            </span>
                          </div>
                        </a>
                      </div>
                      <div
                        {...{
                          className:
                            "w-layout-vflex navbar-dd_block has-border no-right-padding",
                        }}
                      >
                        <span {...{ className: "navbar-dd_category" }}>
                          {"Identity/"}
                        </span>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://suins.io/",
                            target: "_blank",
                            className:
                              "navbar-dd_link-block platform-dd_link-block w-inline-block",
                            rel: "noopener noreferrer",
                          }}
                        >
                          <div {...{ className: "navbar-dd_link-icon" }}>
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 24 10",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <g {...{ clipPath: "url(#clip0_8605_65082)" }}>
                                <mask
                                  {...{
                                    id: "mask0_8605_65082",
                                    maskUnits: "userSpaceOnUse",
                                    x: "4",
                                    y: "0",
                                    width: "20",
                                    height: "10",
                                  }}
                                  style={
                                    { maskType: "luminance" } as CSSProperties
                                  }
                                >
                                  <path
                                    {...{
                                      d: "M23.8271 -6.10352e-05H4.97827V9.41086H23.8271V-6.10352e-05Z",
                                      fill: "white",
                                    }}
                                  ></path>
                                </mask>
                                <g {...{ mask: "url(#mask0_8605_65082)" }}>
                                  <path
                                    {...{
                                      fillRule: "evenodd",
                                      clipRule: "evenodd",
                                      d: "M8.05543 2.99643C8.01057 2.99643 7.97417 3.03286 7.97417 3.07772V7.9126C7.97417 8.74005 7.30349 9.41086 6.4762 9.41086C5.64891 9.41086 4.97827 8.74005 4.97827 7.9126V3.07772C4.97827 1.37794 6.35599 -6.10352e-05 8.05543 -6.10352e-05C9.75487 -6.10352e-05 11.1325 1.37794 11.1325 3.07772V6.33308C11.1325 6.37795 11.169 6.41435 11.2138 6.41435C11.2587 6.41435 11.2951 6.37795 11.2951 6.33308V1.49819C11.2951 0.670725 11.9657 -6.10352e-05 12.793 -6.10352e-05C13.6203 -6.10352e-05 14.291 0.670725 14.291 1.49819V6.33308C14.291 8.03285 12.9132 9.41086 11.2138 9.41086C9.51441 9.41086 8.13669 8.03285 8.13669 6.33308V3.07772C8.13669 3.03286 8.10029 2.99643 8.05543 2.99643Z",
                                      fill: "currentColor",
                                    }}
                                  ></path>
                                  <path
                                    {...{
                                      fillRule: "evenodd",
                                      clipRule: "evenodd",
                                      d: "M17.4935 3.04032C17.4486 3.04032 17.4122 3.07674 17.4122 3.12161C17.4122 3.16647 17.4486 3.20289 17.4935 3.20289H20.7482C22.4476 3.20289 23.8253 4.58091 23.8253 6.28067C23.8253 7.98044 22.4476 9.35845 20.7482 9.35845H15.9143C15.087 9.35845 14.4164 8.68769 14.4164 7.86023C14.4164 7.03274 15.087 6.36198 15.9143 6.36198H20.7482C20.793 6.36198 20.8294 6.32554 20.8294 6.28067C20.8294 6.23581 20.793 6.19937 20.7482 6.19937H17.4935C15.7941 6.19937 14.4164 4.82141 14.4164 3.12161C14.4164 1.42182 15.7941 0.0438232 17.4935 0.0438232H22.3274C23.1546 0.0438232 23.8253 0.714613 23.8253 1.54207C23.8253 2.36953 23.1546 3.04032 22.3274 3.04032H17.4935Z",
                                      fill: "currentColor",
                                    }}
                                  ></path>
                                </g>
                                <path
                                  {...{
                                    d: "M4.67081 7.04872C4.67081 5.75891 3.62521 4.71332 2.3354 4.71332C1.0456 4.71332 0 5.75891 0 7.04872C0 8.33853 1.0456 9.38412 2.3354 9.38412C3.62521 9.38412 4.67081 8.33853 4.67081 7.04872Z",
                                    fill: "currentColor",
                                  }}
                                ></path>
                                <path
                                  {...{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M2.99072 6.83491V6.83503C3.10458 6.97956 3.17268 7.16262 3.17268 7.36167C3.17268 7.56072 3.10256 7.74925 2.98555 7.89472L2.97547 7.90725L2.97281 7.89135C2.97054 7.87784 2.96786 7.86412 2.96478 7.85035C2.90625 7.59009 2.71546 7.36689 2.40148 7.18621C2.18946 7.06452 2.06809 6.91798 2.03623 6.75151C2.01563 6.64383 2.03096 6.5357 2.06052 6.44306C2.09009 6.35046 2.13407 6.27289 2.17142 6.22622L2.29355 6.07508C2.31498 6.04862 2.35506 6.04862 2.37649 6.07508L2.99075 6.83495L2.99072 6.83491ZM3.18392 6.68393V6.68388L2.36525 5.67119C2.34961 5.65184 2.32036 5.65184 2.30472 5.67119L1.48605 6.68388V6.68397L1.48339 6.68734C1.33278 6.87644 1.24261 7.11678 1.24261 7.37843C1.24261 7.98774 1.73168 8.48176 2.33498 8.48176C2.93829 8.48176 3.42735 7.98774 3.42735 7.37843C3.42735 7.11678 3.33719 6.87644 3.18654 6.6873L3.18385 6.68393H3.18392ZM1.68197 6.83162L1.7552 6.74099L1.7574 6.75775C1.75915 6.77098 1.76128 6.78429 1.76379 6.79768C1.81116 7.04919 1.98042 7.25888 2.26339 7.42128C2.50937 7.5629 2.65259 7.72575 2.69385 7.90438C2.71106 7.9789 2.71413 8.05228 2.70669 8.11641L2.70624 8.12035L2.70268 8.12212C2.59168 8.177 2.46686 8.20778 2.33495 8.20778C1.87231 8.20778 1.49725 7.82899 1.49725 7.36167C1.49725 7.16106 1.5664 6.97668 1.68194 6.83166L1.68197 6.83162Z",
                                    fill: "currentColor",
                                  }}
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-4" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"SuiNS"}
                              </span>
                              <div
                                {...{ className: "navbar-dd_external-icon" }}
                              >
                                <svg
                                  {...{
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    viewBox: "0 0 7 7",
                                    fill: "none",
                                    className: "object-cover",
                                  }}
                                >
                                  <path
                                    {...{
                                      d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                                      fill: "currentColor",
                                    }}
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <span {...{ className: "navbar-dd_link-desc" }}>
                              {"Onchain naming & identity"}
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div {...{ className: "navbar_link" }}>
                  <div
                    {...{
                      global: "shuffleHover",
                      className: "navbar-dd_toggle",
                    }}
                  >
                    <div
                      {...{
                        "global-target": "",
                        className: "navbar_link-text",
                      }}
                    >
                      {"Solutions"}
                    </div>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 10 10",
                        fill: "none",
                        className: "navbar-dd_icon",
                      }}
                    >
                      <path
                        {...{
                          d: "M5.49609 10.001H4.49609V5.91895H5.49609V10.001ZM10 4.49512V5.49512H5.91797V4.49512H10ZM4.08203 5.49512H0V4.49512H4.08203V5.49512ZM5.49609 4.08301H4.49609V0.000976562L5.49609 0V4.08301Z",
                          fill: "currentColor",
                          className: "transformorigincenter",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "navbar-content" }}>
                    <div
                      {...{ className: "navbar-dd_inner-wrapper _2-columns" }}
                    >
                      <div
                        {...{
                          className:
                            "w-layout-vflex navbar-dd_block solutions_padd",
                        }}
                      >
                        <span {...{ className: "navbar-dd_category" }}>
                          {"Industries/"}
                        </span>
                        <a
                          {...{
                            "global-src":
                              "/assets/f053e937-692ea9b9bde9cc8d737ec1f3_00_-_Gaming.json",
                            global: "mainHover,lottieReveal",
                            href: "https://www.sui.io/payments",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 18 12",
                                fill: "none",
                                className: "object-contain",
                              }}
                            >
                              <path
                                {...{
                                  d: "M6.06541 1.30154C3.44226 1.30158 1.31576 3.40511 1.31574 5.99995C1.31574 8.59482 3.44224 10.6984 6.06541 10.6985V12C2.71558 12 0 9.31363 0 5.99995C2.67007e-05 2.68629 2.7156 3.96206e-05 6.06541 0V1.30154ZM11.4731 0C14.8229 2.64233e-05 17.5385 2.68636 17.5385 6.00005C17.5384 9.31372 14.8229 12 11.4731 12C8.12322 12 5.40757 9.31373 5.40754 6.00005C5.40754 2.68635 8.1232 1.32119e-05 11.4731 0ZM11.4731 1.30154C8.84986 1.30155 6.72328 3.40517 6.72328 6.00005C6.7233 8.59491 8.84988 10.6985 11.4731 10.6985C14.0962 10.6984 16.2227 8.5949 16.2227 6.00005C16.2227 3.40517 14.0962 1.30156 11.4731 1.30154ZM12.2493 2.64472C12.7106 3.60285 13.476 5.17955 13.7393 5.70869C13.9051 6.04185 13.998 6.41653 13.998 6.81077C13.998 8.19017 12.8675 9.30842 11.4731 9.30844C10.0786 9.30844 8.94813 8.19019 8.94813 6.81077C8.94814 6.41653 9.04098 6.04185 9.20679 5.70869C9.47353 5.17272 10.2228 3.61302 10.694 2.64472H12.2493ZM11.4709 4.05234C11.0516 4.91887 10.5823 5.89168 10.3872 6.28359C10.3084 6.44186 10.2639 6.62025 10.2639 6.81077C10.2639 7.47137 10.8052 8.00691 11.4731 8.00691C12.1408 8.00689 12.6822 7.47135 12.6822 6.81077C12.6822 6.62025 12.6376 6.44185 12.5589 6.28359C12.3614 5.88683 11.8902 4.91853 11.4709 4.05234Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"Payments"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            "global-src":
                              "/assets/a97458f6-692ea9ba0d5c6485ea7ea7c2_00_-_Institutions___capital_markets.json",
                            global: "mainHover,lottieReveal",
                            href: "https://www.sui.io/institutions-capital-markets",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M16 16H0V14.7002H16V16ZM14.701 13.3987H1.29912V12.0989H14.701V13.3987ZM2.59795 10.7985H1.29795V5.9991H2.59795V10.7985ZM5.01865 10.7985H3.71865V5.9991H5.01865V10.7985ZM7.43926 10.7985H6.13926V5.9991H7.43926V10.7985ZM9.85996 10.7985H8.55996V5.9991H9.85996V10.7985ZM12.2806 10.7985H10.9806V5.9991H12.2806V10.7985ZM14.7013 10.7985H13.4013V5.9991H14.7013V10.7985ZM14.7014 3.86852V5.36949L8 1.50087L1.29834 5.36969L1.29824 5.36949V3.86872L8 0L14.7014 3.86852Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"Capital Markets"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            "global-src":
                              "/assets/1449d0c0-692ea9b855930273c367c68f_00_-_DeFi.json",
                            global: "mainHover,lottieReveal",
                            href: "https://www.sui.io/defi",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M15.0769 1.61467V4.39837L13.1484 5.59327V10.4107L15.0769 11.6178V14.4015L12.4971 16L9.9174 14.4015V13.5899H5.15953V14.3939L2.57971 15.9924L0 14.3939V11.6102L1.92855 10.4031V5.59327L9.78462e-05 4.39837V1.61467L2.57981 0L5.15963 1.61467V2.34988H9.9174V1.61467L12.4971 0L15.0769 1.61467ZM11.2199 12.3364V13.6791L12.4971 14.4705L13.7744 13.6791V12.3364L12.4971 11.5369L11.2199 12.3364ZM1.30253 12.3287V13.6715L2.57971 14.4629L3.857 13.6715V12.3287L2.57971 11.5293L1.30253 12.3287ZM5.15963 4.39837L3.23108 5.59327V10.4032L5.15953 11.6102V12.2907H9.9174V11.6178L11.8458 10.4107V5.59327L9.9174 4.39837V3.64911H5.15963V4.39837ZM8.06165 5.37485C8.89051 5.53072 9.38649 6.05251 9.50879 6.77763H8.42847C8.32654 6.34393 7.98687 6.10674 7.49091 6.10674C6.97457 6.10674 6.64163 6.37102 6.6416 6.71663C6.6416 7.08259 6.98817 7.1911 7.57926 7.35375L8.25186 7.53665C9.10114 7.77385 9.5767 8.21442 9.5767 9.02766C9.57668 9.84767 8.99244 10.4373 8.06165 10.5931V11.4403H7.03573V10.5863C6.19325 10.4169 5.60215 9.81378 5.50023 8.96667H6.58045C6.6484 9.51559 7.0357 9.84768 7.58602 9.84769C8.18391 9.84769 8.52367 9.57655 8.52367 9.12926C8.52366 8.76332 8.24503 8.58032 7.63357 8.41767L6.96773 8.24151C6.17961 8.03142 5.59533 7.65185 5.59533 6.82506C5.59536 6.05928 6.18647 5.50359 7.03573 5.36128V4.54799H8.06165V5.37485ZM1.30263 2.33319V3.67595L2.57981 4.46738L3.8571 3.67595V2.33319L2.57981 1.53376L1.30263 2.33319ZM11.2199 2.33319V3.67595L12.4971 4.46738L13.7744 3.67595V2.33319L12.4971 1.53376L11.2199 2.33319Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"DeFi"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            "global-src":
                              "/assets/dc5a50e7-692ea9c07a4530e0a1c8fde2_05_-_AI.json",
                            global: "mainHover,lottieReveal",
                            href: "https://www.sui.io/ai",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M3.58262 11.9224L4.71221 16H3.36328L2.53047 12.9939L0 12.3423V11.0012L0.000292969 11.0001L3.58262 11.9224ZM9.42422 12.3424L6.89404 12.9939L6.06123 16H4.71221L5.84189 11.9224L9.42422 11.0001V12.3424ZM3.58262 10.0775L0.000292969 10.9998L0 10.9986V9.65752L2.53047 9.00596L3.36328 6H4.71211L3.58262 10.0775ZM6.89404 9.00596L9.42422 9.65742V10.9998L5.84189 10.0775L4.7123 6H6.06123L6.89404 9.00596Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M10.9609 4.6459L11.325 4.73965L11.4253 5.10186L12.2279 8H10.879L10.2729 5.81113L8.45312 5.34238V4L10.9609 4.6459ZM16.0047 5.34209L14.1839 5.81113L13.5777 8H12.2287L13.0314 5.10186L13.1317 4.73965L13.4958 4.6459L16.0047 3.99971V5.34209ZM14.1839 2.18809L16.0047 2.65703V3.99941L13.4958 3.35332L13.1317 3.25957L13.0314 2.89736L12.2289 0H13.578L14.1839 2.18809ZM11.4253 2.89736L11.325 3.25957L10.9609 3.35332L8.45312 3.99912V2.65674L10.2729 2.18809L10.8787 0H12.2277L11.4253 2.89736Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"AI"}
                            </span>
                          </div>
                        </a>
                      </div>
                      <div
                        {...{
                          className:
                            "w-layout-vflex navbar-dd_block has-border",
                        }}
                      >
                        <span {...{ className: "navbar-dd_category" }}>
                          {"Core Capabilities/"}
                        </span>
                        <a
                          {...{
                            "global-src":
                              "/assets/a97458f6-692ea9ba0d5c6485ea7ea7c2_00_-_Institutions___capital_markets.json",
                            global: "mainHover,lottieReveal",
                            href: "https://www.sui.io/privacy",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 16 14",
                                fill: "none",
                                className: "object-contain",
                              }}
                            >
                              <path
                                {...{
                                  d: "M12.0774 8.00098C13.6985 8.04207 15 9.36905 15 11L14.999 11.0774C14.9579 12.6985 13.6309 14 12 14L11.9226 13.999C10.3272 13.9586 9.0414 12.6728 9.00098 11.0774L9 11C9 10.9065 9.00442 10.814 9.01279 10.7227H6.98711C6.99548 10.814 7 10.9065 7 11C7 12.6568 5.65684 14 4 14C2.34315 14 1 12.6569 1 11C1 9.34315 2.34315 8 4 8C5.07812 8.00001 6.02323 8.56885 6.55205 9.42266H9.44785C9.97668 8.56884 10.9219 8 12 8L12.0774 8.00098ZM4 9.3C3.06112 9.3 2.3 10.0611 2.3 11C2.3 11.9389 3.06112 12.7 4 12.7C4.93887 12.7 5.7 11.9389 5.7 11C5.7 10.0611 4.93887 9.30002 4 9.3ZM12 9.3C11.0611 9.3 10.3 10.0611 10.3 11C10.3 11.9389 11.0611 12.7 12 12.7C12.9389 12.7 13.7 11.9389 13.7 11C13.7 10.0611 12.9389 9.30002 12 9.3ZM16 7.01426H0V5.71426H1.98828L3.20293 0H6.14844L8 2.36992L9.85166 0H11.5014L8.8249 3.42568L8.83018 3.43242H7.16982L7.1751 3.42568L4.5248 0.0335938L3.31738 5.71426H12.7422L11.5275 0H12.8566L14.0712 5.71426H16V7.01426Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"Privacy"}
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div {...{ className: "navbar_link" }}>
                  <div
                    {...{
                      global: "shuffleHover",
                      className: "navbar-dd_toggle",
                    }}
                  >
                    <div
                      {...{
                        "global-target": "",
                        className: "navbar_link-text",
                      }}
                    >
                      {"Network"}
                    </div>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 10 10",
                        fill: "none",
                        className: "navbar-dd_icon",
                      }}
                    >
                      <path
                        {...{
                          d: "M5.49609 10.001H4.49609V5.91895H5.49609V10.001ZM10 4.49512V5.49512H5.91797V4.49512H10ZM4.08203 5.49512H0V4.49512H4.08203V5.49512ZM5.49609 4.08301H4.49609V0.000976562L5.49609 0V4.08301Z",
                          fill: "currentColor",
                          className: "transformorigincenter",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "navbar-content" }}>
                    <div
                      {...{ className: "navbar-dd_inner-wrapper _1-columns" }}
                    >
                      <div
                        {...{
                          className:
                            "w-layout-vflex navbar-dd_block no-right-padding",
                        }}
                      >
                        <span {...{ className: "navbar-dd_category" }}>
                          {"Network/"}
                        </span>
                        <a
                          {...{
                            "global-src":
                              "/assets/f053e937-692ea9b9bde9cc8d737ec1f3_00_-_Gaming.json",
                            global: "mainHover,lottieReveal",
                            href: "https://www.sui.io/networkinfo",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 14 16",
                                fill: "none",
                                className: "object-contain",
                              }}
                            >
                              <path
                                {...{
                                  d: "M8.99873 1.3H7.64775V2.0375C9.09062 2.17041 10.4066 2.74133 11.4615 3.61611L12.1951 2.88262L13.1144 3.80186L12.3813 4.53486C13.3891 5.74729 13.9954 7.30549 13.9954 9.00537C13.9954 12.8701 10.8625 16.003 6.99775 16.003C3.13303 16.003 1.6493e-05 12.8701 0 9.00537C0 7.30544 0.606197 5.74711 1.61416 4.53467L0.881445 3.80186L1.80068 2.88262L2.53398 3.61602C3.58894 2.74126 4.90491 2.1704 6.34775 2.0375V1.3H4.99775V0H8.99873V1.3ZM6.99775 3.30762C3.85099 3.30762 1.3 5.8586 1.3 9.00537C1.30002 12.1521 3.851 14.703 6.99775 14.703C10.1445 14.703 12.6954 12.1521 12.6954 9.00537C12.6954 5.85861 10.1445 3.30763 6.99775 3.30762ZM6.99766 7.00586C7.87217 7.00586 8.61552 7.56732 8.88701 8.34941H11.9978V9.64941H8.89111C8.62302 10.4377 7.87655 11.0048 6.99766 11.0048C5.89342 11.0048 4.99824 10.1095 4.99824 9.00527C4.99826 7.90104 5.89343 7.00589 6.99766 7.00586ZM6.99766 8.30586C6.6114 8.30589 6.29826 8.61901 6.29824 9.00527C6.29824 9.39155 6.61139 9.70475 6.99766 9.70478C7.38395 9.70478 7.69717 9.39157 7.69717 9.00527C7.69715 8.61899 7.38394 8.30586 6.99766 8.30586ZM6.99775 3.96094C9.27406 3.96095 11.1981 5.46874 11.8259 7.54004H10.4444C9.87417 6.2003 8.5457 5.26095 6.99775 5.26094V3.96094Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"Release Schedule"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            "global-src":
                              "/assets/a97458f6-692ea9ba0d5c6485ea7ea7c2_00_-_Institutions___capital_markets.json",
                            global: "mainHover,lottieReveal",
                            href: "https://www.sui.io/validators",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 17 11",
                                fill: "none",
                                className: "object-contain",
                              }}
                            >
                              <path
                                {...{
                                  d: "M8.00942 0.000283158C11.9174 -0.0323785 15.0441 2.7666 16.1488 5.25695L16.1481 5.25723L16.1488 5.2575C15.0441 7.74786 11.9174 10.5468 8.00942 10.5142C4.09729 10.4815 1.08388 7.6123 0 5.26629L0.0195919 5.25723L0 5.24816C1.08388 2.90216 4.09731 0.032994 8.00942 0.000283158ZM8.01995 1.26167C4.99122 1.287 2.52814 3.35857 1.41776 5.25723C2.52814 7.15589 4.9912 9.22746 8.01995 9.25278C11.0688 9.27827 13.617 7.23674 14.7374 5.25713C13.617 3.27758 11.0687 1.23619 8.01995 1.26167ZM8.49555 7.60093H7.12174L5.68815 4.78849H7.0561L7.80865 6.26493L9.5169 2.91352H10.8848L8.49555 7.60093Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"Validators"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            "global-src":
                              "/assets/1449d0c0-692ea9b855930273c367c68f_00_-_DeFi.json",
                            global: "mainHover,lottieReveal",
                            href: "https://www.sui.io/security",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 12 16",
                                fill: "none",
                                className: "object-contain",
                              }}
                            >
                              <path
                                {...{
                                  d: "M12 7.94414C12 10.2387 10.4968 12.2249 9.12727 13.5737C8.42872 14.2617 7.73262 14.8157 7.21206 15.1973C6.95124 15.3884 6.73294 15.5374 6.5787 15.6394C6.50157 15.6903 6.44029 15.7297 6.39757 15.7567C6.35808 15.7817 6.31804 15.8059 6.27819 15.8305L6.27799 15.8303L5.99936 15.9995L5.73168 15.837C5.68805 15.8105 5.64441 15.7839 5.60126 15.7566C5.55854 15.7296 5.49726 15.6903 5.42013 15.6393C5.2659 15.5373 5.04775 15.3882 4.78697 15.197C4.26649 14.8153 3.57047 14.2612 2.87204 13.573C1.50272 12.2235 3.43591e-05 10.2365 0 7.94082V3.0002H1.26398V7.94082C1.26402 9.70504 2.44506 11.3779 3.75941 12.6731C4.40283 13.3072 5.04872 13.8219 5.53463 14.1782C5.71533 14.3107 5.87313 14.4208 5.99946 14.5064C6.12583 14.4209 6.28381 14.3108 6.46459 14.1783C6.95059 13.8221 7.59657 13.3075 8.2401 12.6737C9.55483 11.3788 10.736 9.70685 10.736 7.94414V2.9999H12V7.94414ZM9.39056 9.63818L8.9437 10.0849L8.49685 10.5316L2.60905 4.64619L3.50276 3.75283L9.39056 9.63818ZM4.43829 9.76563e-05H7.5619L8.82588 0C8.82586 0.526367 9.01656 0.948378 9.32608 1.24102C9.63758 1.53552 10.1104 1.73681 10.7357 1.73682V3.00029C9.83306 3.00029 9.03492 2.70494 8.45747 2.15898C8.19656 1.9123 7.98917 1.62208 7.83985 1.3001H4.16025C4.01093 1.62206 3.80362 1.91231 3.54272 2.15898C2.96527 2.70494 2.16705 3.00029 1.26437 3.00029L1.26447 1.73682C1.88979 1.73681 2.36261 1.53552 2.67411 1.24102C2.98363 0.94838 3.17433 0.526357 3.17431 0L4.43829 9.76563e-05Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"Security"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            "global-src":
                              "/assets/dc5a50e7-692ea9c07a4530e0a1c8fde2_05_-_AI.json",
                            global: "mainHover,lottieReveal",
                            href: "https://status.sui.io/",
                            target: "_blank",
                            className: "navbar-dd_link-block w-inline-block",
                            rel: "noopener noreferrer",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 17 16",
                                fill: "none",
                                className: "object-contain",
                              }}
                            >
                              <path
                                {...{
                                  d: "M5.06895 0.00136701V0.000585862L12.1137 0.000683506V1.30052L12.1136 1.30042V3.65754C12.8669 3.8074 13.5853 4.17142 14.1693 4.74988C15.5877 6.15482 15.7296 8.34494 14.5956 9.90732L16.6154 11.9081L15.6875 12.8273L13.6676 10.8265C13.1938 11.1639 12.6631 11.3874 12.1136 11.4967V15.9988H11.1494V16H0.000788604V14.7002L0.000887179 5.00082L0 4.99995L5.06757 0L5.06895 0.00136701ZM6.36078 4.99956L5.04657 6.30134H1.31312V14.7002H10.8014V11.543C9.94564 11.4348 9.11816 11.0554 8.46093 10.4044C6.88457 8.84297 6.88457 6.31134 8.46093 4.74988C9.11816 4.09887 9.94563 3.7194 10.8014 3.61126V1.30042H6.36078V4.99956ZM13.2414 5.669C12.1775 4.61521 10.4527 4.6152 9.38882 5.669C8.32492 6.72285 8.32492 8.43146 9.38882 9.48531C10.4527 10.5391 12.1775 10.5391 13.2414 9.48531C14.3053 8.43147 14.3053 6.72284 13.2414 5.669ZM1.85775 5.00151H5.04854V1.85338L1.85775 5.00151Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"Status"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            "global-src":
                              "/assets/f053e937-692ea9b9bde9cc8d737ec1f3_00_-_Gaming.json",
                            global: "mainHover,lottieReveal",
                            href: "https://www.sui.io/token-schedule",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 19 15",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M18.1538 6.99552V8.66742L16.1324 7.07564V7.07692C16.1324 10.9854 12.9736 14.1538 9.07687 14.1538C6.38651 14.1538 4.04889 12.6433 2.85927 10.4247L4.01398 9.80181C4.98417 11.6112 6.88809 12.8388 9.07687 12.8388C12.2495 12.8388 14.8213 10.2591 14.8213 7.07692V7.07475L12.8001 8.66732V6.99503L15.4759 4.88688L18.1538 6.99552ZM9.66447 4.2166C10.1032 4.30006 10.4511 4.48217 10.7159 4.75529C10.9806 5.02841 11.147 5.36978 11.2151 5.78704H10.0427C9.98972 5.53669 9.88376 5.35462 9.71736 5.23323C9.55096 5.11185 9.34675 5.05117 9.09716 5.05116C8.93833 5.05116 8.78705 5.08154 8.6509 5.13464C8.51476 5.18774 8.40879 5.26355 8.32559 5.36976C8.24238 5.47597 8.20455 5.59742 8.20455 5.73399C8.20455 5.87055 8.23484 5.98434 8.29535 6.0678C8.35586 6.15124 8.45418 6.2195 8.58275 6.28019C8.71134 6.34089 8.89291 6.40166 9.1274 6.46236L9.83082 6.64443C10.3527 6.7734 10.7385 6.97061 10.9806 7.22856C11.2226 7.48652 11.3436 7.8356 11.3436 8.28323C11.3436 8.59426 11.2756 8.87496 11.1395 9.12531C11.0033 9.37568 10.8066 9.58054 10.557 9.73987C10.3074 9.8992 10.0124 10.0055 9.67954 10.0586V10.9993H8.53744V10.0357L8.51469 10.0586C8.05329 9.95993 7.68268 9.75505 7.39525 9.444C7.10781 9.13293 6.93386 8.73839 6.87335 8.26041H8.04578C8.0836 8.57146 8.20458 8.80665 8.40123 8.97357C8.59789 9.14048 8.84751 9.22399 9.15764 9.224C9.36186 9.224 9.54342 9.18608 9.6947 9.1178C9.84599 9.04952 9.95945 8.95843 10.0351 8.83704C10.1107 8.71566 10.1485 8.57909 10.1485 8.42736C10.1485 8.26807 10.1183 8.14666 10.0503 8.05562C9.98219 7.96459 9.88382 7.8887 9.74769 7.82801C9.61155 7.76732 9.4224 7.70662 9.1728 7.63834L8.46929 7.46378C8.03816 7.35756 7.6902 7.17552 7.4179 6.91758C7.1456 6.65962 7.00946 6.31054 7.00946 5.86291C7.00947 5.59738 7.07757 5.34702 7.20615 5.11943C7.33474 4.89182 7.5163 4.70214 7.74322 4.5504C7.97013 4.39868 8.22729 4.29248 8.52227 4.2242V3.29855H9.66447V4.2166ZM9.07687 0C11.7734 0 14.1156 1.51753 15.3026 3.74449L14.1465 4.36458C13.1784 2.5484 11.2707 1.31507 9.07687 1.31507C5.90526 1.31508 3.33397 3.8932 3.33242 7.07406L5.35374 5.48149V7.15378L2.67795 9.26193L0 7.15329V5.48139L2.02132 7.07297C2.02345 3.16631 5.18151 6.67146e-06 9.07687 0Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"SUI Circulation"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            "global-src":
                              "/assets/f053e937-692ea9b9bde9cc8d737ec1f3_00_-_Gaming.json",
                            global: "mainHover,lottieReveal",
                            href: "https://www.sui.io/deflation",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 12 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M6.7812 0C8.39578 2.41933 10.5324 5.58306 11.3859 7.32273C11.7793 8.12468 12 9.02692 12 9.97899C12 13.3042 9.31372 15.9999 6.00005 16C2.68633 16 0 13.3043 0 9.97899C1.06083e-06 9.02691 0.220672 8.12469 0.614102 7.32273C1.46718 5.58387 3.61622 2.39816 5.21851 0H6.7812ZM5.99966 1.16464C4.42308 3.52339 2.53501 6.34979 1.77605 7.8968C1.4683 8.52412 1.29514 9.23034 1.29514 9.97899C1.29514 12.5865 3.40162 14.7003 6.00005 14.7003C8.59843 14.7003 10.7049 12.5865 10.7049 9.97899C10.7049 9.23034 10.5317 8.52412 10.2239 7.8968C9.46422 6.3482 7.58632 3.54048 5.99966 1.16464ZM6.65219 10.8022L8.26703 7.99561H9.7625L6.88657 12.9943H5.11334L2.23741 7.99561H3.73277L5.35705 10.8188V4.99345H6.65219V10.8022Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"SUI Deflation"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            "global-src":
                              "/assets/f053e937-692ea9b9bde9cc8d737ec1f3_00_-_Gaming.json",
                            global: "mainHover,lottieReveal",
                            href: "https://www.sui.io/buybacks",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 19 19",
                                fill: "none",
                                className: "object-contain",
                              }}
                            >
                              <path
                                {...{
                                  d: "M15.7468 10.6701C15.764 10.606 15.7799 10.5411 15.7948 10.477C16.4595 7.61913 14.8159 4.72783 12.0311 3.82803L11.7568 3.74686C10.9325 3.56153 10.618 3.59821 9.99479 3.57701L9.81616 2.40464L12.534 0.563671L14.1173 0.989436L12.0921 2.50296L12.094 2.50262C15.7307 3.48214 17.9111 7.1747 17.0406 10.812C17.0253 10.876 17.0087 10.9404 16.9915 11.0043L15.7468 10.6701ZM1.82041 11.8948L1.33953 10.3278L3.69791 11.2357L3.69774 11.2347C2.5921 7.63433 4.55789 3.8244 8.10092 2.62621C8.16335 2.6051 8.22679 2.58327 8.29019 2.5638L8.66809 3.79697C8.60483 3.8164 8.54185 3.83778 8.47978 3.8592C5.61715 4.84792 4.03334 7.93749 4.92995 10.857L4.93029 10.8589C5.21196 11.6555 5.41052 11.9015 5.72425 12.4407L4.82562 13.2164L1.82041 11.8948ZM15.4072 13.9768L15.4064 13.978C12.8214 16.7171 8.53637 16.8882 5.74501 14.3989C5.69583 14.3551 5.64633 14.3099 5.5981 14.2643L6.48373 13.3263C6.53195 13.3718 6.58111 13.4165 6.63048 13.4599C8.90373 15.4612 12.3722 15.3136 14.4684 13.0923L14.4701 13.091C15.0239 12.4525 15.1404 12.1588 15.4544 11.6197L16.5715 12.0172L16.907 15.2833L15.7809 16.4754L15.4072 13.9768Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M11.05 6.05542C11.4751 6.9454 12.1804 8.40994 12.4231 8.90145C12.5759 9.21091 12.6614 9.55894 12.6614 9.92514C12.6614 11.2064 11.6197 12.2451 10.3346 12.2452C9.04957 12.2452 8.00781 11.2064 8.00781 9.92514C8.00782 9.55894 8.09338 9.21091 8.24618 8.90145C8.49199 8.4036 9.1825 6.95485 9.6167 6.05542H11.05ZM10.3326 7.36291C9.94628 8.1678 9.51372 9.07142 9.33398 9.43545C9.2614 9.58246 9.22032 9.74817 9.22031 9.92514C9.22031 10.5387 9.71921 11.0362 10.3346 11.0362C10.95 11.0362 11.4489 10.5387 11.4489 9.92514C11.4489 9.74817 11.4078 9.58246 11.3353 9.43545C11.1533 9.06692 10.7191 8.16749 10.3326 7.36291Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"SUI Buybacks"}
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div {...{ className: "navbar_link" }}>
                  <div
                    {...{
                      global: "shuffleHover",
                      className: "navbar-dd_toggle",
                    }}
                  >
                    <div
                      {...{
                        "global-target": "",
                        className: "navbar_link-text",
                      }}
                    >
                      {"Build"}
                    </div>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 10 10",
                        fill: "none",
                        className: "navbar-dd_icon",
                      }}
                    >
                      <path
                        {...{
                          d: "M5.49609 10.001H4.49609V5.91895H5.49609V10.001ZM10 4.49512V5.49512H5.91797V4.49512H10ZM4.08203 5.49512H0V4.49512H4.08203V5.49512ZM5.49609 4.08301H4.49609V0.000976562L5.49609 0V4.08301Z",
                          fill: "currentColor",
                          className: "transformorigincenter",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "navbar-content" }}>
                    <div
                      {...{ className: "navbar-dd_inner-wrapper _3-columns" }}
                    >
                      <div {...{ className: "w-layout-vflex navbar-dd_block" }}>
                        <span {...{ className: "navbar-dd_category" }}>
                          {"Technical Resources/"}
                        </span>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://docs.sui.io/",
                            target: "_blank",
                            className: "navbar-dd_link-block w-inline-block",
                            rel: "noopener noreferrer",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 18 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M8.59874 0C10.5135 1.31955e-05 12.0659 1.56683 12.0659 3.49959C12.0659 4.55501 11.6029 5.50122 10.8709 6.14287L12.6175 9.19653C12.9763 9.06973 13.3619 9.00072 13.7636 9.00072C15.6784 9.00072 17.2307 10.5675 17.2308 12.5003C17.2307 14.4331 15.6784 16 13.7636 16C12.0689 16 10.6584 14.7725 10.3565 13.1504H6.87425C6.57233 14.7725 5.16181 16 3.46707 16C1.55227 16 1.96102e-05 14.4331 0 12.5003C1.96102e-05 10.5675 1.55227 9.00073 3.46707 9.00072C3.86873 9.00072 4.25437 9.06983 4.61315 9.19663L6.34877 6.16201C5.60399 5.52012 5.13168 4.56559 5.13167 3.49959C5.13169 1.56683 6.68394 1.97929e-05 8.59874 0ZM3.46707 10.3008C2.26362 10.3008 1.28804 11.2856 1.28802 12.5003C1.28804 13.715 2.26362 14.6999 3.46707 14.6999C4.67054 14.6999 5.6462 13.7151 5.64622 12.5003C5.6462 11.2856 4.67054 10.3008 3.46707 10.3008ZM13.7636 10.3008C12.5602 10.3008 11.5846 11.2856 11.5845 12.5003C11.5846 13.715 12.5602 14.6999 13.7636 14.6999C14.9671 14.6999 15.9427 13.7151 15.9427 12.5003C15.9427 11.2856 14.9671 10.3008 13.7636 10.3008ZM9.75856 6.79829C9.39589 6.92822 9.00555 6.99928 8.59874 6.99929C8.20225 6.99928 7.82134 6.93186 7.4665 6.80816L5.72808 9.84736C6.31189 10.3548 6.72625 11.055 6.87425 11.8503H10.3565C10.5045 11.055 10.9187 10.3546 11.5025 9.84727L9.75856 6.79829ZM8.59874 1.3001C7.39529 1.30012 6.41971 2.28486 6.41969 3.49959C6.41971 4.71433 7.39529 5.69916 8.59874 5.69918C9.8022 5.69917 10.7779 4.71433 10.7779 3.49959C10.7779 2.28485 9.8022 1.30012 8.59874 1.3001Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Docs"}
                              </span>
                              <div
                                {...{ className: "navbar-dd_external-icon" }}
                              >
                                <svg
                                  {...{
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    viewBox: "0 0 7 7",
                                    fill: "none",
                                    className: "object-cover",
                                  }}
                                >
                                  <path
                                    {...{
                                      d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                                      fill: "currentColor",
                                    }}
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/move",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 12 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M6.7812 0C8.39578 2.41933 10.5324 5.58305 11.3859 7.32273C11.7793 8.12469 12 9.02691 12 9.97899C12 13.3043 9.31374 16 6.00005 16C2.68633 16 0 13.3043 0 9.97899C1.06082e-06 9.02691 0.220672 8.12469 0.614102 7.32273C1.46717 5.58387 3.61622 2.39817 5.21851 0H6.7812ZM5.99966 1.16464C4.42308 3.5234 2.535 6.34979 1.77605 7.8968C1.4683 8.52412 1.29514 9.23034 1.29514 9.97899C1.29514 12.5865 3.40162 14.7003 6.00005 14.7003C8.59846 14.7003 10.7049 12.5865 10.7049 9.97899C10.7049 9.23033 10.5317 8.52412 10.2239 7.8968C9.46422 6.34819 7.58632 3.54048 5.99966 1.16464ZM7.29519 7.29676L4.22419 9.52071L7.29519 11.7447V13.3475L3.31014 10.4614V8.58003L7.29519 5.69405V7.29676Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"Move"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://docs.sui.io/getting-started/sui-mcp-server",
                            target: "_blank",
                            className: "navbar-dd_link-block w-inline-block",
                            rel: "noopener noreferrer",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M7.14986 4.30131H7.14868V8.85055H5.84883V4.30131H1.29985V8.85026H5.84805V10.1501H1.29985V14.7001H5.84883V10.1498H7.14868V14.7001H11.6978V10.1501H7.14907V8.85026H11.9502V8.85074H12.9976V16H0V3.00145H7.14986V4.30131ZM16 7.14926H10.1514V5.84939H14.7002V1.29987H10.1511V5.84949H8.85122V0H16V7.14926Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"AI Coding Assistant"}
                              </span>
                              <div
                                {...{ className: "navbar-dd_external-icon" }}
                              >
                                <svg
                                  {...{
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    viewBox: "0 0 7 7",
                                    fill: "none",
                                    className: "object-cover",
                                  }}
                                >
                                  <path
                                    {...{
                                      d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                                      fill: "currentColor",
                                    }}
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://docs.sui.io/getting-started",
                            target: "_blank",
                            className: "navbar-dd_link-block w-inline-block",
                            rel: "noopener noreferrer",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M14.6996 16H1.29992V14.7001H14.6996V16ZM1.29982 14.7H0V1.30005H1.29982V14.7ZM15.9999 14.7H14.7001L14.7002 1.30005H16L15.9999 14.7ZM8.64996 12.9995H7.35014V8.64778H8.64996V12.9995ZM7.34926 8.64807H3.00886V7.34822H7.34926V8.64807ZM12.9994 8.64807H8.65025V7.34822H12.9994V8.64807ZM8.64996 7.34851H7.35014V3.0027H8.64996V7.34851ZM14.6996 1.29986H1.29992V0H14.6996V1.29986Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Starter Template"}
                              </span>
                              <div
                                {...{ className: "navbar-dd_external-icon" }}
                              >
                                <svg
                                  {...{
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    viewBox: "0 0 7 7",
                                    fill: "none",
                                    className: "object-cover",
                                  }}
                                >
                                  <path
                                    {...{
                                      d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                                      fill: "currentColor",
                                    }}
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://docs.sui.io/getting-started/tooling",
                            target: "_blank",
                            className: "navbar-dd_link-block w-inline-block",
                            rel: "noopener noreferrer",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M1.30049 14.6966H14.7017V5.58242H16.0017V15.9957H16.0009V15.9966H0.000878906V15.9957H0.000488281V5.58242H1.30049V14.6966ZM10.4398 8.77471V10.2203L5.62705 12.999L5.56182 12.886V11.5355L9.0919 9.49756L5.56182 7.45947V6.10898L5.62705 5.99609L10.4398 8.77471ZM5.30254 2.99688H10.7018V1.3002H12.0018V2.99688H16.0009V4.29688H0V2.99688H4.00254V1.3002H5.30254V2.99688ZM10.6996 1.3H5.30205V0H10.6996V1.3Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Tools"}
                              </span>
                              <div
                                {...{ className: "navbar-dd_external-icon" }}
                              >
                                <svg
                                  {...{
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    viewBox: "0 0 7 7",
                                    fill: "none",
                                    className: "object-cover",
                                  }}
                                >
                                  <path
                                    {...{
                                      d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                                      fill: "currentColor",
                                    }}
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/agentpayments",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "3.99 3.84 16.18 16.18",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M10.055 11.3769L10.055 12.8919L7.20002 14.5374L19.1538 14.5373L19.1538 15.8494L7.21651 15.8495L10.055 17.4855L10.055 19.0005L5 16.0869L5 14.2905L10.055 11.3769ZM16.937 7.99765L14.0988 6.36167L14.0988 4.84664L19.1538 7.76021L19.1538 9.55664L14.0988 12.4702L14.0988 10.9553L16.9538 9.30974L5 9.30974L5 7.99765L16.937 7.99765Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Agent Payments"}
                              </span>
                              <div
                                {...{ className: "navbar-dd_external-icon" }}
                              >
                                <svg
                                  {...{
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    viewBox: "0 0 7 7",
                                    fill: "none",
                                    className: "object-cover",
                                  }}
                                >
                                  <path
                                    {...{
                                      d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                                      fill: "currentColor",
                                    }}
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        {...{
                          className:
                            "w-layout-vflex navbar-dd_block has-border",
                        }}
                      >
                        <span {...{ className: "navbar-dd_category" }}>
                          {"Build & Launch/"}
                        </span>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/developers",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 16 12",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M4.97971 1.87972L1.02525 6.00132L4.97971 10.1228V12L0 6.81V5.19254L4.97971 0.00253871V1.87972ZM16 5.19254V6.81L11.0204 12V10.1228L14.9749 6.00132L11.0204 1.87972V0.00253871L16 5.19254ZM7.09395 11.9983H5.7485L8.96287 0H10.3082L7.09395 11.9983Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"Developer Hub"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/project-ideas",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 15 20",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M9.60059 19.1946H4.80059V17.6346H9.60059V19.1946ZM7.39629 0C11.2886 0.100602 14.413 3.2874 14.413 7.20398C14.413 8.34353 14.148 9.42342 13.6754 10.3833C13.2152 11.3181 12.3141 13.1832 11.3298 15.2302H9.60059V16.7902H4.80059V15.2302H3.07172C2.09313 13.1851 1.20018 11.323 0.737578 10.3833C0.265039 9.42342 0 8.34352 0 7.20398C1.28522e-05 3.2874 3.1245 0.100608 7.01684 0H7.39629ZM7.20656 1.55754C4.0881 1.55755 1.56001 4.08553 1.56 7.20398C1.56 8.09934 1.76781 8.94398 2.13715 9.69422C2.64828 10.7325 3.69604 12.92 4.80117 15.2302H9.59894C10.7077 12.9219 11.7629 10.7362 12.2759 9.69422C12.6452 8.94397 12.853 8.09935 12.853 7.20398C12.853 4.08554 10.325 1.55756 7.20656 1.55754ZM7.98059 6.46031L9.92824 5.3359L10.7082 6.68695L8.76047 7.81137L10.7082 8.9359L9.92824 10.287L7.98059 9.16242V11.4115H6.42059V9.16242L4.47293 10.287L3.69293 8.9359L5.64047 7.81137L3.69281 6.68695L4.47281 5.3359L6.42059 6.46043V4.21148H7.98059V6.46031Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Project Ideas"}
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/launch-on-sui",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 12 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M1.31315 1.29712L1.30376 14.7H10.6955V16H0.000391607V15.4583H0L0.000391607 14.8973V14.7H0.000489508L0.00988807 1.29614L1.31315 1.29712ZM12 4.34166L11.997 4.34469H11.9999V13.1296H11.9991V13.9999H2.78608V13.9991L1.97477 13.9992V1.30024H1.97399V0.00019532H7.62947V0.00107426L7.63055 0L12 4.34166ZM3.27804 12.6999H10.6966V5.54718H7.74069L6.44203 4.25465V1.30024H3.27804V12.6999ZM7.74529 4.24713H10.0582L7.74529 1.949V4.24713Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Launch Playbook"}
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/founder-starter-pack",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M7.03189 14.4586L14.0642 10.0011H14.068V11.54L7.0317 16L0 11.5403V10.0011H0.00372909L7.03189 14.4586ZM10.0611 1.92119V3.4625L7.03189 1.54248L0.00372909 6L7.03189 10.4575L14.0642 6H14.068V7.53897L7.0317 11.9989L0 7.53926V4.46074L7.0317 0.00107422L10.0611 1.92119ZM13.5372 0C13.9467 0.855326 14.6107 2.23128 14.8408 2.69639C14.9922 3.00246 15.0769 3.34668 15.0769 3.70869C15.0769 4.97566 14.0448 6.00278 12.7717 6.00283C11.4985 6.00282 10.4662 4.97568 10.4662 3.70869C10.4662 3.34667 10.5511 3.00247 10.7025 2.69639C10.9359 2.22451 11.5854 0.864528 12.0034 0H13.5372ZM12.7697 1.4167C12.4159 2.15253 12.0371 2.94192 11.8745 3.27061C11.8095 3.40201 11.7727 3.55014 11.7727 3.70869C11.7727 4.25771 12.22 4.70282 12.7717 4.70283C13.3233 4.70278 13.7706 4.25768 13.7706 3.70869C13.7706 3.55014 13.7337 3.40201 13.6687 3.27061C13.5038 2.93732 13.1237 2.1518 12.7697 1.4167Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Founder Starter Pack"}
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/faq",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 16 15",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M16 0.657175H16.0003V10.8198H14.7003V1.31435H1.30137V10.8198H1.34434L4.45615 12.6361V12.1344H4.45596V10.8201H14.7006V12.1344H5.75615V14.1536H5.62871V14.1538H4.45615L1.30049 12.3118V10.8198H0.00136719V1.31435H0V0H16V0.657175ZM8.00928 8.31313C8.37074 8.31314 8.66376 8.60938 8.66377 8.97484C8.66376 9.3403 8.37074 9.63664 8.00928 9.63666C7.6478 9.63666 7.3547 9.34031 7.35469 8.97484C7.3547 8.60937 7.6478 8.31313 8.00928 8.31313ZM7.11191 3.01603C7.5403 2.83663 8.01173 2.78971 8.4665 2.88116C8.92128 2.97263 9.33912 3.19835 9.66699 3.52985C9.99485 3.86135 10.2181 4.2838 10.3086 4.74359C10.399 5.20337 10.3526 5.68003 10.1752 6.11313C9.99774 6.54622 9.69724 6.91645 9.31172 7.17689C8.92618 7.43734 8.47286 7.57636 8.00918 7.57637V6.36796C8.23645 6.36795 8.45868 6.29983 8.64766 6.17217C8.83664 6.0445 8.98401 5.86296 9.071 5.65066C9.15797 5.43836 9.18066 5.20464 9.13633 4.97927C9.09198 4.7539 8.98248 4.54688 8.82178 4.38439C8.66106 4.2219 8.45631 4.11121 8.2334 4.06637C8.01047 4.02154 7.77934 4.04448 7.56934 4.13242C7.35933 4.22037 7.1798 4.36935 7.05352 4.56043C6.92726 4.7515 6.85987 4.97617 6.85986 5.20596H5.66465C5.66465 4.73716 5.80216 4.27884 6.05977 3.88904C6.31738 3.49925 6.68353 3.19544 7.11191 3.01603Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Builder FAQ"}
                              </span>
                            </div>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/programs-funding",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 11 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M5.07687 0C7.88076 0 10.1538 2.2389 10.1538 5.00073C10.1538 7.54226 8.22892 9.6409 5.73682 9.95956V12.6366C6.66547 11.6307 8.00477 10.9993 9.49381 10.9993V12.2994C7.41889 12.2994 5.73683 13.9562 5.73682 16H4.41693V12.6437L3.44318 13.5141C2.75494 12.767 1.76336 12.2994 0.660041 12.2994V10.9993C2.14911 10.9993 3.4892 11.6316 4.41693 12.6365V9.95956C1.92485 9.64089 0 7.54225 0 5.00073C1.33979e-05 2.23891 2.273 1.31952e-05 5.07687 0ZM5.07687 1.30009C3.00195 1.3001 1.3199 2.95693 1.31988 5.00073C1.31988 7.04454 3.00194 8.70145 5.07687 8.70146C7.15182 8.70146 8.83396 7.04455 8.83396 5.00073C8.83395 2.95692 7.15181 1.30009 5.07687 1.30009ZM5.54625 2.75526C6.27705 2.89098 6.71429 3.3453 6.82211 3.97663H5.86968C5.77982 3.59901 5.48035 3.39252 5.04306 3.39251C4.58781 3.39251 4.29429 3.62259 4.29428 3.92351C4.29428 4.24212 4.59977 4.33653 5.1209 4.47813L5.71391 4.63742C6.46269 4.84394 6.8821 5.22751 6.8821 5.93556C6.8821 6.6495 6.3669 7.16282 5.54625 7.29854V8.03609H4.6417V7.29268C3.89891 7.14517 3.37776 6.61998 3.28791 5.88243H4.24035C4.30025 6.36036 4.64174 6.64947 5.12694 6.64947C5.65407 6.64946 5.95356 6.41346 5.95356 6.02404C5.95355 5.70544 5.70796 5.54617 5.16889 5.40456L4.58182 5.25113C3.88696 5.06822 3.3718 4.73778 3.37179 4.01795C3.37179 3.3512 3.89293 2.86736 4.6417 2.74345V2.03539H5.54625V2.75526Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Programs & Funding"}
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        {...{
                          className:
                            "w-layout-vflex navbar-dd_block has-border no-right-padding",
                        }}
                      >
                        <span {...{ className: "navbar-dd_category" }}>
                          {"Get Involved/"}
                        </span>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.deepsurge.xyz/",
                            target: "_blank",
                            className: "navbar-dd_link-block w-inline-block",
                            rel: "noopener noreferrer",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 18 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <rect
                                {...{
                                  x: "3.0625",
                                  y: "15.0653",
                                  width: "1.20078",
                                  height: "11.1493",
                                  transform: "rotate(-90 3.0625 15.0653)",
                                  fill: "currentColor",
                                }}
                              ></rect>
                              <path
                                {...{
                                  d: "M14.2119 13.8652L14.2119 12.5779L8.62747 10.6876L8.62747 11.975L14.2119 13.8652Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M3.04297 13.8652L3.04297 12.5779L8.62741 10.6876L8.62741 11.975L3.04297 13.8652Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M8.62402 10.0473C9.88775 10.0425 11.1285 9.63005 12.043 8.8432C12.9441 8.06774 13.5635 6.90131 13.5635 5.2973V5.29437L13.5811 0.652771H3.69043V5.2973C3.69047 6.92481 4.31024 8.09551 5.20898 8.86664C6.12135 9.64942 7.36027 10.0521 8.62402 10.0473Z",
                                  stroke: "currentColor",
                                  strokeWidth: "1.294",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M14.2313 5.48408C14.8719 5.48408 15.4864 5.22957 15.9394 4.77654C16.3925 4.3235 16.647 3.70905 16.647 3.06837C16.647 2.42768 16.3925 1.81323 15.9394 1.3602C15.4864 0.907161 14.8719 0.652649 14.2313 0.652649",
                                  stroke: "currentColor",
                                  strokeWidth: "1.294",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M3.06269 5.47841C2.422 5.47841 1.80755 5.22389 1.35452 4.77086C0.901485 4.31782 0.646973 3.70338 0.646973 3.06269C0.646973 2.422 0.901485 1.80755 1.35452 1.35452C1.80755 0.901485 2.422 0.646972 3.06269 0.646972",
                                  stroke: "currentColor",
                                  strokeWidth: "1.294",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Hackathons"}
                              </span>
                              <div
                                {...{ className: "navbar-dd_external-icon" }}
                              >
                                <svg
                                  {...{
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    viewBox: "0 0 7 7",
                                    fill: "none",
                                    className: "object-cover",
                                  }}
                                >
                                  <path
                                    {...{
                                      d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                                      fill: "currentColor",
                                    }}
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          {...{
                            "global-src":
                              "/assets/a71f2c1b-692ea9b97a2b87aef85b27ca_00_-_Globe__internet__World.json",
                            global: "mainHover,lottieReveal",
                            href: "https://www.sui.io/community",
                            className: "navbar-dd_link-block w-inline-block",
                          }}
                        >
                          <div
                            {...{
                              "global-target": "",
                              className: "mw-32 hide",
                            }}
                          ></div>
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M8 0C12.1943 3.90598e-06 15.6367 3.20974 15.9921 7.30039H14.682V8.60034H11.3762C11.3223 10.4525 11.0205 12.1409 10.5438 13.4231C10.4197 13.7568 10.2806 14.0704 10.1269 14.3564C12.612 13.5299 14.4511 11.2949 14.6913 8.60112H16C15.6918 12.7386 12.2279 16 8 16C3.77212 16 0.308231 12.7386 0 8.60112H1.30869C1.54891 11.2949 3.38799 13.5299 5.87313 14.3564C5.71938 14.0704 5.5803 13.7568 5.45621 13.4231C4.9795 12.1409 4.67784 10.4525 4.62392 8.60034H1.31829V7.30039H0.0079368C0.363333 3.20974 3.80572 0 8 0ZM5.92889 8.60034C5.98257 10.3282 6.26523 11.8576 6.67916 12.9709C6.91072 13.5936 7.17085 14.0523 7.42669 14.3433C7.6836 14.6356 7.87915 14.6993 8 14.6993C8.12085 14.6993 8.3163 14.6356 8.57321 14.3433C8.82906 14.0523 9.08917 13.5937 9.32074 12.9709C9.73468 11.8576 10.0174 10.3282 10.0711 8.60034H5.92889ZM5.87313 1.6435C3.41856 2.45983 1.5943 4.65031 1.31829 7.29961H4.62725C4.68896 5.48677 4.9881 3.83593 5.45621 2.57694C5.58031 2.24317 5.71937 1.92948 5.87313 1.6435ZM8 1.30073C7.87915 1.30074 7.6836 1.36444 7.42669 1.65669C7.17086 1.94774 6.91072 2.40637 6.67916 3.02914C6.27324 4.12089 5.99352 5.6128 5.93222 7.29961H10.0678C10.0065 5.61279 9.72667 4.12089 9.32074 3.02914C9.08918 2.40634 8.82906 1.94774 8.57321 1.65669C8.3163 1.36444 8.12085 1.30073 8 1.30073ZM10.1269 1.6435C10.2806 1.92949 10.4197 2.24316 10.5438 2.57694C11.0119 3.83593 11.3111 5.48677 11.3728 7.29961H14.6817C14.4057 4.65031 12.5814 2.45983 10.1269 1.6435Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "navbar-dd_link" }}>
                              {"Online Communities"}
                            </span>
                          </div>
                        </a>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://luma.com/sui-network",
                            target: "_blank",
                            className: "navbar-dd_link-block w-inline-block",
                            rel: "noopener noreferrer",
                          }}
                        >
                          <div
                            {...{ className: "navbar-dd_link-icon smaller" }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M1.2999 14.7H14.7001V3.30256H16V15.9992H15.9992V16H0.000390596V15.9992H0V3.30256H1.2999V14.7ZM8.63531 9.02934L11.0686 8.25499L11.4373 9.47183L9.04084 10.2462L10.5709 12.3295L9.55702 13.0669L8.00859 10.9467L6.44172 13.0669L5.42783 12.3295L6.95779 10.2462L4.56139 9.47183L4.93011 8.25499L7.36343 9.02934V6.61421H8.63531V9.02934ZM5.29854 2.00193H10.6958V0H11.9957V2.00193H14.6994V3.30198H11.9957V5.99876H10.6958V3.30198H5.29854V5.99885H3.99863V3.30198H1.29922V2.00193H3.99863V0H5.29854V2.00193Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <div {...{ className: "w-layout-hflex gap-4" }}>
                              <span {...{ className: "navbar-dd_link" }}>
                                {"Events"}
                              </span>
                              <div
                                {...{ className: "navbar-dd_external-icon" }}
                              >
                                <svg
                                  {...{
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "100%",
                                    viewBox: "0 0 7 7",
                                    fill: "none",
                                    className: "object-cover",
                                  }}
                                >
                                  <path
                                    {...{
                                      d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                                      fill: "currentColor",
                                    }}
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  {...{
                    "navbar-link": "",
                    href: "http://docs.sui.io",
                    target: "_blank",
                    className: "navbar_link w-inline-block",
                    rel: "noopener noreferrer",
                  }}
                >
                  <div
                    {...{
                      global: "shuffleHover",
                      className: "navbar-dd_toggle",
                    }}
                  >
                    <div
                      {...{
                        "global-target": "",
                        className: "navbar_link-text",
                      }}
                    >
                      {"Docs"}
                    </div>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 15 16",
                        fill: "none",
                        className: "navbar-icon",
                      }}
                    >
                      <path
                        {...{
                          d: "M7.42785 15.7774L14.1538 11.537V9.99703H14.1536V1.54159H12.8393V10.8234L7.73411 14.0419V4.74526L12.8396 1.54051V9.53674e-05L7.07737 3.61704L1.31447 -1.90735e-06V1.54032L6.41983 4.74468V14.0445L1.31428 10.8237V1.54159H0V10.995H9.87287e-05V11.5373L6.72165 15.7773L7.0747 16L7.42785 15.7774Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                </a>
                <a
                  {...{
                    "navbar-link": "",
                    href: "https://www.sui.io/blog",
                    className: "navbar_link w-inline-block",
                  }}
                >
                  <div
                    {...{
                      global: "shuffleHover",
                      className: "navbar-dd_toggle",
                    }}
                  >
                    <div
                      {...{
                        "global-target": "",
                        className: "navbar_link-text",
                      }}
                    >
                      {"Blog"}
                    </div>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 16 15",
                        fill: "none",
                        className: "navbar-icon",
                      }}
                    >
                      <path
                        {...{
                          d: "M16 4.14291V9.72457L13.2312 10.8372L14.9905 14.1538H13.5148L12.0148 11.3261L5.00273 14.1443V12.7296L14.7068 8.82963V5.05859L5.00273 1.40299V0L16 4.14291ZM5.00283 3.33418C2.95826 3.33418 1.30076 5.00934 1.30076 7.07569C1.30078 9.14202 2.95827 10.8171 5.00283 10.8171V12.1316C2.23994 12.1316 2.63156e-05 9.868 0 7.07569C0 4.28335 2.23992 2.01966 5.00283 2.01966V3.33418ZM5.00273 6.02818C4.43031 6.02819 3.96627 6.49717 3.96627 7.07569C3.96627 7.65421 4.43031 8.12319 5.00273 8.12319V9.43771C3.71197 9.4377 2.66561 8.3802 2.66561 7.07569C2.66562 5.77118 3.71198 4.71368 5.00273 4.71367V6.02818Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                </a>
              </nav>
              <div {...{ className: "hide-tablet" }}>
                <div {...{ className: "navbar_link" }}>
                  <a
                    {...{
                      global: "textStagger",
                      className: "nav_cta-button cta-dd_toggle",
                    }}
                  >
                    <span {...{ "global-target": "" }}>{"Get started"}</span>
                  </a>
                  <div {...{ className: "navbar-content custom_padding" }}>
                    <div {...{ className: "cta-dd_inner-wrapper border-2px" }}>
                      <div
                        {...{
                          id: "w-node-c0170b70-3725-f98b-de4f-9ce8fdb3ef5a-0bf9af44",
                          className: "w-layout-vflex cta-dd_block",
                        }}
                      >
                        <span
                          {...{ className: "cta-dd_category no-right-padding" }}
                        >
                          {"Get Started/"}
                        </span>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/ecosystem",
                            className:
                              "cta-dd_link-block less-gap w-inline-block",
                          }}
                        >
                          <div {...{ className: "cta-dd_link-icon" }}>
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 22 26",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M21.5 10.3669L21.5 7.97218L11.0046 -1.77263e-05L11.0046 2.39469L21.5 10.3669Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M21.5 10.3669L21.5 12.7616L11.0046 20.7338L11.0046 18.3391L21.5 10.3669Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M21.5 14.8161L21.5 17.2108L11.0046 25.183L11.0046 22.7883L21.5 14.8161Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M0.5 10.3669L0.5 7.97218L10.9954 -1.76724e-05L10.9954 2.39469L0.5 10.3669Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M0.5 10.3669L0.5 12.7616L10.9954 20.7338L10.9954 18.3391L0.5 10.3669Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M0.5 14.8161L0.5 17.2108L10.9954 25.183L10.9954 22.7883L0.5 14.8161Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "cta-dd_link" }}>
                              {"Start building"}
                            </span>
                            <div {...{ className: "mw-220" }}>
                              <span {...{ className: "cta-dd_link-desc" }}>
                                {
                                  "Build, launch, and scale your product with the right resources and support"
                                }
                              </span>
                            </div>
                          </div>
                        </a>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 346 2",
                            fill: "none",
                            preserveAspectRatio: "none",
                            className: "svg-4",
                          }}
                        >
                          <path
                            {...{
                              d: "M0 0.806641H345.861",
                              stroke: "currentColor",
                              strokeWidth: "1.61241",
                              strokeDasharray: "1.61 8.06",
                            }}
                          ></path>
                        </svg>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/developers",
                            className:
                              "cta-dd_link-block less-gap w-inline-block",
                          }}
                        >
                          <div {...{ className: "cta-dd_link-icon" }}>
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 22 21",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M9.73441 19.418L7.927 19.418L11.2629 2.48639L13.0703 2.48639L9.73441 19.418Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M6.5 19.418L6.5 16.8995L-0.000108108 10.952L-0.000108006 13.4705L6.5 19.418Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M6.5 2.48438L6.5 5.00284L-0.000108163 10.9503L-0.000108044 8.43186L6.5 2.48438Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M14.5 19.418L14.5 16.8995L21.0001 10.952L21.0001 13.4705L14.5 19.418Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M14.5 2.48438L14.5 5.00284L21.0001 10.9503L21.0001 8.43186L14.5 2.48438Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "cta-dd_link" }}>
                              {"Start coding"}
                            </span>
                            <div {...{ className: "mw-270" }}>
                              <span {...{ className: "cta-dd_link-desc" }}>
                                {
                                  "Get started with Move, the most powerful smart contract programming language"
                                }
                              </span>
                            </div>
                          </div>
                        </a>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 346 2",
                            fill: "none",
                            preserveAspectRatio: "none",
                            className: "svg-4",
                          }}
                        >
                          <path
                            {...{
                              d: "M0 0.806641H345.861",
                              stroke: "currentColor",
                              strokeWidth: "1.61241",
                              strokeDasharray: "1.61 8.06",
                            }}
                          ></path>
                        </svg>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/get-started",
                            className:
                              "cta-dd_link-block less-gap w-inline-block",
                          }}
                        >
                          <div {...{ className: "cta-dd_link-icon" }}>
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 14 22",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <path
                                {...{
                                  d: "M10.575 0C10.0552 0.718405 9.39346 1.62976 8.66892 2.6332H10.964V4.36654H8.65723C8.93069 4.75118 9.20364 5.13647 9.47218 5.5181C11.1399 7.88816 12.7095 10.2002 13.2348 11.2701C13.6922 12.2015 13.9487 13.2495 13.9487 14.3549C13.9487 18.2191 10.8249 21.3338 6.9754 21.3339C3.12626 21.3338 1.75581e-05 18.2195 0 14.3549C3.46189e-06 13.2495 0.256516 12.2015 0.713904 11.2701C1.23934 10.2 2.81091 7.88758 4.48057 5.51745C4.74926 5.13603 5.02233 4.75099 5.2959 4.36654H2.98471V2.6332H5.28655C4.56322 1.62997 3.90267 0.718562 3.38354 0H5.51915C5.96002 0.60928 6.45553 1.29445 6.97761 2.01953C7.50037 1.29444 7.99652 0.609284 8.43801 0H10.575ZM6.9767 4.98945C6.6135 5.49853 6.24925 6.01125 5.89266 6.51745C4.18786 8.93746 2.71547 11.1182 2.26496 12.0357C1.92195 12.7343 1.72885 13.5208 1.72885 14.3549C1.72887 17.2568 4.0757 19.6005 6.9754 19.6005C9.87471 19.6005 12.2199 17.2572 12.2199 14.3549C12.2199 13.5208 12.0268 12.7343 11.6838 12.0357C11.2331 11.1179 9.76214 8.93715 8.05944 6.51732C7.70327 6.01115 7.33943 5.49851 6.9767 4.98945ZM7.67943 9.7974C8.8584 10.0203 9.56393 10.7663 9.7379 11.803H8.20126C8.05628 11.1829 7.57304 10.8438 6.86761 10.8438C6.13312 10.8438 5.65954 11.2217 5.65954 11.7159C5.65958 12.2391 6.15244 12.3942 6.99319 12.6267L7.94995 12.8883C9.15796 13.2274 9.83452 13.8572 9.83452 15.0199C9.8345 16.1923 9.00338 17.0353 7.67943 17.2582V18.4693H6.22007V17.2484C5.02172 17.0062 4.18099 16.1438 4.03602 14.9327H5.57253C5.66918 15.7175 6.22014 16.1923 7.00293 16.1923C7.85332 16.1923 8.33657 15.8047 8.33658 15.1652C8.33657 14.642 7.94029 14.3805 7.07059 14.1479L6.12344 13.896C5.0024 13.5956 4.17123 13.0529 4.17121 11.8708C4.17124 10.776 5.01206 9.98147 6.22007 9.778V8.61523H7.67943V9.7974Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "cta-dd_link" }}>
                              {"Start earning"}
                            </span>
                            <div {...{ className: "mw-200" }}>
                              <span {...{ className: "cta-dd_link-desc" }}>
                                {"Get a wallet, buy SUI, and explore top dApps"}
                              </span>
                            </div>
                          </div>
                        </a>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 346 2",
                            fill: "none",
                            preserveAspectRatio: "none",
                            className: "svg-4",
                          }}
                        >
                          <path
                            {...{
                              d: "M0 0.806641H345.861",
                              stroke: "currentColor",
                              strokeWidth: "1.61241",
                              strokeDasharray: "1.61 8.06",
                            }}
                          ></path>
                        </svg>
                        <a
                          {...{
                            global: "mainHover",
                            href: "https://www.sui.io/community",
                            className:
                              "cta-dd_link-block no-border less-gap w-inline-block",
                          }}
                        >
                          <div {...{ className: "cta-dd_link-icon" }}>
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 21 17",
                                fill: "none",
                                className: "object-cover",
                              }}
                            >
                              <rect
                                {...{
                                  y: "16.1564",
                                  width: "1.79001",
                                  height: "13.9995",
                                  transform: "rotate(-90 0 16.1564)",
                                  fill: "currentColor",
                                }}
                              ></rect>
                              <path
                                {...{
                                  d: "M0 14.3633L-9.32578e-08 12.0793L6.99974 7.24496L6.99974 9.52895L0 14.3633Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M14 14.3633L14 12.0793L7.00026 7.24496L7.00026 9.52895L14 14.3633Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <rect
                                {...{
                                  x: "14",
                                  y: "16.1562",
                                  width: "1.79001",
                                  height: "6.99974",
                                  transform: "rotate(-90 14 16.1562)",
                                  fill: "currentColor",
                                }}
                              ></rect>
                              <path
                                {...{
                                  d: "M20.9922 14.3633L20.9922 12.0793L13.9925 7.24496L13.9925 9.52895L20.9922 14.3633Z",
                                  fill: "currentColor",
                                }}
                              ></path>
                              <circle
                                {...{
                                  cx: "7.0079",
                                  cy: "3.52353",
                                  r: "2.62247",
                                  stroke: "currentColor",
                                  strokeWidth: "1.80212",
                                }}
                              ></circle>
                              <circle
                                {...{
                                  cx: "14.0079",
                                  cy: "3.52353",
                                  r: "2.62247",
                                  stroke: "currentColor",
                                  strokeWidth: "1.80212",
                                }}
                              ></circle>
                            </svg>
                          </div>
                          <div {...{ className: "w-layout-vflex gap-8" }}>
                            <span {...{ className: "cta-dd_link" }}>
                              {"Start connecting"}
                            </span>
                            <div {...{ className: "mw-270" }}>
                              <span {...{ className: "cta-dd_link-desc" }}>
                                {
                                  "Join a global community of builders and collaborators"
                                }
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                {...{
                  "data-w-id": "c0170b70-3725-f98b-de4f-9ce8fdb3ef9e",
                  className: "hamburger-menu",
                }}
              >
                <svg
                  {...{
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100%",
                    viewBox: "0 0 18 8",
                    fill: "none",
                    className: "hamburger-menu_open",
                  }}
                >
                  <rect
                    {...{ width: "18", height: "2", fill: "currentColor" }}
                  ></rect>
                  <rect
                    {...{
                      y: "6",
                      width: "18",
                      height: "2",
                      fill: "currentColor",
                    }}
                  ></rect>
                </svg>
                <svg
                  {...{
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100%",
                    viewBox: "0 0 13 13",
                    fill: "none",
                    className: "hamburger-menu_close",
                  }}
                >
                  <path
                    {...{
                      d: "M12.378 11.3139L11.3173 12.3746L6.69625 7.75351L7.75691 6.69285L12.378 11.3139ZM11.3132 0.000197294L12.3738 1.06086L7.76313 5.67155L6.70247 4.61089L11.3132 0.000197294ZM5.686 7.74868L1.06011 12.3746L-0.000547526 11.3139L4.62534 6.68802L5.686 7.74868ZM5.67978 4.61573L4.61912 5.67639L0.00359568 1.06086L1.06426 0.000197294L5.67978 4.61573Z",
                      fill: "currentColor",
                    }}
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          {...{
            "data-lenis-prevent": "",
            className: "hamburger-menu_component",
          }}
        >
          <div {...{ className: "w-layout-vflex hm_default-layout" }}>
            <div {...{ className: "w-layout-vflex hm_links-wrapper" }}>
              <div
                {...{
                  "data-w-id": "64e36a29-7f80-a479-2172-590cf3cc0640",
                  className: "w-layout-hflex hm_link",
                }}
              >
                <span {...{ className: "hm_link-text" }}>{"Stack"}</span>
                <svg
                  {...{
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100%",
                    viewBox: "0 0 6 12",
                    fill: "none",
                    className: "hm_link-icon",
                  }}
                >
                  <path
                    {...{
                      d: "M8.10095e-10 12L1.3169e-07 9.91092L5.99064 4.97745L5.99064 7.06653L8.10095e-10 12Z",
                      fill: "currentColor",
                    }}
                  ></path>
                  <path
                    {...{
                      d: "M8.10095e-10 0L1.52556e-07 2.08908L5.99064 7.02255L5.99064 4.93347L8.10095e-10 0Z",
                      fill: "currentColor",
                    }}
                  ></path>
                </svg>
              </div>
              <svg
                {...{
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "100%",
                  viewBox: "0 0 327 2",
                  fill: "none",
                  className: "hm_dots",
                }}
              >
                <path
                  {...{
                    d: "M0 1L327 0.999971",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeDasharray: "2 8",
                  }}
                ></path>
              </svg>
              <div
                {...{
                  "data-w-id": "64e36a29-7f80-a479-2172-590cf3cc0648",
                  className: "w-layout-hflex hm_link",
                }}
              >
                <span {...{ className: "hm_link-text" }}>{"Solutions"}</span>
                <svg
                  {...{
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100%",
                    viewBox: "0 0 6 12",
                    fill: "none",
                    className: "hm_link-icon",
                  }}
                >
                  <path
                    {...{
                      d: "M8.10095e-10 12L1.3169e-07 9.91092L5.99064 4.97745L5.99064 7.06653L8.10095e-10 12Z",
                      fill: "currentColor",
                    }}
                  ></path>
                  <path
                    {...{
                      d: "M8.10095e-10 0L1.52556e-07 2.08908L5.99064 7.02255L5.99064 4.93347L8.10095e-10 0Z",
                      fill: "currentColor",
                    }}
                  ></path>
                </svg>
              </div>
              <svg
                {...{
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "100%",
                  viewBox: "0 0 327 2",
                  fill: "none",
                  className: "hm_dots",
                }}
              >
                <path
                  {...{
                    d: "M0 1L327 0.999971",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeDasharray: "2 8",
                  }}
                ></path>
              </svg>
              <div
                {...{
                  "data-w-id": "03b3575d-e16a-6003-543e-2282ec6aceb4",
                  className: "w-layout-hflex hm_link",
                }}
              >
                <span {...{ className: "hm_link-text" }}>{"Network"}</span>
                <svg
                  {...{
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100%",
                    viewBox: "0 0 6 12",
                    fill: "none",
                    className: "hm_link-icon",
                  }}
                >
                  <path
                    {...{
                      d: "M8.10095e-10 12L1.3169e-07 9.91092L5.99064 4.97745L5.99064 7.06653L8.10095e-10 12Z",
                      fill: "currentColor",
                    }}
                  ></path>
                  <path
                    {...{
                      d: "M8.10095e-10 0L1.52556e-07 2.08908L5.99064 7.02255L5.99064 4.93347L8.10095e-10 0Z",
                      fill: "currentColor",
                    }}
                  ></path>
                </svg>
              </div>
              <svg
                {...{
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "100%",
                  viewBox: "0 0 327 2",
                  fill: "none",
                  className: "hm_dots",
                }}
              >
                <path
                  {...{
                    d: "M0 1L327 0.999971",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeDasharray: "2 8",
                  }}
                ></path>
              </svg>
              <div
                {...{
                  "data-w-id": "64e36a29-7f80-a479-2172-590cf3cc0650",
                  className: "w-layout-hflex hm_link",
                }}
              >
                <span {...{ className: "hm_link-text" }}>{"Build"}</span>
                <svg
                  {...{
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100%",
                    viewBox: "0 0 6 12",
                    fill: "none",
                    className: "hm_link-icon",
                  }}
                >
                  <path
                    {...{
                      d: "M8.10095e-10 12L1.3169e-07 9.91092L5.99064 4.97745L5.99064 7.06653L8.10095e-10 12Z",
                      fill: "currentColor",
                    }}
                  ></path>
                  <path
                    {...{
                      d: "M8.10095e-10 0L1.52556e-07 2.08908L5.99064 7.02255L5.99064 4.93347L8.10095e-10 0Z",
                      fill: "currentColor",
                    }}
                  ></path>
                </svg>
              </div>
              <svg
                {...{
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "100%",
                  viewBox: "0 0 327 2",
                  fill: "none",
                  className: "hm_dots",
                }}
              >
                <path
                  {...{
                    d: "M0 1L327 0.999971",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeDasharray: "2 8",
                  }}
                ></path>
              </svg>
              <a
                {...{
                  href: "http://docs.sui.io",
                  target: "_blank",
                  className: "hm_link w-inline-block",
                  rel: "noopener noreferrer",
                }}
              >
                <span {...{ className: "hm_link-text" }}>{"Docs"}</span>
                <svg
                  {...{
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100%",
                    viewBox: "0 0 6 12",
                    fill: "none",
                    className: "hm_link-icon",
                  }}
                >
                  <path
                    {...{
                      d: "M8.10095e-10 12L1.3169e-07 9.91092L5.99064 4.97745L5.99064 7.06653L8.10095e-10 12Z",
                      fill: "currentColor",
                    }}
                  ></path>
                  <path
                    {...{
                      d: "M8.10095e-10 0L1.52556e-07 2.08908L5.99064 7.02255L5.99064 4.93347L8.10095e-10 0Z",
                      fill: "currentColor",
                    }}
                  ></path>
                </svg>
              </a>
              <svg
                {...{
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "100%",
                  viewBox: "0 0 327 2",
                  fill: "none",
                  className: "hm_dots",
                }}
              >
                <path
                  {...{
                    d: "M0 1L327 0.999971",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeDasharray: "2 8",
                  }}
                ></path>
              </svg>
              <a
                {...{
                  href: "https://www.sui.io/blog",
                  className: "hm_link w-inline-block",
                }}
              >
                <span {...{ className: "hm_link-text" }}>{"Blog"}</span>
                <svg
                  {...{
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100%",
                    viewBox: "0 0 6 12",
                    fill: "none",
                    className: "hm_link-icon",
                  }}
                >
                  <path
                    {...{
                      d: "M8.10095e-10 12L1.3169e-07 9.91092L5.99064 4.97745L5.99064 7.06653L8.10095e-10 12Z",
                      fill: "currentColor",
                    }}
                  ></path>
                  <path
                    {...{
                      d: "M8.10095e-10 0L1.52556e-07 2.08908L5.99064 7.02255L5.99064 4.93347L8.10095e-10 0Z",
                      fill: "currentColor",
                    }}
                  ></path>
                </svg>
              </a>
              <svg
                {...{
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "100%",
                  viewBox: "0 0 327 2",
                  fill: "none",
                  className: "hm_dots",
                }}
              >
                <path
                  {...{
                    d: "M0 1L327 0.999971",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeDasharray: "2 8",
                  }}
                ></path>
              </svg>
            </div>
            <div {...{ className: "w-layout-vflex hm_buttons-wrapper" }}>
              <a
                {...{
                  href: "https://www.sui.io/ecosystem",
                  className: "hm_cta w-inline-block",
                }}
              >
                <div {...{ className: "w-layout-hflex gap-4 hy-center" }}>
                  <svg
                    {...{
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "100%",
                      viewBox: "0 0 15 18",
                      fill: "none",
                      className: "hm_cta-icon",
                    }}
                  >
                    <path
                      {...{
                        d: "M14.9844 7.39795L14.9844 5.68913L7.495 0.000302392L7.495 1.70912L14.9844 7.39795Z",
                        fill: "currentColor",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M14.9844 7.39795L14.9844 9.10677L7.495 14.7956L7.495 13.0868L14.9844 7.39795Z",
                        fill: "currentColor",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M14.9844 10.5728L14.9844 12.2816L7.495 17.9704L7.495 16.2616L14.9844 10.5728Z",
                        fill: "currentColor",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M0 7.39795L-6.73608e-08 5.68913L7.48938 0.00030243L7.48938 1.70912L0 7.39795Z",
                        fill: "currentColor",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M0 7.39795L-6.73608e-08 9.10677L7.48938 14.7956L7.48938 13.0868L0 7.39795Z",
                        fill: "currentColor",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M0 10.5728L-6.73608e-08 12.2816L7.48938 17.9704L7.48938 16.2616L0 10.5728Z",
                        fill: "currentColor",
                      }}
                    ></path>
                  </svg>
                  <span {...{ className: "hm_cta-text" }}>
                    {"Start building"}
                  </span>
                </div>
              </a>
              <a
                {...{
                  href: "https://www.sui.io/developers",
                  className: "hm_cta w-inline-block",
                }}
              >
                <div {...{ className: "w-layout-hflex gap-4 hy-center" }}>
                  <svg
                    {...{
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "100%",
                      viewBox: "0 0 16 13",
                      fill: "none",
                      className: "hm_cta-icon",
                    }}
                  >
                    <path
                      {...{
                        d: "M7.4193 12.9033L6.04222 12.9033L8.58386 0.00306715L9.96094 0.00306702L7.4193 12.9033Z",
                        fill: "currentColor",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M4.95312 12.9043L4.95312 10.9855L0.000662065 6.45405L0.000662143 8.37288L4.95312 12.9043Z",
                        fill: "currentColor",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M4.95312 0L4.95312 1.91883L0.000662024 6.45025L0.000662114 4.53142L4.95312 0Z",
                        fill: "currentColor",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M11.0469 12.9043L11.0469 10.9855L15.9993 6.45405L15.9993 8.37288L11.0469 12.9043Z",
                        fill: "currentColor",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M11.0469 0L11.0469 1.91883L15.9993 6.45025L15.9993 4.53142L11.0469 0Z",
                        fill: "currentColor",
                      }}
                    ></path>
                  </svg>
                  <span {...{ className: "hm_cta-text" }}>
                    {"Start coding"}
                  </span>
                </div>
              </a>
              <a
                {...{
                  href: "https://www.sui.io/get-started",
                  className: "hm_cta w-inline-block",
                }}
              >
                <div {...{ className: "w-layout-hflex gap-4 hy-center" }}>
                  <svg
                    {...{
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "100%",
                      viewBox: "0 0 14 22",
                      fill: "none",
                      className: "hm_cta-icon",
                    }}
                  >
                    <path
                      {...{
                        d: "M10.575 0C10.0552 0.718405 9.39346 1.62976 8.66892 2.6332H10.964V4.36654H8.65723C8.93069 4.75118 9.20364 5.13647 9.47218 5.5181C11.1399 7.88816 12.7095 10.2002 13.2348 11.2701C13.6922 12.2015 13.9487 13.2495 13.9487 14.3549C13.9487 18.2191 10.8249 21.3338 6.9754 21.3339C3.12626 21.3338 1.75581e-05 18.2195 0 14.3549C3.46189e-06 13.2495 0.256516 12.2015 0.713904 11.2701C1.23934 10.2 2.81091 7.88758 4.48057 5.51745C4.74926 5.13603 5.02233 4.75099 5.2959 4.36654H2.98471V2.6332H5.28655C4.56322 1.62997 3.90267 0.718562 3.38354 0H5.51915C5.96002 0.60928 6.45553 1.29445 6.97761 2.01953C7.50037 1.29444 7.99652 0.609284 8.43801 0H10.575ZM6.9767 4.98945C6.6135 5.49853 6.24925 6.01125 5.89266 6.51745C4.18786 8.93746 2.71547 11.1182 2.26496 12.0357C1.92195 12.7343 1.72885 13.5208 1.72885 14.3549C1.72887 17.2568 4.0757 19.6005 6.9754 19.6005C9.87471 19.6005 12.2199 17.2572 12.2199 14.3549C12.2199 13.5208 12.0268 12.7343 11.6838 12.0357C11.2331 11.1179 9.76214 8.93715 8.05944 6.51732C7.70327 6.01115 7.33943 5.49851 6.9767 4.98945ZM7.67943 9.7974C8.8584 10.0203 9.56393 10.7663 9.7379 11.803H8.20126C8.05628 11.1829 7.57304 10.8438 6.86761 10.8438C6.13312 10.8438 5.65954 11.2217 5.65954 11.7159C5.65958 12.2391 6.15244 12.3942 6.99319 12.6267L7.94995 12.8883C9.15796 13.2274 9.83452 13.8572 9.83452 15.0199C9.8345 16.1923 9.00338 17.0353 7.67943 17.2582V18.4693H6.22007V17.2484C5.02172 17.0062 4.18099 16.1438 4.03602 14.9327H5.57253C5.66918 15.7175 6.22014 16.1923 7.00293 16.1923C7.85332 16.1923 8.33657 15.8047 8.33658 15.1652C8.33657 14.642 7.94029 14.3805 7.07059 14.1479L6.12344 13.896C5.0024 13.5956 4.17123 13.0529 4.17121 11.8708C4.17124 10.776 5.01206 9.98147 6.22007 9.778V8.61523H7.67943V9.7974Z",
                        fill: "currentColor",
                      }}
                    ></path>
                  </svg>
                  <span {...{ className: "hm_cta-text" }}>
                    {"Start earning"}
                  </span>
                </div>
              </a>
              <a
                {...{
                  href: "https://www.sui.io/community",
                  className: "hm_cta w-inline-block",
                }}
              >
                <div {...{ className: "w-layout-hflex gap-4 hy-center" }}>
                  <svg
                    {...{
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "100%",
                      viewBox: "0 0 16 12",
                      fill: "none",
                      className: "hm_cta-icon",
                    }}
                  >
                    <rect
                      {...{
                        y: "12",
                        width: "1.3295",
                        height: "10.3979",
                        transform: "rotate(-90 0 12)",
                        fill: "currentColor",
                      }}
                    ></rect>
                    <path
                      {...{
                        d: "M0 10.6675L-6.92655e-08 8.97109L5.19893 5.38048L5.19893 7.07687L0 10.6675Z",
                        fill: "currentColor",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M10.3984 10.6675L10.3984 8.97109L5.19951 5.38048L5.19951 7.07687L10.3984 10.6675Z",
                        fill: "currentColor",
                      }}
                    ></path>
                    <rect
                      {...{
                        x: "10.3984",
                        y: "12",
                        width: "1.3295",
                        height: "5.19893",
                        transform: "rotate(-90 10.3984 12)",
                        fill: "currentColor",
                      }}
                    ></rect>
                    <path
                      {...{
                        d: "M15.5938 10.6675L15.5938 8.97109L10.3948 5.38048L10.3948 7.07687L15.5938 10.6675Z",
                        fill: "currentColor",
                      }}
                    ></path>
                    <circle
                      {...{
                        cx: "5.20297",
                        cy: "2.61704",
                        r: "1.94779",
                        stroke: "currentColor",
                        strokeWidth: "1.33849",
                      }}
                    ></circle>
                    <circle
                      {...{
                        cx: "10.4061",
                        cy: "2.61704",
                        r: "1.94779",
                        stroke: "currentColor",
                        strokeWidth: "1.33849",
                      }}
                    ></circle>
                  </svg>
                  <span {...{ className: "hm_cta-text" }}>
                    {"Start connecting"}
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div {...{ className: "w-layout-vflex hm_platform-layout" }}>
            <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
              <span {...{ className: "hm_category" }}>{"Overview/"}</span>
              <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                <a
                  {...{
                    href: "https://www.sui.io/intro-to-sui",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 23 24",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M16.6614 6.06658C16.6662 6.57947 16.822 7.07944 17.1092 7.50325C17.3963 7.92706 17.8019 8.2557 18.2746 8.44759C18.7474 8.63948 19.266 8.68601 19.765 8.5813C20.264 8.47658 20.7209 8.22533 21.0779 7.85931C21.435 7.49329 21.6761 7.02894 21.7709 6.52498C21.8657 6.02102 21.8098 5.50009 21.6103 5.02806",
                          stroke: "currentColor",
                          strokeWidth: "1.85755",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M21.8176 6.01873C21.8224 6.53162 21.6759 7.03439 21.3967 7.46348C21.1175 7.89257 20.7181 8.22869 20.249 8.42935C19.7799 8.63 19.2622 8.68618 18.7614 8.59078C18.2606 8.49537 17.7991 8.25266 17.4353 7.89335C17.0715 7.53404 16.8217 7.07426 16.7176 6.57215C16.6135 6.07005 16.6597 5.54816 16.8503 5.0725",
                          stroke: "currentColor",
                          strokeWidth: "1.85755",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M18.7927 0.951203L18.7624 0.951508L17.2348 4.22L17.2397 4.2219L18.7927 0.951203Z",
                          fill: "currentColor",
                          stroke: "currentColor",
                          strokeWidth: "1.85755",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M19.6761 0.951203L19.7366 0.951813L21.2398 4.21811L21.2291 4.2219L19.6761 0.951203Z",
                          fill: "currentColor",
                          stroke: "currentColor",
                          strokeWidth: "1.85755",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M15.3477 5.08351L15.3477 2.54188L11.2594 -4.50735e-06L11.2594 2.54163L15.3477 5.08351Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M22.5273 9.31128L22.5273 11.8529L11.2647 18.6224L11.2647 16.0808L22.5273 9.31128Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M0 9.31128L-1.01298e-07 6.76965L11.2626 0.000142514L11.2626 2.54177L0 9.31128Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M0 9.31128L-1.01298e-07 11.8529L11.2626 18.6224L11.2626 16.0808L0 9.31128Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M22.5273 14.6887L22.5273 17.2304L11.2647 23.9999L11.2647 21.4582L22.5273 14.6887Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M0 14.6887L-1.01298e-07 17.2304L11.2626 23.9999L11.2626 21.4582L0 14.6887Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Intro to Sui Stack"}
                    </span>
                    <span {...{ className: "hm-dd_link-desc" }}>
                      {"Modular decentralized infrastructure"}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
              <span {...{ className: "hm_category" }}>{"Finance/"}</span>
              <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                <a
                  {...{
                    href: "https://www.sui.io/hashi",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 23 23",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M8.96 10.24H13.44V6.4H15.52V16H13.44V12.32H8.96V16H6.88V6.4H8.96V10.24Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M22.4 22.4H0V0H22.4V22.4ZM2.08 20.32H20.32V2.08H2.08V20.32Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Hashi"}
                      </span>
                    </div>
                    <span {...{ className: "hm-dd_link-desc" }}>
                      {"Native Bitcoin collateralization"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://deepbook.tech/",
                    target: "_blank",
                    className: "hm-dd_link-wrapper w-inline-block",
                    rel: "noopener noreferrer",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 24 14",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M0 0H18.5998C21.565 0 23.9688 2.40378 23.9688 5.36899V5.99219H0V0Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M0 13.4175H18.5998C21.565 13.4175 23.9688 11.0137 23.9688 8.04849V7.42529H0V13.4175Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"DeepBook"}
                      </span>
                      <div {...{ className: "hm-dd_external-icon" }}>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 7 7",
                            fill: "none",
                            className: "object-cover",
                          }}
                        >
                          <path
                            {...{
                              d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span {...{ className: "hm-dd_link-desc" }}>
                      {"Programmable liquidity layer"}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
              <span {...{ className: "hm_category" }}>{"Data/"}</span>
              <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                <a
                  {...{
                    href: "https://www.walrus.xyz/",
                    target: "_blank",
                    className: "hm-dd_link-wrapper w-inline-block",
                    rel: "noopener noreferrer",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 24 16",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M8.26624 11.6973L9.32779 0H13.7124L14.7735 11.6973L15.37 11.8116C15.9403 10.4787 17.5145 5.78133 17.9072 0H23.0402L19.082 15.1386H12.8706L11.8266 7.56928H11.2139L10.1698 15.1386H3.95819L0 0H5.13301C5.52576 5.78133 7.09973 10.4787 7.67019 11.8118L8.26624 11.6975V11.6973Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Walrus"}
                      </span>
                      <div {...{ className: "hm-dd_external-icon" }}>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 7 7",
                            fill: "none",
                            className: "object-cover",
                          }}
                        >
                          <path
                            {...{
                              d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span {...{ className: "hm-dd_link-desc" }}>
                      {"Trusted data layer"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://seal.mystenlabs.com/",
                    target: "_blank",
                    className: "hm-dd_link-wrapper w-inline-block",
                    rel: "noopener noreferrer",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 25 13",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M1.91492 9.20752L5.62369 12.6057C5.47753 12.6057 1.3851 12.6057 1.25721 12.6057C0.416797 12.5874 -0.295725 11.4912 0.581226 10.5595C0.946622 10.1758 1.73222 9.40849 1.91492 9.20752Z",
                          fill: "currentColor",
                          stroke: "currentColor",
                          strokeWidth: "0.359641",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                      ></path>
                      <path
                        {...{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M6.02603 12.6062C3.5048 12.661 2.09802 11.2177 1.95186 9.37247C1.73263 6.35796 3.1394 4.4579 6.15392 3.19728C8.65688 2.17417 10.1002 0.255844 13.2974 0.182765C18.0841 0.0731457 19.7101 2.88669 22.1217 9.5369C22.1948 9.73787 23.108 10.2186 23.6929 10.7244C24.5838 11.4949 24.0763 12.6428 23.108 12.6428C22.4868 12.6428 6.66547 12.6062 6.02603 12.6062Z",
                          fill: "currentColor",
                          stroke: "currentColor",
                          strokeWidth: "0.359641",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M3.63281 10.3441C4.56457 10.3623 4.85689 9.43058 4.87516 8.73633C4.80208 10.7643 6.99445 10.8739 7.74352 9.1748",
                          stroke: "currentColor",
                          strokeWidth: "0.359641",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: "color-black",
                        }}
                      ></path>
                      <path
                        {...{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M4.8548 8.77164C4.76345 8.7351 4.4894 8.53414 4.37978 8.40625C3.74034 7.65719 5.40289 7.49276 5.6404 7.98604C5.78656 8.24182 5.58559 8.42452 5.43943 8.51587C5.12884 8.71683 4.8548 8.77164 4.8548 8.77164Z",
                          fill: "currentColor",
                          stroke: "currentColor",
                          strokeWidth: "0.359641",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: "color-black",
                        }}
                      ></path>
                      <path
                        {...{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M4.52747 5.33601C4.94767 5.29947 5.22172 5.66487 5.14864 6.15815C5.05729 6.65144 4.63709 7.07164 4.19861 7.12645C3.77841 7.16299 3.50436 6.7976 3.59571 6.30431C3.68706 5.81103 4.10726 5.37255 4.52747 5.33601Z",
                          fill: "currentColor",
                          stroke: "currentColor",
                          strokeWidth: "0.359641",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: "color-black",
                        }}
                      ></path>
                      <path
                        {...{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M7.12118 5.33601C7.55965 5.29947 7.8337 5.66487 7.74235 6.15815C7.651 6.65144 7.2308 7.07164 6.81059 7.12645C6.37212 7.16299 6.09807 6.7976 6.18942 6.30431C6.28077 5.81103 6.70097 5.37255 7.12118 5.33601Z",
                          fill: "currentColor",
                          stroke: "currentColor",
                          strokeWidth: "0.359641",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: "color-black",
                        }}
                      ></path>
                      <path
                        {...{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M7.94548 5.72008C7.94548 5.4643 8.09163 6.04893 8.09163 6.21336C8.09163 6.37779 7.98201 6.79799 7.83586 6.83453C7.70797 6.87107 7.39738 7.25474 7.52527 7.05377C7.65316 6.83453 7.41565 6.65184 7.26949 6.52395C7.06852 6.37779 7.06852 6.15855 7.3243 6.08547C7.54354 6.01239 7.92721 6.01239 7.94548 5.72008Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M5.35454 5.72008C5.35454 5.4643 5.5007 6.04893 5.5007 6.21336C5.5007 6.37779 5.37281 6.79799 5.24492 6.83453C5.11703 6.87107 4.80644 7.25474 4.93433 7.05377C5.06222 6.83453 4.82471 6.65184 4.66029 6.52395C4.47759 6.37779 4.47759 6.15855 4.73336 6.08547C4.9526 6.01239 5.33627 6.01239 5.35454 5.72008Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M13.4419 8.42139C13.7707 8.69543 14.2457 9.22526 14.5015 9.48103C15.4698 10.4493 15.89 11.3628 15.3236 12.0571C14.94 12.5138 13.9717 12.6052 12.6562 12.6234",
                          stroke: "currentColor",
                          strokeWidth: "0.359641",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: "color-black",
                        }}
                      ></path>
                      <path
                        {...{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M3.83594 10.3226C4.47538 10.2678 4.69462 9.88416 4.74943 9.57357C4.74943 9.53703 4.82251 9.70146 4.89559 9.79281C5.04174 9.97551 5.09655 10.2861 6.06485 10.3592L3.83594 10.3226Z",
                          fill: "currentColor",
                          stroke: "currentColor",
                          strokeWidth: "0.359641",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: "color-black",
                        }}
                      ></path>
                      <path
                        {...{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M14.5391 12.5354C15.1785 12.4623 16.0555 11.8959 15.3064 10.4526C15.2699 10.3613 14.9775 10.0142 14.9775 10.0142C15.0141 10.0142 17.517 12.5719 17.517 12.5719L14.5391 12.5354Z",
                          fill: "currentColor",
                          stroke: "currentColor",
                          strokeWidth: "0.359641",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: "color-black",
                        }}
                      ></path>
                      <path
                        {...{
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M4.71487 12.5702C3.76485 12.3144 3.16194 11.9307 2.44942 10.999C2.19364 10.6701 1.80998 10.1038 1.82825 9.68355C1.82825 9.66528 1.79171 9.57393 1.77344 9.55566C2.13883 11.0721 2.43115 11.8211 1.77344 12.5702H4.71487Z",
                          fill: "currentColor",
                          stroke: "currentColor",
                          strokeWidth: "0.359641",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: "color-black",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Seal"}
                      </span>
                      <div {...{ className: "hm-dd_external-icon" }}>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 7 7",
                            fill: "none",
                            className: "object-cover",
                          }}
                        >
                          <path
                            {...{
                              d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span {...{ className: "hm-dd_link-desc" }}>
                      {"Encryption with access control"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/nautilus",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <rect
                        {...{
                          width: "2.05714",
                          height: "19.2",
                          transform: "matrix(1 0 0 -1 0 21.2571)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "2.05714",
                          height: "20.5714",
                          transform: "matrix(1 0 0 -1 21.9414 21.2571)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "2.05714",
                          height: "21.9429",
                          transform:
                            "matrix(-7.1784e-08 1 1 2.51413e-08 0 21.2571)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "2.05714",
                          height: "21.9429",
                          transform:
                            "matrix(-7.82637e-08 1 1 2.21041e-08 2.05859 0)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <path
                        {...{
                          d: "M14.4813 16.016V6.85645H16.4405V16.3405H12.6344L9.50217 7.1809V16.3405H7.54297V6.85645H11.3615L14.4813 16.016Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Nautilus"}
                    </span>
                    <span {...{ className: "hm-dd_link-desc" }}>
                      {"Verifiable offchain compute"}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
              <span {...{ className: "hm_category" }}>{"Identity/"}</span>
              <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                <a
                  {...{
                    href: "https://suins.io/",
                    target: "_blank",
                    className: "hm-dd_link-wrapper w-inline-block",
                    rel: "noopener noreferrer",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 24 10",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <g {...{ clipPath: "url(#clip0_11840_2973)" }}>
                        <mask
                          {...{
                            id: "mask0_11840_2973",
                            maskUnits: "userSpaceOnUse",
                            x: "4",
                            y: "0",
                            width: "20",
                            height: "10",
                          }}
                          style={{ maskType: "luminance" } as CSSProperties}
                        >
                          <path
                            {...{
                              d: "M23.8254 0H4.97656V9.41092H23.8254V0Z",
                              fill: "white",
                            }}
                          ></path>
                        </mask>
                        <g {...{ mask: "url(#mask0_11840_2973)" }}>
                          <path
                            {...{
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M8.05372 2.99649C8.00886 2.99649 7.97246 3.03292 7.97246 3.07778V7.91266C7.97246 8.74012 7.30178 9.41092 6.47449 9.41092C5.6472 9.41092 4.97656 8.74012 4.97656 7.91266V3.07778C4.97656 1.378 6.35428 0 8.05372 0C9.75316 0 11.1308 1.378 11.1308 3.07778V6.33315C11.1308 6.37801 11.1673 6.41441 11.2121 6.41441C11.257 6.41441 11.2934 6.37801 11.2934 6.33315V1.49825C11.2934 0.670786 11.964 0 12.7913 0C13.6186 0 14.2893 0.670786 14.2893 1.49825V6.33315C14.2893 8.03291 12.9115 9.41092 11.2121 9.41092C9.5127 9.41092 8.13498 8.03291 8.13498 6.33315V3.07778C8.13498 3.03292 8.09858 2.99649 8.05372 2.99649Z",
                              fill: "currentColor",
                            }}
                          ></path>
                          <path
                            {...{
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M17.4912 3.03556C17.4463 3.03556 17.4099 3.07198 17.4099 3.11685C17.4099 3.16171 17.4463 3.19813 17.4912 3.19813H20.7459C22.4453 3.19813 23.823 4.57615 23.823 6.27591C23.823 7.97568 22.4453 9.35369 20.7459 9.35369H15.912C15.0847 9.35369 14.4141 8.68292 14.4141 7.85547C14.4141 7.02798 15.0847 6.35722 15.912 6.35722H20.7459C20.7907 6.35722 20.8271 6.32078 20.8271 6.27591C20.8271 6.23105 20.7907 6.19461 20.7459 6.19461H17.4912C15.7917 6.19461 14.4141 4.81665 14.4141 3.11685C14.4141 1.41706 15.7917 0.0390625 17.4912 0.0390625H22.325C23.1523 0.0390625 23.823 0.709852 23.823 1.53731C23.823 2.36477 23.1523 3.03556 22.325 3.03556H17.4912Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </g>
                        <path
                          {...{
                            d: "M4.67081 7.04634C4.67081 5.75653 3.62521 4.71094 2.3354 4.71094C1.0456 4.71094 0 5.75653 0 7.04634C0 8.33615 1.0456 9.38174 2.3354 9.38174C3.62521 9.38174 4.67081 8.33615 4.67081 7.04634Z",
                            fill: "currentColor",
                          }}
                        ></path>
                        <path
                          {...{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2.99029 6.83448V6.8346C3.10415 6.97913 3.17225 7.1622 3.17225 7.36124C3.17225 7.56029 3.10213 7.74882 2.98512 7.8943L2.97504 7.90683L2.97238 7.89093C2.97012 7.87741 2.96743 7.86369 2.96436 7.84993C2.90582 7.58967 2.71503 7.36646 2.40105 7.18578C2.18903 7.06409 2.06767 6.91755 2.0358 6.75108C2.0152 6.6434 2.03053 6.53527 2.0601 6.44263C2.08966 6.35003 2.13364 6.27246 2.17099 6.22579L2.29312 6.07465C2.31456 6.04819 2.35463 6.04819 2.37606 6.07465L2.99033 6.83452L2.99029 6.83448ZM3.18349 6.6835V6.68346L2.36482 5.67076C2.34918 5.65141 2.31993 5.65141 2.30429 5.67076L1.48562 6.68346V6.68354L1.48297 6.68691C1.33235 6.87601 1.24219 7.11635 1.24219 7.37801C1.24219 7.98731 1.73125 8.48133 2.33456 8.48133C2.93786 8.48133 3.42692 7.98731 3.42692 7.37801C3.42692 7.11635 3.33676 6.87601 3.18611 6.68687L3.18342 6.6835H3.18349ZM1.68155 6.83119L1.75478 6.74056L1.75697 6.75733C1.75872 6.77055 1.76085 6.78386 1.76336 6.79726C1.81073 7.04877 1.97999 7.25846 2.26296 7.42086C2.50894 7.56247 2.65216 7.72532 2.69342 7.90395C2.71063 7.97848 2.7137 8.05185 2.70627 8.11598L2.70581 8.11992L2.70225 8.12169C2.59125 8.17658 2.46643 8.20735 2.33452 8.20735C1.87188 8.20735 1.49682 7.82856 1.49682 7.36124C1.49682 7.16064 1.56597 6.97626 1.68151 6.83123L1.68155 6.83119Z",
                            fill: "currentColor",
                            className: "color-black",
                          }}
                        ></path>
                      </g>
                      <defs>
                        <clipPath {...{ id: "clip0_11840_2973" }}>
                          <rect
                            {...{
                              width: "23.8281",
                              height: "9.44908",
                              fill: "currentColor",
                            }}
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"SuiNS"}
                      </span>
                      <div {...{ className: "hm-dd_external-icon" }}>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 7 7",
                            fill: "none",
                            className: "object-cover",
                          }}
                        >
                          <path
                            {...{
                              d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span {...{ className: "hm-dd_link-desc" }}>
                      {"Onchain naming & identity"}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div {...{ className: "w-layout-vflex hm_solutions-layout" }}>
            <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
              <span {...{ className: "hm_category" }}>{"Industries/"}</span>
              <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                <a
                  {...{
                    href: "https://www.sui.io/payments",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 18 12",
                        fill: "none",
                        className: "object-contain",
                      }}
                    >
                      <path
                        {...{
                          d: "M6.06541 1.30154C3.44226 1.30158 1.31576 3.40511 1.31574 5.99995C1.31574 8.59482 3.44224 10.6984 6.06541 10.6985V12C2.71558 12 0 9.31363 0 5.99995C2.67007e-05 2.68629 2.7156 3.96206e-05 6.06541 0V1.30154ZM11.4731 0C14.8229 2.64233e-05 17.5385 2.68636 17.5385 6.00005C17.5384 9.31372 14.8229 12 11.4731 12C8.12322 12 5.40757 9.31373 5.40754 6.00005C5.40754 2.68635 8.1232 1.32119e-05 11.4731 0ZM11.4731 1.30154C8.84986 1.30155 6.72328 3.40517 6.72328 6.00005C6.7233 8.59491 8.84988 10.6985 11.4731 10.6985C14.0962 10.6984 16.2227 8.5949 16.2227 6.00005C16.2227 3.40517 14.0962 1.30156 11.4731 1.30154ZM12.2493 2.64472C12.7106 3.60285 13.476 5.17955 13.7393 5.70869C13.9051 6.04185 13.998 6.41653 13.998 6.81077C13.998 8.19017 12.8675 9.30842 11.4731 9.30844C10.0786 9.30844 8.94813 8.19019 8.94813 6.81077C8.94814 6.41653 9.04098 6.04185 9.20679 5.70869C9.47353 5.17272 10.2228 3.61302 10.694 2.64472H12.2493ZM11.4709 4.05234C11.0516 4.91887 10.5823 5.89168 10.3872 6.28359C10.3084 6.44186 10.2639 6.62025 10.2639 6.81077C10.2639 7.47137 10.8052 8.00691 11.4731 8.00691C12.1408 8.00689 12.6822 7.47135 12.6822 6.81077C12.6822 6.62025 12.6376 6.44185 12.5589 6.28359C12.3614 5.88683 11.8902 4.91853 11.4709 4.05234Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Payments"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/institutions-capital-markets",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 17 16",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <rect
                        {...{
                          x: "1.1687",
                          y: "13.5519",
                          width: "1.2931",
                          height: "14.4278",
                          transform: "rotate(-90 1.1687 13.5519)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          y: "15.986",
                          width: "1.2931",
                          height: "16.7681",
                          transform: "rotate(-90 0 15.986)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          x: "5.10254",
                          y: "11.363",
                          width: "1.2931",
                          height: "5.46827",
                          transform: "rotate(180 5.10254 11.363)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          x: "2.49341",
                          y: "11.363",
                          width: "1.2931",
                          height: "5.46827",
                          transform: "rotate(180 2.49341 11.363)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          x: "7.70752",
                          y: "11.363",
                          width: "1.2931",
                          height: "5.46827",
                          transform: "rotate(180 7.70752 11.363)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          x: "10.3123",
                          y: "11.363",
                          width: "1.2931",
                          height: "5.46827",
                          transform: "rotate(180 10.3123 11.363)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          x: "12.9216",
                          y: "11.363",
                          width: "1.2931",
                          height: "5.46827",
                          transform: "rotate(180 12.9216 11.363)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          x: "15.5264",
                          y: "11.363",
                          width: "1.2931",
                          height: "5.46827",
                          transform: "rotate(180 15.5264 11.363)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <path
                        {...{
                          d: "M1.20874 5.56006L1.20874 3.91286L8.36762 0.0121256L8.36762 1.65933L1.20874 5.56006Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M15.5264 5.51447L15.5264 3.86726L8.36749 -2.37075e-05L8.36749 1.64718L15.5264 5.51447Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Capital Markets"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/defi",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 21 22",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M20.1026 2.15289V5.8645L17.5312 7.4577V13.881L20.1026 15.4904V19.202L16.6628 21.3333L13.2232 19.202V18.1199H6.87937V19.1919L3.43962 21.3232L0 19.1919V15.4803L2.5714 13.8708V7.4577L0.000130462 5.8645V2.15289L3.43975 0L6.8795 2.15289V3.13317H13.2232V2.15289L16.6628 0L20.1026 2.15289ZM14.9599 16.4485V18.2388L16.6628 19.294L18.3659 18.2388V16.4485L16.6628 15.3826L14.9599 16.4485ZM1.7367 16.4383V18.2287L3.43962 19.2839L5.14266 18.2287V16.4383L3.43962 15.3724L1.7367 16.4383ZM6.8795 5.8645L4.3081 7.4577V13.871L6.87937 15.4803V16.3876H13.2232V15.4904L15.7945 13.881V7.4577L13.2232 5.8645V4.86548H6.8795V5.8645ZM10.7489 7.16646C11.854 7.37429 12.5153 8.07002 12.6784 9.03684H11.238C11.1021 8.45857 10.6492 8.14232 9.98788 8.14232C9.29943 8.14232 8.85551 8.4947 8.85547 8.95551C8.85547 9.44345 9.31755 9.58814 10.1057 9.805L11.0025 10.0489C12.1348 10.3651 12.7689 10.9526 12.7689 12.0369C12.7689 13.1302 11.9899 13.9164 10.7489 14.1242V15.2537H9.38097V14.1151C8.25767 13.8892 7.46953 13.085 7.33364 11.9556H8.77393C8.86453 12.6875 9.38093 13.1302 10.1147 13.1302C10.9119 13.1302 11.3649 12.7687 11.3649 12.1724C11.3649 11.6844 10.9934 11.4404 10.1781 11.2236L9.2903 10.9887C8.23948 10.7086 7.46044 10.2025 7.46044 9.10008C7.46047 8.07904 8.24862 7.33813 9.38097 7.14837V6.06399H10.7489V7.16646ZM1.73683 3.11092V4.90127L3.43975 5.9565L5.1428 4.90127V3.11092L3.43975 2.04501L1.73683 3.11092ZM14.9599 3.11092V4.90127L16.6628 5.9565L18.3659 4.90127V3.11092L16.6628 2.04501L14.9599 3.11092Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"DeFi"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/ai",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M5.5249 7.19244L5.52494 8.40207L9.33404 9.26195L9.334 8.05233L5.5249 7.19244Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M5.5249 11.332L5.52494 10.1223L9.33404 9.26246L9.334 10.4721L5.5249 11.332Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M6.73755 10.1257L5.52792 10.1257L4.66804 13.9348L5.87767 13.9348L6.73755 10.1257Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M2.59888 10.1257L3.8085 10.1257L4.66838 13.9348L3.45876 13.9348L2.59888 10.1257Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M3.80933 11.3421L3.80929 10.1325L0.000188614 9.27259L0.00022923 10.4822L3.80933 11.3421Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M3.80933 7.20245L3.80929 8.41208L0.000188253 9.27196L0.00022908 8.06233L3.80933 7.20245Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M2.59717 8.40283L3.8068 8.40279L4.66668 4.59369L3.45705 4.59374L2.59717 8.40283Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M6.73608 8.40265L5.52646 8.40261L4.66658 4.59351L5.8762 4.59355L6.73608 8.40265Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M8.55884 4.2298L9.76846 4.22984L10.62 6.75333L9.41035 6.75329L8.55884 4.2298Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M12.6809 4.22998L11.4713 4.23002L10.6198 6.75352L11.8294 6.75347L12.6809 4.22998Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M11.4768 5.43787L11.4768 4.22824L14.0003 3.37673L14.0003 4.58636L11.4768 5.43787Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M11.4768 1.31506L11.4768 2.52469L14.0003 3.3762L14.0003 2.16657L11.4768 1.31506Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M12.6841 2.52356L11.4745 2.52352L10.6229 2.52066e-05L11.8326 6.58749e-05L12.6841 2.52356Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M8.56177 2.5238L9.77139 2.52376L10.6229 0.000268987L9.41328 0.000309867L8.56177 2.5238Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M9.76611 1.31506L9.76607 2.52469L7.24258 3.3762L7.24262 2.16657L9.76611 1.31506Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M9.76611 5.43799L9.76607 4.22836L7.24258 3.37685L7.24262 4.58648L9.76611 5.43799Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"AI"}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
              <span {...{ className: "hm_category" }}>
                {"Core Capabilities/"}
              </span>
              <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                <a
                  {...{
                    href: "https://www.sui.io/privacy",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 16 14",
                        fill: "none",
                        className: "object-contain",
                      }}
                    >
                      <path
                        {...{
                          d: "M12.0774 8.00098C13.6985 8.04207 15 9.36905 15 11L14.999 11.0774C14.9579 12.6985 13.6309 14 12 14L11.9226 13.999C10.3272 13.9586 9.0414 12.6728 9.00098 11.0774L9 11C9 10.9065 9.00442 10.814 9.01279 10.7227H6.98711C6.99548 10.814 7 10.9065 7 11C7 12.6568 5.65684 14 4 14C2.34315 14 1 12.6569 1 11C1 9.34315 2.34315 8 4 8C5.07812 8.00001 6.02323 8.56885 6.55205 9.42266H9.44785C9.97668 8.56884 10.9219 8 12 8L12.0774 8.00098ZM4 9.3C3.06112 9.3 2.3 10.0611 2.3 11C2.3 11.9389 3.06112 12.7 4 12.7C4.93887 12.7 5.7 11.9389 5.7 11C5.7 10.0611 4.93887 9.30002 4 9.3ZM12 9.3C11.0611 9.3 10.3 10.0611 10.3 11C10.3 11.9389 11.0611 12.7 12 12.7C12.9389 12.7 13.7 11.9389 13.7 11C13.7 10.0611 12.9389 9.30002 12 9.3ZM16 7.01426H0V5.71426H1.98828L3.20293 0H6.14844L8 2.36992L9.85166 0H11.5014L8.8249 3.42568L8.83018 3.43242H7.16982L7.1751 3.42568L4.5248 0.0335938L3.31738 5.71426H12.7422L11.5275 0H12.8566L14.0712 5.71426H16V7.01426Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Privacy"}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div {...{ className: "w-layout-vflex hm_network-layout" }}>
            <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
              <span {...{ className: "hm_category" }}>{"Network"}</span>
              <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                <a
                  {...{
                    href: "https://www.sui.io/networkinfo",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 14 16",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M8.99873 1.3H7.64775V2.0375C9.09062 2.17041 10.4066 2.74133 11.4615 3.61611L12.1951 2.88262L13.1144 3.80186L12.3813 4.53486C13.3891 5.74729 13.9954 7.30549 13.9954 9.00537C13.9954 12.8701 10.8625 16.003 6.99775 16.003C3.13303 16.003 1.6493e-05 12.8701 0 9.00537C0 7.30544 0.606197 5.74711 1.61416 4.53467L0.881445 3.80186L1.80068 2.88262L2.53398 3.61602C3.58894 2.74126 4.90491 2.1704 6.34775 2.0375V1.3H4.99775V0H8.99873V1.3ZM6.99775 3.30762C3.85099 3.30762 1.3 5.8586 1.3 9.00537C1.30002 12.1521 3.851 14.703 6.99775 14.703C10.1445 14.703 12.6954 12.1521 12.6954 9.00537C12.6954 5.85861 10.1445 3.30763 6.99775 3.30762ZM6.99766 7.00586C7.87217 7.00586 8.61552 7.56732 8.88701 8.34941H11.9978V9.64941H8.89111C8.62302 10.4377 7.87655 11.0048 6.99766 11.0048C5.89342 11.0048 4.99824 10.1095 4.99824 9.00527C4.99826 7.90104 5.89343 7.00589 6.99766 7.00586ZM6.99766 8.30586C6.6114 8.30589 6.29826 8.61901 6.29824 9.00527C6.29824 9.39155 6.61139 9.70475 6.99766 9.70478C7.38395 9.70478 7.69717 9.39157 7.69717 9.00527C7.69715 8.61899 7.38394 8.30586 6.99766 8.30586ZM6.99775 3.96094C9.27406 3.96095 11.1981 5.46874 11.8259 7.54004H10.4444C9.87417 6.2003 8.5457 5.26095 6.99775 5.26094V3.96094Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Release Schedule"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/validators",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 17 11",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M8.00942 0.000283158C11.9174 -0.0323785 15.0441 2.7666 16.1488 5.25695L16.1481 5.25723L16.1488 5.2575C15.0441 7.74786 11.9174 10.5468 8.00942 10.5142C4.09729 10.4815 1.08388 7.6123 0 5.26629L0.0195919 5.25723L0 5.24816C1.08388 2.90216 4.09731 0.032994 8.00942 0.000283158ZM8.01995 1.26167C4.99122 1.287 2.52814 3.35857 1.41776 5.25723C2.52814 7.15589 4.9912 9.22746 8.01995 9.25278C11.0688 9.27827 13.617 7.23674 14.7374 5.25713C13.617 3.27758 11.0687 1.23619 8.01995 1.26167ZM8.49555 7.60093H7.12174L5.68815 4.78849H7.0561L7.80865 6.26493L9.5169 2.91352H10.8848L8.49555 7.60093Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Validators"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/security",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 12 16",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M12 7.94414C12 10.2387 10.4968 12.2249 9.12727 13.5737C8.42872 14.2617 7.73262 14.8157 7.21206 15.1973C6.95124 15.3884 6.73294 15.5374 6.5787 15.6394C6.50157 15.6903 6.44029 15.7297 6.39757 15.7567C6.35808 15.7817 6.31804 15.8059 6.27819 15.8305L6.27799 15.8303L5.99936 15.9995L5.73168 15.837C5.68805 15.8105 5.64441 15.7839 5.60126 15.7566C5.55854 15.7296 5.49726 15.6903 5.42013 15.6393C5.2659 15.5373 5.04775 15.3882 4.78697 15.197C4.26649 14.8153 3.57047 14.2612 2.87204 13.573C1.50272 12.2235 3.43591e-05 10.2365 0 7.94082V3.0002H1.26398V7.94082C1.26402 9.70504 2.44506 11.3779 3.75941 12.6731C4.40283 13.3072 5.04872 13.8219 5.53463 14.1782C5.71533 14.3107 5.87313 14.4208 5.99946 14.5064C6.12583 14.4209 6.28381 14.3108 6.46459 14.1783C6.95059 13.8221 7.59657 13.3075 8.2401 12.6737C9.55483 11.3788 10.736 9.70685 10.736 7.94414V2.9999H12V7.94414ZM9.39056 9.63818L8.9437 10.0849L8.49685 10.5316L2.60905 4.64619L3.50276 3.75283L9.39056 9.63818ZM4.43829 9.76563e-05H7.5619L8.82588 0C8.82586 0.526367 9.01656 0.948378 9.32608 1.24102C9.63758 1.53552 10.1104 1.73681 10.7357 1.73682V3.00029C9.83306 3.00029 9.03492 2.70494 8.45747 2.15898C8.19656 1.9123 7.98917 1.62208 7.83985 1.3001H4.16025C4.01093 1.62206 3.80362 1.91231 3.54272 2.15898C2.96527 2.70494 2.16705 3.00029 1.26437 3.00029L1.26447 1.73682C1.88979 1.73681 2.36261 1.53552 2.67411 1.24102C2.98363 0.94838 3.17433 0.526357 3.17431 0L4.43829 9.76563e-05Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Security"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://status.sui.io/",
                    target: "_blank",
                    className: "hm-dd_link-wrapper w-inline-block",
                    rel: "noopener noreferrer",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 17 16",
                        fill: "none",
                        className: "object-contain",
                      }}
                    >
                      <path
                        {...{
                          d: "M5.06895 0.00136701V0.000585862L12.1137 0.000683506V1.30052L12.1136 1.30042V3.65754C12.8669 3.8074 13.5853 4.17142 14.1693 4.74988C15.5877 6.15482 15.7296 8.34494 14.5956 9.90732L16.6154 11.9081L15.6875 12.8273L13.6676 10.8265C13.1938 11.1639 12.6631 11.3874 12.1136 11.4967V15.9988H11.1494V16H0.000788604V14.7002L0.000887179 5.00082L0 4.99995L5.06757 0L5.06895 0.00136701ZM6.36078 4.99956L5.04657 6.30134H1.31312V14.7002H10.8014V11.543C9.94564 11.4348 9.11816 11.0554 8.46093 10.4044C6.88457 8.84297 6.88457 6.31134 8.46093 4.74988C9.11816 4.09887 9.94563 3.7194 10.8014 3.61126V1.30042H6.36078V4.99956ZM13.2414 5.669C12.1775 4.61521 10.4527 4.6152 9.38882 5.669C8.32492 6.72285 8.32492 8.43146 9.38882 9.48531C10.4527 10.5391 12.1775 10.5391 13.2414 9.48531C14.3053 8.43147 14.3053 6.72284 13.2414 5.669ZM1.85775 5.00151H5.04854V1.85338L1.85775 5.00151Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Status"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/token-schedule",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 19 15",
                        fill: "none",
                        className: "object-contain",
                      }}
                    >
                      <path
                        {...{
                          d: "M18.1538 6.99552V8.66742L16.1324 7.07564V7.07692C16.1324 10.9854 12.9736 14.1538 9.07687 14.1538C6.38651 14.1538 4.04889 12.6433 2.85927 10.4247L4.01398 9.80181C4.98417 11.6112 6.88809 12.8388 9.07687 12.8388C12.2495 12.8388 14.8213 10.2591 14.8213 7.07692V7.07475L12.8001 8.66732V6.99503L15.4759 4.88688L18.1538 6.99552ZM9.66447 4.2166C10.1032 4.30006 10.4511 4.48217 10.7159 4.75529C10.9806 5.02841 11.147 5.36978 11.2151 5.78704H10.0427C9.98972 5.53669 9.88376 5.35462 9.71736 5.23323C9.55096 5.11185 9.34675 5.05117 9.09716 5.05116C8.93833 5.05116 8.78705 5.08154 8.6509 5.13464C8.51476 5.18774 8.40879 5.26355 8.32559 5.36976C8.24238 5.47597 8.20455 5.59742 8.20455 5.73399C8.20455 5.87055 8.23484 5.98434 8.29535 6.0678C8.35586 6.15124 8.45418 6.2195 8.58275 6.28019C8.71134 6.34089 8.89291 6.40166 9.1274 6.46236L9.83082 6.64443C10.3527 6.7734 10.7385 6.97061 10.9806 7.22856C11.2226 7.48652 11.3436 7.8356 11.3436 8.28323C11.3436 8.59426 11.2756 8.87496 11.1395 9.12531C11.0033 9.37568 10.8066 9.58054 10.557 9.73987C10.3074 9.8992 10.0124 10.0055 9.67954 10.0586V10.9993H8.53744V10.0357L8.51469 10.0586C8.05329 9.95993 7.68268 9.75505 7.39525 9.444C7.10781 9.13293 6.93386 8.73839 6.87335 8.26041H8.04578C8.0836 8.57146 8.20458 8.80665 8.40123 8.97357C8.59789 9.14048 8.84751 9.22399 9.15764 9.224C9.36186 9.224 9.54342 9.18608 9.6947 9.1178C9.84599 9.04952 9.95945 8.95843 10.0351 8.83704C10.1107 8.71566 10.1485 8.57909 10.1485 8.42736C10.1485 8.26807 10.1183 8.14666 10.0503 8.05562C9.98219 7.96459 9.88382 7.8887 9.74769 7.82801C9.61155 7.76732 9.4224 7.70662 9.1728 7.63834L8.46929 7.46378C8.03816 7.35756 7.6902 7.17552 7.4179 6.91758C7.1456 6.65962 7.00946 6.31054 7.00946 5.86291C7.00947 5.59738 7.07757 5.34702 7.20615 5.11943C7.33474 4.89182 7.5163 4.70214 7.74322 4.5504C7.97013 4.39868 8.22729 4.29248 8.52227 4.2242V3.29855H9.66447V4.2166ZM9.07687 0C11.7734 0 14.1156 1.51753 15.3026 3.74449L14.1465 4.36458C13.1784 2.5484 11.2707 1.31507 9.07687 1.31507C5.90526 1.31508 3.33397 3.8932 3.33242 7.07406L5.35374 5.48149V7.15378L2.67795 9.26193L0 7.15329V5.48139L2.02132 7.07297C2.02345 3.16631 5.18151 6.67146e-06 9.07687 0Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"SUI Circulation"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/deflation",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 12 16",
                        fill: "none",
                        className: "object-contain",
                      }}
                    >
                      <path
                        {...{
                          d: "M6.7812 0C8.39578 2.41933 10.5324 5.58306 11.3859 7.32273C11.7793 8.12468 12 9.02692 12 9.97899C12 13.3042 9.31372 15.9999 6.00005 16C2.68633 16 0 13.3043 0 9.97899C1.06083e-06 9.02691 0.220672 8.12469 0.614102 7.32273C1.46718 5.58387 3.61622 2.39816 5.21851 0H6.7812ZM5.99966 1.16464C4.42308 3.52339 2.53501 6.34979 1.77605 7.8968C1.4683 8.52412 1.29514 9.23034 1.29514 9.97899C1.29514 12.5865 3.40162 14.7003 6.00005 14.7003C8.59843 14.7003 10.7049 12.5865 10.7049 9.97899C10.7049 9.23034 10.5317 8.52412 10.2239 7.8968C9.46422 6.3482 7.58632 3.54048 5.99966 1.16464ZM6.65219 10.8022L8.26703 7.99561H9.7625L6.88657 12.9943H5.11334L2.23741 7.99561H3.73277L5.35705 10.8188V4.99345H6.65219V10.8022Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"SUI Deflation"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/buybacks",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 19 19",
                        fill: "none",
                        className: "object-contain",
                      }}
                    >
                      <path
                        {...{
                          d: "M15.7468 10.6701C15.764 10.606 15.7799 10.5411 15.7948 10.477C16.4595 7.61913 14.8159 4.72783 12.0311 3.82803L11.7568 3.74686C10.9325 3.56153 10.618 3.59821 9.99479 3.57701L9.81616 2.40464L12.534 0.563671L14.1173 0.989436L12.0921 2.50296L12.094 2.50262C15.7307 3.48214 17.9111 7.1747 17.0406 10.812C17.0253 10.876 17.0087 10.9404 16.9915 11.0043L15.7468 10.6701ZM1.82041 11.8948L1.33953 10.3278L3.69791 11.2357L3.69774 11.2347C2.5921 7.63433 4.55789 3.8244 8.10092 2.62621C8.16335 2.6051 8.22679 2.58327 8.29019 2.5638L8.66809 3.79697C8.60483 3.8164 8.54185 3.83778 8.47978 3.8592C5.61715 4.84792 4.03334 7.93749 4.92995 10.857L4.93029 10.8589C5.21196 11.6555 5.41052 11.9015 5.72425 12.4407L4.82562 13.2164L1.82041 11.8948ZM15.4072 13.9768L15.4064 13.978C12.8214 16.7171 8.53637 16.8882 5.74501 14.3989C5.69583 14.3551 5.64633 14.3099 5.5981 14.2643L6.48373 13.3263C6.53195 13.3718 6.58111 13.4165 6.63048 13.4599C8.90373 15.4612 12.3722 15.3136 14.4684 13.0923L14.4701 13.091C15.0239 12.4525 15.1404 12.1588 15.4544 11.6197L16.5715 12.0172L16.907 15.2833L15.7809 16.4754L15.4072 13.9768Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M11.05 6.05542C11.4751 6.9454 12.1804 8.40994 12.4231 8.90145C12.5759 9.21091 12.6614 9.55894 12.6614 9.92514C12.6614 11.2064 11.6197 12.2451 10.3346 12.2452C9.04957 12.2452 8.00781 11.2064 8.00781 9.92514C8.00782 9.55894 8.09338 9.21091 8.24618 8.90145C8.49199 8.4036 9.1825 6.95485 9.6167 6.05542H11.05ZM10.3326 7.36291C9.94628 8.1678 9.51372 9.07142 9.33398 9.43545C9.2614 9.58246 9.22032 9.74817 9.22031 9.92514C9.22031 10.5387 9.71921 11.0362 10.3346 11.0362C10.95 11.0362 11.4489 10.5387 11.4489 9.92514C11.4489 9.74817 11.4078 9.58246 11.3353 9.43545C11.1533 9.06692 10.7191 8.16749 10.3326 7.36291Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"SUI Buybacks"}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div {...{ className: "w-layout-vflex hm_dev-layout" }}>
            <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
              <span {...{ className: "hm_category" }}>
                {"Technical support/"}
              </span>
              <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                <a
                  {...{
                    href: "https://docs.sui.io/",
                    target: "_blank",
                    className: "hm-dd_link-wrapper w-inline-block",
                    rel: "noopener noreferrer",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 15 20",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M14.4009 6.0007L14.3999 6.00176V17.6425L14.4 19.2025H1.5607V17.6425H12.8399V7.56258H8.40152L6.83918 6.00023V1.5607H1.56012V17.6426H0.000117187V1.5607L0 1.56082V0.000820313L8.37492 0.000703125V0.00164063L8.37656 0L14.4009 6.0007ZM8.39918 6.00258H12.1924L8.39918 2.22434V6.00258Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Docs"}
                      </span>
                      <div {...{ className: "hm-dd_external-icon" }}>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 7 7",
                            fill: "none",
                            className: "object-cover",
                          }}
                        >
                          <path
                            {...{
                              d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/move",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 12 16",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M6.7812 0C8.39578 2.41933 10.5324 5.58305 11.3859 7.32273C11.7793 8.12469 12 9.02691 12 9.97899C12 13.3043 9.31374 16 6.00005 16C2.68633 16 0 13.3043 0 9.97899C1.06082e-06 9.02691 0.220672 8.12469 0.614102 7.32273C1.46717 5.58387 3.61622 2.39817 5.21851 0H6.7812ZM5.99966 1.16464C4.42308 3.5234 2.535 6.34979 1.77605 7.8968C1.4683 8.52412 1.29514 9.23034 1.29514 9.97899C1.29514 12.5865 3.40162 14.7003 6.00005 14.7003C8.59846 14.7003 10.7049 12.5865 10.7049 9.97899C10.7049 9.23033 10.5317 8.52412 10.2239 7.8968C9.46422 6.34819 7.58632 3.54048 5.99966 1.16464ZM7.29519 7.29676L4.22419 9.52071L7.29519 11.7447V13.3475L3.31014 10.4614V8.58003L7.29519 5.69405V7.29676Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Move"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://docs.sui.io/getting-started/sui-mcp-server",
                    target: "_blank",
                    className: "hm-dd_link-wrapper w-inline-block",
                    rel: "noopener noreferrer",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M7.14986 4.30131H7.14868V8.85055H5.84883V4.30131H1.29985V8.85026H5.84805V10.1501H1.29985V14.7001H5.84883V10.1498H7.14868V14.7001H11.6978V10.1501H7.14907V8.85026H11.9502V8.85074H12.9976V16H0V3.00145H7.14986V4.30131ZM16 7.14926H10.1514V5.84939H14.7002V1.29987H10.1511V5.84949H8.85122V0H16V7.14926Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"AI Coding Assistant"}
                      </span>
                      <div {...{ className: "hm-dd_external-icon" }}>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 7 7",
                            fill: "none",
                            className: "object-cover",
                          }}
                        >
                          <path
                            {...{
                              d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://docs.sui.io/getting-started",
                    target: "_blank",
                    className: "hm-dd_link-wrapper w-inline-block",
                    rel: "noopener noreferrer",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M14.6996 16H1.29992V14.7001H14.6996V16ZM1.29982 14.7H0V1.30005H1.29982V14.7ZM15.9999 14.7H14.7001L14.7002 1.30005H16L15.9999 14.7ZM8.64996 12.9995H7.35014V8.64778H8.64996V12.9995ZM7.34926 8.64807H3.00886V7.34822H7.34926V8.64807ZM12.9994 8.64807H8.65025V7.34822H12.9994V8.64807ZM8.64996 7.34851H7.35014V3.0027H8.64996V7.34851ZM14.6996 1.29986H1.29992V0H14.6996V1.29986Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Starter Template"}
                      </span>
                      <div {...{ className: "hm-dd_external-icon" }}>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 7 7",
                            fill: "none",
                            className: "object-cover",
                          }}
                        >
                          <path
                            {...{
                              d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://github.com/sui-foundation/awesome-sui/tree/main",
                    target: "_blank",
                    className: "hm-dd_link-wrapper w-inline-block",
                    rel: "noopener noreferrer",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 22 22",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M1.73398 19.5954H19.6022V7.44323H21.3355V21.3276H21.3345V21.3288H0.00117188V21.3276H0.000651042V7.44323H1.73398V19.5954ZM13.9198 11.6996V13.6271L7.50273 17.332L7.41576 17.1814V15.3807L12.1225 12.6634L7.41576 9.94596V8.14531L7.50273 7.99479L13.9198 11.6996ZM7.07005 3.99583H14.269V1.73359H16.0023V3.99583H21.3345V5.72917H0V3.99583H5.33672V1.73359H7.07005V3.99583ZM14.2661 1.73333H7.0694V0H14.2661V1.73333Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Tools"}
                      </span>
                      <div {...{ className: "hm-dd_external-icon" }}>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 7 7",
                            fill: "none",
                            className: "object-cover",
                          }}
                        >
                          <path
                            {...{
                              d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://github.com/sui-foundation/awesome-sui/tree/main",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "3.99 3.84 16.18 16.18",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M10.055 11.3769L10.055 12.8919L7.20002 14.5374L19.1538 14.5373L19.1538 15.8494L7.21651 15.8495L10.055 17.4855L10.055 19.0005L5 16.0869L5 14.2905L10.055 11.3769ZM16.937 7.99765L14.0988 6.36167L14.0988 4.84664L19.1538 7.76021L19.1538 9.55664L14.0988 12.4702L14.0988 10.9553L16.9538 9.30974L5 9.30974L5 7.99765L16.937 7.99765Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Agent Payments"}
                      </span>
                      <div {...{ className: "hm-dd_external-icon" }}>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 7 7",
                            fill: "none",
                            className: "object-cover",
                          }}
                        >
                          <path
                            {...{
                              d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
              <span {...{ className: "hm_category" }}>{"Build & Launch/"}</span>
              <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                <a
                  {...{
                    href: "https://www.sui.io/developers",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 16 12",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M4.97971 1.87972L1.02525 6.00132L4.97971 10.1228V12L0 6.81V5.19254L4.97971 0.00253871V1.87972ZM16 5.19254V6.81L11.0204 12V10.1228L14.9748 6.00132L11.0204 1.87972V0.00253871L16 5.19254ZM7.09395 11.9983H5.7485L8.96287 0H10.3082L7.09395 11.9983Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Developer Hub"}
                      </span>
                    </div>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/project-ideas",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 15 20",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M9.60059 19.1946H4.80059V17.6346H9.60059V19.1946ZM7.39629 0C11.2886 0.100602 14.413 3.2874 14.413 7.20398C14.413 8.34353 14.148 9.42342 13.6754 10.3833C13.2152 11.3181 12.3141 13.1832 11.3298 15.2302H9.60059V16.7902H4.80059V15.2302H3.07172C2.09313 13.1851 1.20018 11.323 0.737578 10.3833C0.265039 9.42342 0 8.34352 0 7.20398C1.28522e-05 3.2874 3.1245 0.100608 7.01684 0H7.39629ZM7.20656 1.55754C4.0881 1.55755 1.56001 4.08553 1.56 7.20398C1.56 8.09934 1.76781 8.94398 2.13715 9.69422C2.64828 10.7325 3.69604 12.92 4.80117 15.2302H9.59894C10.7077 12.9219 11.7629 10.7362 12.2759 9.69422C12.6452 8.94397 12.853 8.09935 12.853 7.20398C12.853 4.08554 10.325 1.55756 7.20656 1.55754ZM7.98059 6.46031L9.92824 5.3359L10.7082 6.68695L8.76047 7.81137L10.7082 8.9359L9.92824 10.287L7.98059 9.16242V11.4115H6.42059V9.16242L4.47293 10.287L3.69293 8.9359L5.64047 7.81137L3.69281 6.68695L4.47281 5.3359L6.42059 6.46043V4.21148H7.98059V6.46031Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Project Ideas"}
                      </span>
                      <div {...{ className: "hm-dd_external-icon" }}>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 7 7",
                            fill: "none",
                            className: "object-cover",
                          }}
                        >
                          <path
                            {...{
                              d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/launch-on-sui",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 11 20",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <circle
                        {...{
                          cx: "5.27193",
                          cy: "7.54927",
                          r: "1.65461",
                          stroke: "currentColor",
                          strokeWidth: "1.45338",
                        }}
                      ></circle>
                      <path
                        {...{
                          d: "M0.370605 19.2666L0.370605 17.4121L3.10794 15.1253L3.10794 16.9798L0.370605 19.2666Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M10.1724 19.2666L10.1724 17.4121L7.43503 15.1253L7.43503 16.9798L10.1724 19.2666Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <rect
                        {...{
                          x: "3.10742",
                          y: "15.1254",
                          width: "1.45338",
                          height: "4.32756",
                          transform: "rotate(-90 3.10742 15.1254)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          x: "3.10742",
                          y: "18.4198",
                          width: "1.45338",
                          height: "4.32756",
                          transform: "rotate(-90 3.10742 18.4198)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <path
                        {...{
                          d: "M2.49259 14.0606C2.02118 13.2862 0.726074 10.9089 0.726074 8.40367C0.726074 4.86807 3.75659 2.24163 5.27184 0.928406C6.7871 2.03959 9.81761 4.96909 9.81761 8.40367C9.81761 11.5958 8.44502 13.5462 8.00727 14.1186",
                          stroke: "currentColor",
                          strokeWidth: "1.45263",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Launch Playbook"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/founder-starter-pack",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 16 22",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M1.75087 1.72949L1.73834 19.5999H14.2606V21.3333H0.000522142V20.611H0L0.000522142 19.8631V19.5999H0.000652678L0.0131841 1.72819L1.75087 1.72949ZM16 5.78888L15.996 5.79292H15.9999V17.5061H15.9988V18.6666H3.71478V18.6655L2.63303 18.6657V1.73366H2.63199V0.000260426H10.1726V0.00143234L10.1741 0L16 5.78888ZM4.37072 16.9332H14.2622V7.39623H10.3209L8.58937 5.67286V1.73366H4.37072V16.9332ZM10.3271 5.66284H13.411L10.3271 2.59866V5.66284Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Founder Starter Pack"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/faq",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M8.0004 7.52356C8.415 7.52356 8.8203 7.40061 9.16503 7.17027C9.50976 6.93993 9.77845 6.61253 9.93711 6.22949C10.0958 5.84644 10.1373 5.42495 10.0564 5.01831C9.97551 4.61167 9.77586 4.23815 9.48269 3.94498C9.18952 3.65181 8.816 3.45216 8.40936 3.37127C8.00272 3.29039 7.58123 3.3319 7.19819 3.49056C6.81514 3.64923 6.48775 3.91791 6.2574 4.26264C6.02706 4.60737 5.90412 5.01267 5.90412 5.42727",
                          stroke: "currentColor",
                          strokeWidth: "1.43427",
                        }}
                      ></path>
                      <rect
                        {...{
                          width: "1.4147",
                          height: "15.9984",
                          transform: "matrix(-4.37114e-08 1 1 4.37114e-08 0 0)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.4147",
                          height: "9.72235",
                          transform:
                            "matrix(-4.37114e-08 1 1 4.37114e-08 4.86279 11.824)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.4147",
                          height: "10.4097",
                          transform:
                            "matrix(-1 -1.03241e-07 -7.40278e-08 1 1.41602 1.41431)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.4147",
                          height: "11.8244",
                          transform:
                            "matrix(-1 -1.08615e-07 -7.03654e-08 1 16 1.41431)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.4147",
                          height: "3.25837",
                          transform:
                            "matrix(-1 -1.03241e-07 -7.40278e-08 1 6.27734 11.9112)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <path
                        {...{
                          d: "M1.41602 11.8123L1.41602 13.329L4.86306 15.1695L4.86306 13.6528L1.41602 11.8123Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <circle
                        {...{
                          cx: "8.00028",
                          cy: "9.90067",
                          r: "0.785436",
                          fill: "currentColor",
                        }}
                      ></circle>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Builder FAQ"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/programs-funding",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 12 18",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <rect
                        {...{
                          width: "1.57318",
                          height: "6.54179",
                          transform:
                            "matrix(-1 -6.83112e-09 5.10467e-09 1 6.69238 11.4575)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <circle
                        {...{
                          cx: "5.80804",
                          cy: "5.80804",
                          r: "5.02104",
                          stroke: "currentColor",
                          strokeWidth: "1.57399",
                        }}
                      ></circle>
                      <path
                        {...{
                          d: "M7.71182 7.65818L7.69085 7.67216C7.56503 7.89584 7.38328 8.08457 7.14562 8.23136C6.90796 8.37815 6.63535 8.47601 6.3208 8.52494V9.3987H5.2653V8.51795C4.9787 8.46203 4.72007 8.35718 4.49639 8.2034C4.27271 8.04962 4.09097 7.8539 3.95117 7.62323C3.81137 7.39255 3.72748 7.13392 3.69253 6.84733H4.80395C4.8389 7.13392 4.95074 7.3576 5.13948 7.51838C5.32821 7.67915 5.56587 7.75604 5.85246 7.75604C6.16002 7.75604 6.39769 7.69313 6.56545 7.56032C6.73321 7.4275 6.81709 7.24576 6.81709 7.01509C6.81709 6.88927 6.78214 6.78442 6.71923 6.69355C6.65632 6.60268 6.55846 6.52579 6.42565 6.46288C6.29284 6.39997 6.11808 6.33706 5.90139 6.28114L5.21637 6.09939C4.769 5.98056 4.4195 5.80581 4.17485 5.58213C3.9302 5.35845 3.80438 5.0439 3.80438 4.64546C3.80438 4.38683 3.86729 4.14917 3.99311 3.93947C4.11893 3.72976 4.29368 3.55501 4.51736 3.41521C4.74104 3.27541 4.99967 3.17755 5.29326 3.12862V2.28981H6.34876V3.1426C6.76816 3.21949 7.10368 3.38725 7.35532 3.63889C7.60697 3.89054 7.76774 4.20509 7.83065 4.58954H6.71923C6.6703 4.36586 6.55846 4.19111 6.3907 4.07228C6.22293 3.95345 6.01323 3.89054 5.7546 3.89054C5.57985 3.89054 5.42607 3.9185 5.29326 3.97442C5.16045 4.03034 5.0556 4.10723 4.98569 4.20509C4.91579 4.30295 4.88084 4.4078 4.88084 4.52663C4.88084 4.64546 4.91579 4.74332 4.98569 4.82021C5.0556 4.8971 5.15346 4.96001 5.27928 5.00895C5.4051 5.05788 5.59383 5.1138 5.83848 5.17671L6.5305 5.36544C6.98485 5.49126 7.32736 5.67999 7.55804 5.92464C7.78871 6.16929 7.90055 6.49783 7.90055 6.90325C7.90055 7.18285 7.83764 7.43449 7.71182 7.65818Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M5.94093 18.0048C5.94084 14.3311 8.41177 12.637 11.2243 12.6371",
                          stroke: "currentColor",
                          strokeWidth: "1.57318",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M0.624221 12.6361C1.76606 12.636 2.85159 12.9152 3.73834 13.4928C4.06253 13.7039 4.35112 13.9428 4.55713 14.1475",
                          stroke: "currentColor",
                          strokeWidth: "1.57318",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Programs & Funding"}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
              <span {...{ className: "hm_category" }}>{"Get involved/"}</span>
              <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                <a
                  {...{
                    href: "https://www.deepsurge.xyz/",
                    target: "_blank",
                    className: "hm-dd_link-wrapper w-inline-block",
                    rel: "noopener noreferrer",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 18 16",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <rect
                        {...{
                          x: "3.0625",
                          y: "15.0653",
                          width: "1.20078",
                          height: "11.1493",
                          transform: "rotate(-90 3.0625 15.0653)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <path
                        {...{
                          d: "M14.2119 13.8652L14.2119 12.5779L8.62747 10.6876L8.62747 11.975L14.2119 13.8652Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M3.04297 13.8652L3.04297 12.5779L8.62741 10.6876L8.62741 11.975L3.04297 13.8652Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M8.62402 10.0473C9.88775 10.0425 11.1285 9.63005 12.043 8.8432C12.9441 8.06774 13.5635 6.90131 13.5635 5.2973V5.29437L13.5811 0.652771H3.69043V5.2973C3.69047 6.92481 4.31024 8.09551 5.20898 8.86664C6.12135 9.64942 7.36027 10.0521 8.62402 10.0473Z",
                          stroke: "currentColor",
                          strokeWidth: "1.294",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M14.2313 5.48408C14.8719 5.48408 15.4864 5.22957 15.9394 4.77654C16.3925 4.3235 16.647 3.70905 16.647 3.06837C16.647 2.42768 16.3925 1.81323 15.9394 1.3602C15.4864 0.907161 14.8719 0.652649 14.2313 0.652649",
                          stroke: "currentColor",
                          strokeWidth: "1.294",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M3.06269 5.47841C2.422 5.47841 1.80755 5.22389 1.35452 4.77086C0.901485 4.31782 0.646973 3.70338 0.646973 3.06269C0.646973 2.422 0.901485 1.80755 1.35452 1.35452C1.80755 0.901485 2.422 0.646972 3.06269 0.646972",
                          stroke: "currentColor",
                          strokeWidth: "1.294",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Hackathons"}
                      </span>
                      <div {...{ className: "hm-dd_external-icon" }}>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 7 7",
                            fill: "none",
                            className: "object-cover",
                          }}
                        >
                          <path
                            {...{
                              d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/community",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M8.64941 0.0234375C8.71779 0.0230844 8.78613 0.0241471 8.85449 0.0253906L8.86035 0.00195312C8.89147 0.00921959 8.92151 0.0201013 8.95215 0.0283203C11.0995 0.0912864 13.2282 0.940142 14.8672 2.5791L15.0244 2.74023C16.4362 4.22547 17.2239 6.08597 17.3896 7.99023H15.9541V9.49609H12.625C12.5586 11.1305 12.2927 12.7474 11.8076 14.0947C11.6121 14.6376 11.37 15.16 11.0791 15.6289C12.0881 15.28 13.0361 14.704 13.8418 13.8984C15.0699 12.6704 15.7657 11.1123 15.9326 9.50977H17.3887C17.2174 11.4847 16.3786 13.4125 14.8672 14.9238L14.7061 15.0811C11.2862 18.3318 5.87815 18.2795 2.52246 14.9238C1.01115 13.4125 0.171224 11.4846 0 9.50977H1.44043V9.49609H1.4375V7.99023H0C0.171763 6.01638 1.01187 4.08976 2.52246 2.5791C4.18955 0.912017 6.36316 0.0619452 8.54785 0.0253906C8.5799 0.0172596 8.612 0.00717188 8.64453 0L8.64941 0.0234375ZM6.13379 9.49609C6.20333 10.9916 6.46186 12.4302 6.9043 13.5898C7.38598 14.8523 8.0261 15.6478 8.73828 15.9658C9.3861 15.6513 9.98681 14.8687 10.4424 13.6035C10.8614 12.4397 11.1061 10.996 11.1719 9.49609H6.13379ZM1.45801 9.49609C1.6223 11.1033 2.31641 12.6669 3.54785 13.8984C4.35404 14.7046 5.30272 15.281 6.3125 15.6299C6.00938 15.1658 5.75631 14.6477 5.5498 14.1064C5.03435 12.7553 4.75131 11.1343 4.68066 9.49609H1.45801ZM8.73828 1.48145C8.05502 1.73596 7.41903 2.47287 6.92871 3.71973C6.46368 4.90253 6.18923 6.40656 6.12598 7.97656H11.1787C11.119 6.40224 10.8604 4.89301 10.4199 3.70605C9.9549 2.45315 9.35661 1.73164 8.73828 1.48145ZM11.1699 1.90625C11.4083 2.30891 11.6109 2.74836 11.7793 3.20215C12.2909 4.58082 12.5696 6.2689 12.6299 7.97656H15.9307C15.7607 6.37984 15.0656 4.82835 13.8418 3.60449C13.0604 2.82311 12.1449 2.25804 11.1699 1.90625ZM6.21484 1.90723C5.24158 2.25913 4.32803 2.82432 3.54785 3.60449C2.32411 4.8283 1.6308 6.37996 1.46094 7.97656H4.6748C4.73865 6.26461 5.03534 4.57141 5.5791 3.18848C5.75628 2.73795 5.96761 2.30407 6.21484 1.90723Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Online Communities"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://luma.com/sui-network",
                    target: "_blank",
                    className: "hm-dd_link-wrapper w-inline-block",
                    rel: "noopener noreferrer",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 22 22",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M1.73321 19.5999H19.6001V4.40342H21.3333V21.3323H21.3323V21.3333H0.000520795V21.3323H0V4.40342H1.73321V19.5999ZM11.5137 12.0391L14.7582 11.0067L15.2498 12.6291L12.0545 13.6616L14.0945 16.4393L12.7427 17.4225L10.6781 14.5956L8.58895 17.4225L7.2371 16.4393L9.27706 13.6616L6.08185 12.6291L6.57348 11.0067L9.8179 12.0391V8.81894H11.5137V12.0391ZM7.06472 2.66924H14.2611V0H15.9943V2.66924H19.5992V4.40264H15.9943V7.99834H14.2611V4.40264H7.06472V7.99847H5.33151V4.40264H1.7323V2.66924H5.33151V0H7.06472V2.66924Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <div {...{ className: "w-layout-hflex gap-4" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Events"}
                      </span>
                      <div {...{ className: "hm-dd_external-icon" }}>
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 7 7",
                            fill: "none",
                            className: "object-cover",
                          }}
                        >
                          <path
                            {...{
                              d: "M0.0193998 1.17602L1.1814 1.52588e-05L6.04145 0V4.89969L4.86545 6.06169V2.058L0.868 6.06017L0 5.19217L3.99745 1.176L0.0193998 1.17602Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div {...{ className: "w-layout-vflex hm_comm-layout" }}>
            <div {...{ className: "w-layout-vflex gap-24 full-width" }}>
              <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
                <span {...{ className: "hm_category" }}>{"IRL/"}</span>
                <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                  <a
                    {...{
                      href: "https://luma.com/sui-network",
                      target: "_blank",
                      className: "hm-dd_link-wrapper w-inline-block",
                      rel: "noopener noreferrer",
                    }}
                  >
                    <div {...{ className: "hm-dd_link-icon more-padding" }}>
                      <svg
                        {...{
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "100%",
                          viewBox: "0 0 22 22",
                          fill: "none",
                          className: "object-cover",
                        }}
                      >
                        <path
                          {...{
                            d: "M1.73321 19.5999H19.6001V4.40342H21.3333V21.3323H21.3323V21.3333H0.000520795V21.3323H0V4.40342H1.73321V19.5999ZM11.5137 12.0391L14.7582 11.0067L15.2498 12.6291L12.0545 13.6616L14.0945 16.4393L12.7427 17.4225L10.6781 14.5956L8.58895 17.4225L7.2371 16.4393L9.27706 13.6616L6.08185 12.6291L6.57348 11.0067L9.8179 12.0391V8.81894H11.5137V12.0391ZM7.06472 2.66924H14.2611V0H15.9943V2.66924H19.5992V4.40264H15.9943V7.99834H14.2611V4.40264H7.06472V7.99847H5.33151V4.40264H1.7323V2.66924H5.33151V0H7.06472V2.66924Z",
                            fill: "currentColor",
                          }}
                        ></path>
                      </svg>
                    </div>
                    <div {...{ className: "w-layout-vflex gap-8" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Upcoming events"}
                      </span>
                    </div>
                  </a>
                  <a
                    {...{
                      href: "https://www.sui.io/tag/events/",
                      className: "hm-dd_link-wrapper w-inline-block",
                    }}
                  >
                    <div {...{ className: "hm-dd_link-icon more-padding" }}>
                      <svg
                        {...{
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "100%",
                          viewBox: "0 0 22 22",
                          fill: "none",
                          className: "object-cover",
                        }}
                      >
                        <path
                          {...{
                            d: "M1.73333 19.5992H19.6016V4.40325H21.3349V21.3315H21.3339V21.3326H0.000520833V21.3315H0V4.40325H1.73333V19.5992ZM10.8698 8.60716C11.8753 8.65105 12.8417 9.01974 13.6225 9.66055C14.4558 10.3444 15.0262 11.2961 15.2365 12.3534C15.4467 13.4106 15.2841 14.5082 14.7759 15.4589C14.2677 16.4095 13.4455 17.1547 12.4496 17.5672C11.4537 17.9797 10.3455 18.0341 9.31393 17.7212C8.28237 17.4083 7.39122 16.7473 6.79232 15.851C6.2825 15.088 6.01126 14.1946 6.00703 13.284L7.74036 13.2759C7.74301 13.8478 7.91333 14.4089 8.23346 14.888C8.60956 15.4509 9.16926 15.866 9.81706 16.0625C10.4649 16.259 11.1609 16.2248 11.7863 15.9658C12.4117 15.7067 12.928 15.2388 13.2471 14.6418C13.5662 14.0448 13.6685 13.3555 13.5365 12.6915C13.4044 12.0276 13.0462 11.4299 12.5229 11.0004C12.0522 10.6141 11.474 10.3853 10.8698 10.3432V11.6612L8.30742 9.46979L10.8698 7.27825V8.60716ZM7.06523 2.66914H14.262V0H15.9953V2.66914H19.6007V4.40247H15.9953V7.99805H14.262V4.40247H7.06523V7.99818H5.3319V4.40247H1.73242V2.66914H5.3319V0H7.06523V2.66914Z",
                            fill: "currentColor",
                          }}
                        ></path>
                      </svg>
                    </div>
                    <div {...{ className: "w-layout-vflex gap-8" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Event recaps"}
                      </span>
                    </div>
                  </a>
                  <a
                    {...{
                      href: "https://www.suihub.org/",
                      target: "_blank",
                      className: "hm-dd_link-wrapper hide w-inline-block",
                      rel: "noopener noreferrer",
                    }}
                  >
                    <div {...{ className: "hm-dd_link-icon more-padding" }}>
                      <svg
                        {...{
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "100%",
                          viewBox: "0 0 16 19",
                          fill: "none",
                          className: "object-cover",
                        }}
                      >
                        <path
                          {...{
                            d: "M15.9983 0.000131592V0.875879H16.0001V17.9959H15.9983V18.8718H1.73372V17.12H14.2668V1.75189H1.73424V0L15.9983 0.000131592ZM1.73333 17.1202L0 17.1203V1.75176L1.73333 1.75163V17.1202ZM9.02539 6.14326C9.67965 7.53189 10.7813 9.84962 11.1586 10.6241C11.3898 11.0987 11.5191 11.6324 11.5191 12.1941C11.5191 14.1593 9.94283 15.7525 7.99831 15.7525C6.05378 15.7525 4.47734 14.1593 4.47734 12.1941C4.47735 11.6324 4.60684 11.0987 4.83802 10.6241C5.21974 9.84049 6.29839 7.54652 6.96693 6.14326H9.02539ZM7.99518 8.02727C7.38424 9.31708 6.68015 10.8085 6.3931 11.3977C6.27658 11.6369 6.21069 11.9066 6.21068 12.1941C6.21068 13.1919 7.01106 14.0008 7.99831 14.0008C8.98555 14.0007 9.78581 13.1919 9.78581 12.1941C9.7858 11.9066 9.71991 11.6369 9.60339 11.3977C9.31305 10.8017 8.60604 9.31697 7.99518 8.02727ZM11.9983 4.82957L3.99831 4.8297V3.07795L11.9983 3.07781V4.82957Z",
                            fill: "currentColor",
                          }}
                        ></path>
                      </svg>
                    </div>
                    <div {...{ className: "w-layout-vflex gap-8" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"SuiHub"}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
                <span {...{ className: "hm_category" }}>{"Virtual/"}</span>
                <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                  <a
                    {...{
                      href: "https://www.sui.io/community",
                      className: "hm-dd_link-wrapper w-inline-block",
                    }}
                  >
                    <div {...{ className: "hm-dd_link-icon more-padding" }}>
                      <svg
                        {...{
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "100%",
                          viewBox: "0 0 18 18",
                          fill: "none",
                          className: "object-cover",
                        }}
                      >
                        <path
                          {...{
                            d: "M8.64941 0.0234375C8.71779 0.0230844 8.78613 0.0241471 8.85449 0.0253906L8.86035 0.00195312C8.89147 0.00921959 8.92151 0.0201013 8.95215 0.0283203C11.0995 0.0912864 13.2282 0.940142 14.8672 2.5791L15.0244 2.74023C16.4362 4.22547 17.2239 6.08597 17.3896 7.99023H15.9541V9.49609H12.625C12.5586 11.1305 12.2927 12.7474 11.8076 14.0947C11.6121 14.6376 11.37 15.16 11.0791 15.6289C12.0881 15.28 13.0361 14.704 13.8418 13.8984C15.0699 12.6704 15.7657 11.1123 15.9326 9.50977H17.3887C17.2174 11.4847 16.3786 13.4125 14.8672 14.9238L14.7061 15.0811C11.2862 18.3318 5.87815 18.2795 2.52246 14.9238C1.01115 13.4125 0.171224 11.4846 0 9.50977H1.44043V9.49609H1.4375V7.99023H0C0.171763 6.01638 1.01187 4.08976 2.52246 2.5791C4.18955 0.912017 6.36316 0.0619452 8.54785 0.0253906C8.5799 0.0172596 8.612 0.00717188 8.64453 0L8.64941 0.0234375ZM6.13379 9.49609C6.20333 10.9916 6.46186 12.4302 6.9043 13.5898C7.38598 14.8523 8.0261 15.6478 8.73828 15.9658C9.3861 15.6513 9.98681 14.8687 10.4424 13.6035C10.8614 12.4397 11.1061 10.996 11.1719 9.49609H6.13379ZM1.45801 9.49609C1.6223 11.1033 2.31641 12.6669 3.54785 13.8984C4.35404 14.7046 5.30272 15.281 6.3125 15.6299C6.00938 15.1658 5.75631 14.6477 5.5498 14.1064C5.03435 12.7553 4.75131 11.1343 4.68066 9.49609H1.45801ZM8.73828 1.48145C8.05502 1.73596 7.41903 2.47287 6.92871 3.71973C6.46368 4.90253 6.18923 6.40656 6.12598 7.97656H11.1787C11.119 6.40224 10.8604 4.89301 10.4199 3.70605C9.9549 2.45315 9.35661 1.73164 8.73828 1.48145ZM11.1699 1.90625C11.4083 2.30891 11.6109 2.74836 11.7793 3.20215C12.2909 4.58082 12.5696 6.2689 12.6299 7.97656H15.9307C15.7607 6.37984 15.0656 4.82835 13.8418 3.60449C13.0604 2.82311 12.1449 2.25804 11.1699 1.90625ZM6.21484 1.90723C5.24158 2.25913 4.32803 2.82432 3.54785 3.60449C2.32411 4.8283 1.6308 6.37996 1.46094 7.97656H4.6748C4.73865 6.26461 5.03534 4.57141 5.5791 3.18848C5.75628 2.73795 5.96761 2.30407 6.21484 1.90723Z",
                            fill: "currentColor",
                          }}
                        ></path>
                      </svg>
                    </div>
                    <div {...{ className: "w-layout-vflex gap-8" }}>
                      <span
                        {...{ "global-target": "", className: "hm-dd_link" }}
                      >
                        {"Online communities"}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div {...{ className: "w-layout-vflex full-width" }}>
              <span {...{ className: "hm_category" }}>{"Newsletter/"}</span>
              <div {...{ className: "w-layout-vflex hm-dd_newsletter-block" }}>
                <span {...{ className: "hm-dd_newsletter-text" }}>
                  {
                    "Subscribe to Sui Signal and get the latest news, updates, and insights."
                  }
                </span>
                <div {...{ name: "Form Block", className: "hs-form_wrapper" }}>
                  <form
                    {...{
                      name: "Form",
                      id: "newsletter-mob-2",
                      target: "_self",
                      className: "hs-form_block",
                    }}
                  >
                    <label {...{ htmlFor: "email", className: "hide" }}>
                      {"Email"}
                    </label>
                    <div {...{ className: "w-layout-hflex hs-input_wrapper" }}>
                      <input
                        {...{
                          type: "email",
                          name: "EMAIL",
                          placeholder: "Email",
                          id: "email",
                          className: "hs-input",
                        }}
                      />
                      <button
                        {...{ type: "submit", className: "hs-submit_block" }}
                      >
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 12 11",
                            fill: "none",
                            className: "hs-submit",
                          }}
                        >
                          <rect
                            {...{
                              width: "1.47782",
                              height: "10.5378",
                              transform:
                                "matrix(-1.31134e-07 1 1 1.31134e-07 0.640625 4.53125)",
                              fill: "currentColor",
                            }}
                          ></rect>
                          <path
                            {...{
                              d: "M6.53125 0.886719L6.53157 2.5782L11.1829 6.10548L11.1826 4.414L6.53125 0.886719Z",
                              fill: "currentColor",
                            }}
                          ></path>
                          <path
                            {...{
                              d: "M6.53125 9.64453L6.53157 7.95305L11.1829 4.42577L11.1826 6.11725L6.53125 9.64453Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <span {...{ className: "hs_success-message message-mob" }}>
                      {"Subscription successful."}
                    </span>
                    <span {...{ className: "hs_error-message message-mob" }}>
                      {"Enter a valid email address"}
                    </span>
                    <div
                      {...{ className: "w-layout-hflex hs-checkbox_wrapper" }}
                    >
                      <input
                        {...{
                          type: "checkbox",
                          name: "MMERGE66",
                          required: true,
                          className: "hs-checkbox_input",
                          defaultValue:
                            "I agree to receive marketing communications from Sui Foundation.",
                        }}
                      />
                      <span {...{ className: "hs-checkbox_span" }}>
                        {
                          "I agree to receive marketing communications from Sui Foundation."
                        }
                      </span>
                    </div>
                    <label {...{ className: "hide" }}>
                      {
                        "<p>I agree to receive marketing communications from Sui Foundation</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>"
                      }
                    </label>
                    <input
                      {...{
                        type: "text",
                        name: "b_717c5da64db8dd03861791f28_3eb14e537d",
                        hidden: true,
                        id: "honeypot",
                        className: "hide",
                      }}
                    />
                  </form>
                </div>
                <div
                  {...{ name: "Form Block", className: "hs-form_wrapper none" }}
                >
                  <form
                    {...{
                      name: "Form",
                      encType: "multipart/form-data",
                      "data-name": "Sui Website Signups",
                      id: "newsletter-mob",
                      className: "hs-form_block",
                    }}
                  >
                    <label {...{ htmlFor: "email", className: "hide" }}>
                      {"Email"}
                    </label>
                    <div {...{ className: "w-layout-hflex hs-input_wrapper" }}>
                      <input
                        {...{
                          type: "email",
                          name: "email",
                          placeholder: "Email",
                          id: "email",
                          className: "hs-input",
                        }}
                      />
                      <button
                        {...{ type: "submit", className: "hs-submit_block" }}
                      >
                        <svg
                          {...{
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            viewBox: "0 0 12 11",
                            fill: "none",
                            className: "hs-submit",
                          }}
                        >
                          <rect
                            {...{
                              width: "1.47782",
                              height: "10.5378",
                              transform:
                                "matrix(-1.31134e-07 1 1 1.31134e-07 0.640625 4.53125)",
                              fill: "currentColor",
                            }}
                          ></rect>
                          <path
                            {...{
                              d: "M6.53125 0.886719L6.53157 2.5782L11.1829 6.10548L11.1826 4.414L6.53125 0.886719Z",
                              fill: "currentColor",
                            }}
                          ></path>
                          <path
                            {...{
                              d: "M6.53125 9.64453L6.53157 7.95305L11.1829 4.42577L11.1826 6.11725L6.53125 9.64453Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <span {...{ className: "hs_success-message message-mob" }}>
                      {"Subscription successful."}
                    </span>
                    <span {...{ className: "hs_error-message message-mob" }}>
                      {"Enter a valid email address"}
                    </span>
                    <div
                      {...{ className: "w-layout-hflex hs-checkbox_wrapper" }}
                    >
                      <input
                        {...{
                          type: "checkbox",
                          name: "73561157",
                          required: true,
                          className: "hs-checkbox_input",
                          defaultValue: "73561157",
                        }}
                      />
                      <span {...{ className: "hs-checkbox_span" }}>
                        {
                          "I agree to receive marketing communications from Sui Foundation."
                        }
                      </span>
                    </div>
                    <label {...{ className: "hide" }}>
                      {
                        "<p>I agree to receive marketing communications from Sui Foundation</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>"
                      }
                    </label>
                    <label
                      {...{
                        htmlFor: "honeypot",
                        hidden: true,
                        className: "hide",
                      }}
                    >
                      {"Phone"}
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div {...{ className: "w-layout-vflex hm_res-layout" }}>
            <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
              <span {...{ className: "hm_category" }}>
                {"Business support/"}
              </span>
              <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                <a
                  {...{
                    href: "https://www.sui.io/launch-on-sui",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 11 20",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <circle
                        {...{
                          cx: "5.27193",
                          cy: "7.54927",
                          r: "1.65461",
                          stroke: "currentColor",
                          strokeWidth: "1.45338",
                        }}
                      ></circle>
                      <path
                        {...{
                          d: "M0.370605 19.2666L0.370605 17.4121L3.10794 15.1253L3.10794 16.9798L0.370605 19.2666Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M10.1724 19.2666L10.1724 17.4121L7.43503 15.1253L7.43503 16.9798L10.1724 19.2666Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <rect
                        {...{
                          x: "3.10742",
                          y: "15.1254",
                          width: "1.45338",
                          height: "4.32756",
                          transform: "rotate(-90 3.10742 15.1254)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          x: "3.10742",
                          y: "18.4198",
                          width: "1.45338",
                          height: "4.32756",
                          transform: "rotate(-90 3.10742 18.4198)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <path
                        {...{
                          d: "M2.49259 14.0606C2.02118 13.2862 0.726074 10.9089 0.726074 8.40367C0.726074 4.86807 3.75659 2.24163 5.27184 0.928406C6.7871 2.03959 9.81761 4.96909 9.81761 8.40367C9.81761 11.5958 8.44502 13.5462 8.00727 14.1186",
                          stroke: "currentColor",
                          strokeWidth: "1.45263",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Launch playbook"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/founder-starter-pack",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 16 22",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M1.75087 1.72949L1.73834 19.5999H14.2606V21.3333H0.000522142V20.611H0L0.000522142 19.8631V19.5999H0.000652678L0.0131841 1.72819L1.75087 1.72949ZM16 5.78888L15.996 5.79292H15.9999V17.5061H15.9988V18.6666H3.71478V18.6655L2.63303 18.6657V1.73366H2.63199V0.000260426H10.1726V0.00143234L10.1741 0L16 5.78888ZM4.37072 16.9332H14.2622V7.39623H10.3209L8.58937 5.67286V1.73366H4.37072V16.9332ZM10.3271 5.66284H13.411L10.3271 2.59866V5.66284Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Founder starter pack"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/faq",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M8.0004 7.52356C8.415 7.52356 8.8203 7.40061 9.16503 7.17027C9.50976 6.93993 9.77845 6.61253 9.93711 6.22949C10.0958 5.84644 10.1373 5.42495 10.0564 5.01831C9.97551 4.61167 9.77586 4.23815 9.48269 3.94498C9.18952 3.65181 8.816 3.45216 8.40936 3.37127C8.00272 3.29039 7.58123 3.3319 7.19819 3.49056C6.81514 3.64923 6.48775 3.91791 6.2574 4.26264C6.02706 4.60737 5.90412 5.01267 5.90412 5.42727",
                          stroke: "currentColor",
                          strokeWidth: "1.43427",
                        }}
                      ></path>
                      <rect
                        {...{
                          width: "1.4147",
                          height: "15.9984",
                          transform: "matrix(-4.37114e-08 1 1 4.37114e-08 0 0)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.4147",
                          height: "9.72235",
                          transform:
                            "matrix(-4.37114e-08 1 1 4.37114e-08 4.86279 11.824)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.4147",
                          height: "10.4097",
                          transform:
                            "matrix(-1 -1.03241e-07 -7.40278e-08 1 1.41602 1.41431)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.4147",
                          height: "11.8244",
                          transform:
                            "matrix(-1 -1.08615e-07 -7.03654e-08 1 16 1.41431)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.4147",
                          height: "3.25837",
                          transform:
                            "matrix(-1 -1.03241e-07 -7.40278e-08 1 6.27734 11.9112)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <path
                        {...{
                          d: "M1.41602 11.8123L1.41602 13.329L4.86306 15.1695L4.86306 13.6528L1.41602 11.8123Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <circle
                        {...{
                          cx: "8.00028",
                          cy: "9.90067",
                          r: "0.785436",
                          fill: "currentColor",
                        }}
                      ></circle>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Builder FAQ"}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
              <span {...{ className: "hm_category" }}>{"Fiscal support/"}</span>
              <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                <a
                  {...{
                    href: "https://www.sui.io/programs-funding",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 12 18",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <rect
                        {...{
                          width: "1.57318",
                          height: "6.54179",
                          transform:
                            "matrix(-1 -6.83112e-09 5.10467e-09 1 6.69238 11.4575)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <circle
                        {...{
                          cx: "5.80804",
                          cy: "5.80804",
                          r: "5.02104",
                          stroke: "currentColor",
                          strokeWidth: "1.57399",
                        }}
                      ></circle>
                      <path
                        {...{
                          d: "M7.71182 7.65818L7.69085 7.67216C7.56503 7.89584 7.38328 8.08457 7.14562 8.23136C6.90796 8.37815 6.63535 8.47601 6.3208 8.52494V9.3987H5.2653V8.51795C4.9787 8.46203 4.72007 8.35718 4.49639 8.2034C4.27271 8.04962 4.09097 7.8539 3.95117 7.62323C3.81137 7.39255 3.72748 7.13392 3.69253 6.84733H4.80395C4.8389 7.13392 4.95074 7.3576 5.13948 7.51838C5.32821 7.67915 5.56587 7.75604 5.85246 7.75604C6.16002 7.75604 6.39769 7.69313 6.56545 7.56032C6.73321 7.4275 6.81709 7.24576 6.81709 7.01509C6.81709 6.88927 6.78214 6.78442 6.71923 6.69355C6.65632 6.60268 6.55846 6.52579 6.42565 6.46288C6.29284 6.39997 6.11808 6.33706 5.90139 6.28114L5.21637 6.09939C4.769 5.98056 4.4195 5.80581 4.17485 5.58213C3.9302 5.35845 3.80438 5.0439 3.80438 4.64546C3.80438 4.38683 3.86729 4.14917 3.99311 3.93947C4.11893 3.72976 4.29368 3.55501 4.51736 3.41521C4.74104 3.27541 4.99967 3.17755 5.29326 3.12862V2.28981H6.34876V3.1426C6.76816 3.21949 7.10368 3.38725 7.35532 3.63889C7.60697 3.89054 7.76774 4.20509 7.83065 4.58954H6.71923C6.6703 4.36586 6.55846 4.19111 6.3907 4.07228C6.22293 3.95345 6.01323 3.89054 5.7546 3.89054C5.57985 3.89054 5.42607 3.9185 5.29326 3.97442C5.16045 4.03034 5.0556 4.10723 4.98569 4.20509C4.91579 4.30295 4.88084 4.4078 4.88084 4.52663C4.88084 4.64546 4.91579 4.74332 4.98569 4.82021C5.0556 4.8971 5.15346 4.96001 5.27928 5.00895C5.4051 5.05788 5.59383 5.1138 5.83848 5.17671L6.5305 5.36544C6.98485 5.49126 7.32736 5.67999 7.55804 5.92464C7.78871 6.16929 7.90055 6.49783 7.90055 6.90325C7.90055 7.18285 7.83764 7.43449 7.71182 7.65818Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M5.94093 18.0048C5.94084 14.3311 8.41177 12.637 11.2243 12.6371",
                          stroke: "currentColor",
                          strokeWidth: "1.57318",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M0.624221 12.6361C1.76606 12.636 2.85159 12.9152 3.73834 13.4928C4.06253 13.7039 4.35112 13.9428 4.55713 14.1475",
                          stroke: "currentColor",
                          strokeWidth: "1.57318",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Programs & funding"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/request-for-proposals",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 22 19",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M1.73633 18.8718H19.6022V17.1194H1.73633V18.8718ZM15.601 0.000526553H5.73529V0H4.00195V3.20342L1.7349 4.66447V6.73988H0.00234222V17.1193H1.73568V8.76395L10.6686 13.9783L19.6026 8.76356V17.1193H21.3359V6.73988H19.6031V4.66447L17.3344 3.20236V1.7529H17.3353V0.000526553H17.3344V0H15.601V0.000526553ZM15.601 9.07567L10.6686 11.9547L5.73529 9.07514V1.7529H15.601V9.07567ZM19.6009 6.74107L17.3344 8.0639V5.28054L19.6009 6.74107ZM4.00195 8.06337L1.73711 6.7412L4.00195 5.28159V8.06337Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Request for proposals"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://suifoundation.notion.site/Sui-Ecosystem-Academic-Research-Awards-18537af41c6e80688ca0ff37cf2e617b",
                    target: "_blank",
                    className: "hm-dd_link-wrapper w-inline-block",
                    rel: "noopener noreferrer",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 17 17",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M12.0002 1.56L1.56023 1.56234V15.246H9.16969V16.806H0.000117188V15.246H0.000234375V1.5627L0 0.00269531L12 0L12.0002 1.56ZM12.9948 1.55355C15.1005 1.55358 16.8075 3.26065 16.8075 5.36637C16.8074 7.22965 15.4708 8.78032 13.704 9.11273L16.8002 15.245V15.2462H15.0532L12.9846 11.1491L10.9172 15.2462H9.16981L12.2665 9.10922C10.5092 8.76929 9.18204 7.22296 9.18199 5.36637C9.18199 3.26064 10.8891 1.55355 12.9948 1.55355ZM12.9948 3.11355C11.7506 3.11355 10.742 4.1222 10.742 5.36637C10.7421 6.61048 11.7507 7.61906 12.9948 7.61906C14.2389 7.61904 15.2474 6.61047 15.2475 5.36637C15.2475 4.12222 14.2389 3.11358 12.9948 3.11355Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Academic research awards"}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div {...{ className: "w-layout-vflex gap-10 full-width" }}>
              <span {...{ className: "hm_category" }}>{"Education/"}</span>
              <div {...{ className: "w-layout-vflex hm-dd_wrapper" }}>
                <a
                  {...{
                    href: "https://www.sui.io/blog",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 16 14",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <rect
                        {...{
                          width: "1.30561",
                          height: "11.7172",
                          transform: "matrix(-4.37114e-08 1 1 4.37114e-08 0 0)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.30561",
                          height: "8.97264",
                          transform:
                            "matrix(-4.37114e-08 1 1 4.37114e-08 4.49121 10.9126)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.30561",
                          height: "7.02857",
                          transform:
                            "matrix(-4.37114e-08 1 1 4.37114e-08 2.66016 3.00421)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.30561",
                          height: "5.23239",
                          transform:
                            "matrix(-4.37114e-08 1 1 4.37114e-08 2.66016 5.4917)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.30561",
                          height: "6.47351",
                          transform:
                            "matrix(-4.37114e-08 1 1 4.37114e-08 2.66016 7.97913)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.30561",
                          height: "9.60694",
                          transform:
                            "matrix(-1 -1.03241e-07 -7.40278e-08 1 1.31006 1.3056)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.30561",
                          height: "6.60264",
                          transform:
                            "matrix(-1 -1.08615e-07 -7.03654e-08 1 14.7695 4.30988)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.30561",
                          height: "3.00711",
                          transform:
                            "matrix(-1 -1.03241e-07 -7.40278e-08 1 5.79688 10.9929)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.30561",
                          height: "8.67054",
                          transform:
                            "matrix(0.794072 0.607823 0.607823 -0.794072 8.70801 7.18561)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.30561",
                          height: "2.09914",
                          transform:
                            "matrix(-1 -1.03241e-07 -7.40278e-08 1 10.0137 7.18561)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.30561",
                          height: "2.58897",
                          transform:
                            "matrix(-4.37114e-08 -1 -1 7.2925e-08 11.7227 9.28473)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <path
                        {...{
                          d: "M1.31006 10.9016L1.31006 12.3013L4.49129 13.9999L4.49129 12.6002L1.31006 10.9016Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Blog"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/press-center",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 17 16",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <rect
                        {...{
                          width: "1.48734",
                          height: "13.1477",
                          transform: "matrix(1 0 0 -1 3.26562 13.5322)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.48807",
                          height: "10.6371",
                          transform: "matrix(1 0 0 -1 0 13.5547)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.48817",
                          height: "13.147",
                          transform: "matrix(1 0 0 -1 15.5117 13.5322)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.48754",
                          height: "9.87113",
                          transform:
                            "matrix(-6.19485e-08 1 1 2.91329e-08 4.75391 14.4209)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.48754",
                          height: "7.88877",
                          transform:
                            "matrix(-5.27418e-08 1 1 3.42184e-08 6.15625 5.73633)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.48754",
                          height: "4.51276",
                          transform:
                            "matrix(-1.86252e-08 1 1 9.68978e-08 6.15625 8.63867)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.48754",
                          height: "7.88877",
                          transform:
                            "matrix(-5.27418e-08 1 1 3.42184e-08 6.15625 2.97852)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.50331",
                          height: "13.7346",
                          transform:
                            "matrix(-6.75403e-08 1 1 2.56135e-08 3.26562 0)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <rect
                        {...{
                          width: "1.50331",
                          height: "4.44552",
                          transform:
                            "matrix(-6.75403e-08 1 1 2.56135e-08 0.308594 2.91797)",
                          fill: "currentColor",
                        }}
                      ></rect>
                      <path
                        {...{
                          d: "M2.37598 15.9082C3.68824 15.9082 4.75182 14.8445 4.75195 13.5322V13.5312H3.26465V13.5322C3.26452 14.023 2.86675 14.4209 2.37598 14.4209C1.88531 14.4208 1.48743 14.0229 1.4873 13.5322V13.5312H0V13.5322C0.000129872 14.8444 1.06382 15.9081 2.37598 15.9082Z",
                          fill: "currentColor",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M17.001 13.5312V13.5322C17.0008 14.8443 15.9371 15.908 14.625 15.9082V14.4209C15.1156 14.4207 15.5135 14.0228 15.5137 13.5322V13.5312H17.001Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Press center"}
                    </span>
                  </div>
                </a>
                <a
                  {...{
                    href: "https://www.sui.io/research",
                    className: "hm-dd_link-wrapper w-inline-block",
                  }}
                >
                  <div {...{ className: "hm-dd_link-icon more-padding" }}>
                    <svg
                      {...{
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        className: "object-cover",
                      }}
                    >
                      <path
                        {...{
                          d: "M6.02602 0.00164063V0.000703125L14.4009 0.000820313V1.56082L14.4008 1.5607V4.38961C15.2963 4.56946 16.1504 5.00634 16.8446 5.70059C18.5308 7.38673 18.6995 10.0152 17.3514 11.8903L19.7525 14.2916L18.6495 15.3947L16.2482 12.9935C15.685 13.3984 15.054 13.6666 14.4008 13.7978V19.2011H13.2545V19.2025H0.0009375V17.6425H0.00105469V6.00176L0 6.0007L6.02437 0L6.02602 0.00164063ZM7.56176 6.00023L5.99941 7.56258H1.56105V17.6425H12.8408V13.8533C11.8235 13.7235 10.8398 13.2682 10.0584 12.4869C8.18444 10.6129 8.18444 7.57458 10.0584 5.70059C10.8398 4.91927 11.8235 4.46385 12.8408 4.33406V1.5607H7.56176V6.00023ZM12.0416 16.292H2.4416V14.732H12.0416V16.292ZM7.61895 13.382H2.4416V11.822H7.61895V13.382ZM15.7416 6.80367C14.4768 5.53896 12.4263 5.53895 11.1615 6.80367C9.89674 8.06845 9.89674 10.1191 11.1615 11.3838C12.4263 12.6486 14.4768 12.6485 15.7416 11.3838C17.0063 10.1191 17.0063 8.06844 15.7416 6.80367ZM2.20852 6.00258H6.00176V2.22434L2.20852 6.00258Z",
                          fill: "currentColor",
                        }}
                      ></path>
                    </svg>
                  </div>
                  <div {...{ className: "w-layout-vflex gap-8" }}>
                    <span {...{ "global-target": "", className: "hm-dd_link" }}>
                      {"Research"}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
