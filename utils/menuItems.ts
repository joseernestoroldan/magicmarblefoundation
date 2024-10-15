import { title } from "process";


export const menuItems = [
  {title: "Home", link: "/", children: []},
  { title: "Projects", link: "/projectscarousel", children:[] },
  { title: "About Us", link: "/about", children:[] },
  { title: "Gallery", link: "/gallery", children: [] },
  { title: "Magic Diaries", link: "/diaries", children: [] },
  { title: "Join Us", link: "/getinvolved", children: [{title: "Adoptions", link: "/adoptions"}, {title: "Sponsor", link: "/sponsor"}] },
  { title: "Our Grantees", link: "/grantees", children: [] },
];
