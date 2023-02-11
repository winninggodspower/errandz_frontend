import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="d-flex justify-content-center align-items-center">
      <div className="p-5 my-5 bg-light text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      </div>
    </div>
  );
}

export default ErrorPage