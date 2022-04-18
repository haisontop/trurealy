import { useEffect } from "react";

const useScript = (
  url: string,
  id: string,
  className: string,
  dataBotId: string,
  elementId: string
) => {
  useEffect(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.remove();
    }

    const scriptElement = document.getElementById(id);
    if (scriptElement) {
      scriptElement.remove();
    }

    const script = document.createElement("script");

    script.src = url;
    script.type = "text/javascript";
    script.async = true;
    script.id = id;

    // @ts-ignore
    script.setAttribute("class", className);
    // @ts-ignore
    script.setAttribute("data-botId", dataBotId);
    document.body.appendChild(script);

    return () => {
      // document.body.removeChild(script);
      const element = document.getElementById("id");
      if (element) {
        element.remove();
      }
    };
  }, [dataBotId]);
};

export default useScript;
