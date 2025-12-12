export type Blog = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content?: string;
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Exploring the Hidden Gems of Northern Pakistan",
    excerpt:
      "Discover breathtaking landscapes, serene valleys, and untold cultural stories that await you in the northern regions of Pakistan.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", // Using Mountains
    date: "August 15, 2025",
    content:
      "From the enchanting valleys of Hunza to the pristine lakes of Skardu, Northern Pakistan offers a paradise for adventurers and nature lovers alike.",
  },
  {
    id: 2,
    title: "Why Traveling Changes Your Perspective on Life",
    excerpt:
      "Traveling is more than just visiting new places; it's about rediscovering yourself, building empathy, and broadening your horizons.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80", // Generic Travel
    date: "July 30, 2025",
  },
  {
    id: 3,
    title: "Top 10 Travel Tips for Stress-Free Adventures",
    excerpt:
      "From smart packing hacks to navigating airports like a pro, here are practical tips that make your journey seamless and enjoyable.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80", // Travel Prep
    date: "June 20, 2025",
  },
  {
    id: 4,
    title: "A Food Lover's Guide to Street Eats in Lahore",
    excerpt:
      "From spicy chaats to sizzling kebabs, Lahore's food streets offer flavors that define the heart of Pakistan.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80", // Food/BBQ
    date: "May 10, 2025",
  },
  {
    id: 5,
    title: "Unwinding at Pakistan's Most Beautiful Beaches",
    excerpt:
      "Escape to the crystal-clear waters and golden sands of Gwadar, Kund Malir, and Karachi's hidden coves.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Reliable Beach
    date: "April 22, 2025",
  },
  {
    id: 6,
    title: "Adventure Awaits: Hiking Trails You Must Try",
    excerpt:
      "Pack your bags and experience the thrill of Pakistan's most scenic hiking trails, from Fairy Meadows to Margalla Hills.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80", // Hiking
    date: "March 15, 2025",
  },
  {
    id: 8,
    title: "How to Plan a Perfect Family Vacation",
    excerpt:
      "Tips and tricks for organizing stress-free family trips filled with joy, comfort, and bonding moments.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80", // Family Trip
    date: "January 12, 2025",
  },
  {
    id: 9,
    title: "Luxury Travel in Pakistan: Resorts & Retreats",
    excerpt:
      "Indulge in comfort and style at Pakistan's finest resorts, from Hunza's boutique lodges to serene Swat retreats.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80", // Resort
    date: "December 25, 2024",
  },
];
