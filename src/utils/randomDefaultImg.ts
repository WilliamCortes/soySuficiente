import { StaticImageData } from "next/image";
import default1 from "~/assets/images/default-1.webp";
import default2 from "~/assets/images/default-2.webp";
import default3 from "~/assets/images/default-3.webp";
import default4 from "~/assets/images/default-4.webp";
import default5 from "~/assets/images/default-5.webp";
import default6 from "~/assets/images/default-6.webp";

const images = [default1, default2, default3, default4, default5, default6];

const random = () => Math.floor(Math.random() * images.length);

export const randomDefaultImg = (): StaticImageData => images[random()];
