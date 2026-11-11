

import { useEffect } from "react";

const SITE_URL = "https://skill-forge-project.vercel.app";

function useSEO(title, description) {
  useEffect(() => {
    document.title = title;

    // Meta description
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    // Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `${SITE_URL}${window.location.pathname}`
    );

    // Open Graph URL
    let ogUrl = document.querySelector(
      'meta[property="og:url"]'
    );

    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }

    ogUrl.setAttribute(
      "content",
      `${SITE_URL}${window.location.pathname}`
    );

  }, [title, description]);
}

export default useSEO;
