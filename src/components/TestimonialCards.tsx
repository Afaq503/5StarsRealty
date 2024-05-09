"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const TestimonialsContent = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum veritatis cum aspernatur saepe quibusdam sit quaerat non deserunt ad voluptatem animi, dolore beatae necessitatibus provident aliquam vero natus eius.",
    name: "Alex Jhon",
    title: "Apartments",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum veritatis cum aspernatur saepe quibusdam sit quaerat non deserunt ad voluptatem animi, dolore beatae necessitatibus provident aliquam vero natus eius.",
    name: "Alex Jhon",
    title: "Apartments",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum veritatis cum aspernatur saepe quibusdam sit quaerat non deserunt ad voluptatem animi, dolore beatae necessitatibus provident aliquam vero natus eius.",
    name: "Alex Jhon",
    title: "Apartments",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum veritatis cum aspernatur saepe quibusdam sit quaerat non deserunt ad voluptatem animi, dolore beatae necessitatibus provident aliquam vero natus eius.",
    name: "Alex Jhon",
    title: "Apartments",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum veritatis cum aspernatur saepe quibusdam sit quaerat non deserunt ad voluptatem animi, dolore beatae necessitatibus provident aliquam vero natus eius.",
    name: "Alex Jhon",
    title: "Apartments",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum veritatis cum aspernatur saepe quibusdam sit quaerat non deserunt ad voluptatem animi, dolore beatae necessitatibus provident aliquam vero natus eius.",
    name: "Alex Jhon",
    title: "Apartments",
  },
];

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">
        Hear our Harmony Voices is Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={TestimonialsContent}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
