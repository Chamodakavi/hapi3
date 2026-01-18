"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

function Form() {
  const businessTypes = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    label: `Sample ${String(i + 1).padStart(2, "0")}`,
  }));

  const businessSizeArray = [
    { id: 1, size: "0 - 50" },
    { id: 2, size: "50 - 150" },
    { id: 3, size: "150+" },
  ];

  // --- REFS ---
  const logoInputRef = useRef<HTMLInputElement>(null);
  const bannerInputRef = useRef<HTMLInputElement>(null);

  // --- STATE ---
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);

  // --- NEW STATE: SUBMISSION STATUS ---
  // 'idle' | 'loading' | 'success' | 'error'
  const [submitStatus, setSubmitStatus] = useState<string>("idle");
  const [modalMessage, setModalMessage] = useState<string>("");

  const router = useRouter();

  const [formData, setFormData] = useState<any>({
    businessName: "",
    businessCategory: "",
    businessSize: "",
    businessContact: "",
    businessLocation: "",
    instagramURL: "",
    tikTokURL: "",
    websiteURL: "",
    businessLogo: null,
    businessBanner: null,
  });

  // ==========================
  // LOGO HANDLERS
  // ==========================
  const handleLogoBoxClick = () => {
    if (!logoPreview) logoInputRef.current?.click();
  };

  const handleLogoFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
      setFormData({ ...formData, businessLogo: file });
    }
  };

  const handleRemoveLogo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLogoPreview(null);
    setFormData({ ...formData, businessLogo: null });
    if (logoInputRef.current) logoInputRef.current.value = "";
  };

  // ==========================
  // BANNER HANDLERS
  // ==========================
  const handleBannerBoxClick = () => {
    if (!bannerPreview) bannerInputRef.current?.click();
  };

  const handleBannerFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setBannerPreview(URL.createObjectURL(file));
      setFormData({ ...formData, businessBanner: file });
    }
  };

  const handleRemoveBanner = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBannerPreview(null);
    setFormData({ ...formData, businessBanner: null });
    if (bannerInputRef.current) bannerInputRef.current.value = "";
  };

  // ==========================
  // FORM HANDLERS
  // ==========================
  const handleBusinessType = (id: number) => {
    const selectedOption = businessTypes.find((type) => type.id === id);
    if (selectedOption) {
      setFormData({ ...formData, businessCategory: selectedOption.label });
    }
  };

  const [businessType, setBusinessType] = useState<number | null>(null);
  const handleBusinessTypeClick = (id: number) => {
    setBusinessType(id);
    handleBusinessType(id);
  };

  const [businessSize, setBusinessSize] = useState<number | null>(null);
  const handleBusinessSizeClick = (id: number) => {
    setBusinessSize(id);
    const selectedOption = businessSizeArray.find((type) => type.id === id);
    if (selectedOption) {
      setFormData({ ...formData, businessSize: selectedOption.size });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- UPDATED SUBMIT HANDLER ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Set Loading State
    setSubmitStatus("loading");

    try {
      const dataPayload = new FormData();

      dataPayload.append("businessName", formData.businessName);
      dataPayload.append("businessCategory", formData.businessCategory);
      dataPayload.append("businessSize", formData.businessSize);
      dataPayload.append("businessContact", formData.businessContact);
      dataPayload.append("businessLocation", formData.businessLocation);
      dataPayload.append("instagramURL", formData.instagramURL);
      dataPayload.append("tikTokURL", formData.tikTokURL);
      dataPayload.append("websiteURL", formData.websiteURL);

      if (formData.businessLogo) {
        dataPayload.append("businessLogo", formData.businessLogo);
      }
      if (formData.businessBanner) {
        dataPayload.append("businessBanner", formData.businessBanner);
      }

      const response = await fetch("/api/register-business", {
        method: "POST",
        body: dataPayload,
      });

      const data = await response.json();

      if (response.ok) {
        // 2. Set Success State
        setSubmitStatus("success");
        setModalMessage("Your business profile has been created successfully.");

        // Reset Form Logic
        setFormData({
          businessName: "",
          businessContact: "",
          businessCategory: "",
          businessSize: "",
          businessLocation: "",
          instagramURL: "",
          tikTokURL: "",
          websiteURL: "",
          businessLogo: null,
          businessBanner: null,
        });
        setLogoPreview(null);
        setBannerPreview(null);
        setBusinessType(null);
        setBusinessSize(null);
      } else {
        // 3. Set Error State (API Error)
        setSubmitStatus("error");
        setModalMessage(data.error || "Failed to register business.");
      }
    } catch (error) {
      console.error(error);
      // 3. Set Error State (Network/Catch Error)
      setSubmitStatus("error");
      setModalMessage("Something went wrong. Please try again.");
    }
  };

  // Helper to close modal
  const closeModal = () => {
    setSubmitStatus("idle");
    setModalMessage("");
  };

  return (
    <section className="bg-[#FFFDF2] min-h-screen py-10 mt-30 lg:mt-35 relative">
      {/* =======================
          NOTIFICATION MODAL
      ======================= */}
      {submitStatus !== "idle" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#1e293b] rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl border border-slate-700 transform transition-all scale-100">
            {/* 1. LOADING STATE */}
            {submitStatus === "loading" && (
              <div className="flex flex-col items-center">
                {/* Infinite Rotate Spinner */}
                <div className="w-16 h-16 border-4 border-t-[#00D678] border-slate-600 rounded-full animate-spin mb-6"></div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Processing
                </h3>
                <p className="text-slate-400 text-sm">
                  Please wait while we set up your profile...
                </p>
              </div>
            )}

            {/* 2. SUCCESS STATE */}
            {submitStatus === "success" && (
              <div className="flex flex-col items-center">
                {/* Green Tick Animation */}
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-[#00D678]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Successfully Registered
                </h3>
                <p className="text-slate-400 text-sm mb-6">{modalMessage}</p>
                <button
                  onClick={closeModal}
                  className="w-full bg-[#00D678] hover:bg-[#00b566] text-black font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Continue
                </button>
              </div>
            )}

            {/* 3. ERROR STATE */}
            {submitStatus === "error" && (
              <div className="flex flex-col items-center">
                {/* Red X Mark */}
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Submission Failed
                </h3>
                <p className="text-slate-400 text-sm mb-6">{modalMessage}</p>
                <button
                  onClick={closeModal}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Close & Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =======================
          MAIN FORM CONTENT
      ======================= */}
      <div className="container mx-auto px-5 ">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#0f172a] mb-2 leading-tight">
          Set up your business
        </h2>
        <p className="text-gray-500 text-md mb-10">
          This helps us tailor campaigns, rewards, and visibility to your
          business and location.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Business Name */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Business Name
            </label>
            <input
              name="businessName"
              type="text"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full border border-gray-400 bg-transparent p-3 text-gray-800 focus:outline-none focus:border-black"
            />
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Business Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {businessTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleBusinessTypeClick(type.id)}
                  className={`border border-gray-400 py-3 text-sm font-medium ${
                    businessType == type.id ? "bg-[#EBFD58]" : "bg-transparent"
                  } hover:bg-[#EBFD58] transition-colors text-gray-800 cursor-pointer`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Business Size & Contact */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Business Size
              </label>
              <div className="grid grid-cols-3 gap-2">
                {businessSizeArray.map((array, id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleBusinessSizeClick(array.id)}
                    className={`border border-gray-400 py-3 text-sm font-medium ${
                      businessSize == array.id
                        ? "bg-[#EBFD58]"
                        : "bg-transparent"
                    } hover:bg-[#EBFD58] transition-colors text-gray-800 cursor-pointer`}
                  >
                    {array.size}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Business Contact
              </label>
              <input
                name="businessContact"
                onChange={handleChange}
                value={formData.businessContact}
                type="text"
                placeholder="Sample Contact"
                className="w-full border border-gray-400 bg-transparent p-3 text-gray-800 focus:outline-none focus:border-black placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Business Location */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Business Location
            </label>
            <input
              name="businessLocation"
              onChange={handleChange}
              value={formData.businessLocation}
              type="text"
              placeholder="Enter Address"
              className="w-full border border-gray-400 bg-transparent p-3 mb-2 text-gray-800 focus:outline-none focus:border-black"
            />
            <div className="w-full h-64 bg-blue-50 border-4 border-blue-400 relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31691.04971870136!2d79.91983291876365!3d6.844820323611778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sccc!5e0!3m2!1sen!2slk!4v1768136304447!5m2!1sen!2slk"
                width="100%"
                height="450"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="bg-white px-3 py-1 rounded shadow text-xs font-bold">
                  Map Preview Area
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-4">
              Social profiles
            </label>
            <div className="space-y-4">
              <input
                name="instagramURL"
                value={formData.instagramURL}
                onChange={handleChange}
                type="text"
                placeholder="Instagram URL"
                className="w-full border border-gray-400 bg-transparent p-3 text-gray-800 focus:outline-none focus:border-black placeholder:text-gray-800 font-medium"
              />
              <input
                name="tikTokURL"
                type="text"
                value={formData.tikTokURL}
                onChange={handleChange}
                placeholder="TikTok URL"
                className="w-full border border-gray-400 bg-transparent p-3 text-gray-800 focus:outline-none focus:border-black placeholder:text-gray-800 font-medium"
              />
              <input
                name="websiteURL"
                type="text"
                value={formData.websiteURL}
                onChange={handleChange}
                placeholder="Website URL"
                className="w-full border border-gray-400 bg-transparent p-3 text-gray-800 focus:outline-none focus:border-black placeholder:text-gray-800 font-medium"
              />
            </div>
          </div>

          {/* BUSINESS LOGO SECTION */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Business Logo
            </label>
            <div
              onClick={handleLogoBoxClick}
              className={`w-full h-48 border border-gray-400 flex flex-col items-center justify-center cursor-pointer transition-opacity relative
                ${logoPreview ? "bg-white" : "bg-[#EBFD58] hover:opacity-90"}
              `}
            >
              {logoPreview ? (
                <div className="relative w-full h-full p-2 flex items-center justify-center">
                  <img
                    src={logoPreview}
                    alt="Logo Preview"
                    className="max-w-full max-h-full object-contain rounded-md"
                  />
                  <button
                    onClick={handleRemoveLogo}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 border border-gray-200"
                    type="button"
                    title="Remove logo"
                    aria-label="Remove logo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-2 w-8 h-8 text-gray-800"
                  >
                    <path
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 8L12 3L7 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 3V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-semibold text-gray-800">
                    Upload Image
                  </span>
                </>
              )}
            </div>
            <input
              type="file"
              ref={logoInputRef}
              onChange={handleLogoFileChange}
              className="hidden"
              accept="image/*"
            />
          </div>

          {/* BUSINESS BANNER SECTION */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Business Banner
            </label>
            <div
              onClick={handleBannerBoxClick}
              className={`w-full h-48 border border-gray-400 flex flex-col items-center justify-center cursor-pointer transition-opacity relative
                ${bannerPreview ? "bg-white" : "bg-[#EBFD58] hover:opacity-90"}
              `}
            >
              {bannerPreview ? (
                <div className="relative w-full h-full p-2 flex items-center justify-center">
                  <img
                    src={bannerPreview}
                    alt="Banner Preview"
                    className="max-w-full max-h-full object-contain rounded-md"
                  />
                  <button
                    onClick={handleRemoveBanner}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 border border-gray-200"
                    type="button"
                    title="Remove banner"
                    aria-label="Remove banner"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-2 w-8 h-8 text-gray-800"
                  >
                    <path
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 8L12 3L7 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 3V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-semibold text-gray-800">
                    Upload Image
                  </span>
                </>
              )}
            </div>
            <input
              type="file"
              ref={bannerInputRef}
              onChange={handleBannerFileChange}
              className="hidden"
              accept="image/*"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={submitStatus === "loading"}
              className="bg-[#00D678] text-black font-bold py-3 px-10 hover:bg-[#00b566] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitStatus === "loading"
                ? "Creating Profile..."
                : "Create Profile"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
