import * as React from "react";
import { Link } from "react-router-dom";
import './NotFound.less'

export default function NotFound() {
    return (<div className="not_found">
        <div>Not Found.</div>
        <br/>
        <div><Link to={"/"}>Home</Link></div>
    </div>)
}