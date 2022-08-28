import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../contexts/ResultsContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const { results, getResults, searchTerm, isLoading } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== "") {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      //return 'SEARCH';
      return (
        <div className="searchResult">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="search">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="search-link">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="search-title">{title}</p>
              </a>
            </div>
          ))}
        </div>
      );

    case "/images":
      return (
        <div className="imageResult">
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a
                href={href}
                target="_blank"
                key={index}
                rel="noreferrer"
                className="image"
              >
                <img src={image?.src} alt={title} loading="lazy" />
                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
            )
          )}
        </div>
      );

    case "/news":
      return (
        <div className="newsResult">
          {results?.entries?.map(({ id, links, source, title }) => (
            <div key={id} className="md:w-2/5 w-full ">
              <a href={links?.[0].href} target="_blank" rel="noreferrer ">
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div style={{ display: "flex", gap: "16px" }}>
                <a
                  href={source?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:text-blue-300"
                >
                  {" "}
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );

    case "/videos":
      return (
        <div className="videoResult">
          {results?.results?.map((video, index) => (
            <div key={index} className="video">
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            </div>
          ))}
        </div>
      );

    default:
      return "ERROR...";
  }
};
