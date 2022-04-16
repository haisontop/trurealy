import React from "react";

export type RouteType = {
    slug: string;
    path: string;
    icon?: JSX.Element | any;
    element: React.FunctionComponent<any> | React.ComponentClass<any>;
    label: string;
    guard?: boolean;
    hiddenMenu?: boolean;
};
