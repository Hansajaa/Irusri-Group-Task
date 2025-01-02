import React from "react"
const HomePage = React.lazy(()=>import('./pages/HomePage'));

function App() {

  return (
    <>
      <HomePage></HomePage>
    </>
  )
}

export default App
