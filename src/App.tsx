import { QRGenieWindow } from "./components/QRGenieWindow";

export default function App() {
  return (
    <main className="app-shell">
      <QRGenieWindow
        prompt="How can I help you today?"
        title="SDPR QRGenie"
        timestamp="2 minutes ago"
      />
    </main>
  );
}
