import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import NoService from "./no-service";

export default function LazyLoadedComponent({
  url,
  Loader = () => <p>Loading...</p>,
  module,
  scope,
  ErrorFallback = NoService,
  ...props
}) {
  const [loading, setLoading] = React.useState(true);
  const [counter, setCounter] = React.useState(1);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    const element = document.createElement("script");

    element.src = url;
    element.type = "text/javascript";
    element.async = true;

    element.onload = () => {
      setLoading(false);
    };

    element.onerror = () => {
      setLoading(false);
    };

    document.head.appendChild(element);

    return () => {
      document.head.removeChild(element);
    };
  }, [counter]);

  const retry = React.useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const Lazy = React.useMemo(() => {
    if (loading) return () => <Loader />;
    return React.lazy(async () => {
      try {
        await __webpack_init_sharing__("default");
        const container = window[scope];
        await container.init(__webpack_share_scopes__.default);
        const factory = await window[scope].get(module);
        const Module = factory();
        return Module;
      } catch (error) {
        throw new Error("");
      }
    });
  }, [url, loading, counter]);

  return (
    <ErrorBoundary onReset={retry} FallbackComponent={ErrorFallback}>
      <React.Suspense fallback={<Loader />}>
        <Lazy {...props} />
      </React.Suspense>
    </ErrorBoundary>
  );
}
