import Modal from "./lib/Modal";

function Home() {
  return (
    <div>
      <Modal close={() => alert("close")} />
    </div>
  );
}

export default Home;
