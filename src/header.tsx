import React from "react";
import siteLogo from "@/assets/ultimutt-logo.svg";

const header = () => {
  return (
    <header
      className="bg-white"
      style={{ boxShadow: " 0px 1px 3px 1px rgba(60, 64, 67, 0.15)" }}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-full items-center justify-between py-4 md:px-[100px] px-[20px]"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center gap-x-3">
            <img src={siteLogo} alt="" className="h-{58} w-auto" />
            <span>
              NCR's most trusted <br />
              pet services partner
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() =>
              (
                document.getElementById(
                  "mobile-menu"
                ) as HTMLDialogElement | null
              )?.showModal()
            }
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#home" className="text-sm/6 text-gray-900">
            Home
          </a>
          <a href="#features" className="text-sm/6 text-gray-900">
            App Features
          </a>
          <a href="#facilities" className="text-sm/6 text-gray-900">
            Our Facilities
          </a>
          <a href="#testimonials" className="text-sm/6 text-gray-900">
            Testimonials
          </a>
        </div>
      </nav>
      <div>
        <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
          <div tabIndex={0} className="fixed inset-0 focus:outline-none">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() =>
                    (document.getElementById("mobile-menu") as HTMLDialogElement | null)?.close()
                  }
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <div className="-mx-3">
                      <button
                        type="button"
                        data-command="--toggle"
                        data-commandfor="products"
                        className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Product
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          data-slot="icon"
                          aria-hidden="true"
                          className="size-5 flex-none in-aria-expanded:rotate-180"
                        >
                          <path
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <div
                        id="products"
                        hidden
                        className="mt-2 block space-y-2"
                      >
                        <a
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Analytics
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Engagement
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Security
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Integrations
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Automations
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Watch demo
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Contact sales
                        </a>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </header>
  );
};

export default header;
