import React from 'react';
import {Link} from "react-router-dom";
import "./HeadNav.less"
import {useI18n} from "../../i18n/react";

export default function HeadNav() {
    const __ = useI18n()
    return (<header className="head_nav_wrap">
        <div className={"head_nav"}>
            <div className={"logo_panel"}>
                <Link className={"logo_link"} to={"/"}>
                </Link>
            </div>
            <ul className={"nav_panel"}>
                <li>
                    <Link to={"/"}> {__("home")}
                    </Link>
                </li>
                <li>
                    <Link to={"/about"}> {__("nav1")}
                    </Link>
                </li>
                <li>
                    <Link to={"/counter"}> {__("nav2")}
                    </Link>
                </li>
                <li>
                    <Link to={"/tag/nav3"}> {__("nav3")}
                    </Link>
                </li>
                <li>
                    <Link to={"/tag/nav4"}> {__("nav4")}
                    </Link>
                </li>
                <li>
                    <Link to={"/tag/nav5"}> {__("nav5")}
                    </Link>
                </li>
                <li>
                    <Link to={"/tag/nav6"}> {__("nav6")}
                    </Link>
                </li>
                <li>
                    <Link to={"/tag/nav7"}> {__("nav7")}
                    </Link>
                </li>
            </ul>
            <div className={"user_panel"}>
                <Link to={"/login"} className={"login"} >登录</Link>
                <Link to={"/registry"} className={"registry"}>免费注册</Link>
            </div>
        </div>
    </header>)
}