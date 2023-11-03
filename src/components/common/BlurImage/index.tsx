import React, {
  CSSProperties,
  FC,
  SyntheticEvent,
  useMemo,
  useState,
} from "react";
import Image from "next/image";
import { randomDefaultImg } from "@/utils";
import style from "./BlurImage.module.css";

type ImageProps = {
  src: string;
  alt: string;
  width?: number | undefined;
  height?: number | undefined;
  className?: string;
  blurDataURL?: string;
  layout?: "fixed" | "intrinsic" | "responsive" | "fill";
  objectFit?: CSSProperties["objectFit"];
  quality?: number | undefined;
  priority?: boolean;
  loading?: "lazy" | "eager" | undefined;
  unoptimized?: boolean;
  decoding?: "sync" | "async" | "auto";
  draggable?: boolean;
  placeholder?: "blur" | "empty";
  onLoadingComplete?: () => void;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};

export const BlurImage: FC<ImageProps> = ({
  className,
  src,
  alt,
  blurDataURL,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    setImageError(true);
  };

  const displayImage = useMemo(() => {
    return (
      <Image
        className={`${style.img} ${
          isLoading ? style.loading : style.default
        } ${className}`}
        blurDataURL={blurDataURL}
        src={src}
        alt={alt}
        onError={handleImageError}
        onLoadingComplete={() => setLoading(false)}
        {...props}
      />
    );
  }, [props, className, src, alt, blurDataURL, isLoading]);

  const displayError = useMemo(() => {
    const defaultImg = randomDefaultImg();
    return (
      <Image
        className={`${style.img} ${className}`}
        blurDataURL={blurDataURL}
        src={defaultImg}
        alt=""
        {...props}
      />
    );
  }, [className, blurDataURL, props]);

  return (
    <div className={style.container}>
      {imageError && displayError}
      {!imageError && displayImage}
    </div>
  );
};

BlurImage.defaultProps = {
  blurDataURL:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAFhApkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD4mooooAKKKKACiiigAooooAKKKKAP/2Q==",
};
