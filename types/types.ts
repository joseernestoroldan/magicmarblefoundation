export type headingProps = {
  title: string;
  color: string;
  shadow: string;
  textSize: string;
  center: string;
};

export type carouselProps = {
  images: {
    id: number;
    url: string;
    message: string;
    link: string;
  }[];
};

export type ParallaxProps = {
  children: React.ReactNode;
  bgImage: string;
  opacity: string;
};

export type BannerProps = {
  title: string;
  message: string;
  bg: string;
  justify: string;
};

export type VideoFrameProps = {
  src: string;
  bg: string;
};

export type MagicFrameProps = {
  bg: string;
};

export type OurProjectsProps = {
  bg: string;
  color: string;
  projects: any;
};

export type ProjectsProps = {
  projects: any;
  bg: string;
  color: string;
};

export type menuProps = {
  disposition: string;
  space: string;
};

export type ContainerProps = {
  children: React.ReactNode;
};

export type SpanMessageProps = {
  children: React.ReactNode;
};

export type CardDairiesProps = {
  src: string;
  title: string;
  body: string;
};

export type PhotoProps = {
  width: string;
  height: string;
  src: string;
  alt: string;
  borderRadius: string;
  objectFit: string;
};

export type CardTeamProps = {
  image: string;
  name: string;
  post: string;
  email: string;
  body: string;
};

export type FocusCardProps = {
  src: string;
  alt: string;
  title: string;
  body: string;
  _id: string;
};

export type EnterElementProps = {
  children: React.ReactNode;
};

export type EnterSectionProps = {
  children: React.ReactNode;
};

export type AnimationsProps = {
  children: React.ReactNode;
};

export type WrapperGalleryProps = {
  children: React.ReactNode;
};

export type DescriptionProps = {
  content: string;
};

export type ButtonProps = {
  children: React.ReactNode;
};

export type LayoutYProps = {
  children: React.ReactNode;
};

export type DiaryProps = {
  _id: string;
  title: string;
  mainImage: string;
  description: string;
  crop:{
    top:number
    left: number
    right:number
    bottom: number
  }
};

export type ParrafosProps = {
  data: any;
};

export type AuthorProps = {
  data: any;
};

export type IconsProps = {
  color: string;
  show?: boolean;
  setShow?: any;
};

export type BannerDonationProps = {
  url: string;
  title: string;
  message: string;
};

export type GridDIariesProps = {
  diaries: any;
};
