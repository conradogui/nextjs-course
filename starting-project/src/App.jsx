import { useState } from "react";
import PostsList from "./components/PostsList.jsx";
import MainHeader from "./components/MainHeader.jsx";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hiddenModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hiddenModalHandler}
        />
      </main>
    </>
  );
}

export default App;
