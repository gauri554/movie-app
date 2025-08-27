// app/navConfig.ts
export const navConfig: Record<
  string,
  { title: string; subtitle: string; backPath: string }
> = {
  "/": {
    title: "Home",
    subtitle: "Welcome to Film Mart",
    backPath: "/",
  },
  "/events": {
    title: "Events",
    subtitle: "Discover amazing shows near you",
    backPath: "/",
  },
  "/eventlist": {
    title: "Event List",
    subtitle: "Browse all available events",
    backPath: "/events",
  },
  "/filmmart": {
    title: "Film Mart",
    subtitle: "Your gateway to cinema & business",
    backPath: "/",
  },
    "/details": {
    title: "Film Mart",
    subtitle: "Your gateway to cinema & business",
    backPath: "/new-release",
  },
    "/eventdetails": {
    title: "Film Mart",
    subtitle: "Your gateway to cinema & business",
    backPath: "/events",
  },
};
