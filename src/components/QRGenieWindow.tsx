type QRGenieWindowProps = {
  title: string;
  prompt: string;
  timestamp: string;
  draftText?: string;
  characterCount?: number;
  maxCharacters?: number;
};

const assets = {
  composerBackground: "https://www.figma.com/api/mcp/asset/a6762503-99a3-4036-bd9b-8da5e7ae83aa",
  send: "https://www.figma.com/api/mcp/asset/d9b36da9-bdcf-4a3f-a7ce-637f5a016d68",
  composerDivider: "https://www.figma.com/api/mcp/asset/30b3931b-4778-493e-9d51-202b0f7a9766",
  paperclip: "https://www.figma.com/api/mcp/asset/ef2835b7-743b-429d-bf89-fcbbc36661b1",
  promptBackground: "https://www.figma.com/api/mcp/asset/e294f479-8ddd-4c19-a0e7-d105822149a3",
  thumbsUp: "https://www.figma.com/api/mcp/asset/558689d9-1046-49f5-80e4-a281cd663746",
  thumbsDown: "https://www.figma.com/api/mcp/asset/61ba203e-5036-4d9d-936c-6b73847f7b31",
  close: "https://www.figma.com/api/mcp/asset/e5f72ffe-d6b8-4bd6-a278-7e4bc045b868",
  plus: "https://www.figma.com/api/mcp/asset/d0fd39d6-f3d0-4736-a7a6-bb795de58f7e",
  minus: "https://www.figma.com/api/mcp/asset/36588c0c-d754-40b9-a35b-35828c0a8ee5",
  logo: "https://www.figma.com/api/mcp/asset/f93e5d88-e492-4c85-8fe2-8bdf74a6cb6f"
} as const;

export function QRGenieWindow({
  title,
  prompt,
  timestamp,
  draftText = "Type your message",
  characterCount = 0,
  maxCharacters = 2000
}: QRGenieWindowProps) {
  return (
    <section className="qrgenie-frame" aria-label="QRGenie chat composer" data-node-id="1:3">
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
              <p className="qrgenie-placeholder" data-node-id="1:13">
                {draftText}
              </p>
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
            <img alt="" className="qrgenie-thumb-up" data-node-id="1:17" src={assets.thumbsUp} />
            <img alt="" className="qrgenie-thumb-down" data-node-id="1:18" src={assets.thumbsDown} />
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
