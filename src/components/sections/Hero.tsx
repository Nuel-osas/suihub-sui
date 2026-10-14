import type { CSSProperties } from "react";
export default function Hero() {
  return (
    <>
      <div {...{ className: "gradient_background" }}>
        <div {...{ "inner-fixed-load": "", className: "hero_overlay" }}>
          <div
            {...{
              "inner-fixed-load-background": "",
              className: "background_intro",
            }}
          ></div>
          <div
            {...{
              "data-poster-url":
                "/assets/fd62097b-6a75577cf4856b9faaa18884_Sui_-_New_Homepage_Visual_-_Desktop_-_With_Grain_poster.0000000.jpg",
              "data-video-urls":
                "/assets/509f3a78-6a75577cf4856b9faaa18884_Sui_-_New_Homepage_Visual_-_Desktop_-_With_Grain_mp4.mp4,/assets/3fc137b0-6a75577cf4856b9faaa18884_Sui_-_New_Homepage_Visual_-_Desktop_-_With_Grain_webm.webm",
              "data-autoplay": "true",
              "data-loop": "true",
              "data-wf-ignore": "true",
              className:
                "hero_bg-vid desktoponly w-background-video w-background-video-atom",
            }}
          >
            <video
              {...{
                id: "3894bdd7-3e0f-c1d6-47e7-9a3d2de352b3-video",
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                "data-wf-ignore": "true",
                "data-object-fit": "cover",
              }}
              style={
                {
                  backgroundImage:
                    'url("/assets/fd62097b-6a75577cf4856b9faaa18884_Sui_-_New_Homepage_Visual_-_Desktop_-_With_Grain_poster.0000000.jpg")',
                } as CSSProperties
              }
            >
              <source
                {...{
                  src: "/assets/509f3a78-6a75577cf4856b9faaa18884_Sui_-_New_Homepage_Visual_-_Desktop_-_With_Grain_mp4.mp4",
                  "data-wf-ignore": "true",
                }}
              />
              <source
                {...{
                  src: "/assets/3fc137b0-6a75577cf4856b9faaa18884_Sui_-_New_Homepage_Visual_-_Desktop_-_With_Grain_webm.webm",
                  "data-wf-ignore": "true",
                }}
              />
            </video>
          </div>
          <div
            {...{
              "data-poster-url":
                "/assets/ff9b1414-6a755ba8c24c792a326dec12_Sui_-_New_Homepage_Visual_-_Mobile_-_With_Grain_poster.0000000.jpg",
              "data-video-urls":
                "/assets/5e0f4411-6a755ba8c24c792a326dec12_Sui_-_New_Homepage_Visual_-_Mobile_-_With_Grain_mp4.mp4,/assets/823b27a5-6a755ba8c24c792a326dec12_Sui_-_New_Homepage_Visual_-_Mobile_-_With_Grain_webm.webm",
              "data-autoplay": "true",
              "data-loop": "true",
              "data-wf-ignore": "true",
              className:
                "hero_bg-vid mobileonly w-background-video w-background-video-atom",
            }}
          >
            <video
              {...{
                id: "a8d8d3ac-21f6-838e-06f7-80b8874eca44-video",
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                "data-wf-ignore": "true",
                "data-object-fit": "cover",
              }}
              style={
                {
                  backgroundImage:
                    'url("/assets/ff9b1414-6a755ba8c24c792a326dec12_Sui_-_New_Homepage_Visual_-_Mobile_-_With_Grain_poster.0000000.jpg")',
                } as CSSProperties
              }
            >
              <source
                {...{
                  src: "/assets/5e0f4411-6a755ba8c24c792a326dec12_Sui_-_New_Homepage_Visual_-_Mobile_-_With_Grain_mp4.mp4",
                  "data-wf-ignore": "true",
                }}
              />
              <source
                {...{
                  src: "/assets/823b27a5-6a755ba8c24c792a326dec12_Sui_-_New_Homepage_Visual_-_Mobile_-_With_Grain_webm.webm",
                  "data-wf-ignore": "true",
                }}
              />
            </video>
          </div>
        </div>
        <section {...{ className: "hero-section custom_hero" }}>
          <div {...{ className: "intro_holder" }}>
            <div {...{ className: "intro_map" }}>
              <div {...{ className: "line_progress" }}>
                <div {...{ className: "current_percent" }}>
                  <div {...{ className: "percent_wrapper" }}>
                    <div {...{ className: "block-12 bg-primary-blue" }}></div>
                    <div
                      {...{ className: "ts-16px color-white padding-bottom" }}
                    >
                      {"0%"}
                    </div>
                  </div>
                </div>
                <div {...{ className: "line_current" }}>
                  <img
                    {...{
                      src: "/assets/856f9d7f-6901316af5849175ac89f762_Frame_2147267312__1_.avif",
                      loading: "eager",
                      alt: "",
                      className: "image-9",
                    }}
                  />
                  <div {...{ className: "black_overlay" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div {...{ className: "hero_first_section hero_mob" }}>
            <div {...{ className: "w-layout-vflex text-layers custom_mob" }}>
              <div {...{ className: "first_section_content" }}>
                <h1
                  {...{ className: "hero_heading absolute sharp desktoponly" }}
                >
                  {"Where AI transacts"}
                </h1>
                <h1
                  {...{ className: "hero_heading absolute sharp mobileonly" }}
                >
                  {"Where AI transacts"}
                </h1>
              </div>
              <div
                {...{ className: "pt-20px color--d4d4d4 trim home-hero_desc" }}
              >
                {"Sui is the infrastructure for trusted autonomous execution"}
              </div>
            </div>
            <div {...{ className: "first_section_content_2 subhead-block" }}>
              <div {...{ className: "cta-wrapper width_auto" }}>
                <a
                  {...{
                    id: "w-node-ea6c916b-f8f4-5e35-fc7f-a7ca22081870-4b72e4d1",
                    global: "textStagger",
                    href: "https://docs.sui.io/",
                    target: "_blank",
                    className: "cta-button is--blue",
                    rel: "noopener noreferrer",
                  }}
                >
                  <span {...{ "global-target": "" }}>{"Go to docs"}</span>
                </a>
                <a
                  {...{
                    global: "textStagger",
                    href: "https://sui.io/get-started",
                    target: "_self",
                    className: "cta-button is--alternative",
                  }}
                >
                  <span {...{ "global-target": "" }}>{"Get a wallet"}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
