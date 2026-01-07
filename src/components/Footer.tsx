import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#e3f647] text-[#0f172a] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* COLUMN 1: Brand / Locale / Copyright */}
          <div className="flex flex-col justify-between h-full space-y-8 lg:space-y-0">
            <div>
              <div className="mb-6">
                <img src="/images/logo.png" alt="" />
              </div>

              <div className="font-bold text-lg cursor-pointer hover:opacity-70">
                United States (English)
              </div>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products & pricing</h3>
            <ul className="space-y-2 text-sm md:text-[15px] font-medium text-slate-800">
              <li>
                <a href="#" className="hover:opacity-60">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Atlas
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Authorization
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Boost
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Billing
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Capital
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Checkout
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Climate
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Connect
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Data Pipeline
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Elements
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Financial Accounts
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Financial Connections
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Identity
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Invoicing
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Issuing
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Payment Links
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Payouts
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Radar
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Revenue Recognition
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Stripe Sigma
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Tax
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Terminal
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products & pricing</h3>
            <ul className="space-y-2 text-sm md:text-[15px] font-medium text-slate-800">
              <li>
                <a href="#" className="hover:opacity-60">
                  Enterprises
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Startups
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Agentic commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Crypto
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Ecommerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Embedded finance
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Finance automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Global businesses
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  In-app payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Marketplaces
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Platforms
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  SaaS
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  AI companies
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Creator economy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Hospitality, travel, and leisure
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Media and entertainment
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Nonprofits
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Retail
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products & pricing</h3>
            <ul className="space-y-2 text-sm md:text-[15px] font-medium text-slate-800">
              <li>
                <a href="#" className="hover:opacity-60">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Customer stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Sessions annual conference
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Privacy & terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Prohibited & restricted businesses
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Cookie settings
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  Your privacy choices
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60">
                  More resources
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="font-semibold mt-auto pt-10 lg:pt-0">
          © 2025 No name, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
