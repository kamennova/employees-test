import React from "react";
import { GithubIcon } from "./icons/Github";

export const Footer = () => (
    <footer className="main-footer">
        <span className="link-wrap">
            <GithubIcon size={20} />
            <a href={"https://github.com/kamennova/yalantis-test"}>
                yalantis-test
            </a>
        </span>
    </footer>
);
