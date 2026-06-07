import { createElement, useEffect, useMemo, useState } from "react";
import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

type TextTypeProps = {
  as?: ElementType;
  text: string | string[];
  className?: string;
  cursorClassName?: string;
  cursorCharacter?: ReactNode;
  cursorBlinkDuration?: number;
  deletingSpeed?: number;
  initialDelay?: number;
  loop?: boolean;
  pauseDuration?: number;
  showCursor?: boolean;
  style?: CSSProperties;
  typingSpeed?: number;
};

const TextType = ({
  as: Component = "span",
  text,
  className,
  cursorClassName,
  cursorCharacter = "|",
  cursorBlinkDuration = 700,
  deletingSpeed = 28,
  initialDelay = 0,
  loop = true,
  pauseDuration = 1600,
  showCursor = true,
  style,
  typingSpeed = 52,
  ...props
}: TextTypeProps & HTMLAttributes<HTMLElement>) => {
  const textItems = useMemo(() => {
    const items = Array.isArray(text) ? text : [text];
    const cleanItems = items.filter((item) => item.trim().length > 0);

    return cleanItems.length > 0 ? cleanItems : [""];
  }, [text]);

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  const currentText = textItems[textIndex % textItems.length] ?? "";
  const visibleText = currentText.slice(0, charIndex);

  useEffect(() => {
    setTextIndex(0);
    setCharIndex(0);
    setIsDeleting(false);
  }, [textItems]);

  useEffect(() => {
    if (!showCursor) return;

    const interval = window.setInterval(() => {
      setIsCursorVisible((current) => !current);
    }, cursorBlinkDuration);

    return () => window.clearInterval(interval);
  }, [cursorBlinkDuration, showCursor]);

  useEffect(() => {
    const isComplete = charIndex >= currentText.length;
    const isReadyForNextText = isDeleting && charIndex <= 1;
    const isFinalText = textIndex === textItems.length - 1;

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && isComplete) {
      delay = pauseDuration;
    }

    if (isReadyForNextText) {
      delay = 80;
    }

    if (initialDelay > 0 && charIndex === 0 && textIndex === 0 && !isDeleting) {
      delay = initialDelay;
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        if (!loop && isFinalText) return;
        setIsDeleting(true);
        return;
      }

      if (isReadyForNextText) {
        setIsDeleting(false);
        setTextIndex((current) => (current + 1) % textItems.length);
        setCharIndex(1);
        return;
      }

      setCharIndex((current) => Math.max(0, current + (isDeleting ? -1 : 1)));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [
    charIndex,
    currentText.length,
    deletingSpeed,
    initialDelay,
    isDeleting,
    loop,
    pauseDuration,
    textIndex,
    textItems.length,
    typingSpeed,
  ]);

  return createElement(
    Component,
    {
      className,
      style: {
        display: "inline-block",
        letterSpacing: 0,
        minHeight: "1.15em",
        whiteSpace: "pre-wrap",
        ...style,
      },
      ...props,
    },
    createElement("span", null, visibleText),
    showCursor &&
      createElement(
        "span",
        {
          "aria-hidden": true,
          className: cursorClassName,
          style: {
            display: "inline-block",
            marginLeft: "0.12em",
            opacity: isCursorVisible ? 1 : 0,
            transition: "opacity 120ms ease",
          },
        },
        cursorCharacter,
      ),
  );
};

export default TextType;
