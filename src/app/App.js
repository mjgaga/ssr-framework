import React, {Suspense} from 'react';
import './App.less'

import {I18nProvider} from '../../i18n/react'
import {Route, Routes} from "react-router";
import HeadNav from "./HeadNav";

const Home = React.lazy(() => import('../containers/Home/Home'));
const About = React.lazy(() => import('../containers/About'));
const Counter = React.lazy(() => import('../containers/Counter'));
const NotFound = React.lazy(() => import('../containers/NotFound'));


export default function App({i18nLib}) {
    return (
        <I18nProvider i18nLib={i18nLib}>
            <HeadNav/>

            <div className={"body_warp"}>
                <Routes>
                    <Route path="/" element={<Suspense><Home/></Suspense>}/>
                    <Route path="/about" element={<Suspense><About/></Suspense>}/>
                    <Route path="/counter" element={<Suspense><Counter/></Suspense>}/>
                    <Route path="*" element={<Suspense><NotFound/></Suspense>}/>
                </Routes>
            </div>
        </I18nProvider>)
}