import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Layout, Main, Other, NoMatch} from './pages'


const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="other" element={<Other />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App