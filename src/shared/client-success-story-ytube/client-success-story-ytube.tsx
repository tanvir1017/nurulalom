import { FC } from "react";
type SuccessStoryProps = {
  embadedURL1: string;
  embadedURL2: string;
  embadedURL3: string;
  title1: string;
  title2: string;
  title3: string;
};
const ClientSuccessStoryYouTube: FC<SuccessStoryProps> = ({
  embadedURL1,
  embadedURL2,
  embadedURL3,
  title1,
  title2,
  title3,
}) => {
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="md:-mt-28 mx-auto">
        <iframe
          className="rounded-lg w-[20.875rem] h-[11.6875rem] md:w-[70rem] md:h-[39.375rem] mx-auto"
          src={embadedURL1}
          title={title1}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 pt-6">
          <iframe
            className="rounded-lg w-[20.875rem] h-[11.6875rem] md:w-[33.75rem] md:h-[19rem] mx-auto"
            src={embadedURL2}
            title={title2}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="rounded-lg w-[20.875rem] h-[11.6875rem] md:w-[33.75rem] md:h-[19rem] mx-auto"
            src={embadedURL3}
            title={title3}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default ClientSuccessStoryYouTube;
