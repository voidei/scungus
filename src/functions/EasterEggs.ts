import { useState } from "react";

const [imageSrc, setImageSrc] = useState("./scungus.gif");

const changeImageSrc = () => {
  setImageSrc("./ultra.jpg");
};

let keylog = [];
document.onkeydown = function (e) {
  let keypressed = e.key;
  keylog.push(keypressed);
  console.log(keylog);
};

export { changeImageSrc, imageSrc };
