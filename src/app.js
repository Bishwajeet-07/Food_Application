import React from "react";
import ReactDOM from "react-dom/client"
import HeadComponent from "./components/HeadComponent";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrComponent from "./components/ErrComponent"
import AboutComponent from "./components/AboutComponent";
import CardMenuComponent from "./components/CardMenuComponent";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CardSection from "./components/CardSection";
import BillingSummary from "./components/BillingSummary";
import Footer from "./components/footer";
import SpecificCard from "./SpecificCard";

const AppLayout = () => {

    return (

        <Provider store={appStore}>
            <div className="all ">
                <HeadComponent />
                <Outlet />
                <Footer />
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrComponent />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <AboutComponent />
            },
            {
                path: "/cart",
                element: <BillingSummary />
            },
            {
                path: "/billing",
                element: <BillingSummary />
            },
            {
                path: "/resturant/:resId",
                element: <CardMenuComponent />,
                errorElement: <ErrComponent />
            },
            {
                path: "/collection/:collectionId/tags/:tagId",
                element: <SpecificCard />,
                errorElement: <ErrComponent />
            }
        ]

    }

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)