import "./App.css";
import "./components/BookList.jsx";
import BookList from "./components/BookList.jsx";
import Header from "./components/header.jsx";
import "./components/Layout.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <>
      <h1>Opdracht 1 - Books</h1>

      <Layout>
        <Header />

        <BookList />
      </Layout>
    </>
  );
}

export default App;
