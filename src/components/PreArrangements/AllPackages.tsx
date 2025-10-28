import React, { useState, useMemo } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RiCloseCircleLine } from "react-icons/ri";
import sortIcon from "../../assets/icon/tabler_sort-ascending-2.svg";
import filterIcon from "../../assets/icon/ep_filter.svg";

import platinum1 from "../../assets/img/uploads/preArrangement/VIPPlatinum1.svg";
import platinum2 from "../../assets/img/uploads/preArrangement/VIPPlatinum2.svg";
import platinum3 from "../../assets/img/uploads/preArrangement/VIPPlatinum3.svg";
import platinum4 from "../../assets/img/uploads/preArrangement/VIPPlatinum4.svg";
import gold1 from "../../assets/img/uploads/preArrangement/VIPGold1.svg";
import gold2 from "../../assets/img/uploads/preArrangement/VIPGold2.svg";
import gold3 from "../../assets/img/uploads/preArrangement/VIPGold3.svg";
import superior1 from "../../assets/img/uploads/preArrangement/Superior1.svg";
import superior2 from "../../assets/img/uploads/preArrangement/Superior2.svg";
import superior3 from "../../assets/img/uploads/preArrangement/Superior3.svg";
import standard1 from "../../assets/img/uploads/preArrangement/Standard1.svg";
import standard2 from "../../assets/img/uploads/preArrangement/Standard2.svg";
import standard3 from "../../assets/img/uploads/preArrangement/Standard3.svg";

type Package = {
  id: number;
  category: string;
  type: string;
  helpingText: string;
  subPackages: SubPackage[];
};

type SubPackage = {
  price: string;
  description: string;
  mainImg: string;
  images?: string[];
  category?: string;
};

// packages details array
const packages: Package[] = [
  {
    id: 1,
    category: "VIP Platinum Packages",
    type: "pre arrangement",
    helpingText: "OUR MOST PRESTIGIOUS OFFERING",
    subPackages: [
      {
        price: "650,000",
        description:
          "Ultimate Platinum VIP funeral with all-inclusive services.",
        mainImg: platinum1,
      },
      {
        price: "575,000",
        description:
          "Platinum with complete luxury and photo and video coverage.",
        mainImg: platinum2,
      },
      {
        price: "500,000",
        description: "Full VIP Platinum with extended floral services.",
        mainImg: platinum3,
      },
      {
        price: "450,000",
        description: "Platinum funeral with VIP cars and arrangements.",
        mainImg: platinum4,
      },
    ],
  },
  {
    id: 2,
    category: "VIP Gold Packages",
    type: "pre arrangement",
    helpingText: "PREMIUM CARE & DIGNITY",
    subPackages: [
      {
        price: "400,000",
        description:
          "Ultimate Platinum VIP funeral with all-inclusive services.",
        mainImg: gold1,
      },
      {
        price: "350,000",
        description:
          "Platinum with complete luxury and photo and video coverage.",
        mainImg: gold2,
      },
      {
        price: "300,000",
        description: "Full VIP Platinum with extended floral services.",
        mainImg: gold3,
      },
    ],
  },
  {
    id: 3,
    category: "Superior Packages",
    type: "pre arrangement",
    helpingText: "ENHANCED SERVICE EXPERIENCE",
    subPackages: [
      {
        price: "275,000",
        description:
          "Ultimate Platinum VIP funeral with all-inclusive services.",
        mainImg: superior1,
      },
      {
        price: "225,000",
        description:
          "Platinum with complete luxury and photo and video coverage.",
        mainImg: superior2,
      },
      {
        price: "175,000",
        description: "Full VIP Platinum with extended floral services.",
        mainImg: superior3,
      },
    ],
  },
  {
    id: 4,
    category: "Standard Packages",
    type: "pre arrangement",
    helpingText: "AFFORDABLE & RESPECTFUL",
    subPackages: [
      {
        price: "150,000",
        description:
          "Ultimate Platinum VIP funeral with all-inclusive services.",
        mainImg: standard1,
      },
      {
        price: "125,000",
        description:
          "Platinum with complete luxury and photo and video coverage.",
        mainImg: standard2,
      },
      {
        price: "100,000",
        description: "Full VIP Platinum with extended floral services.",
        mainImg: standard3,
      },
    ],
  },
];

const AllPackages: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<"none" | "asc" | "desc">("none");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // convert price string to number for sorting
  const parsePrice = (p: string) => Number(p.replace(/[^0-9.-]+/g, ""));

  // filter packages
  const filteredPackages = useMemo<Package[]>(
    () =>
      packages
        .filter(
          (pkg) =>
            selectedCategory === "All" || pkg.category === selectedCategory
        )
        .map((pkg) => ({ ...pkg, subPackages: [...pkg.subPackages] })),
    [selectedCategory]
  );

  // sort packages
  const sortedPackages = useMemo<SubPackage[]>(() => {
    const list = packages
      .flatMap((pkg) =>
        pkg.subPackages.map((subPkg) => ({ ...subPkg, category: pkg.category }))
      )
      .filter(
        (subPkg) =>
          selectedCategory === "All" || subPkg.category === selectedCategory
      );

    if (sortOrder === "asc")
      return list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    if (sortOrder === "desc")
      return list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    return list;
  }, [selectedCategory, sortOrder]);

  return (
    <div className="w-full flex flex-col gap-6 lg:gap-10">
      {/* sort & filter section */}
      <div className="flex flex-col md:flex-row-reverse md:py-5 mb-6 lg:mb-4 gap-2 md:gap-2">
        <div className="relative flex items-center justify-end gap-4">
          {/* sort button */}
          <div className="relative inline-flex items-center gap-2 md:gap-3 px-0 md:px-0 py-0 md:py-0 rounded-lg border border-[#A1A1A1] bg-white">
            <Select
              value={sortOrder}
              onValueChange={(v) => setSortOrder(v as "none" | "asc" | "desc")}
            >
              <SelectTrigger className="w-fit bg-white border-none px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer text-xs md:text-sm">
                <img src={sortIcon} className="w-4 h-4 md:w-5 md:h-5" />
                <SelectValue placeholder="Sort by: Price" />
              </SelectTrigger>
              <SelectContent className="bg-white p-1 rounded-lg border-[#A1A1A1]/80 lg:translate-x-0.5">
                <SelectGroup>
                  <SelectItem
                    className="text-xs md:text-sm hover:bg-gray-100 rounded-lg cursor-pointer"
                    value="none"
                  >
                    Sort by: None
                  </SelectItem>
                  <SelectItem
                    className="text-xs md:text-sm hover:bg-gray-100 rounded-lg cursor-pointer"
                    value="asc"
                  >
                    Price: Low to High
                  </SelectItem>
                  <SelectItem
                    className="text-xs md:text-sm hover:bg-gray-100 rounded-lg cursor-pointer"
                    value="desc"
                  >
                    Price: High to Low
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* filter button */}
          <div className="relative inline-flex items-center justify-center rounded-lg border border-[#A1A1A1] bg-white">
            <Select
              value={selectedCategory}
              onValueChange={(v) => setSelectedCategory(v)}
            >
              <SelectTrigger className="w-fit bg-white border-none px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer text-xs md:text-sm">
                <img src={filterIcon} className="w-3 h-3 md:w-4 md:h-4" />
                <SelectValue placeholder="Filter by: Category" />
              </SelectTrigger>
              <SelectContent className="bg-white p-1 rounded-lg border-[#A1A1A1]/80 lg:translate-x-0.5">
                <SelectGroup>
                  <SelectLabel className="text-gray-400">
                    Package Categories
                  </SelectLabel>
                  <SelectItem
                    className="text-xs md:text-sm hover:bg-gray-100 rounded-lg cursor-pointer"
                    value="All"
                  >
                    All Categories
                  </SelectItem>
                  {packages.map((pkg) => (
                    <SelectItem
                      className="text-xs md:text-sm hover:bg-gray-100 rounded-lg cursor-pointer"
                      key={pkg.id}
                      value={pkg.category}
                    >
                      {pkg.category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* clear sort and filter */}
        <div className="relative w-full md:w-auto flex items-center justify-end">
          <button
            onClick={() => {
              setSortOrder("none");
              setSelectedCategory("All");
            }}
            className={`text-xs md:text-sm text-gray-500 font-normal flex items-center justify-center gap-1 p-1.5 md:p-2 ${
              sortOrder === "none" && selectedCategory === "All"
                ? "hidden"
                : "cursor-pointer"
            }`}
          >
            <RiCloseCircleLine />
            <span> Clear Sort & Filter</span>
          </button>
        </div>
      </div>

      {/* packages display section */}
      {sortOrder === "none" ? (
        filteredPackages.map((pkg) => (
          <div className="mb-10 md:mb-16" key={pkg.id}>
            <div className="text-center lg:text-left border-b-2 border-[#CCCCCC] pb-2 mb-10">
              {/* package heading helping text */}
              <h1 className="text-xs lg:text-sm font-belda text-ternary/70 mb-1 md:mb-3 lg:mb-4 uppercase tracking-[2px] md:tracking-[3px]">
                {pkg.helpingText}
              </h1>
              {/* package main heading */}
              <h1 className="text-2xl md:text-3xl lg:text-5xl leading-[41px] lg:leading-[62px] font-belda font-semibold">
                {pkg.category}
              </h1>
            </div>

            {/* package card */}
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
              {pkg.subPackages.map((subPkg, index) => (
                // main card container
                <div
                  className="bg-[#F4F4F4] p-1 md:p-2 lg:p-1.5 rounded-xl h-auto shadow-[0_2px_6px_0_rgba(0,0,0,0.15)]"
                  key={index}
                >
                  {/* package image */}
                  <div className="rounded-lg overflow-hidden h-28 md:h-48 lg:h-44">
                    <img
                      src={subPkg.mainImg}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* package details */}
                  <div className="mt-2 md:mt-4 space-y-4 md:px-1.5">
                    <div className="flex items-center justify-between">
                      {/* main categpry */}
                      <h1 className="text-[6px] md:text-[10px] font-medium text-secondary leading-tight px-1.5 md:px-2 py-1.5 border border-secondary rounded-full flex items-center justify-center">
                        {pkg.category}
                      </h1>
                      {/* price */}
                      <h1 className="text-[10px] md:text-sm font-semibold text-ternary">
                        LKR {subPkg.price} /=
                      </h1>
                    </div>
                    {/* small description */}
                    <p className="text-[10px] md:text-sm font-light text-ternary leading-tight px-1 md:px-0">
                      {subPkg.description}
                    </p>
                  </div>

                  {/* bottom buttons section */}
                  <div className="mt-4 md:mt-6 flex items-center justify-between gap-3 md:gap-3.5 p-1 text-ternary text-[10px] font-normal">
                    <button className="w-full md:w-3/5 px-1 md:px-2 py-1.5 md:py-2.5 lg:py-2 border border-ternary hover:bg-white/40 text-[8px] md:text-xs lg:text-[11px] rounded-lg cursor-pointer">
                      More Details
                    </button>
                    <button className="w-full md:w-full px-2 md:px-4 py-1.5 md:py-2.5 lg:py-2 bg-primary hover:bg-primary/90 md:text-sm lg:text-[13px] rounded-lg cursor-pointer">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        // view after sorting
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-10 md:mb-16">
          {sortedPackages.map((subPkg, index) => (
            // main card container
            <div
              className="bg-[#F4F4F4] p-1 md:p-2 lg:p-1.5 rounded-xl h-auto shadow-[0_2px_6px_0_rgba(0,0,0,0.15)]"
              key={index}
            >
              {/* package image */}
              <div className="rounded-lg overflow-hidden h-28 md:h-48 lg:h-44">
                <img
                  src={subPkg.mainImg}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* package details */}
              <div className="mt-2 md:mt-4 space-y-4 md:px-1.5">
                <div className="flex items-center justify-between">
                  {/* main categpry */}
                  <h1 className="text-[6px] md:text-[10px] font-medium text-secondary leading-tight px-1.5 md:px-2 py-1.5 border border-secondary rounded-full flex items-center justify-center">
                    {subPkg.category}
                  </h1>
                  {/* price */}
                  <h1 className="text-[10px] md:text-sm font-semibold text-ternary">
                    LKR {subPkg.price} /=
                  </h1>
                </div>
                {/* small description */}
                <p className="text-[10px] md:text-sm font-light text-ternary leading-tight px-1 md:px-0">
                  {subPkg.description}
                </p>
              </div>

              {/* bottom buttons section */}
              <div className="mt-4 md:mt-6 flex items-center justify-between gap-3 md:gap-3.5 p-1 text-ternary text-[10px] font-normal">
                <button className="w-full md:w-3/5 px-1 md:px-2 py-1.5 md:py-2.5 lg:py-2 border border-ternary hover:bg-white/40 text-[8px] md:text-xs lg:text-[11px] rounded-lg cursor-pointer">
                  More Details
                </button>
                <button className="w-full md:w-full px-2 md:px-4 py-1.5 md:py-2.5 lg:py-2 bg-primary hover:bg-primary/90 md:text-sm lg:text-[13px] rounded-lg cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPackages;
