import * as React from "react";
import HomeTopBanner from "./TopBanner";
import {useI18n} from "../../../i18n/react";
import "./Home.less"

export default function Home() {
    const __ = useI18n()

    return (<div className={"page_home"}>
        <div className={"top_part_warp"}>
            <div className={"top_part_bg"} />
        </div>
        <div className={"top_part"}>
            <HomeTopBanner />
        </div>

    </div>)
}