"use client";

import { useEffect } from "react";
import vendorScripts from "@/lib/vendor-scripts.json";

declare global {
  interface Window {
    mountSui?: () => () => void;
    suiReady?: boolean;
    suiError?: string;
  }
}

let ready: Promise<void> | undefined;
function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Cannot load ${src}`));
    document.body.appendChild(script);
  });
}
function prepare() {
  ready ??= (async () => {
    await document.fonts.ready;
    for (const src of vendorScripts) await loadScript(src);
    await loadScript("/sui-interactions.js");
  })();
  return ready;
}

export default function SiteRuntime() {
  useEffect(() => {
    let active = true;
    let dispose: (() => void) | undefined;
    if ("ontouchstart" in window)
      document.documentElement.classList.add("w-mod-touch");
    const submit = (event: Event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      let status = form.querySelector("[data-local-status]");
      if (!status) {
        status = document.createElement("p");
        status.setAttribute("data-local-status", "");
        status.setAttribute("role", "status");
        form.appendChild(status);
      }
      status.textContent =
        "This preview does not send subscriptions. Visit sui.io to subscribe.";
    };
    document.addEventListener("submit", submit, true);
    prepare()
      .then(() => {
        if (!active) return;
        if (!window.mountSui)
          throw new Error("The homepage animation module did not initialize.");
        dispose = window.mountSui();
        window.suiReady = true;
      })
      .catch((error: Error) => {
        window.suiError = error.message;
        console.error(error);
        document.documentElement.classList.remove("w-mod-js");
      });
    return () => {
      active = false;
      dispose?.();
      window.suiReady = false;
      document.removeEventListener("submit", submit, true);
    };
  }, []);
  return null;
}
