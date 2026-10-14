import type { CSSProperties } from "react";
export default function StackCaption() {
  return (
    <>
      <div {...{ className: "sticky_overlap home-page" }}>
        <div {...{ "global-blur-parent": "", className: "padding-large" }}>
          <div {...{ className: "container-1400" }}>
            <div {...{ className: "sui_wrap hero-section" }}>
              <div
                {...{ global: "initMasking", className: "sui_logo home-page" }}
              >
                <img
                  {...{
                    src: "/assets/48cf8268-691c9f83bd454cf45226958c_white.svg",
                    loading: "lazy",
                    alt: "",
                    className: "logo_mask full-height",
                  }}
                />
                <img
                  {...{
                    src: "/assets/4befc9f6-691c9f978c35f8c7e672452d_blue1.svg",
                    loading: "lazy",
                    "global-mask": "",
                    alt: "",
                    className: "seq_cover",
                  }}
                />
                <img
                  {...{
                    src: "/assets/8182d0bf-691c9fabcac0bd7b54c35702_blue2.svg",
                    loading: "lazy",
                    "global-mask": "",
                    alt: "",
                    className: "seq_cover",
                  }}
                />
                <img
                  {...{
                    src: "/assets/e830c1ca-691ca0480af7ef012a2e7336_blue3.svg",
                    loading: "lazy",
                    "global-mask": "",
                    alt: "",
                    className: "seq_cover",
                  }}
                />
                <img
                  {...{
                    src: "/assets/47e4a675-691ca0598528ef59f8d5aa25_blue4.svg",
                    loading: "lazy",
                    "global-mask": "",
                    alt: "",
                    className: "seq_cover",
                  }}
                />
                <img
                  {...{
                    src: "/assets/d48a5d27-691ca070de9e100883bf1a2c_blue5.svg",
                    loading: "lazy",
                    "global-mask": "",
                    alt: "",
                    className: "seq_cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
