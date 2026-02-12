import JobCard from "./job-card";

const requests = [
  {
    id: "1",
    title: "Need help moving furniture",
    requesterName: "Amit Sharma",
    avatarUrl: "https://i.pravatar.cc/150?u=1",
    description:
      "Moving to a new flat 2km away. Need 2 people to help lift a sofa and bed frame.",
    budget: "1,500",
    location: "Bandra, Mumbai",
  },
  {
    id: "2",
    title: "Fix leaky kitchen pipe",
    requesterName: "Priya K.",
    avatarUrl: "https://i.pravatar.cc/150?u=2",
    description:
      "The sink pipe is leaking heavily. Looking for someone with basic plumbing tools.",
    budget: "800",
    location: "Indiranagar, Bangalore",
  },
  {
    id: "3",
    title: "Urgent medicine delivery",
    requesterName: "Rohan Das",
    avatarUrl: "https://i.pravatar.cc/150?u=3",
    description:
      "Need someone to pick up insulin from the pharmacy and drop it at my home.",
    budget: "300",
    location: "Salt Lake, Kolkata",
  },
  {
    id: "4",
    title: "Dog walking (3 days)",
    requesterName: "Sneha Kapoor",
    avatarUrl: "https://i.pravatar.cc/150?u=4",
    description:
      "Need someone to take my Golden Retriever for a 30 min walk while I'm at work.",
    budget: "1,200",
    location: "Cyber City, Gurgaon",
  },
  {
    id: "5",
    title: "Math Tutor for 10th Grade",
    requesterName: "Vikram Singh",
    avatarUrl: "https://i.pravatar.cc/150?u=5",
    description:
      "Need a 2-hour crash course on Trigonometry before the exam tomorrow.",
    budget: "2,000",
    location: "Remote",
  },
  {
    id: "6",
    title: "Laptop hardware cleaning",
    requesterName: "Ananya M.",
    avatarUrl: "https://i.pravatar.cc/150?u=6",
    description:
      "My laptop is overheating. Need the fans cleaned and thermal paste reapplied.",
    budget: "1,000",
    location: "Hitech City, Hyderabad",
  },
  {
    id: "7",
    title: "Garden weeding & pruning",
    requesterName: "Suresh Iyer",
    avatarUrl: "https://i.pravatar.cc/150?u=7",
    description:
      "Small backyard garden needs maintenance. Tools will be provided.",
    budget: "750",
    location: "Anna Nagar, Chennai",
  },
  {
    id: "8",
    title: "Setup Smart TV & WiFi",
    requesterName: "Mrs. Gupta",
    avatarUrl: "https://i.pravatar.cc/150?u=8",
    description:
      "Just bought a new TV. Need help connecting it to the internet and Netflix.",
    budget: "500",
    location: "Vasant Vihar, Delhi",
  },
  {
    id: "9",
    title: "Car wash and interior vacuum",
    requesterName: "Rahul V.",
    avatarUrl: "https://i.pravatar.cc/150?u=9",
    description:
      "Deep cleaning needed for a sedan. Water access available in my driveway.",
    budget: "600",
    location: "Koregaon Park, Pune",
  },
  {
    id: "10",
    title: "Help with Grocery Shopping",
    requesterName: "Arjun Mehta",
    avatarUrl: "https://i.pravatar.cc/150?u=10",
    description:
      "Elderly couple needs help buying and carrying groceries for the week.",
    budget: "400",
    location: "Aliganj, Lucknow",
  },
  {
    id: "11",
    title: "Guitar strings replacement",
    requesterName: "Zoya Khan",
    avatarUrl: "https://i.pravatar.cc/150?u=11",
    description:
      "I have the strings, just don't know how to change them without snapping.",
    budget: "350",
    location: "Panjim, Goa",
  },
  {
    id: "12",
    title: "Basic Data Entry (Excel)",
    requesterName: "Pankaj G.",
    avatarUrl: "https://i.pravatar.cc/150?u=12",
    description:
      "Need to convert 20 PDF pages into a clean Excel sheet. Simple copy-paste.",
    budget: "2,500",
    location: "Remote",
  },
];

export default function ApplicationHomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 flex items-end justify-between border-zinc-200 border-b pb-8">
          <div>
            <h1 className="font-black text-4xl text-zinc-950 uppercase tracking-tight">
              Help Request Pool
            </h1>
            <p className="mt-2 font-medium text-zinc-500">
              Community-driven tasks. Find a request and lend a hand.
            </p>
          </div>
          <button
            className="rounded-xl bg-zinc-950 px-6 py-3 font-bold text-white transition-all hover:bg-zinc-800"
            type="button"
          >
            Post a Request
          </button>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {requests.map((req) => (
            <JobCard
              avatarUrl={req.avatarUrl}
              budget={req.budget}
              description={req.description}
              key={req.id}
              location={req.location}
              requesterName={req.requesterName}
              title={req.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
