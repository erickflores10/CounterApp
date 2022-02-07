import React, { Suspense } from "react";

// React.lazy solo admite que sus modulos sean de la forma export default.
const NewComponent = React.lazy(() => import("./Child"));
const ErrorComponent = React.lazy(() => import("./LoadingError"));

export const Component = () => {
    return(
        <div>
            <Suspense fallback={<span style={{ width: "150px", height: "16px", background: "#999999"  }}>Cargando...</span>}>
                <NewComponent />
                <ErrorComponent />
            </Suspense>
        </div>
    );
}   