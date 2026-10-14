import type { CSSProperties } from "react";
import SiteRuntime from "@/components/SiteRuntime";
import Navigation from "@/components/sections/Navigation";
import BasecampPopup from "@/components/sections/BasecampPopup";
import Hero from "@/components/sections/Hero";
import Basecamp from "@/components/sections/Basecamp";
import Partners from "@/components/sections/Partners";
import Economy from "@/components/sections/Economy";
import Stack from "@/components/sections/Stack";
import StackCaption from "@/components/sections/StackCaption";
import Benefits from "@/components/sections/Benefits";
import Industries from "@/components/sections/Industries";
import News from "@/components/sections/News";
import Footer from "@/components/sections/Footer";
export default function Home() {
  return (
    <>
      <div {...{ className: "rebounce-effect" }}>
        <div {...{ className: "page-wrapper" }}>
          <Navigation />
          <BasecampPopup />
          <main {...{ className: "main-wrapper" }}>
            <div {...{ "home-trigger": "", className: "seqtrigger" }}>
              <Hero />
              <Basecamp />
              <Partners />
              <div {...{ className: "stickyblink" }}>
                <section {...{ className: "blink_wrap" }}>
                  <div
                    {...{ "reveal-gradient": "", className: "padding-global" }}
                  >
                    <div {...{ className: "container-1400" }}>
                      <div
                        {...{
                          "global-stickyblink": "",
                          className: "w-layout-vflex home-trust_layout",
                        }}
                      >
                        <div {...{ className: "w-layout-vflex gap-30" }}>
                          <span {...{ className: "gray_span" }}>
                            {"The economy, rebuilt for autonomous participants"}
                          </span>
                          <div
                            {...{
                              className: "h2-78px color-black ls-0-5 trim",
                            }}
                          >
                            {
                              "Money and work are being handed to agents. When you can't watch every action, the rules have to. On Sui, the rules travel with the money and hold at machine speed — for people and agents alike. Don't trust the agent. Trust the rules."
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <Economy />
            </div>
            <div {...{ id: "canvasPin", className: "canvas-wrapper" }}>
              <canvas {...{ className: "canvas_sequence" }}></canvas>
            </div>
            <Stack />
            <StackCaption />
            <div>
              <Benefits />
              <Industries />
              <News />
            </div>
          </main>
        </div>
        <Footer />
      </div>
      {"\n"}
      {"\n\n\n"}
      {"\n"}
      {"\n\n\n\n\n"}
      {"\n\n"}
      {"\n"}
      {"\n\n"}
      {"\n\n"}
      {"\n"}
      {"\n"}
      {"\n\n"}
      {"\n\n"}
      {"\n\n"}
      {"\n\n"}
      <SiteRuntime />
    </>
  );
}
