import TextArea from "./TextArea";
import Stats from "./Stats";
import { useState } from "react";
import {FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS} from "./constants"

const Container = () => {
  const [text, setText] = useState("");

  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
