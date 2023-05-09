import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (

        <div id="error-page" className="container-fluid">
            <div className="row mt-5 mb-2">
                <h1 className="text-center text-info fs-1 fw-bold">404</h1>
            </div>
            <div className="row mt-1 mb-1">
                <h1 className="text-center fs-2 fw-bold">Oops!</h1>
                <p className="text-center">Sorry, an unexpected error has occurred.</p>
                <p>
                    {/* <i>{error.statusText || error.message}</i> */}
                </p>
            </div>
            <div className="">

            </div>
        </div>

    );
}

