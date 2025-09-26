"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

const TOP_ROW: Testimonial[] = [
  {
    name: "Aditya Bhardwaj",
    role: "Ops Lead, Crescent Logistics",
    avatar: "/images/review/Aditya Bhardwaj.png",
    quote:
      "SalesSync provides essential tools for scaling our ops. Processes are streamlined and our team is always aligned. The platform has revolutionized how we manage our logistics operations, providing real-time visibility into every aspect of our supply chain. From inventory management to route optimization, every feature is designed with operational efficiency in mind, making our daily workflows seamless and productive.",
  },
  {
    name: "Ashish Dwivedi",
    role: "Product Manager, Orbit Systems",
    avatar: "/images/review/Ashish Dwivedi.png",
    quote:
      "The intuitive design integrates easily into our routine. Automated follow‑ups and custom reports are game changers. What impressed me most is how quickly our team adopted the platform without any extensive training. The user interface is so well-designed that even complex features feel simple to use. The automated workflows have saved us countless hours, and the custom reporting capabilities give us insights we never had before, enabling data-driven decisions across all our product initiatives.",
  },
  {
    name: "Mozammil Khan",
    role: "Account Exec, GreenPath",
    avatar: "/images/review/Mozammil Khan.png",
    quote:
      "Insights uncover opportunities and help us refine targeting. I rely on it daily for decisions. The analytics dashboard provides a comprehensive view of our sales pipeline, helping me identify trends and patterns that were previously invisible. The predictive analytics feature has been particularly valuable, allowing us to forecast revenue more accurately and adjust our strategies proactively. It's become an indispensable tool for managing client relationships and closing deals more effectively.",
  },
  {
    name: "Ramachandran R S",
    role: "Marketing Director, BrightWave",
    avatar: "/images/review/Ramachandran R S.png",
    quote:
      "Every interaction is stored in one place with clear context. Productivity improved noticeably. The centralized communication hub has transformed how our marketing team collaborates with sales and customer success. Having all customer touchpoints documented in one place means we never miss important context when crafting campaigns or following up on leads. The integration capabilities with our existing marketing stack made implementation smooth, and the productivity gains were evident within the first month of usage.",
  },
  {
    name: "SHUBHAM JAIN",
    role: "Sales Ops, Apex Solutions",
    avatar: "/images/review/SHUBHAM JAIN.png",
    quote:
      "From tracking to reporting, nothing slips through the cracks anymore. The comprehensive tracking system ensures complete visibility across our entire sales process. Every lead, opportunity, and customer interaction is meticulously recorded and easily accessible. The automated reporting features have eliminated manual data compilation, giving us more time to focus on strategic initiatives. The platform's reliability and accuracy have made it the backbone of our sales operations, ensuring consistent performance and accountability across the team.",
  },
  {
    name: "Siddhant Doshi",
    role: "Success Lead, CloudSpark",
    avatar: "/images/review/Siddhant Doshi.png",
    quote:
      "Helps the team close deals faster with visibility across the pipeline. The real-time pipeline visibility has been a game-changer for our sales velocity. Team members can instantly see where each deal stands, what actions are needed, and who's responsible for next steps. The collaborative features enable seamless handoffs between team members, and the mobile app ensures we stay connected even when working remotely. Since implementing this solution, our average deal closure time has decreased by 30%, and our team satisfaction has significantly improved.",
  },
];

const BOTTOM_ROW: Testimonial[] = [
  {
    name: "Sonia Bhatti",
    role: "Ops Manager, UrbanNest",
    avatar: "/images/review/Sonia Bhatti.png",
    quote:
      "Collaboration improved. Everyone is aligned and we support customers better. The platform has created a unified workspace where all departments can access the same customer information and work together seamlessly. Cross-functional projects that used to take weeks now get completed in days because everyone has the context they need. The customer support quality has improved dramatically since we can see the complete customer journey and provide more personalized, informed assistance. It's truly transformed our organizational efficiency.",
  },
  {
    name: "Vachan Kudmule",
    role: "Data Analyst, Horizon",
    avatar: "/images/review/Vachan Kudmule.png",
    quote:
      "Powerful reporting with custom KPIs helps us scale consistently. The advanced analytics capabilities have elevated our data analysis to a whole new level. Creating custom dashboards and KPI tracking has never been easier, and the real-time data updates ensure we're always working with the most current information. The ability to drill down into specific metrics and create automated alerts has helped us identify growth opportunities and potential issues before they become problems. It's an analyst's dream tool.",
  },
  {
    name: "macsen jose",
    role: "Growth, Northwind Retail",
    avatar: "/images/review/macsen jose.png",
    quote:
      "Tracking made easy and our team loves the clean UI. The user experience is exceptional - everything is where you expect it to be, and the learning curve is minimal. Our team was productive from day one, which is rare with new software implementations. The clean, modern interface doesn't overwhelm users with unnecessary complexity, yet all the powerful features are easily accessible when needed. The mobile responsiveness means our field team can update information on the go, keeping everyone synchronized regardless of location.",
  },
  {
    name: "vinit mehta",
    role: "High School, Intern",
    avatar: "/images/review/vinit mehta.png",
    quote:
      "Simple to use and gets the job done—fast. Even as an intern with limited experience, I was able to navigate the platform effortlessly and contribute meaningfully to projects from my first day. The intuitive design and helpful tooltips made learning the system enjoyable rather than overwhelming. The efficiency gains are remarkable - tasks that seemed complex initially become routine with the platform's smart automation and user-friendly workflows. It's the perfect balance of simplicity and functionality.",
  },
];

function Row({ items, direction }: { items: Testimonial[]; direction: "left" | "right" }) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  }, []);

  // Create multiple copies for seamless infinite scroll
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden mask-gradient">
      <div 
        ref={marqueeRef} 
        className={`marquee-track ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{
          animationDuration: '60s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {duplicatedItems.map((t, i) => (
          <figure
            key={`${t.name}-${i}`}
            className="w-[360px] sm:w-[420px] max-w-full mr-4 sm:mr-6 flex-shrink-0 rounded-2xl border border-gray-200 bg-white shadow-sm p-5 sm:p-6 hover:shadow-md transition-shadow duration-300"
          >
            <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-6">"{t.quote}"</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <Image
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section aria-label="Testimonials" className="py-16 sm:py-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Testimnials</div>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            How We Transformed <span className="whitespace-nowrap">Their Journey</span>
          </h2>
          <p className="mt-2 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
            Untitled is growing fast, and we are always looking for passionate people to help our customers succeed.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <Row items={TOP_ROW} direction="left" />
          <Row items={BOTTOM_ROW} direction="right" />
        </div>
      </div>
    </section>
  );
}