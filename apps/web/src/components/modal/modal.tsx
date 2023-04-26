import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { memo, useEffect, useState } from "react";
import { Portal } from 'react-portal';
import { FCWithChildren } from "ui-components/src/common/types";

import { POSITION_CLASS_MAPPER, WIDTH_CLASS_MAPPER } from "./constants";

export type ModalProps = {
  title: string;
  description?: string;
  size?: "small" | "medium" | "large" | "extra-large";
  position?: "middle" | "bottom";
  isOpen: boolean;
  onClose?: () => void;
  leftButton?: {
    buttonText: string;
    onClick: () => void;
  };
  rightButton: {
    buttonText: string;
    onClick: (a: unknown) => void;
  };
};

const Modal: FCWithChildren<ModalProps> = ({
  title,
  description,
  isOpen,
  size = "medium",
  rightButton: { buttonText: rightButtonText, onClick: rightButtonOnClick },
  leftButton: { buttonText: leftButtonText, onClick: leftButtonOnClick } = {},
  position = "middle",
  children,
}) => {
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const body = document.querySelector('body')
    setRef(body)

    return () => {
      setRef(null)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen && ref ?
        <Portal node={ref}>
          <div
            className={clsx(
              "daisy-modal",
              [{ "daisy-modal-open": isOpen }],
              POSITION_CLASS_MAPPER[position]
            )}
          >
            <motion.div
              animate={{
                opacity: 1,
                scaleY: [1, 1.1, 1.1, 1.1, 1, 1],
                scaleX: [1, 1.4, 1.2, 1.2, 1.2, 1.2, 1, 1],
              }}
              exit={{ scale: 0.0 }}
              transition={{ duration: 0.2 }}
              className={clsx("daisy-modal-box", WIDTH_CLASS_MAPPER[size], 'bg-primary')}
            >
              <h3 className={clsx("font-bold", "text-2xl", "mb-4 text-accent-content")}> {title}</h3>
              {description && <p className="daisy-py-4 text-accent-content">{description}</p>}
              {children}
              <div className="daisy-modal-action">
                {leftButtonText && (
                  <button type="button" className="daisy-btn daisy-btn-ghost text-accent-content rounded-xl" onClick={leftButtonOnClick}>
                    {leftButtonText}
                  </button>
                )}
                <button
                  type="button"
                  className="daisy-btn border-accent-content rounded-xl bg-accent-content text-neutral hover:daisy-btn-ghost hover:text-accent-content"
                  onClick={rightButtonOnClick}
                >
                  {rightButtonText}
                </button>
              </div>
            </motion.div>
          </div>
        </Portal>
        : null}
    </AnimatePresence >
  )
}

export default memo(Modal);
