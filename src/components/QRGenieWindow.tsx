import { useId, useState } from "react";
import close from "../assets/close.png";
import composerBackground from "../assets/composer-background.png";
import composerDivider from "../assets/composer-divider.png";
import logo from "../assets/logo.png";
import minus from "../assets/minus.png";
import paperclip from "../assets/paperclip.png";
import plus from "../assets/plus.png";
import promptBackground from "../assets/prompt-background.png";
import send from "../assets/send.png";
import thumbDown from "../assets/thumb-down.png";
import thumbDownActive from "../assets/thumb-down-active.png";
import thumbUp from "../assets/thumb-up.png";
import thumbUpActive from "../assets/thumb-up-active.png";

type QRGenieWindowProps = {
  title: string;
  prompt: string;
  timestamp: string;
  characterCount?: number;
  maxCharacters?: number;
};

type FeedbackSelection = "up" | "down" | null;

function FeedbackThumbIcon({ direction, active }: { direction: "up" | "down"; active: boolean }) {
  const isFilled = active;
  const src = isFilled
    ? direction === "up"
      ? assets.thumbUpActive
      : assets.thumbDownActive
    : direction === "up"
      ? assets.thumbUp
      : assets.thumbDown;

  return (
    <img
      alt=""
      aria-hidden="true"
      className={`qrgenie-feedback-image qrgenie-feedback-image--${direction}${
        isFilled ? " qrgenie-feedback-image--filled" : ""
      }`}
      src={src}
    />
  );
}

const assets = {
  close,
  composerBackground,
  composerDivider,
  logo,
  minus,
  paperclip,
  plus,
  promptBackground,
  send,
  thumbDown,
  thumbDownActive,
  thumbUp,
  thumbUpActive
} as const;

export function QRGenieWindow({
  title,
  prompt,
  timestamp,
  characterCount = 0,
  maxCharacters = 2000
}: QRGenieWindowProps) {
  const composerId = useId();
  const feedbackId = useId();
  const [selectedFeedback, setSelectedFeedback] = useState<FeedbackSelection>(null);
  const isFeedbackOpen = selectedFeedback !== null;

  return (
    <section
      className={`qrgenie-frame${isFeedbackOpen ? " qrgenie-frame--feedback-open" : ""}`}
      aria-label="QRGenie chat composer"
      data-node-id="1:3"
    >
      <div className="qrgenie-root" data-node-id="1:4">
        <div className="qrgenie-content-group" data-node-id="1:5">
          <section className="qrgenie-composer" data-node-id="1:6">
            <img
              alt=""
              className="qrgenie-composer-bg"
              data-node-id="1:7"
              src={assets.composerBackground}
            />
            <div className="qrgenie-composer-inner" data-node-id="1:8">
              <p className="qrgenie-counter" data-node-id="1:12">
                {characterCount}/{maxCharacters}
              </p>
              <label className="qrgenie-composer-label" htmlFor={composerId}>
                <span className="sr-only">Type your message</span>
              </label>
              <textarea
                aria-label="Type your message"
                className="qrgenie-input"
                data-node-id="1:13"
                id={composerId}
                maxLength={maxCharacters}
                placeholder="Type your message"
                rows={1}
              />
              <img alt="" className="qrgenie-paperclip" data-node-id="1:11" src={assets.paperclip} />
              <img alt="" className="qrgenie-composer-divider" data-node-id="1:10" src={assets.composerDivider} />
              <img alt="" className="qrgenie-send" data-node-id="1:9" src={assets.send} />
            </div>
          </section>

          <section className="qrgenie-prompt-group" data-node-id="1:14">
            <img
              alt=""
              className="qrgenie-prompt-bg"
              data-node-id="1:16"
              src={assets.promptBackground}
            />
            <h1 className="qrgenie-prompt" data-node-id="1:19">
              {prompt}
            </h1>
            <button
              aria-controls={feedbackId}
              aria-expanded={isFeedbackOpen}
              aria-label="Positive feedback"
              aria-pressed={selectedFeedback === "up"}
              className={`qrgenie-feedback-icon qrgenie-feedback-icon--up${
                selectedFeedback === "up" ? " qrgenie-feedback-icon--active" : ""
              }`}
              data-node-id="1:17"
              onClick={() => setSelectedFeedback("up")}
              type="button"
            >
              <FeedbackThumbIcon active={selectedFeedback === "up"} direction="up" />
            </button>
            <button
              aria-controls={feedbackId}
              aria-expanded={isFeedbackOpen}
              aria-label="Negative feedback"
              aria-pressed={selectedFeedback === "down"}
              className={`qrgenie-feedback-icon qrgenie-feedback-icon--down${
                selectedFeedback === "down" ? " qrgenie-feedback-icon--active" : ""
              }`}
              data-node-id="1:18"
              onClick={() => setSelectedFeedback("down")}
              type="button"
            >
              <FeedbackThumbIcon active={selectedFeedback === "down"} direction="down" />
            </button>
            {isFeedbackOpen ? (
              <form className="qrgenie-feedback-section" data-node-id="13:2" id={feedbackId}>
                <label className="qrgenie-feedback-title" htmlFor={`${feedbackId}-details`}>
                  Tell us about your experience
                </label>
                <textarea
                  className="qrgenie-feedback-textarea"
                  id={`${feedbackId}-details`}
                  placeholder="Give as much detail as you can, but do not include any private or sensitive information."
                  rows={3}
                />
                <div className="qrgenie-feedback-actions">
                  <button className="qrgenie-feedback-submit" type="submit">
                    Submit
                  </button>
                  <button
                    className="qrgenie-feedback-cancel"
                    onClick={() => setSelectedFeedback(null)}
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : null}
            <p className="qrgenie-timestamp" data-node-id="1:15">
              {timestamp}
            </p>
          </section>
        </div>

        <header className="qrgenie-topbar-group" data-node-id="1:20">
          <div className="qrgenie-topbar-inner" data-node-id="1:21">
            <div className="qrgenie-topbar-bg" data-node-id="1:22" />
            <img alt="" className="qrgenie-close" data-node-id="1:23" src={assets.close} />
            <img alt="" className="qrgenie-plus" data-node-id="1:24" src={assets.plus} />
            <img alt="" className="qrgenie-minus" data-node-id="1:25" src={assets.minus} />
            <img alt="" className="qrgenie-logo" data-node-id="1:26" src={assets.logo} />
            <p className="qrgenie-title" data-node-id="1:27">
              {title}
            </p>
          </div>
        </header>
      </div>
    </section>
  );
}
