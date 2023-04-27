import { Fragment } from "react";
import NavigationBar from "./Navigator";

export default function Layout(props){
    return <Fragment>
         <NavigationBar />
         {props.children}
        </Fragment>
}