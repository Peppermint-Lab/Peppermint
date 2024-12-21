/* eslint-disable react/no-unescaped-entities */
"use-client";
import {
  Bell,
  ChevronRight,
  Cloud,
  Globe,
  Inbox,
  Lightbulb,
  Lock,
  User,
} from "lucide-react";

const navigation = [
  { name: "Github", href: "https://github.com/Peppermint-Lab/peppermint" },
  { name: "Docs", href: "https://docs.peppermint.sh/" },
  { name: "Discord", href: "https://discord.gg/cyj86Ncygn" },
];

// const footer = {
//   // solutions: [
//   //   { name: "Self Hosted", href: "#" },
//   //   { name: "Linode", href: "" },
//   // ],
//   support: [
//     { name: "Documentation", href: "https://docs.peppermint.sh/" },
//     { name: "Discord", href: "https://discord.gg/fs4j39FWfm" },
//   ],
//   company: [
//     { name: "About", href: "#" },
//     // { name: "Blog", href: "#" },
//     // { name: "Press", href: "#" },
//     // { name: "Investors", href: "#" },
//     // { name: "Open", href: "#" },
//   ],
//   social: [
//     {
//       name: "Twitter",
//       href: "https://twitter.com/potts_dev",
//       icon: (props: any) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//         </svg>
//       ),
//     },
//     {
//       name: "GitHub",
//       href: "https://github.com/Peppermint-Lab/peppermint/",
//       icon: (props: any) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     // {
//     //   name: "YouTube",
//     //   href: "#",
//     //   icon: (props: any) => (
//     //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//     //       <path
//     //         fillRule="evenodd"
//     //         d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
//     //         clipRule="evenodd"
//     //       />
//     //     </svg>
//     //   ),
//     // },
//   ],
// };

const posts = [
  {
    id: 1,
    title: "DB Tech's Alpha review 2022",
    href: "#",
    description: "",
    date: "8th Feb 2022",
    datetime: "2022-02-08",
    author: {
      name: "DB Tech",
      role: "Content Creator / Youtuber",
      href: "https://www.youtube.com/@DBTechYT",
      imageUrl:
        "https://yt3.googleusercontent.com/RZiSgwDX07SVLpo6Vl1eSGIG07ws3tbgSyFY9XWn0nq9Y-NCxttzuONG4L6FRGehcdoOVoHYaw=s176-c-k-c0x00ffffff-no-rj",
    },
    embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LORGa1zV2us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    id: 2,
    title: "Host your own HelpDesk",
    href: "https://youtu.be/Kq0BMVhbFkA",
    description: "",
    date: "30th Mar 2023 ",
    datetime: "2023-03-30",
    author: {
      name: "Network Chuck",
      role: "Content Creator / Youtuber",
      href: "https://www.youtube.com/@NetworkChuck",
      imageUrl:
        "https://yt3.googleusercontent.com/ytc/AL5GRJW5XsaEbRr2gFUPOzr8i0iVyS7vihYNp0sAKXsrBA=s176-c-k-c0x00ffffff-no-rj",
    },
    embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Kq0BMVhbFkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
];

const stats = [
  { label: "Docker Pulls", value: "190k" },
  { label: "Github Stars", value: "2k" },
];

const features = [
  {
    name: "Notifications",
    description:
      "Connect Peppermint to third-party services using webhooks and various providers, including email integration.",
    href: "#",
    icon: Bell,
  },
  {
    name: "Mailbox Integration",
    description:
      "Configure mailboxes to use SMTP/IMAP to fetch emails and convert them into tickets for efficient management.",
    href: "#",
    icon: Inbox,
  },
  {
    name: "OIDC Authentication",
    description:
      "Use OIDC for authentication, allowing you to connect to your existing identity provider.",
    href: "#",
    icon: Lock,
  },
];

const features2 = [
  {
    name: "Location",
    description:
      "Peppermint is designed to be hosted in any environment, offering all of its core features without requiring an internet connection.",
    icon: Globe,
  },
  {
    name: "Data Ownership",
    description:
      "Peppermint ensures customer app data remains private by never transferring it to external servers. All data is securely stored locally on your server.",
    icon: Lock,
  },
  {
    name: "Lightweight",
    description:
      "Peppermint is designed to be lightweight and fast, making it suitable for running on low-end hardware with minimal resource usage. This allows for cost-effective hosting on a low-end VPS or even a Raspberry Pi.",
    icon: Lightbulb,
  },
  {
    name: "Customer First",
    description:
      "Peppermint is an open source customer-centric product, enabling us to provide the best features by actively listening to and addressing our customer's needs in order to improve.",
    icon: User,
  },
];

export default function Home() {
  return (
    <div className="sm:min-h-screen mx-6 sm:mx-0 bg-white">
      <header className="bg-white mx-auto text-base max-w-xl">
        <nav className="flex justify-between py-8" aria-label="Global">
          <div className="flex justify-between items-center align-middle lg:flex-1">
            <div className="-m-1.5 p-1.5">
              <span className="sm:hidden">🍵</span>
              <span className="hidden sm:block font-bold text-xl">
                🍵
              </span>
            </div>
          </div>

          <div className="flex gap-x-12 align-middle">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold  text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <div className="relative isolate overflow-hidden bg-white mx-auto max-w-xl">
        <div className="max-w-xl">
          <div className="hidden sm:mb-4 sm:flex sm:flex-col">
            <div className="">
              <a
                href="https://github.com/Peppermint-Lab/peppermint/releases"
                className="inline-flex space-x-6"
                target="_blank"
              >
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                  What's new -
                  <span className="ml-1 inline-flex items-center space-x-2 text-sm font-medium leading-6 ">
                    <span className="text-sm">Version 0.5.4 is live! 🚀</span>
                    <ChevronRight
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="">
            <span className="text-2xl font-bold tracking-tight text-gray-900 ">
              Peppermint - Open Source Issue management
            </span>
            <div className="mt-4 flex flex-col ">
              <div className="">
                <p className="text-base text-gray-800">
                  We offer an innovative issue management and helpdesk solution
                  that serves as an open alternative to Jira and Zendesk. Our
                  platform is designed to streamline customer support processes
                  while being cost-effective, empowering teams to manage
                  projects and support requests efficiently.
                </p>
              </div>
              <div className="my-6 space-x-4 flex flex-row">
                <a
                  href="https://docs.peppermint.sh/docker"
                  className="rounded-md w-full px-3.5 py-2.5 text-sm font-semibold bg-green-600  text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  target="_blank"
                >
                  Install within a minute via Docker
                </a>
              </div>

              <span className="text-sm text-gray-900 font-semibold">
                Or use one command to deploy on any VPS
              </span>

              <code className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
                <span className="flex gap-4">
                  <span className="shrink-0 text-gray-500">$</span>
                  <span className="flex-1">
                    <span className="text-xs">
                      curl -sSL -o deployer.sh https://deploy.spearmint.sh &&
                      chmod +x deployer.sh && ./deployer.sh
                    </span>
                  </span>
                </span>
              </code>
            </div>
          </div>
        </div>

        <div>
          <img
            className="h-full w-full rounded-md shadow-lg my-4"
            src="/dashboard.jpeg"
            alt="landing page screenshot of dashboard"
          />
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-4">
        <div className="mx-auto max-w-xl mt-4 lg:max-w-none">
          <dl className="">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex-col flex mt-4">
                <dt className="flex items-center gap-x-3 text-base font-semibold text-white max-w-[98px] mt-1">
                  <feature.icon
                    className="h-5 w-5 flex-none text-green-600"
                    aria-hidden="true"
                  />
                  <span className="text-gray-900 whitespace-nowrap">
                    {feature.name}
                  </span>
                </dt>
                <dd className="flex flex-auto flex-col mt-1 text-sm sm:text-base  text-gray-900">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-4">
        <dl className="space-y-4 flex flex-col md:flex-row md:space-x-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse ">
              <dt className="text-base leading-7 text-gray-600">
                {stat.label}
              </dt>
              <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="bg-white py-4 max-w-xl mx-auto">
        <dl className="mx-auto mt-4 flex flex-col  text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {features2.map((feature) => (
            <div key={feature.name} className="relative flex-col flex mt-4">
              <dt className="flex items-center gap-x-3 text-base font-semibold text-white max-w-[98px] mt-1">
                <feature.icon
                  className="h-5 w-5 flex-none text-green-600"
                  aria-hidden="true"
                />
                <span className="text-gray-900 whitespace-nowrap">
                  {feature.name}
                </span>
              </dt>
              <dd className="flex flex-auto flex-col text-base  text-gray-900">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="bg-white mb-4 mx-auto max-w-xl ">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 ">
            Our mission
          </h2>
          <div className="mt-2 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-base text-gray-800">
                Peppermint aims to bridge the gap between rich features and
                affordability. We strive to provide a wide range of tools,
                functionalities, and user experiences without imposing excessive
                costs on our users.
              </p>
              <p className="mt-4 max-w-xl text-base  text-gray-700">
                The project's core values focus on empowering users through a
                platform that prioritizes quality and usability without
                compromising affordability. This inclusive approach enables
                individuals and organizations with diverse budgetary constraints
                to access a feature-rich software solution without compromising
                performance or affordability.
              </p>
            </div>
          </div>
        </div>
      </div>

       <div className="mt-4 flex flex-col ">
              <div className="">
                <p className="text-base text-gray-800">
            Deploy faster with one click
          </h2>
          <p className="mt-3 text-base">
            Peppermint is built to be hosted in a docker container, which can be
            easily scaled through k8's. In addition to this you can host
            peppermint through pm2 or even locally with NodeJS
          </p>
          <dl className="mt-6 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold">
                <Cloud
                  className="absolute left-1 top-1 h-5 w-5 "
                  aria-hidden="true"
                />
                Linode
              </dt>
              <dd className="">
                Linode is a great cloud provider that offers the installilation
                of peppermint through the click of a button.
              </dd>
            </div>
          </dl>
          <dl className="mt-6 max-w-xl text-base leading-7 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold ">
                <Cloud
                  className="absolute left-1 top-1 h-5 w-5 "
                  aria-hidden="true"
                />
                Hostinger VPS
              </dt>
              <dd className="">
                Hostinger VPS offers peak performance with AMD CPU, and NVMe
                storage, competitive pricing, automatic backups, and manual
                snapshots.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-white mt-8">
        <div className="mx-auto max-w-xl">
          <div className="">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 ">
              Video Reviews
            </h2>
            <p className="text-base leading-8 text-gray-800">
              Check out these great videos showcasing peppermint and its
              features.
            </p>
          </div>
          <div className="mx-auto mt-4 flex flex-col max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-5 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <div className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 max-w-full">
                    <div
                      className="max-w-full relative w-[350px] sm:w-full"
                      dangerouslySetInnerHTML={{ __html: post.embed }}
                    ></div>
                  </div>
                </div>
                <div className="relative mt-4 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-white" aria-labelledby="footer-heading">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-500">
              &copy; 2024 Peppermint Labs Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
