import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import RepositoryList from "./components/RepositoryList"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>React + TypeScript</h1>
      <RepositoryList />
    </Provider>
  )
}

export default App
