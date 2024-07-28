import { PricingPlan } from "./PricingPage.types";

export const pricingPlans: PricingPlan[] = [
  {
    title: "Day Pass",
    text: "The perfect solution for those who only need a desk for one day.",
    imageSrc: "/assets/images/dayPassDesk.jpeg",
    standardPrice: 10,
    premiumPrice: 15,
  },
  {
    title: "Weekly Pass",
    text: "An excellent choice for people who need space to work throughout the week. You get access to the desk for seven days in a row.",
    imageSrc: "/assets/images/weeklyPassDesk.jpeg",
    standardPrice: 100,
    premiumPrice: 125,
  },
  {
    title: "10-Day Pass",
    text: "A flexible solution for those who need a desk for a few days a month. Choose any 10 days that suit you best.",
    imageSrc: "/assets/images/10dayPassDesk.jpeg",
    standardPrice: 150,
    premiumPrice: 175,
  },
  {
    title: "Monthly Pass",
    text: "The best option for regular users. You get access to the desk for the whole month, without restrictions.",
    imageSrc: "/assets/images/monthlyPassDesk.jpeg",
    standardPrice: 300,
    premiumPrice: 350,
  },
];