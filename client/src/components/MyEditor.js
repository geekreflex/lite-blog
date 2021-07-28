import { useState } from "react";
import Yamde from "yamde";

export default function MyEditor({ content, setContent }) {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div className="App">
      <Yamde
        value={content}
        handler={setContent}
        theme={isLightMode ? "light" : "dark"}
      />
    </div>
  );
}
