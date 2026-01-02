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
  projects: QueryType[];
};

export type ProjectsProps = {
  projects: QueryType[];
  bg: string;
  color: string;
};

export type ScrollPosition = {
  x: number;
}

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
  body: string | null;
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

export type ParrafosProps = {
  data: any;
};

export type IconsProps = {
  color: string;
  show?: boolean;
  setShow?: any;
  name: string | null;
  chimpData?: QueryType[]
};

export type BannerDonationProps = {
  url: string;
  title: string;
  message: string;
};

export type AdoptionsProps = {
  adoptions: QueryType[]
};

export type SponsorProps = {
  sponsors: QueryType[]
};

export type TopPicksProps = {
  topPicks: any;
};

export type QueryType = {
  youtubeLink: string | null;
  thirdImage: string | null;
  hotSpotMain: HotSpot | null;
  hotSpotSecond: HotSpot | null;
  hotSpotThird: HotSpot | null;
  hotSpotFourth: HotSpot | null;
  alt: string | null;
  publishedAt: string | null;
  description: string | null;
  contenido: Block[] | null;
  chimpLink: string | null;
  characteristics: string | null;
  secondImage: string | null;
  crop: Crop | null;
  body: string | null;
  notificationsSent: boolean | null;
  _id: string;
  mainImage: string | null;
  authorImage: string | null;
  author: string | null;
  _createdAt: string;
  name: string | null;
  notificationSent: boolean | null;
  title: string;
  fourthImage: string | null;
  instructions: Block[] | null;
  ingredients: Block[] | null;
};

export type Block = {
    _key: string;
  _type: string;
  children: Children;
  markDefs: MarkDef[];
  style: Style;
  listItem: string | null;
  level: number;
};

type MarkDef = {
  _key: string;
  _type: string;
  href: string;
};

type Crop = {
  top: number;
  left: number;
  bottom: number;
  right: number;
  _type: string;
};

export type HotSpot = {
  width: number;
  height: number;
  x: number;
  y: number;
  _type: string;
};

type Style = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal" | "blockquote";

type Children = Child[];

type Child = {
  _key: string;
  _type: string;
  marks: string[];
  text: string;
};

export type ModePhoto = "gallery" | "cover";

export type CarouselSponsorProps = {
  mainImage?: string | null;
  secondImage?: string | null;
  thirdImage?: string | null;
  id: string;
};

export type DialogImageProps = {
  image: string | null;
  hotSpot: HotSpot | null;
};

export type SponsorGalleryProps = {
  videoLink: string;
  youtubeLink: string | null;
  mainImage: string | null;
  secondImage: string | null;
  thirdImage: string | null;
  hotSpotMain: HotSpot | null;
  hotSpotSecond: HotSpot | null;
  hotSpotThird: HotSpot | null;
  _id: string;
};

export type WithYouTubeFrameProps = {
  videoLink: string;
  mainImage: string | null;
  secondImage: string | null;
  thirdImage: string | null;
  hotSpotMain: HotSpot | null;
  hotSpotSecond: HotSpot | null;
  hotSpotThird: HotSpot | null;
};

export type SponsorFormProps = {
  name: string | null;
  firstName: string | null;
  secondName: string | null;
  email: string | null;
  country: string | null;
  codeNumber: string | null;
  number: string | null;
  address: string | null;
};

export type PlanType = {
  id: string;
  version: number;
  product_id: string;
  name: string;
  status: string;
  description: string;
  usage_type: string;
  billing_cycles: {
    pricing_scheme: {
      version: number;
      fixed_price: {
        currency_code: string;
        value: string; // Assuming the value is stored as a string (e.g., "20.0")
      };
      create_time: string; // ISO 8601 date-time string
      update_time: string; // ISO 8601 date-time string
    };
    frequency: {
      interval_unit: string; // e.g., "MONTH"
      interval_count: number;
    };
    tenure_type: string; // e.g., "REGULAR"
    sequence: number;
    total_cycles: number;
  }[];
  payment_preferences: {
    service_type: string; // e.g., "PREPAID"
    auto_bill_outstanding: boolean;
    setup_fee: {
      currency_code: string;
      value: string; // Assuming the value is stored as a string (e.g., "0.0")
    };
    setup_fee_failure_action: string; // e.g., "CONTINUE"
    payment_failure_threshold: number;
  };
  quantity_supported: boolean;
  payee: {
    merchant_id: string;
    display_data: {
      business_email: string;
    };
  };
  create_time: string; // ISO 8601 date-time string
  update_time: string; // ISO 8601 date-time string
  links: {
    href: string;
    rel: string;
    method: string;
    encType: string; // e.g., "application/json"
  }[];
};

export type GoogleDriveFile = {
  mimeType: string;
  webViewLink: string;
  id: string;
  name: string;
  folderId: string;
  folderName: string;
  thumbnailLink: string;
};

export type GoogleDriveResponse = {
  data: GoogleDriveFile[];
  success: boolean;
};

export type GroupedFiles = {
  folderName: string;
  files: GoogleDriveFile[];
};