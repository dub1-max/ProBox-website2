"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Simple Pricing`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* Basic Plan */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h4 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                AED 600-800{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h4>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Essential Flexi Desk
              </h4>
              <p>
                Ideal for freelancers or startups needing occasional access to a
                professional workspace.
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Flexible desk in a shared space
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    High-speed internet
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Access to common areas (lounge, kitchen)
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    8 hours of meeting room access per month
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Limited printing services (e.g., 100 pages per month)
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* Standard Plan */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>
              <h4 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                AED 1,000-1,400{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h4>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Pro Flexi Desk
              </h4>
              <p>
                Designed for growing businesses or professionals needing a
                consistent workspace and additional services.
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Flexible desk in a shared workspace
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    High-speed internet
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Access to common areas
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    20 hours of meeting room access per month
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Printing and scanning services (up to 200 pages per month)
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Business address for correspondence
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    24/7 access to the business center
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            {/** 3rd*/}

            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h4 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                AED 1,800-2,500{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h4>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Executive Flexi Desk
              </h4>
              <p>
                Best for established businesses or professionals who need more
                dedicated space, additional privacy, and premium services.
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Dedicated flexi desk (for regular use)
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    High-speed internet with priority support
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Access to common areas and relaxation zones
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    40 hours of meeting room access per month (with priority
                    booking)
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Printing and scanning services (up to 300 pages per month)
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Business address with mail forwarding
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    24/7 access with enhanced security
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Access to exclusive networking events and business workshops
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
          <br />
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/** 4*/}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h4 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                AED 50-75{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /day
                </span>
              </h4>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Occasional Flexi Desk
              </h4>
              <p>
                Ideal for those who require infrequent office space or need a
                professional setting for short-term use.
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Hot desk in a shared workspace
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    High-speed internet
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Access to common areas (lounge, kitchen)
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    4 hours of meeting room access (can be used within the same
                    day)
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Printing and scanning services (pay-per-use)
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            {/**5 */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h4 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Negotiable{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  (based on specific needs)
                </span>
              </h4>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Tailored Flexi Desk
              </h4>
              <p>
                For businesses or individuals who have specific requirements for
                their workspace.
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Flexi desk options based on the client's preferences
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Customized meeting room access
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Personalized services (e.g., additional storage, customized
                    branding, dedicated phone line)
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Advanced printing and scanning services
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Premium support services (e.g., administrative assistance)
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
