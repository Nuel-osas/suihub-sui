import type { CSSProperties } from "react";
export default function Footer() {
  return (
    <>
      <div {...{ className: "scroll_footer" }}>
        <footer {...{ className: "footer" }}>
          <div {...{ className: "padding-global" }}>
            <div
              {...{
                className: "w-layout-blockcontainer container-1400 w-container",
              }}
            >
              <div {...{ className: "w-layout-vflex footer-layout" }}>
                <div {...{ className: "w-layout-vflex footer-component" }}>
                  <svg
                    {...{
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "100%",
                      viewBox: "0 0 1440 2",
                      fill: "none",
                      preserveAspectRatio: "none",
                      inner: "dots-hover",
                      className: "dottedhorizontal desktophidden",
                    }}
                  >
                    <path
                      {...{
                        d: "M0 1L1440 0.999878",
                        stroke: "#4B515B",
                        strokeWidth: "2",
                        strokeDasharray: "2 8",
                        vectorEffect: "non-scaling-stroke",
                        "data-dots": "",
                      }}
                    ></path>
                  </svg>
                  <svg
                    {...{
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "100%",
                      viewBox: "0 0 1440 2",
                      fill: "none",
                      preserveAspectRatio: "none",
                      inner: "dots-hover",
                      className: "dottedhorizontal mobilehidden",
                    }}
                  >
                    <path
                      {...{
                        d: "M0 1L1440 0.999878",
                        stroke: "#4B515B",
                        strokeWidth: "2",
                        strokeDasharray: "2 8",
                        vectorEffect: "non-scaling-stroke",
                        "data-dots": "",
                      }}
                    ></path>
                  </svg>
                  <div {...{ className: "w-layout-vflex footer_content" }}>
                    <div {...{ className: "w-layout-hflex gap-8" }}>
                      <svg
                        {...{
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "100%",
                          viewBox: "0 0 26 33",
                          fill: "none",
                          className: "sui_droplet",
                        }}
                      >
                        <path
                          {...{
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M20.6338 13.7453C21.9783 15.4333 22.7822 17.5681 22.7822 19.8903C22.7822 22.2126 21.9538 24.4126 20.5741 26.1101L20.4546 26.2567L20.4233 26.0707C20.3962 25.9132 20.3649 25.7529 20.3283 25.5927C19.637 22.5561 17.3854 19.9528 13.6794 17.8438C11.1765 16.4233 9.74383 14.7149 9.36766 12.7716C9.12457 11.5154 9.30519 10.2538 9.6542 9.17278C10.0032 8.09315 10.522 7.18735 10.9633 6.64278L12.4056 4.88007C12.6581 4.57044 13.1321 4.57044 13.3847 4.88007L20.6352 13.7453H20.6338ZM22.914 11.9839L13.2502 0.169074C13.0656 -0.0563581 12.7206 -0.0563581 12.5359 0.169074L2.87358 11.9839L2.84235 12.0233C1.06469 14.2301 0 17.0344 0 20.0872C0 27.1965 5.77296 32.96 12.8931 32.96C20.0132 32.96 25.7862 27.1965 25.7862 20.0872C25.7862 17.0344 24.7215 14.2301 22.9438 12.0246L22.9126 11.9853L22.914 11.9839ZM5.1863 13.7072L6.05 12.6493L6.0758 12.8449C6.09617 12.9997 6.12198 13.1545 6.15185 13.3107C6.71136 16.2454 8.70901 18.6912 12.0484 20.5856C14.9519 22.2384 16.6426 24.1382 17.1288 26.2214C17.3325 27.0906 17.3678 27.9461 17.2795 28.6944L17.2741 28.7406L17.232 28.7609C15.9215 29.4006 14.448 29.7605 12.8917 29.7605C7.43111 29.7605 3.00395 25.3414 3.00395 19.889C3.00395 17.5477 3.82012 15.398 5.18358 13.7045L5.1863 13.7072Z",
                            fill: "currentColor",
                          }}
                        ></path>
                      </svg>
                    </div>
                    <div {...{ className: "gap-22 align_left" }}>
                      <div {...{ className: "w-layout-grid footer_grid" }}>
                        <div
                          {...{
                            "footer-reveal": "",
                            className:
                              "w-layout-vflex gap-20 mobilegap-13 full-width",
                          }}
                        >
                          <svg
                            {...{
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "100%",
                              viewBox: "0 0 1440 2",
                              fill: "none",
                              preserveAspectRatio: "none",
                              inner: "dots-hover",
                              className: "dottedhorizontal desktophidden",
                            }}
                          >
                            <path
                              {...{
                                d: "M0 1L1440 0.999878",
                                stroke: "#4B515B",
                                strokeWidth: "2",
                                strokeDasharray: "2 8",
                                vectorEffect: "non-scaling-stroke",
                                "data-dots": "",
                              }}
                            ></path>
                          </svg>
                          <div {...{ className: "footer_spacebetween" }}>
                            <h3 {...{ className: "footer_heading" }}>
                              {"Stack/"}
                            </h3>
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 12 12",
                                fill: "none",
                                className: "navbar-dd_icon desktophidden",
                              }}
                            >
                              <path
                                {...{
                                  d: "M11.1992 5.03516V6.1543H6.62305V5.03516H11.1992ZM4.56641 6.1543H0V5.03516H4.56641V6.1543Z",
                                  fill: "currentColor",
                                  className: "horizontal-lines",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M6.15918 11.1992H5.04004V6.62793H6.15918V11.1992ZM6.15918 4.57129H5.04004V0H6.15918V4.57129Z",
                                  fill: "currentColor",
                                  className: "vertical-lines",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div
                            {...{ id: "", className: "footer_block_wrapper" }}
                          >
                            <div {...{ id: "" }}>
                              <ul {...{ className: "footer_list" }}>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/intro-to-sui",
                                      className:
                                        "footer_link-block hy-top w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Intro to Sui Stack"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/zklogin",
                                      className:
                                        "footer_link-block w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"zkLogin"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/passkey",
                                      className:
                                        "footer_link-block w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Passkey"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/hashi",
                                      className:
                                        "footer_link-block w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Hashi"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://deepbook.tech/",
                                      target: "_blank",
                                      className:
                                        "footer_link-block w-inline-block",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"DeepBook"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.walrus.xyz/",
                                      target: "_blank",
                                      className:
                                        "footer_link-block w-inline-block",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Walrus"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://seal.mystenlabs.com/",
                                      target: "_blank",
                                      className:
                                        "footer_link-block w-inline-block",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Seal"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/nautilus",
                                      className:
                                        "footer_link-block w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Nautilus"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://suins.io/",
                                      target: "_blank",
                                      className:
                                        "footer_link-block w-inline-block",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"SuiNS"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/mysticeti",
                                      className:
                                        "footer_link-block w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Mysticeti"}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          {...{ className: "w-layout-vflex gap-40 mob_no-gap" }}
                        >
                          <div
                            {...{
                              "footer-reveal": "",
                              className:
                                "w-layout-vflex gap-20 mobilegap-13 full-width",
                            }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 1440 2",
                                fill: "none",
                                preserveAspectRatio: "none",
                                inner: "dots-hover",
                                className: "dottedhorizontal desktophidden",
                              }}
                            >
                              <path
                                {...{
                                  d: "M0 1L1440 0.999878",
                                  stroke: "#4B515B",
                                  strokeWidth: "2",
                                  strokeDasharray: "2 8",
                                  vectorEffect: "non-scaling-stroke",
                                  "data-dots": "",
                                }}
                              ></path>
                            </svg>
                            <div {...{ className: "footer_spacebetween" }}>
                              <h3 {...{ className: "footer_heading" }}>
                                {"Solutions/"}
                              </h3>
                              <svg
                                {...{
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "100%",
                                  viewBox: "0 0 12 12",
                                  fill: "none",
                                  className: "navbar-dd_icon desktophidden",
                                }}
                              >
                                <path
                                  {...{
                                    d: "M11.1992 5.03516V6.1543H6.62305V5.03516H11.1992ZM4.56641 6.1543H0V5.03516H4.56641V6.1543Z",
                                    fill: "currentColor",
                                    className: "horizontal-lines",
                                  }}
                                ></path>
                                <path
                                  {...{
                                    d: "M6.15918 11.1992H5.04004V6.62793H6.15918V11.1992ZM6.15918 4.57129H5.04004V0H6.15918V4.57129Z",
                                    fill: "currentColor",
                                    className: "vertical-lines",
                                  }}
                                ></path>
                              </svg>
                            </div>
                            <div
                              {...{ id: "", className: "footer_block_wrapper" }}
                            >
                              <div {...{ id: "" }}>
                                <ul {...{ className: "footer_list" }}>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/payments",
                                        className:
                                          "footer_link-block w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Payments"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/institutions-capital-markets",
                                        className:
                                          "footer_link-block hy-top w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Capital Markets"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/defi",
                                        className:
                                          "footer_link-block w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"DeFi"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/ai",
                                        className:
                                          "footer_link-block w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"AI"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/gaming",
                                        className:
                                          "footer_link-block w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Gaming"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/usdc",
                                        className:
                                          "footer_link-block w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"USDC"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/privacy",
                                        className:
                                          "footer_link-block w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Privacy"}
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            {...{
                              "footer-reveal": "",
                              className:
                                "w-layout-vflex gap-20 mobilegap-13 full-width",
                            }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 1440 2",
                                fill: "none",
                                preserveAspectRatio: "none",
                                inner: "dots-hover",
                                className: "dottedhorizontal desktophidden",
                              }}
                            >
                              <path
                                {...{
                                  d: "M0 1L1440 0.999878",
                                  stroke: "#4B515B",
                                  strokeWidth: "2",
                                  strokeDasharray: "2 8",
                                  vectorEffect: "non-scaling-stroke",
                                  "data-dots": "",
                                }}
                              ></path>
                            </svg>
                            <div {...{ className: "footer_spacebetween" }}>
                              <h3 {...{ className: "footer_heading" }}>
                                {"Network/"}
                              </h3>
                              <svg
                                {...{
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "100%",
                                  viewBox: "0 0 12 12",
                                  fill: "none",
                                  className: "navbar-dd_icon desktophidden",
                                }}
                              >
                                <path
                                  {...{
                                    d: "M11.1992 5.03516V6.1543H6.62305V5.03516H11.1992ZM4.56641 6.1543H0V5.03516H4.56641V6.1543Z",
                                    fill: "currentColor",
                                    className: "horizontal-lines",
                                  }}
                                ></path>
                                <path
                                  {...{
                                    d: "M6.15918 11.1992H5.04004V6.62793H6.15918V11.1992ZM6.15918 4.57129H5.04004V0H6.15918V4.57129Z",
                                    fill: "currentColor",
                                    className: "vertical-lines",
                                  }}
                                ></path>
                              </svg>
                            </div>
                            <div
                              {...{ id: "", className: "footer_block_wrapper" }}
                            >
                              <div {...{ id: "" }}>
                                <ul {...{ className: "footer_list" }}>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/validators",
                                        className:
                                          "footer_link-block w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Validators"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/security",
                                        className:
                                          "footer_link-block w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Security"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/bug-bounty-program",
                                        className:
                                          "footer_link-block hy-top w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Bug Bounty Program"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/networkinfo",
                                        className:
                                          "footer_link-block hy-top w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Network Info"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://status.sui.io/",
                                        target: "_blank",
                                        className:
                                          "footer_link-block hy-top w-inline-block",
                                        rel: "noopener noreferrer",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Network Status"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://status.sui.io/history",
                                        target: "_blank",
                                        className:
                                          "footer_link-block hy-top w-inline-block",
                                        rel: "noopener noreferrer",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Incident History"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://status.sui.io/uptime",
                                        target: "_blank",
                                        className:
                                          "footer_link-block hy-top w-inline-block",
                                        rel: "noopener noreferrer",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Uptime"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/token-schedule",
                                        className:
                                          "footer_link-block hy-top w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"SUI Circulation"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/deflation",
                                        className:
                                          "footer_link-block hy-top w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"SUI Deflation"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/buybacks",
                                        className:
                                          "footer_link-block hy-top w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"SUI Buybacks"}
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          {...{
                            "footer-reveal": "",
                            className:
                              "w-layout-vflex gap-20 mobilegap-13 full-width",
                          }}
                        >
                          <svg
                            {...{
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "100%",
                              viewBox: "0 0 1440 2",
                              fill: "none",
                              preserveAspectRatio: "none",
                              inner: "dots-hover",
                              className: "dottedhorizontal desktophidden",
                            }}
                          >
                            <path
                              {...{
                                d: "M0 1L1440 0.999878",
                                stroke: "#4B515B",
                                strokeWidth: "2",
                                strokeDasharray: "2 8",
                                vectorEffect: "non-scaling-stroke",
                                "data-dots": "",
                              }}
                            ></path>
                          </svg>
                          <div {...{ className: "footer_spacebetween" }}>
                            <h3 {...{ className: "footer_heading" }}>
                              {"Build/"}
                            </h3>
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 12 12",
                                fill: "none",
                                className: "navbar-dd_icon desktophidden",
                              }}
                            >
                              <path
                                {...{
                                  d: "M11.1992 5.03516V6.1543H6.62305V5.03516H11.1992ZM4.56641 6.1543H0V5.03516H4.56641V6.1543Z",
                                  fill: "currentColor",
                                  className: "horizontal-lines",
                                }}
                              ></path>
                              <path
                                {...{
                                  d: "M6.15918 11.1992H5.04004V6.62793H6.15918V11.1992ZM6.15918 4.57129H5.04004V0H6.15918V4.57129Z",
                                  fill: "currentColor",
                                  className: "vertical-lines",
                                }}
                              ></path>
                            </svg>
                          </div>
                          <div
                            {...{ id: "", className: "footer_block_wrapper" }}
                          >
                            <div {...{ id: "" }}>
                              <ul {...{ className: "footer_list" }}>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/ecosystem",
                                      className:
                                        "footer_link-block w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Builder Hub"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/move",
                                      className:
                                        "footer_link-block w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Move"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://docs.sui.io/",
                                      target: "_blank",
                                      className:
                                        "footer_link-block w-inline-block",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Docs"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://docs.sui.io/getting-started/sui-mcp-server",
                                      target: "_blank",
                                      className:
                                        "footer_link-block w-inline-block",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"AI Coding Assistant"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://docs.sui.io/guides/developer/getting-started",
                                      target: "_blank",
                                      className:
                                        "footer_link-block w-inline-block",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Getting Started"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://github.com/sui-foundation/awesome-sui/tree/main",
                                      target: "_blank",
                                      className:
                                        "footer_link-block w-inline-block",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Tools"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/project-ideas",
                                      className:
                                        "footer_link-block w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Project Ideas"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.deepsurge.xyz/",
                                      target: "_blank",
                                      className:
                                        "footer_link-block w-inline-block",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Hackathons"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://luma.com/sui-network?period=past",
                                      target: "_blank",
                                      className:
                                        "footer_link-block w-inline-block",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Events"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://discord.com/invite/sui",
                                      target: "_blank",
                                      className:
                                        "footer_link-block w-inline-block",
                                      rel: "noopener noreferrer",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Discord"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/community",
                                      className:
                                        "footer_link-block w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Online Communities"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/launch-on-sui",
                                      className:
                                        "footer_link-block w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Launch Playbook"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/founder-starter-pack",
                                      className:
                                        "footer_link-block w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Founder Starter Pack"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/faq",
                                      className:
                                        "footer_link-block w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Builder FAQ"}
                                    </span>
                                  </a>
                                </li>
                                <li {...{ className: "footer_list-item" }}>
                                  <a
                                    {...{
                                      "global-color": "#fff",
                                      global: "shuffleHover",
                                      href: "https://www.sui.io/programs-funding",
                                      className:
                                        "footer_link-block w-inline-block",
                                    }}
                                  >
                                    <svg
                                      {...{
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "100%",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        className: "footer_svg",
                                      }}
                                    >
                                      <path
                                        {...{
                                          d: "M1 0.125V7.42188H22",
                                          stroke: "currentColor",
                                          strokeWidth: "1.5",
                                        }}
                                      ></path>
                                    </svg>
                                    <span
                                      {...{
                                        "global-target": "",
                                        className: "footer_link-text",
                                      }}
                                    >
                                      {"Programs & Funding"}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          {...{ className: "w-layout-vflex gap-40 mob_no-gap" }}
                        >
                          <div
                            {...{
                              "footer-reveal": "",
                              className:
                                "w-layout-vflex gap-20 mobilegap-13 full-width",
                            }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 1440 2",
                                fill: "none",
                                preserveAspectRatio: "none",
                                inner: "dots-hover",
                                className: "dottedhorizontal desktophidden",
                              }}
                            >
                              <path
                                {...{
                                  d: "M0 1L1440 0.999878",
                                  stroke: "#4B515B",
                                  strokeWidth: "2",
                                  strokeDasharray: "2 8",
                                  vectorEffect: "non-scaling-stroke",
                                  "data-dots": "",
                                }}
                              ></path>
                            </svg>
                            <div {...{ className: "footer_spacebetween" }}>
                              <h3 {...{ className: "footer_heading" }}>
                                {"Learn/"}
                              </h3>
                              <svg
                                {...{
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "100%",
                                  viewBox: "0 0 12 12",
                                  fill: "none",
                                  className: "navbar-dd_icon desktophidden",
                                }}
                              >
                                <path
                                  {...{
                                    d: "M11.1992 5.03516V6.1543H6.62305V5.03516H11.1992ZM4.56641 6.1543H0V5.03516H4.56641V6.1543Z",
                                    fill: "currentColor",
                                    className: "horizontal-lines",
                                  }}
                                ></path>
                                <path
                                  {...{
                                    d: "M6.15918 11.1992H5.04004V6.62793H6.15918V11.1992ZM6.15918 4.57129H5.04004V0H6.15918V4.57129Z",
                                    fill: "currentColor",
                                    className: "vertical-lines",
                                  }}
                                ></path>
                              </svg>
                            </div>
                            <div
                              {...{ id: "", className: "footer_block_wrapper" }}
                            >
                              <div {...{ id: "" }}>
                                <ul {...{ className: "footer_list" }}>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/blog",
                                        className:
                                          "footer_link-block w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Blog"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/press-center",
                                        className:
                                          "footer_link-block w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Press Center"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/research",
                                        className:
                                          "footer_link-block w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Research"}
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            {...{
                              "footer-reveal": "",
                              className:
                                "w-layout-vflex gap-20 mobilegap-13 full-width",
                            }}
                          >
                            <svg
                              {...{
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100%",
                                viewBox: "0 0 1440 2",
                                fill: "none",
                                preserveAspectRatio: "none",
                                inner: "dots-hover",
                                className: "dottedhorizontal desktophidden",
                              }}
                            >
                              <path
                                {...{
                                  d: "M0 1L1440 0.999878",
                                  stroke: "#4B515B",
                                  strokeWidth: "2",
                                  strokeDasharray: "2 8",
                                  vectorEffect: "non-scaling-stroke",
                                  "data-dots": "",
                                }}
                              ></path>
                            </svg>
                            <div {...{ className: "footer_spacebetween" }}>
                              <h3 {...{ className: "footer_heading" }}>
                                {"About/"}
                              </h3>
                              <svg
                                {...{
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "100%",
                                  viewBox: "0 0 12 12",
                                  fill: "none",
                                  className: "navbar-dd_icon desktophidden",
                                }}
                              >
                                <path
                                  {...{
                                    d: "M11.1992 5.03516V6.1543H6.62305V5.03516H11.1992ZM4.56641 6.1543H0V5.03516H4.56641V6.1543Z",
                                    fill: "currentColor",
                                    className: "horizontal-lines",
                                  }}
                                ></path>
                                <path
                                  {...{
                                    d: "M6.15918 11.1992H5.04004V6.62793H6.15918V11.1992ZM6.15918 4.57129H5.04004V0H6.15918V4.57129Z",
                                    fill: "currentColor",
                                    className: "vertical-lines",
                                  }}
                                ></path>
                              </svg>
                            </div>
                            <div
                              {...{ id: "", className: "footer_block_wrapper" }}
                            >
                              <div {...{ id: "" }}>
                                <ul {...{ className: "footer_list" }}>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/about",
                                        className:
                                          "footer_link-block w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"About Sui Foundation"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://live.standards.site/sui-media-kit",
                                        target: "_blank",
                                        className:
                                          "footer_link-block w-inline-block",
                                        rel: "noopener noreferrer",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Brand Kit"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://jobs.ashbyhq.com/Sui%20Foundation",
                                        target: "_blank",
                                        className:
                                          "footer_link-block w-inline-block",
                                        rel: "noopener noreferrer",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Careers"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/terms",
                                        className:
                                          "footer_link-block hy-top w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Terms of Service"}
                                      </span>
                                    </a>
                                  </li>
                                  <li {...{ className: "footer_list-item" }}>
                                    <a
                                      {...{
                                        "global-color": "#fff",
                                        global: "shuffleHover",
                                        href: "https://www.sui.io/privacy-policy",
                                        className:
                                          "footer_link-block hy-top w-inline-block",
                                      }}
                                    >
                                      <svg
                                        {...{
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "100%",
                                          viewBox: "0 0 22 9",
                                          fill: "none",
                                          className: "footer_svg",
                                        }}
                                      >
                                        <path
                                          {...{
                                            d: "M1 0.125V7.42188H22",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                          }}
                                        ></path>
                                      </svg>
                                      <span
                                        {...{
                                          "global-target": "",
                                          className: "footer_link-text",
                                        }}
                                      >
                                        {"Privacy Policy"}
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div {...{ className: "w-layout-vflex gap-24" }}>
                  <div {...{ className: "w-layout-hflex gap-8" }}>
                    <a
                      {...{
                        href: "https://www.youtube.com/@Sui-Network",
                        target: "_blank",
                        className: "footer_social-block w-inline-block",
                        rel: "noopener noreferrer",
                      }}
                    >
                      <svg
                        {...{
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "100%",
                          viewBox: "0 0 22 15",
                          fill: "none",
                        }}
                      >
                        <path
                          {...{
                            d: "M21.2964 2.56327C21.0557 1.65991 20.3465 0.94855 19.4459 0.707125C17.8136 0.268364 11.2682 0.268364 11.2682 0.268364C11.2682 0.268364 4.72275 0.268364 3.09041 0.707125C2.18985 0.94855 1.48056 1.65991 1.23987 2.56327C0.802486 4.20054 0.802486 7.6166 0.802486 7.6166C0.802486 7.6166 0.802486 11.0326 1.23987 12.67C1.48056 13.5733 2.18985 14.2847 3.09041 14.5262C4.72275 14.9648 11.2682 14.9648 11.2682 14.9648C11.2682 14.9648 17.8136 14.9648 19.4459 14.5262C20.3465 14.2847 21.0557 13.5733 21.2964 12.67C21.7338 11.0326 21.7338 7.6166 21.7338 7.6166C21.7338 7.6166 21.7338 4.20054 21.2964 2.56327Z",
                            fill: "currentColor",
                          }}
                        ></path>
                        <path
                          {...{
                            d: "M9.1276 10.7188L14.5983 7.61738L9.1276 4.51571V10.7188Z",
                            fill: "currentColor",
                            className: "transparent",
                          }}
                        ></path>
                      </svg>
                    </a>
                    <a
                      {...{
                        href: "https://discord.com/invite/sui",
                        target: "_blank",
                        className: "footer_social-block w-inline-block",
                        rel: "noopener noreferrer",
                      }}
                    >
                      <svg
                        {...{
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "100%",
                          viewBox: "0 0 20 15",
                          fill: "none",
                        }}
                      >
                        <path
                          {...{
                            d: "M16.407 1.56015C15.1928 1.00301 13.8907 0.592529 12.5293 0.357432C12.5045 0.352894 12.4797 0.364233 12.467 0.386912C12.2995 0.684751 12.114 1.07331 11.9841 1.37871C10.5198 1.15949 9.06307 1.15949 7.62882 1.37871C7.4989 1.06652 7.30667 0.684751 7.13846 0.386912C7.12569 0.36499 7.10092 0.353651 7.07613 0.357432C5.71548 0.591778 4.41339 1.00225 3.19841 1.56015C3.18789 1.56468 3.17888 1.57225 3.17289 1.58207C0.703121 5.27186 0.026547 8.87095 0.358452 12.4254C0.359953 12.4428 0.369715 12.4594 0.383232 12.47C2.01272 13.6667 3.59115 14.3932 5.14028 14.8747C5.16507 14.8823 5.19134 14.8732 5.20711 14.8528C5.57356 14.3523 5.90021 13.8247 6.18029 13.2698C6.19682 13.2373 6.18104 13.1988 6.14726 13.1859C5.62913 12.9894 5.13577 12.7497 4.66119 12.4776C4.62365 12.4557 4.62065 12.402 4.65518 12.3763C4.75505 12.3014 4.85494 12.2236 4.9503 12.1449C4.96756 12.1306 4.9916 12.1276 5.01188 12.1366C8.12967 13.5601 11.505 13.5601 14.586 12.1366C14.6063 12.1268 14.6304 12.1298 14.6484 12.1442C14.7437 12.2228 14.8436 12.3014 14.9442 12.3763C14.9788 12.402 14.9765 12.4557 14.939 12.4776C14.4644 12.755 13.971 12.9894 13.4522 13.1851C13.4184 13.198 13.4034 13.2373 13.4199 13.2698C13.706 13.8239 14.0326 14.3516 14.3923 14.852C14.4073 14.8732 14.4343 14.8823 14.4591 14.8747C16.0158 14.3932 17.5942 13.6667 19.2237 12.47C19.238 12.4594 19.247 12.4436 19.2485 12.4262C19.6457 8.31682 18.5832 4.74724 16.4318 1.58282C16.4265 1.57225 16.4175 1.56468 16.407 1.56015ZM6.64588 10.2611C5.70721 10.2611 4.93378 9.39936 4.93378 8.34102C4.93378 7.28268 5.69221 6.42091 6.64588 6.42091C7.60703 6.42091 8.37298 7.29025 8.35795 8.34102C8.35795 9.39936 7.59952 10.2611 6.64588 10.2611ZM12.9761 10.2611C12.0374 10.2611 11.264 9.39936 11.264 8.34102C11.264 7.28268 12.0224 6.42091 12.9761 6.42091C13.9373 6.42091 14.7032 7.29025 14.6882 8.34102C14.6882 9.39936 13.9373 10.2611 12.9761 10.2611Z",
                            fill: "currentColor",
                          }}
                        ></path>
                      </svg>
                    </a>
                    <a
                      {...{
                        href: "https://www.linkedin.com/company/sui-foundation/",
                        target: "_blank",
                        className: "footer_social-block w-inline-block",
                        rel: "noopener noreferrer",
                      }}
                    >
                      <svg
                        {...{
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "100%",
                          viewBox: "0 0 17 17",
                          fill: "none",
                        }}
                      >
                        <path
                          {...{
                            d: "M14.0573 14.2765H11.6518V10.5465C11.6518 9.65708 11.6358 8.51208 10.4007 8.51208C9.14783 8.51208 8.95614 9.48117 8.95614 10.4818V14.2763H6.55063V6.60589H8.85991V7.65413H8.89224C9.12335 7.26288 9.4573 6.94102 9.85853 6.72283C10.2598 6.50464 10.7133 6.39829 11.1707 6.4151C13.6088 6.4151 14.0583 8.00297 14.0583 10.0687L14.0573 14.2765ZM3.83644 5.5574C3.56035 5.55745 3.29044 5.47644 3.06085 5.3246C2.83126 5.17276 2.65232 4.95693 2.54662 4.70438C2.44092 4.45184 2.41321 4.17393 2.46703 3.9058C2.52084 3.63768 2.65375 3.39137 2.84894 3.19803C3.04413 3.0047 3.29284 2.87301 3.56362 2.81963C3.83439 2.76625 4.11507 2.79357 4.37016 2.89814C4.62526 3.00271 4.8433 3.17983 4.99673 3.4071C5.15016 3.63438 5.23208 3.90159 5.23213 4.17497C5.23217 4.35648 5.19609 4.53622 5.12596 4.70393C5.05584 4.87163 4.95306 5.02402 4.82345 5.15239C4.69385 5.28076 4.53997 5.3826 4.37062 5.45209C4.20127 5.52159 4.01976 5.55737 3.83644 5.5574ZM5.03919 14.2765H2.63119V6.60589H5.03919V14.2765ZM15.2565 0.581173H1.42244C1.10844 0.577665 0.805871 0.697732 0.581236 0.914989C0.356602 1.13225 0.228281 1.42892 0.224449 1.73982V15.4945C0.22815 15.8055 0.356396 16.1024 0.581022 16.3199C0.805649 16.5374 1.10829 16.6577 1.42244 16.6544H15.2565C15.5713 16.6583 15.8748 16.5383 16.1003 16.3208C16.3258 16.1034 16.4549 15.8061 16.4593 15.4945V1.73883C16.4548 1.42731 16.3256 1.1303 16.1001 0.913048C15.8745 0.695796 15.5711 0.576072 15.2565 0.58018",
                            fill: "currentColor",
                          }}
                        ></path>
                      </svg>
                    </a>
                    <a
                      {...{
                        href: "https://twitter.com/SuiNetwork",
                        target: "_blank",
                        className: "footer_social-block w-inline-block",
                        rel: "noopener noreferrer",
                      }}
                    >
                      <svg
                        {...{
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "100%",
                          viewBox: "0 0 16 15",
                          fill: "none",
                        }}
                      >
                        <g {...{ clipPath: "url(#clip0_8143_6092)" }}>
                          <path
                            {...{
                              d: "M12.3227 0.624023H14.6846L9.52569 6.55986L15.6169 14.609H10.831L7.10163 9.72979L2.81291 14.609H0.451005L5.98284 8.26914L0.140228 0.624023H5.05051L8.43797 5.09921L12.3227 0.624023ZM11.4836 13.1794H12.7889L4.33572 1.96036H2.90614L11.4836 13.1794Z",
                              fill: "currentColor",
                            }}
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div {...{ className: "footer_copyright" }}>
                    {"©2026 Copyright Sui Foundation. All rights reserved"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div {...{ className: "custom_scroll" }}>
          <div {...{ className: "scroll_expander" }}>
            <svg
              {...{
                xmlns: "http://www.w3.org/2000/svg",
                width: "100%",
                viewBox: "0 0 1481 535",
                fill: "none",
                className: "rebound_effect",
              }}
            >
              <defs>
                <linearGradient
                  {...{
                    id: "strokeGradient1",
                    x1: "0%",
                    y1: "0%",
                    x2: "0",
                    y2: "100%",
                    gradientUnits: "userSpaceOnUse",
                  }}
                >
                  <stop
                    {...{
                      stopOpacity: "0",
                      stopColor: "#FFFFFF",
                      offset: "0%",
                    }}
                  ></stop>
                  <stop
                    {...{
                      stopOpacity: "1",
                      stopColor: "#FFFFFF",
                      offset: "100%",
                    }}
                  ></stop>
                </linearGradient>
                <linearGradient
                  {...{
                    id: "strokeGradient2",
                    x1: "0%",
                    y1: "20%",
                    x2: "0",
                    y2: "100%",
                    gradientUnits: "userSpaceOnUse",
                  }}
                >
                  <stop
                    {...{
                      stopOpacity: "0",
                      stopColor: "#FFFFFF",
                      offset: "0%",
                    }}
                  ></stop>
                  <stop
                    {...{
                      stopOpacity: "1",
                      stopColor: "#FFFFFF",
                      offset: "100%",
                    }}
                  ></stop>
                </linearGradient>
                <linearGradient
                  {...{
                    id: "strokeGradient3",
                    x1: "0%",
                    y1: "40%",
                    x2: "0",
                    y2: "100%",
                    gradientUnits: "userSpaceOnUse",
                  }}
                >
                  <stop
                    {...{
                      stopOpacity: "0",
                      stopColor: "#FFFFFF",
                      offset: "0%",
                    }}
                  ></stop>
                  <stop
                    {...{
                      stopOpacity: "1",
                      stopColor: "#FFFFFF",
                      offset: "100%",
                    }}
                  ></stop>
                </linearGradient>
              </defs>
              <g {...{ className: "rebound_blocks" }}>
                <path
                  {...{
                    opacity: "0.8",
                    d: "M634.196 152.52H846.378V535.131H634.196V222.52Z",
                    fill: "currentColor",
                  }}
                ></path>
                <path
                  {...{
                    opacity: "0.8",
                    d: "M423 221.6H635V535H423V277Z",
                    fill: "currentColor",
                  }}
                ></path>
                <path
                  {...{
                    opacity: "0.6",
                    d: "M211.583  284.416H423.765V535.131H211.583V330.52Z",
                    fill: "currentColor",
                  }}
                ></path>
                <path
                  {...{
                    opacity: "0.4",
                    d: "M0.275879 355.52H212.458V535.131H0.275879V402.52Z",
                    fill: "currentColor",
                  }}
                ></path>
                <path
                  {...{
                    opacity: "0.8",
                    d: "M1058.23 221.6H846.052V535.131H1058.23V276.52Z",
                    fill: "currentColor",
                  }}
                ></path>
                <path
                  {...{
                    opacity: "0.6",
                    d: "M1269.54 284.416H1057.36V535.131H1269.54V330.52Z",
                    fill: "currentColor",
                  }}
                ></path>
                <path
                  {...{
                    opacity: "0.4",
                    d: "M1480.85 355.52H1268.67V535.131H1480.85V402.52Z",
                    fill: "currentColor",
                  }}
                ></path>
              </g>
              <g {...{ className: "rebound_dots" }}>
                <path
                  {...{
                    d: "M1269.54 238.676L1269.54 541.232",
                    stroke: "url(#strokeGradient3)",
                    strokeWidth: "2",
                    strokeDasharray: "2 10",
                  }}
                ></path>
                <path
                  {...{
                    d: "M1058.23 156.064V541.232",
                    stroke: "url(#strokeGradient2)",
                    strokeWidth: "2",
                    strokeDasharray: "2 10",
                    fill: "none",
                  }}
                ></path>
                <path
                  {...{
                    d: "M846.928 0.597656V541.232",
                    stroke: "url(#strokeGradient1)",
                    strokeWidth: "2",
                    strokeDasharray: "2 10",
                    fill: "none",
                  }}
                ></path>
                <path
                  {...{
                    d: "M635.621 0.597656V541.232",
                    stroke: "url(#strokeGradient1)",
                    strokeWidth: "2",
                    strokeDasharray: "2 10",
                  }}
                ></path>
                <path
                  {...{
                    d: "M424.314 156.064V541.232",
                    stroke: "url(#strokeGradient2)",
                    strokeWidth: "2",
                    strokeDasharray: "2 10",
                  }}
                ></path>
                <path
                  {...{
                    d: "M213.007 238.676L213.007 541.232",
                    stroke: "url(#strokeGradient3)",
                    strokeWidth: "2",
                    strokeDasharray: "2 10",
                  }}
                ></path>
              </g>
            </svg>
            <canvas {...{ className: "noise absolutetop" }}></canvas>
          </div>
          <div {...{ className: "w-embed" }}></div>
        </div>
      </div>
    </>
  );
}
