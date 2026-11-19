import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  /*
┌─────────────────────────────────────────────────────┐
│ DevBoard                         🔔  Ajay           │
├──────────────┬──────────────────────────────────────┤
│              │                                      │
│ Dashboard    │  Welcome back, Ajay 👋               │
│ Projects     │                                      │
│ Tasks        │  ┌──────┐ ┌──────┐ ┌──────┐          │
│ Calendar     │  │  12  │ │  7   │ │  3   │          │
│              │  │Tasks │ │Done  │ │Due   │          │
│ Settings     │  └──────┘ └──────┘ └──────┘          │
│              │                                      │
│              │  My Projects                         │
│              │  ┌──────────┐ ┌──────────┐           │
│              │  │ LocalMart│ │ Portfolio│           │
│              │  │ 75%      │ │ 40%      │           │
│              │  └──────────┘ └──────────┘           │
│              │                                      │
└──────────────┴──────────────────────────────────────┘
  */

  return (
    <div className="flex flex-col  bg-red-400 min-w-250 min-h-full rounded-xl m-1">
      <Header />
      <Main />
    </div>
  );
}

export default App;
