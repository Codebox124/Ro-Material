import markerDefaultImg from "../assets/default_marker_img.png";

export const getUrl = (url: string, uuid: string) => {
  if (url === null) {
    // console.log(uuid + " has no url, using default");
    return markerDefaultImg;
  }
  return url;
};
