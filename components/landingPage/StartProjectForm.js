"use client";

import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Combobox } from "@headlessui/react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function StartProjectForm({ onSuccessClose, prefilled, type }) {
  // const OPTIONS = [
  //   { value: "Starter Website - $199", label: "Starter Website — $199" },
  //   { value: "Essentail Website - $349", label: "Essentail Website — $349" },
  //   { value: "Ecommerce Store - $645", label: "Ecommerce Store — $645" },
  //   { value: "Starter Logo Bundle - $35", label: "Starter Logo Bundle — $35" },
  //   { value: "Essential Logo Bundle - $47", label: "Essential Logo Bundle — $47" },
  //   { value: "Premium Logo Bundle - $169", label: "Premium Logo Bundle — $169" },
  //   { value: "Combo Package - $349", label: "Combo Package — $349" },
  // ];
  const OPTIONS = [
    { value: "Basic Logo Bundle - $37", label: "Basic Logo Bundle - $37" },
    { value: "Business Logo Bundle - $74", label: "Business Logo Bundle - $74" },
    { value: "Elite Logo Identity Bundle - $167", label: "Elite Logo Identity Bundle - $167" },


    { value: "Starter Website - $199", label: "Starter Website - $199" },
    { value: "Business Website - $349", label: "Business Website - $349" },
    { value: "E-commerce Store - $645", label: "E-commerce Store - $645" },


    { value: "Combo Package - $349", label: "Combo Package — $349" },
  ];


  const mapPrefilled = (values = []) =>
    OPTIONS.filter((opt) => values.includes(opt.value));
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceTypes: selected || prefilled?.serviceTypes,
    },
  });


  // get Dynamic Route==============>

  const router = useRouter();

  const fullUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${router.asPath}`
      : "";


  /* multi-select state */
  useEffect(() => {
    const el = document.querySelector(".selectItems");
    el?.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
  }, [selected]);

  useEffect(() => {
    if (prefilled?.serviceTypes?.length) {
      setSelected(mapPrefilled(prefilled.serviceTypes));
    }
  }, [prefilled]);

  /* submit */
  const onSubmit = async (data) => {
    if (loading) return;
    setLoading(true);
    const payload = {
      serviceTypes: selected.map((s) => s.value),
      name: data.name,
      email: data.email,
      phone: data.phone,
      type: type,
      url: fullUrl
    };

    try {
      const res = await fetch(
        "https://vmi12.com/clients/vmi/send_lead.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const result = await res.json();
      console.log("API RESPONSE:", result);
      setLoading(false);
      setShowSuccess(true);


      reset();
      setSelected([]);
      // auto hide after 4 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

    } catch (error) {
      setLoading(false);
      console.error("API ERROR:", error);

      // ❌ ERROR TOAST
      toast.error("Something went wrong. Please try again.");
    }
  };



  return (
    <section className="relative">
      <div className="startProjectCard">

        {showSuccess && (
          <div className="successGlassWrap">
            <div className="successGlass">
              <div className="successGlow" />
              <div className="successIcon">✓</div>
              <p>Your request has been submitted successfully!</p>
            </div>
          </div>
        )}


        <div className="cardInner">
          <h2 className="title">
            Avail the <span>Discount Now</span>
          </h2>

          <p className="sub">
            Enter your details now to lock in your spot and claim the offer
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="formGrid formGridOneColumn"
            noValidate
          >
            {/* NAME */}
            <div className="field">
              <input
                placeholder="Name"
                className={`input ${errors.name ? "inputError" : ""}`}
                {...register("name", { required: "Name is required" })}
              />
            </div>

            {/* EMAIL */}
            <div className="field">
              <input
                placeholder="Email address"
                className={`input ${errors.email ? "inputError" : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
            </div>

            {/* PHONE */}
            <div className="field">
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone is required" }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    international
                    defaultCountry="US"
                    countryCallingCodeEditable={false}
                    placeholder="Phone number"
                    className={`phoneWrap ${errors.phone ? "inputError" : ""}`}
                  />
                )}
              />
            </div>

            {/* MULTI SELECT */}
            <p className="radioLabel">I'm Interested in:</p>

            <Combobox value={selected} onChange={setSelected} multiple>
              <div className="relative">

                {/* SELECT BUTTON */}
                <Combobox.Button className="input selectDisplay">
                  {selected.length === 0 && (
                    <span className="selectPlaceholder">Select services</span>
                  )}

                  <div className="selectItemsWrap">
                    <div className="selectItems">
                      {selected.map((item) => (
                        <span key={item.value} className="selectItem">
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <FiChevronDown className="selectArrow" />
                </Combobox.Button>




                {/* OPTIONS */}
                <Combobox.Options className="comboOptions">
                  {OPTIONS.map((item) => {
                    const isSelected = selected.some((s) => s.value === item.value);

                    return (
                      <Combobox.Option key={item.value} value={item}>
                        {({ active }) => (
                          <div
                            className={`comboOption ${active ? "active" : ""} ${isSelected ? "selected" : ""
                              }`}
                          >
                            <span>{item.label}</span>

                            {/* ❌ SHOW CROSS ONLY IF SELECTED */}
                            {isSelected && (
                              <span
                                className="optionRemove"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelected((prev) =>
                                    prev.filter((i) => i.value !== item.value)
                                  );
                                }}
                              >
                                <FiX size={18} />
                              </span>
                            )}
                          </div>
                        )}
                      </Combobox.Option>
                    );
                  })}
                </Combobox.Options>

              </div>
            </Combobox>







            {/* SUBMIT */}
            <div className="actions full">
              <button
                type="submit"
                disabled={loading}
                className={`submitBtn ${loading ? "opacity-60 cursor-not-allowed uppercase" : ""}`}
              >
                {loading ? "Submitting..." : "CLAIM OFFER NOW "}
              </button>
            </div>
          </form>
        </div >
      </div >
    </section >
  );
}
