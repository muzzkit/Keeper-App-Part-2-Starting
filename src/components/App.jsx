import React from "react";
import notes from "../notes";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      {notes.map((props) => (
        <Note id={props.id} title={props.title} content={props.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
