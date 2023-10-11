import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <main className="h0screen grid place-content-center text-center">
      <h1 className="text-9xl mb-5">404</h1>
      <p className=" mb-5">Page not found</p>
      <Link to="/" className="btn btn-outline btn-succes">
        Go To Home
      </Link>
    </main>
  );
}

export default Error;
