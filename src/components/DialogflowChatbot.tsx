import { useEffect, useState } from "react";
import logoPcs from "@/assets/logo-pcs.png";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "df-messenger": {
        intent: string;
        "chat-title": string;
        "agent-id": string;
        "language-code": string;
        "chat-icon"?: string;
      };
    }
  }
}

const DialogflowChatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const forceCloseChatbot = () => {
    const widget = document.querySelector("df-messenger") as HTMLElement | null;
    if (!widget) {
      return;
    }

    const roots: ShadowRoot[] = [];
    if (widget.shadowRoot) {
      roots.push(widget.shadowRoot);
    }
    const visited = new Set<ShadowRoot>(roots);

    while (roots.length > 0) {
      const currentRoot = roots.shift();
      if (!currentRoot) {
        continue;
      }

      const controls = currentRoot.querySelectorAll<HTMLElement>("button, [role='button']");
      for (const control of controls) {
        const label =
          (control.getAttribute("aria-label") || control.getAttribute("title") || control.textContent || "")
            .trim()
            .toLowerCase();

        if (/(close|minimize|collapse|hide)/.test(label)) {
          control.click();
          return;
        }
      }

      const nested = currentRoot.querySelectorAll<HTMLElement>("*");
      for (const element of nested) {
        const innerShadow = element.shadowRoot;
        if (innerShadow && !visited.has(innerShadow)) {
          visited.add(innerShadow);
          roots.push(innerShadow);
        }
      }
    }

    widget.removeAttribute("expand");
    widget.removeAttribute("expanded");
    widget.setAttribute("chat-open", "false");
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  };

  useEffect(() => {
    // Load Dialogflow script dynamically (Jaswanth)
    if (!document.querySelector('script[src*="dialogflow-console"]')) {
      const script = document.createElement("script");
      script.src =
        "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
      script.async = true;
      document.body.appendChild(script);
    }

    const applyChatSize = () => {
      const widget = document.querySelector("df-messenger") as HTMLElement | null;
      if (!widget) {
        return;
      }

      const isMobile = window.matchMedia("(max-width: 480px)").matches;
      const mobileWidthPx = Math.min(Math.round(window.innerWidth * 0.90), 330);
      const headerReservePx = 72;
      const mobileBottomGapPx = 12;
      const viewportHeight = Math.round(window.visualViewport?.height ?? window.innerHeight);
      const availableHeightPx = Math.max(viewportHeight - headerReservePx - mobileBottomGapPx, 260);
      const mobileHeightPx = Math.min(Math.round(viewportHeight * 0.68), 506, availableHeightPx);

      widget.style.setProperty(
        "--df-messenger-chat-window-height",
        isMobile ? `${mobileHeightPx}px` : "34vh",
        "important"
      );
      widget.style.setProperty(
        "--df-messenger-chat-window-width",
        isMobile ? `${mobileWidthPx}px` : "250px",
        "important"
      );
      widget.style.setProperty("--df-messenger-chat-window-border-radius", "14px", "important");

      if (!isMobile || !widget.shadowRoot) {
        return;
      }

      const roots: ShadowRoot[] = [widget.shadowRoot];
      const visited = new Set<ShadowRoot>(roots);

      while (roots.length > 0) {
        const currentRoot = roots.shift();
        if (!currentRoot) {
          continue;
        }

        const elements = currentRoot.querySelectorAll<HTMLElement>("*");
        for (const element of elements) {
          const innerShadow = element.shadowRoot;
          if (innerShadow && !visited.has(innerShadow)) {
            visited.add(innerShadow);
            roots.push(innerShadow);
          }

          const rect = element.getBoundingClientRect();
          const style = window.getComputedStyle(element);
          const isOverlayLike = style.position === "fixed" || style.position === "absolute";
          const isChatWindowLike =
            rect.width >= mobileWidthPx * 0.85 && rect.height >= mobileHeightPx * 0.75;

          if (!isOverlayLike || !isChatWindowLike) {
            continue;
          }

          element.style.setProperty("width", `${mobileWidthPx}px`, "important");
          element.style.setProperty("max-width", `${mobileWidthPx}px`, "important");
          element.style.setProperty("min-width", `${mobileWidthPx}px`, "important");
          element.style.setProperty("height", `${mobileHeightPx}px`, "important");
          element.style.setProperty("max-height", `${mobileHeightPx}px`, "important");
          element.style.setProperty("min-height", "260px", "important");
          element.style.setProperty("right", "10px", "important");
          element.style.setProperty("left", "auto", "important");
          element.style.setProperty("bottom", `${mobileBottomGapPx}px`, "important");
          element.style.setProperty("top", "auto", "important");
          element.style.setProperty("border-radius", "14px", "important");
          element.style.setProperty("overflow", "hidden", "important");
          element.style.setProperty("display", "flex", "important");
          element.style.setProperty("flex-direction", "column", "important");
          element.style.setProperty("justify-content", "flex-start", "important");
          element.style.setProperty("contain", "layout paint size", "important");
          element.style.setProperty("box-sizing", "border-box", "important");
          element.style.setProperty("padding-right", "6px", "important");
        }
      }
    };

    const applyInputBoxSize = () => {
      const widget = document.querySelector("df-messenger") as HTMLElement | null;
      if (!widget || !widget.shadowRoot) {
        return;
      }

      const roots: ShadowRoot[] = [widget.shadowRoot];
      const visited = new Set<ShadowRoot>(roots);

      while (roots.length > 0) {
        const currentRoot = roots.shift();
        if (!currentRoot) {
          continue;
        }

        const elements = currentRoot.querySelectorAll<HTMLElement>("*");
        for (const element of elements) {
          const innerShadow = element.shadowRoot;
          if (innerShadow && !visited.has(innerShadow)) {
            visited.add(innerShadow);
            roots.push(innerShadow);
          }

          const tag = element.tagName.toLowerCase();
          const isInputLike =
            tag === "input" ||
            tag === "textarea" ||
            element.getAttribute("role") === "textbox" ||
            element.isContentEditable;

          if (!isInputLike) {
            continue;
          }

          element.style.setProperty("min-height", "48px", "important");
          element.style.setProperty("height", "48px", "important");
          element.style.setProperty("padding-top", "8px", "important");
          element.style.setProperty("padding-right", "10px", "important");
          element.style.setProperty("padding-bottom", "4px", "important");
          element.style.setProperty("padding-left", "8px", "important");
          element.style.setProperty("font-size", "16px", "important");
          element.style.setProperty("line-height", "1.4", "important");
          element.style.setProperty("box-sizing", "border-box", "important");
        }
      }
    };

    const addLogoBeforeTitle = () => {
      const widget = document.querySelector("df-messenger") as HTMLElement | null;
      if (!widget || !widget.shadowRoot) {
        return;
      }

      const configuredTitle =
        widget.getAttribute("chat-title")?.trim().replace(/\s+/g, " ") || "";

      const roots: ShadowRoot[] = [widget.shadowRoot];
      const visited = new Set<ShadowRoot>(roots);
      const titleElements: HTMLElement[] = [];

      while (roots.length > 0) {
        const currentRoot = roots.shift();
        if (!currentRoot) {
          continue;
        }

        const elements = currentRoot.querySelectorAll<HTMLElement>("*");
        for (const element of elements) {
          const innerShadow = element.shadowRoot;
          if (innerShadow && !visited.has(innerShadow)) {
            visited.add(innerShadow);
            roots.push(innerShadow);
          }

          const text = element.textContent?.trim().replace(/\s+/g, " ") || "";
          const isChatTitle = configuredTitle.length > 0 && text === configuredTitle;
          if (!isChatTitle) {
            continue;
          }

          titleElements.push(element);
        }
      }

      if (titleElements.length === 0) {
        return;
      }

      const primaryTitle = titleElements[0];

      for (const titleElement of titleElements) {
        const logos = titleElement.querySelectorAll<HTMLElement>(".pcs-chat-title-logo");
        logos.forEach((logo, index) => {
          if (titleElement !== primaryTitle || index > 0) {
            logo.remove();
          }
        });
      }

      primaryTitle.style.display = "flex";
      primaryTitle.style.alignItems = "center";
      primaryTitle.style.width = "100%";
      primaryTitle.style.boxSizing = "border-box";

      if (!primaryTitle.querySelector(".pcs-chat-title-logo")) {
        const logo = document.createElement("img");
        logo.src = logoPcs;
        logo.alt = "PCS";
        logo.className = "pcs-chat-title-logo";
        logo.width = 70;
        logo.height = 30;
        logo.style.objectFit = "contain";
        logo.style.marginRight = "10px";
        logo.style.background = "#ffffff";
        logo.style.borderRadius = "5px";
        logo.style.padding = "2px 5px";
        logo.style.flexShrink = "0";

        primaryTitle.prepend(logo);
      }
    };

    const keepHeaderVisibleOnMobile = () => {
      const widget = document.querySelector("df-messenger") as HTMLElement | null;
      if (!widget || !widget.shadowRoot) {
        return;
      }

      const isMobile = window.matchMedia("(max-width: 480px)").matches;
      if (!isMobile) {
        return;
      }

      const configuredTitle =
        widget.getAttribute("chat-title")?.trim().replace(/\s+/g, " ") || "";

      const roots: ShadowRoot[] = [widget.shadowRoot];
      const visited = new Set<ShadowRoot>(roots);

      const findPanel = (start: HTMLElement | null): HTMLElement | null => {
        let current = start;
        for (let depth = 0; depth < 10 && current; depth += 1) {
          const rect = current.getBoundingClientRect();
          if (rect.height >= 220 && rect.width >= 180) {
            return current;
          }
          current = current.parentElement;
        }
        return null;
      };

      while (roots.length > 0) {
        const currentRoot = roots.shift();
        if (!currentRoot) {
          continue;
        }

        const elements = currentRoot.querySelectorAll<HTMLElement>("*");
        for (const element of elements) {
          const innerShadow = element.shadowRoot;
          if (innerShadow && !visited.has(innerShadow)) {
            visited.add(innerShadow);
            roots.push(innerShadow);
          }

          const tag = element.tagName.toLowerCase();
          const isInputLike =
            tag === "input" ||
            tag === "textarea" ||
            element.getAttribute("role") === "textbox" ||
            element.isContentEditable;

          if (isInputLike) {
            const composer =
              element.closest<HTMLElement>("form, [class*='composer'], [class*='input'], [class*='send'], [class*='footer']") ||
              element.parentElement;
            const panel = findPanel(composer);

            if (composer) {
              composer.style.setProperty("position", "relative", "important");
              composer.style.setProperty("z-index", "25", "important");
              composer.style.setProperty("flex-shrink", "0", "important");
              composer.style.setProperty("margin-top", "auto", "important");
              composer.style.setProperty("background", "#f3f3f3", "important");
              composer.style.setProperty("width", "100%", "important");
              composer.style.setProperty("min-height", "52px", "important");
              composer.style.setProperty("max-height", "120px", "important");
              composer.style.setProperty("padding", "6px 8px", "important");
              composer.style.setProperty("box-sizing", "border-box", "important");
            }

            if (panel) {
              panel.style.setProperty("display", "flex", "important");
              panel.style.setProperty("flex-direction", "column", "important");
              panel.style.setProperty("overflow", "hidden", "important");

              const directChildren = Array.from(panel.children) as HTMLElement[];
              for (const child of directChildren) {
                if (composer === child || composer?.contains(child) || child.contains(composer)) {
                  continue;
                }
                child.style.setProperty("min-height", "0", "important");
                child.style.setProperty("flex", "1 1 auto", "important");
                child.style.setProperty("overflow-y", "auto", "important");
                child.style.setProperty("overflow-x", "hidden", "important");
                child.style.setProperty("overscroll-behavior", "contain", "important");
                child.style.setProperty("-webkit-overflow-scrolling", "touch", "important");
                child.style.setProperty("box-sizing", "border-box", "important");
                child.style.setProperty("width", "100%", "important");
              }
            }
          }

          const text = element.textContent?.trim().replace(/\s+/g, " ") || "";
          if (configuredTitle.length === 0 || text !== configuredTitle) {
            continue;
          }

          const titleBar =
            element.closest<HTMLElement>("[class*='titlebar'], [class*='header'], [class*='toolbar']") ||
            element.parentElement;
          const panel = findPanel(titleBar);

          if (titleBar) {
            titleBar.style.setProperty("position", "sticky", "important");
            titleBar.style.setProperty("top", "0", "important");
            titleBar.style.setProperty("z-index", "30", "important");
            titleBar.style.setProperty("min-height", "42px", "important");
            titleBar.style.setProperty("display", "flex", "important");
            titleBar.style.setProperty("align-items", "center", "important");
            titleBar.style.setProperty("background", "#0a5a94", "important");
            titleBar.style.setProperty("flex-shrink", "0", "important");
            titleBar.style.setProperty("width", "100%", "important");
            titleBar.style.setProperty("box-sizing", "border-box", "important");
          }

          if (panel) {
            panel.style.setProperty("display", "flex", "important");
            panel.style.setProperty("flex-direction", "column", "important");
            panel.style.setProperty("overflow", "hidden", "important");
            panel.style.setProperty("width", "100%", "important");
            panel.style.setProperty("height", "100%", "important");
            panel.style.setProperty("box-sizing", "border-box", "important");
          }

          element.style.setProperty("position", "relative", "important");
          element.style.setProperty("z-index", "31", "important");
          element.style.setProperty("white-space", "nowrap", "important");
          element.style.setProperty("overflow", "hidden", "important");
          element.style.setProperty("text-overflow", "ellipsis", "important");
        }
      }
    };

    const lockMessageScrollArea = () => {
      const widget = document.querySelector("df-messenger") as HTMLElement | null;
      if (!widget || !widget.shadowRoot) {
        return;
      }

      const isMobile = window.matchMedia("(max-width: 480px)").matches;
      if (!isMobile) {
        return;
      }

      const roots: ShadowRoot[] = [widget.shadowRoot];
      const visited = new Set<ShadowRoot>(roots);

      while (roots.length > 0) {
        const currentRoot = roots.shift();
        if (!currentRoot) {
          continue;
        }

        const elements = currentRoot.querySelectorAll<HTMLElement>("div");
        for (const element of elements) {
          const innerShadow = element.shadowRoot;
          if (innerShadow && !visited.has(innerShadow)) {
            visited.add(innerShadow);
            roots.push(innerShadow);
          }

          const classList = element.className.toString().toLowerCase();
          const isMessageArea =
            (classList.includes("message") ||
              classList.includes("content") ||
              classList.includes("body") ||
              classList.includes("scroll") ||
              classList.includes("conversation")) &&
            !classList.includes("button") &&
            !classList.includes("input") &&
            !classList.includes("header") &&
            !classList.includes("titlebar");

          if (isMessageArea) {
            const rect = element.getBoundingClientRect();
            if (rect.height > 50 && rect.height < 500 && rect.width > 50) {
              element.style.setProperty("min-height", "0", "important");
              element.style.setProperty("flex", "1 1 auto", "important");
              element.style.setProperty("overflow-y", "auto", "important");
              element.style.setProperty("overflow-x", "hidden", "important");
              element.style.setProperty("-webkit-overflow-scrolling", "touch", "important");
              element.style.setProperty("box-sizing", "border-box", "important");
            }
          }
        }
      }
    };

    const handleChatOpened = () => setIsChatOpen(true);
    const handleChatClosed = () => setIsChatOpen(false);
    document.addEventListener("df-messenger-chat-opened", handleChatOpened);
    document.addEventListener("df-messenger-chat-closed", handleChatClosed);

    const logoInterval = window.setInterval(addLogoBeforeTitle, 1000);
    const sizeInterval = window.setInterval(applyChatSize, 1000);
    const inputSizeInterval = window.setInterval(applyInputBoxSize, 1000);
    const headerInterval = window.setInterval(keepHeaderVisibleOnMobile, 1000);
    const lockScrollInterval = window.setInterval(lockMessageScrollArea, 800);
    window.setTimeout(applyChatSize, 200);
    window.setTimeout(addLogoBeforeTitle, 300);
    window.setTimeout(applyInputBoxSize, 250);
    window.setTimeout(keepHeaderVisibleOnMobile, 350);
    window.setTimeout(lockMessageScrollArea, 400);
    window.addEventListener("resize", applyChatSize);
    window.addEventListener("resize", keepHeaderVisibleOnMobile);
    window.addEventListener("resize", lockMessageScrollArea);
    window.visualViewport?.addEventListener("resize", applyChatSize);
    window.visualViewport?.addEventListener("scroll", applyChatSize);
    window.visualViewport?.addEventListener("resize", keepHeaderVisibleOnMobile);
    window.visualViewport?.addEventListener("scroll", keepHeaderVisibleOnMobile);
    window.visualViewport?.addEventListener("resize", lockMessageScrollArea);

    return () => {
      window.clearInterval(logoInterval);
      window.clearInterval(sizeInterval);
      window.clearInterval(inputSizeInterval);
      window.clearInterval(headerInterval);
      window.clearInterval(lockScrollInterval);
      window.removeEventListener("resize", applyChatSize);
      window.removeEventListener("resize", keepHeaderVisibleOnMobile);
      window.removeEventListener("resize", lockMessageScrollArea);
      window.visualViewport?.removeEventListener("resize", applyChatSize);
      window.visualViewport?.removeEventListener("scroll", applyChatSize);
      window.visualViewport?.removeEventListener("resize", keepHeaderVisibleOnMobile);
      window.visualViewport?.removeEventListener("scroll", keepHeaderVisibleOnMobile);
      window.visualViewport?.removeEventListener("resize", lockMessageScrollArea);
      document.removeEventListener("df-messenger-chat-opened", handleChatOpened);
      document.removeEventListener("df-messenger-chat-closed", handleChatClosed);
    };
  }, []);

  return (
    <>
      <style>{`
        df-messenger {
          --df-messenger-bot-message: #0f72ba;
          --df-messenger-button-titlebar-color: #0a5a94;
          --df-messenger-font-color: #fff;
          --df-messenger-font-family: "Times New Roman", sans-serif;
          --df-messenger-send-box-width: 100%;
          --df-messenger-send-box-height: 56px;
          --df-messenger-send-box-border-color: #ccc;
          --df-messenger-send-box-font-size: 16px;
          --df-messenger-user-message: rgb(15, 114, 186);
          --df-messenger-chat-window-height: 38vh;
          --df-messenger-chat-window-width: 280px;
        }

        .pcs-chat-close-fallback {
          display: none;
        }

        @media (max-width: 480px) {
          df-messenger {
            --df-messenger-chat-window-height: 68vh;
            --df-messenger-chat-window-width: 90vw;
          }

          .pcs-chat-close-fallback {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            right: 14px;
            bottom: 74px;
            width: 34px;
            height: 34px;
            border: 0;
            border-radius: 999px;
            background: rgba(10, 90, 148, 0.92);
            color: #fff;
            font-size: 20px;
            line-height: 1;
            z-index: 2147483647;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          }
        }
      `}</style>

      <df-messenger
        intent="WELCOME"
        chat-title="Here for your assistance!"
        agent-id="d8a2b07e-955d-4938-a03c-15134d76cb3a"
        language-code="en"
        chat-icon="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
      ></df-messenger>

      {isChatOpen && (
        <button
          type="button"
          className="pcs-chat-close-fallback"
          onClick={forceCloseChatbot}
          aria-label="Close chatbot"
        >
          ×
        </button>
      )}
    </>
  );
};

export default DialogflowChatbot;