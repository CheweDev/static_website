import {
  Users,
  Target,
  Clock,
  Phone,
  Mail,
  Zap,
  Search,
  Globe,
  BarChart3,
  Award,
  TrendingUp,
  Calendar,
} from "lucide-react";

export const navLinks = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export const heroStats = [
  { value: "500+", label: "Expert Trainers" },
  { value: "10k+", label: "Success Stories" },
  { value: "4.9★", label: "Client Rating" },
];

export const popularServices = [
  {
    id: 1,
    icon: "Dumbbell",
    title: "General Fitness",
    desc: "Comprehensive health & accountability",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: "Target",
    title: "Weight Loss",
    desc: "Proven fat loss strategies",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    icon: "Users",
    title: "In-Home Training",
    desc: "Convenience of your space",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    icon: "Clock",
    title: "Online Coaching",
    desc: "Virtual training sessions",
    color: "from-orange-500 to-red-500",
  },
];

export const specializedServices = [
  {
    id: 1,
    icon: "Boxing",
    title: "Combat Sports",
    desc: "Boxing • MMA • Kickboxing • Muay Thai",
    gradient: "from-red-500 to-pink-500",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 2,
    icon: "Basketball",
    title: "Team Sports",
    desc: "Soccer • Basketball • Volleyball • Baseball • Football",
    gradient: "from-blue-500 to-indigo-500",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    icon: "Yoga",
    title: "Mind-Body",
    desc: "Yoga • Pilates • Meditation",
    gradient: "from-purple-500 to-violet-500",
    color: "from-purple-500 to-violet-500",
  },
  {
    id: 4,
    icon: "Weight",
    title: "Strength & Power",
    desc: "Bodybuilding • Calisthenics • Powerlifting",
    gradient: "from-orange-500 to-amber-500",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 5,
    icon: "Gymnastics",
    title: "Gymnastics & Swimming",
    desc: "Gymnastics training • Swimming technique",
    gradient: "from-teal-500 to-cyan-500",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: 6,
    icon: "Salad",
    title: "Nutrition Coaching",
    desc: "Meal planning • Vegan nutrition • Diet guidance",
    gradient: "from-green-500 to-emerald-500",
    color: "from-green-500 to-emerald-500",
  },
];

export const lifeStageServices = [
  {
    id: 1,
    title: "Seniors (50+)",
    desc: "Safe, effective training for mature adults",
    icon: "HeartPulse",
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 2,
    title: "Prenatal/Postpartum",
    desc: "Safe exercise during and after pregnancy",
    icon: "Baby",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: 3,
    title: "Kids & Teens",
    desc: "Age-appropriate fitness programs",
    icon: "Child",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 4,
    title: "Special Needs",
    desc: "Adaptive training for all abilities",
    icon: "Accessibility",
    color: "from-purple-400 to-indigo-500",
  },
];

export const trainerPreferences = [
  {
    id: 1,
    title: "Female Trainers",
    desc: "Professional female personal trainers",
    gradient: "from-pink-500 to-rose-500",
    icon: "UserRoundFemale",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    title: "Male Trainers",
    desc: "Experienced male personal trainers",
    gradient: "from-blue-500 to-indigo-500",
    icon: "UserRoundMale",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Couples Training",
    desc: "Train together, achieve together",
    gradient: "from-purple-500 to-pink-500",
    icon: "Users",
    color: "from-purple-500 to-pink-500",
  },
];

export const trainingOptions = [
  { id: "gym", label: "Gym Training" },
  { id: "home", label: "In-Home Training" },
  { id: "online", label: "Online Training" },
  { id: "outdoor", label: "Outdoor Training" },
];

export const footerLinks = [
  "Our Services",
  "About Us",
  "Pricing",
  "Case Studies",
  "Testimonials",
  "Resources",
];
export const footerPrograms = [
  "Strength Training",
  "Boxing Training",
  "Weight Loss",
  "Yoga & Pilates",
  "Sports Conditioning",
  "Nutrition Coaching",
];

// Services Page Data
export const mainServices = [
  {
    id: 1,
    icon: Search,
    title: "SEO Services",
    description:
      "Get found when people search for personal trainers in your area",
    features: [
      "Local SEO optimization",
      "Google My Business setup",
      "Keyword research & targeting",
      "Content optimization",
      "Monthly ranking reports",
    ],
    color: "from-blue-500 to-cyan-500",
    price: "Starting at $997/month",
  },
  {
    id: 2,
    icon: Globe,
    title: "Website Design",
    description:
      "Professional websites that convert visitors into paying clients",
    features: [
      "Mobile-responsive design",
      "Lead capture forms",
      "Online booking integration",
      "Fast loading speeds",
      "Professional photography",
    ],
    color: "from-purple-500 to-pink-500",
    price: "Starting at $2,497",
  },
  {
    id: 3,
    icon: Target,
    title: "Google Ads (PPC)",
    description:
      "Targeted advertising that brings you qualified leads immediately",
    features: [
      "Campaign setup & management",
      "Keyword targeting",
      "Ad copy optimization",
      "Landing page creation",
      "Conversion tracking",
    ],
    color: "from-green-500 to-emerald-500",
    price: "Starting at $1,497/month",
  },
  {
    id: 4,
    icon: Users,
    title: "Social Media Marketing",
    description: "Build your brand and attract clients on Instagram & Facebook",
    features: [
      "Content creation & posting",
      "Community management",
      "Paid social advertising",
      "Influencer partnerships",
      "Analytics & reporting",
    ],
    color: "from-orange-500 to-red-500",
    price: "Starting at $797/month",
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Content Marketing",
    description:
      "Blogs and content that establish you as the local fitness expert",
    features: [
      "Blog writing & publishing",
      "Video content creation",
      "Email marketing campaigns",
      "Lead magnets & guides",
      "Content strategy planning",
    ],
    color: "from-indigo-500 to-purple-500",
    price: "Starting at $697/month",
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Complete Marketing Package",
    description: "Everything you need to dominate your local fitness market",
    features: [
      "All services included",
      "Dedicated account manager",
      "Monthly strategy calls",
      "Priority support",
      "Custom reporting dashboard",
    ],
    color: "from-yellow-500 to-orange-500",
    price: "Starting at $3,997/month",
  },
];

export const processSteps = [
  {
    id: 1,
    title: "Discovery Call",
    description: "We learn about your business, goals, and target market",
    icon: "📞",
  },
  {
    id: 2,
    title: "Strategy Development",
    description: "We create a custom marketing plan tailored to your niche",
    icon: "📋",
  },
  {
    id: 3,
    title: "Implementation",
    description: "We execute the plan and get your campaigns running",
    icon: "🚀",
  },
  {
    id: 4,
    title: "Optimization",
    description: "We continuously improve and scale your results",
    icon: "📈",
  },
];

// About Page Data
export const missionCards = [
  {
    id: 1,
    icon: Target,
    title: "Targeted Results",
    description:
      "We don't believe in one-size-fits-all marketing. Every strategy is tailored to your specific niche, location, and business goals.",
  },
  {
    id: 2,
    icon: Award,
    title: "Industry Expertise",
    description:
      "Our team understands the fitness industry inside and out. We know what works because we've been there.",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Proven Growth",
    description:
      "Our clients see an average of 300% increase in qualified leads within the first 6 months of working with us.",
  },
];

export const whyChooseUsItems = [
  {
    id: 1,
    icon: Zap,
    title: "Fitness Industry Specialists",
    description:
      "Unlike generic marketing agencies, we exclusively serve personal trainers. We understand your challenges, your clients, and what drives results in the fitness industry.",
  },
  {
    id: 2,
    icon: Target,
    title: "Local SEO Mastery",
    description:
      "We know how to get you found when potential clients search for 'personal trainer near me' or any of the 30+ specific niches we track and optimize for.",
  },
  {
    id: 3,
    icon: Users,
    title: "Comprehensive Support",
    description:
      "From website design to social media management, from Google Ads to content creation - we handle all aspects of your digital presence.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Measurable Results",
    description:
      "We provide detailed monthly reports showing exactly how many leads, calls, and new clients our marketing efforts are generating for your business.",
  },
  {
    id: 5,
    icon: Award,
    title: "Proven Track Record",
    description:
      "With over 500 successful campaigns and a 95% client retention rate, we have the experience and results to back up our promises.",
  },
  {
    id: 6,
    icon: Clock,
    title: "Fast Implementation",
    description:
      "We get your campaigns up and running quickly. Most clients start seeing increased website traffic and leads within the first 30 days.",
  },
];

export const statsData = [
  { value: "500+", label: "Personal Trainers Served" },
  { value: "300%", label: "Average Lead Increase" },
  { value: "95%", label: "Client Retention Rate" },
  { value: "$2M+", label: "Revenue Generated for Clients" },
];

// Contact Page Data
export const contactMethods = [
  {
    id: 1,
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    details: "(555) 123-4567",
    hours: "Mon-Fri: 9AM-6PM EST",
    buttonText: null,
  },
  {
    id: 2,
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed message",
    details: "info@fitprotrainers.com",
    hours: "We respond within 24 hours",
    buttonText: null,
  },
  {
    id: 3,
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a free consultation",
    details: "30-minute strategy session",
    buttonText: "Book Free Consultation",
  },
];

export const trainingSpecialties = [
  "General Fitness & Accountability",
  "Weight Loss",
  "Boxing Training",
  "MMA/Kickboxing/Muay Thai",
  "Soccer Training",
  "Basketball Training",
  "Yoga Training",
  "Volleyball Training",
  "Gymnastics Training",
  "Baseball Training",
  "Football Training",
  "Swimming Training",
  "Bodybuilding",
  "Calisthenics",
  "Pilates",
  "Prenatal Training",
  "Postpartum Training",
  "Senior Training (50+)",
  "Teen Training",
  "Kids Training",
  "Special Needs Training",
  "Couples Training",
  "Vegan Lifestyle Training",
  "Menopause Support Training",
  "Weight Management for Obesity",
  "Multiple Specialties",
  "Other",
];

export const currentMarketingOptions = [
  "No current marketing",
  "Social media only",
  "Have a website",
  "Google Ads",
  "Facebook Ads",
  "SEO efforts",
  "Referrals only",
  "Multiple channels",
];

export const budgetOptions = [
  "$500 - $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000+",
  "Not sure yet",
];

export const urgencyOptions = [
  "As soon as possible",
  "Within a month",
  "Within 3 months",
  "Just exploring options",
];

// Pricing Page Data
export const pricingTiers = [
  {
    name: "Starter",
    price: "$997",
    period: "per month",
    description:
      "Ideal for new trainers looking to establish an online presence.",
    features: [
      "Basic SEO optimization",
      "Google My Business setup",
      "1-page lead capture website",
      "Monthly performance report",
      "Email support",
    ],
    buttonText: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,997",
    period: "per month",
    description:
      "Perfect for growing trainers ready to scale their client base.",
    features: [
      "Advanced SEO strategies",
      "Full website design (5 pages)",
      "Google Ads campaign setup",
      "Social media content strategy",
      "Dedicated account manager",
      "Priority email & phone support",
    ],
    buttonText: "Choose Plan",
    highlight: true,
  },
  {
    name: "Elite",
    price: "$3,497",
    period: "per month",
    description: "For established trainers aiming for market dominance.",
    features: [
      "Comprehensive SEO & local domination",
      "Custom website development (10+ pages)",
      "Advanced Google & Social Ads",
      "Full content marketing (blogging, video)",
      "Reputation management",
      "24/7 dedicated support",
      "Quarterly strategy sessions",
    ],
    buttonText: "Contact for Elite",
    highlight: false,
  },
];

// Case Studies Page Data
export const caseStudiesData = [
  {
    id: 1,
    image: "https://placehold.co/600x400",
    category: "Local SEO & Website Redesign",
    title: "Boosting 'FitLife Coaching' to #1 in Miami",
    description:
      "FitLife Coaching, a new personal training studio in Miami, struggled with online visibility. We redesigned their website and implemented a hyper-local SEO strategy.",
    results: [
      "350% increase in organic traffic",
      "Ranked #1 for 'personal trainer Miami' keywords",
      "5x increase in consultation bookings",
    ],
    client: "Sarah J., Owner of FitLife Coaching",
  },
  {
    id: 2,
    image: "https://placehold.co/600x400",
    category: "Google Ads & Social Media",
    title: "Scaling 'Online Strength Pro' to National Reach",
    description:
      "Online Strength Pro, an established online coaching business, wanted to expand beyond local clients. We launched targeted Google Ads and social media campaigns.",
    results: [
      "400% ROI on ad spend",
      "200% increase in online program sign-ups",
      "Expanded client base to 15+ states",
    ],
    client: "Mark T., Founder of Online Strength Pro",
  },
  {
    id: 3,
    image: "https://placehold.co/600x400",
    category: "Content Marketing & SEO",
    title: "Establishing 'Boxing Beast' as an Industry Authority",
    description:
      "Boxing Beast, a specialized boxing training gym, aimed to be recognized as the leading authority in combat sports fitness. We developed a robust content marketing strategy.",
    results: [
      "150% increase in website authority",
      "Featured in top fitness publications",
      "Doubled in-person class attendance",
    ],
    client: "Coach Alex, Head Trainer at Boxing Beast",
  },
];

// Testimonials Page Data
export const testimonialsData = [
  {
    id: 1,
    quote:
      "FitPro Trainers completely transformed my online presence. My website looks amazing, and I'm getting more leads than ever before. Highly recommend!",
    author: "Sarah J.",
    title: "Owner, FitLife Coaching",
    avatar: "https://placehold.co/400",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Their SEO expertise is unmatched. I went from being invisible online to ranking on the first page for my key services. My client base has doubled!",
    author: "Mark T.",
    title: "Founder, Online Strength Pro",
    avatar: "https://placehold.co/400",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The Google Ads campaigns they set up are incredibly effective. I'm getting high-quality leads consistently, and my ROI is fantastic. Best investment I've made.",
    author: "Coach Alex",
    title: "Head Trainer, Boxing Beast",
    avatar: "https://placehold.co/400",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "As a new trainer, I was overwhelmed by marketing. FitPro Trainers made it easy. They built my website and got me my first clients. So grateful!",
    author: "Emily R.",
    title: "Certified Personal Trainer",
    avatar: "https://placehold.co/600x400",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Their social media strategy helped me connect with my audience on a deeper level. My engagement is up, and I'm seeing more direct inquiries from social platforms.",
    author: "David L.",
    title: "Online Fitness Coach",
    avatar: "https://placehold.co/400",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "The content marketing they provide is top-notch. My blog posts are ranking well, and I'm seen as an authority in my niche. This has brought in so many new clients.",
    author: "Jessica M.",
    title: "Nutrition & Wellness Coach",
    avatar: "https://placehold.co/400",
    rating: 5,
  },
];

// Resources Page Data
export const blogPosts = [
  {
    id: 1,
    image: "https://placehold.co/600x400",
    category: "SEO",
    title: "Top 5 SEO Strategies for Personal Trainers in 2024",
    date: "July 25, 2024",
    author: "FitPro Team",
    description:
      "Learn the essential SEO tactics to rank higher on Google and attract more local clients to your personal training business.",
  },
  {
    id: 2,
    image: "https://placehold.co/600x400",
    category: "Web Design",
    title: "Designing a High-Converting Website for Your Fitness Business",
    date: "July 20, 2024",
    author: "FitPro Team",
    description:
      "Your website is your digital storefront. Discover key design principles that turn visitors into paying clients.",
  },
  {
    id: 3,
    image: "https://placehold.co/600x400",
    category: "Social Media",
    title: "Mastering Social Media for Personal Trainers: A Complete Guide",
    date: "July 15, 2024",
    author: "FitPro Team",
    description:
      "Leverage platforms like Instagram and Facebook to build your brand, engage your audience, and generate leads.",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400",
    category: "PPC",
    title: "Google Ads for Personal Trainers: Your Blueprint for Success",
    date: "July 10, 2024",
    author: "FitPro Team",
    description:
      "Unlock the power of paid advertising to reach potential clients actively searching for your services right now.",
  },
  {
    id: 5,
    image: "https://placehold.co/600x400",
    category: "Content Marketing",
    title: "Content That Converts: Engaging Your Fitness Audience",
    date: "July 5, 2024",
    author: "FitPro Team",
    description:
      "From blog posts to videos, learn how to create valuable content that positions you as an expert and attracts clients.",
  },
  {
    id: 6,
    image: "https://placehold.co/600x400",
    category: "Business Growth",
    title:
      "Beyond Training: Strategies for Scaling Your Personal Training Business",
    date: "June 30, 2024",
    author: "FitPro Team",
    description:
      "Explore advanced strategies to expand your services, build a team, and grow your fitness empire.",
  },
];

// FAQ Page Data
export const faqItems = [
  {
    id: 1,
    question: "What kind of personal trainers do you work with?",
    answer:
      "We work with a wide range of personal trainers, including general fitness, weight loss, boxing, MMA, yoga, Pilates, sports conditioning, prenatal/postpartum, senior, youth, and special needs trainers. Our strategies are tailored to your specific niche.",
  },
  {
    id: 2,
    question:
      "How long does it take to see results from your marketing services?",
    answer:
      "While results vary, most clients see increased website traffic within 30 days and qualified leads within 60-90 days. SEO improvements typically show significant impact within 3-6 months.",
  },
  {
    id: 3,
    question: "Do you offer custom marketing packages?",
    answer:
      "Yes, absolutely! While we have standard packages, we understand every personal trainer's business is unique. We're happy to create a custom marketing solution tailored to your specific goals and budget.",
  },
  {
    id: 4,
    question: "What is your client retention rate?",
    answer:
      "We pride ourselves on our high client satisfaction, boasting a 95% client retention rate. Our focus on measurable results and transparent communication builds long-lasting partnerships.",
  },
  {
    id: 5,
    question: "How do you measure the success of your campaigns?",
    answer:
      "We provide detailed monthly reports tracking key performance indicators (KPIs) such as website traffic, lead generation, conversion rates, search engine rankings, and return on ad spend (ROAS).",
  },
  {
    id: 6,
    question: "Do I need an existing website to work with you?",
    answer:
      "Not necessarily! We offer comprehensive website design and development services. Whether you need a brand new site or an optimization of your existing one, we can help.",
  },
  {
    id: 7,
    question: "What's the first step to getting started?",
    answer:
      "The first step is to schedule a free consultation call with our team. We'll discuss your business, understand your needs, and outline a potential strategy to help you grow.",
  },
  {
    id: 8,
    question: "Are your services available nationwide?",
    answer:
      "Yes, our digital marketing services are available to personal trainers across the United States and Canada. We leverage online strategies that are effective regardless of your physical location.",
  },
];
