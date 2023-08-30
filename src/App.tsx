import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Layout, Main, Other, NoMatch} from './pages'


const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="other" element={<Other />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    )
}

export default App