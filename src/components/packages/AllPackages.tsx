import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IoClose } from "react-icons/io5";
import { RiCloseCircleLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import sortIcon from "../../assets/icon/tabler_sort-ascending-2.svg";
import filterIcon from "../../assets/icon/ep_filter.svg";

import platinum1 from "../../assets/img/uploads/packages/VIPPlatinum1.svg";
import platinum2 from "../../assets/img/uploads/packages/VIPPlatinum2.svg";
import platinum3 from "../../assets/img/uploads/packages/VIPPlatinum3.svg";
import platinum4 from "../../assets/img/uploads/packages/VIPPlatinum4.svg";
import gold1 from "../../assets/img/uploads/packages/VIPGold1.svg";
import gold2 from "../../assets/img/uploads/packages/VIPGold2.svg";
import gold3 from "../../assets/img/uploads/packages/VIPGold3.svg";
import superior1 from "../../assets/img/uploads/packages/Superior1.svg";
import superior2 from "../../assets/img/uploads/packages/Superior2.svg";
import superior3 from "../../assets/img/uploads/packages/Superior3.svg";
import standard1 from "../../assets/img/uploads/packages/Standard1.svg";
import standard2 from "../../assets/img/uploads/packages/Standard2.svg";
import standard3 from "../../assets/img/uploads/packages/Standard3.svg";

import popupPlatinum1_1 from "../../assets/img/uploads/packages/VIPPlatinum_popup1.jpg";
import popupPlatinum1_2 from "../../assets/img/uploads/packages/VIPPlatinum_popup2.png";
import popupPlatinum1_3 from "../../assets/img/uploads/packages/VIPPlatinum_popup3.webp";
import popupPlatinum1_4 from "../../assets/img/uploads/packages/VIPPlatinum_popup4.webp";
import popupPlatinum2_1 from "../../assets/img/uploads/packages/VIPPlatinum_popup1.jpg";
import popupPlatinum2_2 from "../../assets/img/uploads/packages/VIPPlatinum_popup2.png";
import popupPlatinum2_3 from "../../assets/img/uploads/packages/VIPPlatinum_popup3.webp";
import popupPlatinum2_4 from "../../assets/img/uploads/packages/VIPPlatinum_popup4.webp";
import popupPlatinum3_1 from "../../assets/img/uploads/packages/VIPPlatinum_popup1.jpg";
import popupPlatinum3_2 from "../../assets/img/uploads/packages/VIPPlatinum_popup2.png";
import popupPlatinum3_3 from "../../assets/img/uploads/packages/VIPPlatinum_popup3.webp";
import popupPlatinum3_4 from "../../assets/img/uploads/packages/VIPPlatinum_popup4.webp";
import popupPlatinum4_1 from "../../assets/img/uploads/packages/VIPPlatinum_popup1.jpg";
import popupPlatinum4_2 from "../../assets/img/uploads/packages/VIPPlatinum_popup2.png";
import popupPlatinum4_3 from "../../assets/img/uploads/packages/VIPPlatinum_popup3.webp";
import popupPlatinum4_4 from "../../assets/img/uploads/packages/VIPPlatinum_popup4.webp";

import popupGold1_1 from "../../assets/img/uploads/packages/VIPGold_popup1.jpg";
import popupGold1_2 from "../../assets/img/uploads/packages/VIPGold_popup2.png";
import popupGold1_3 from "../../assets/img/uploads/packages/VIPGold_popup3.webp";
import popupGold1_4 from "../../assets/img/uploads/packages/VIPGold_popup4.webp";
import popupGold2_1 from "../../assets/img/uploads/packages/VIPGold_popup1.jpg";
import popupGold2_2 from "../../assets/img/uploads/packages/VIPGold_popup2.png";
import popupGold2_3 from "../../assets/img/uploads/packages/VIPGold_popup3.webp";
import popupGold2_4 from "../../assets/img/uploads/packages/VIPGold_popup4.webp";
import popupGold3_1 from "../../assets/img/uploads/packages/VIPGold_popup1.jpg";
import popupGold3_2 from "../../assets/img/uploads/packages/VIPGold_popup2.png";
import popupGold3_3 from "../../assets/img/uploads/packages/VIPGold_popup3.webp";
import popupGold3_4 from "../../assets/img/uploads/packages/VIPGold_popup4.webp";

import popupSuperior1_1 from "../../assets/img/uploads/packages/Superior_popup1.jpg";
import popupSuperior1_2 from "../../assets/img/uploads/packages/Superior_popup2.png";
import popupSuperior1_3 from "../../assets/img/uploads/packages/Superior_popup3.webp";
import popupSuperior1_4 from "../../assets/img/uploads/packages/Superior_popup4.webp";
import popupSuperior2_1 from "../../assets/img/uploads/packages/Superior_popup1.jpg";
import popupSuperior2_2 from "../../assets/img/uploads/packages/Superior_popup2.png";
import popupSuperior2_3 from "../../assets/img/uploads/packages/Superior_popup3.webp";
import popupSuperior2_4 from "../../assets/img/uploads/packages/Superior_popup4.webp";
import popupSuperior3_1 from "../../assets/img/uploads/packages/Superior_popup1.jpg";
import popupSuperior3_2 from "../../assets/img/uploads/packages/Superior_popup2.png";
import popupSuperior3_3 from "../../assets/img/uploads/packages/Superior_popup3.webp";
import popupSuperior3_4 from "../../assets/img/uploads/packages/Superior_popup4.webp";

import popupStandard1_1 from "../../assets/img/uploads/packages/Standard_popup1.jpg";
import popupStandard1_2 from "../../assets/img/uploads/packages/Standard_popup2.png";
import popupStandard1_3 from "../../assets/img/uploads/packages/Standard_popup3.webp";
import popupStandard1_4 from "../../assets/img/uploads/packages/Standard_popup4.webp";
import popupStandard2_1 from "../../assets/img/uploads/packages/Standard_popup1.jpg";
import popupStandard2_2 from "../../assets/img/uploads/packages/Standard_popup2.png";
import popupStandard2_3 from "../../assets/img/uploads/packages/Standard_popup3.webp";
import popupStandard2_4 from "../../assets/img/uploads/packages/Standard_popup4.webp";
import popupStandard3_1 from "../../assets/img/uploads/packages/Standard_popup1.jpg";
import popupStandard3_2 from "../../assets/img/uploads/packages/Standard_popup2.png";
import popupStandard3_3 from "../../assets/img/uploads/packages/Standard_popup3.webp";
import popupStandard3_4 from "../../assets/img/uploads/packages/Standard_popup4.webp";

type Package = {
  id: number;
  category: string;
  helpingText: string;
  subPackages: SubPackage[];
};

type SubPackage = {
  price: string;
  description: string;
  mainImg: string;
  images?: string[];
  category?: string;
  details?: PackageDetail[];
};

type PackageDetail = {
  text: string;
  subItems?: string[];
};

// packages details array
const packages: Package[] = [
  {
    id: 1,
    category: "VIP Platinum Packages",
    helpingText: "OUR MOST PRESTIGIOUS OFFERING",
    subPackages: [
      {
        price: "650,000",
        description:
          "Ultimate Platinum VIP funeral with all-inclusive services.",
        mainImg: platinum1,
        images: [
          popupPlatinum1_1,
          popupPlatinum1_2,
          popupPlatinum1_3,
          popupPlatinum1_4,
        ],
        details: [
          {
            text: "Spray Casket - Mahogany, Teak, or Ebony color casket with imported heavy casket fittings.",
          },
          { text: "UK imported chemicals." },
          { text: "Delivery within 20Km distance from Colombo." },
          { text: "Island wide 24-hours funeral services available." },
          {
            text: "Funeral Homes available on request for one day, extra charges apply for additional days.",
          },
          {
            text: "Available VIP Funeral Homes",
            subItems: ["Tulip", "Araliya", "Orchid", "White Rose", "Crystal"],
          },
          {
            text: "Funeral director’s service with VIP Benz and VIP Volvo hearse plus flower car included.",
          },
          {
            text: "All above services included with photo album and videography on the last funeral service day.",
          },
          {
            text: "4 flower vases with fresh flowers, with other basic requests.",
          },
          {
            text: "Addition of flowers such as fresh roses, Chrysanthemums, Tiger Lilies, Baby’s Breath etc.",
          },
          {
            text: "Free fresh flower decorations on 7 days Bana Preaching Ceremony.",
          },
          {
            text: "Fresh flower arrangements are done by “Everlasting Flower Shop” and Oil Lamps, Vases, Canopy, Stands and complete services are available.",
          },
        ],
      },
      {
        price: "575,000",
        description:
          "Platinum with complete luxury and photo and video coverage.",
        mainImg: platinum2,
        images: [
          popupPlatinum2_1,
          popupPlatinum2_2,
          popupPlatinum2_3,
          popupPlatinum2_4,
        ],
        details: [
          {
            text: "Spray Casket - Mahogany, Teak, or Ebony color casket with imported heavy casket fittings.",
          },
          {
            text: "UK imported chemicals.",
          },
          {
            text: "Delivery within 20Km distance from Colombo.",
          },
          {
            text: "Island wide 24-hours funeral services available.",
          },
          {
            text: "Funeral Homes available on request for one day, extra charges apply for additional days.",
          },
          {
            text: "Available VIP Funeral Homes",
            subItems: ["Tulip", "Araliya", "Orchid", "White Rose", "Crystal"],
          },
          {
            text: "Funeral director’s service with VIP Benz and VIP Volvo hearse plus flower car included.",
          },
          {
            text: "Special VIP Flower Deco with VIP services available.",
          },
          {
            text: "4 flower vases with fresh flowers, with other basic requests.",
          },
          {
            text: "Addition of flowers such as fresh roses, Chrysanthemums, Tiger Lilies, Baby’s Breath etc.",
          },
          {
            text: "Free fresh flower decorations on 7 days Bana Preaching Ceremony.",
          },
          {
            text: "Fresh flower arrangements are done by “Everlasting Flower Shop” and Oil Lamps, Vases, Canopy, Stands and complete services are available.",
          },
        ],
      },
      {
        price: "500,000",
        description: "Full VIP Platinum with extended floral services.",
        mainImg: platinum3,
        images: [
          popupPlatinum3_1,
          popupPlatinum3_2,
          popupPlatinum3_3,
          popupPlatinum3_4,
        ],
        details: [
          {
            text: "Spray Casket - Mahogany, Teak, or Ebony color casket with imported heavy casket fittings.",
          },
          {
            text: "UK imported chemicals.",
          },
          {
            text: "Delivery within 20Km distance from Colombo.",
          },
          {
            text: "Island wide 24-hours funeral services available.",
          },
          {
            text: "Funeral Homes available on request for one day, extra charges apply for additional days.",
          },
          {
            text: "Available VIP Funeral Homes",
            subItems: ["Tulip", "Araliya", "Orchid", "White Rose", "Crystal"],
          },
          {
            text: "Funeral director’s service with VIP Benz and VIP Volvo hearse plus flower car included.",
          },
          {
            text: "Special VIP Flower Deco with VIP services available.",
          },
          {
            text: "4 flower vases with fresh flowers, with other basic requests.",
          },
          {
            text: "Free fresh flower decorations on 7 days Bana Preaching Ceremony.",
          },
          {
            text: "Fresh flower arrangements are done by “Everlasting Flower Shop” and Oil Lamps, Vases, Canopy, Stands and complete services are available.",
          },
        ],
      },
      {
        price: "450,000",
        description: "Platinum funeral with VIP cars and arrangements.",
        mainImg: platinum4,
        images: [
          popupPlatinum4_1,
          popupPlatinum4_2,
          popupPlatinum4_3,
          popupPlatinum4_4,
        ],
        details: [
          {
            text: "Spray Casket - Mahogany, Teak, or Ebony color casket with imported heavy casket fittings.",
          },
          {
            text: "UK imported chemicals.",
          },
          {
            text: "Dedicated funeral director for supervision.",
          },
          {
            text: "Delivery within 20Km distance from Colombo.",
          },
          {
            text: "Island wide 24-hours funeral services available.",
          },
          {
            text: "Funeral Homes available on request for one day, extra charges apply for additional days.",
          },
          {
            text: "Available VIP Funeral Homes",
            subItems: ["Tulip", "Araliya", "Orchid", "White Rose", "Crystal"],
          },
          {
            text: "Funeral director’s service with VIP Benz and VIP Volvo or similar hearse provided with flower car.",
          },
          {
            text: "4 flower vases with fresh flowers, with other basic requests.",
          },
          {
            text: "Free fresh flower decorations on 7 days Bana Preaching Ceremony.",
          },
          {
            text: "Fresh flower arrangements are done by “Everlasting Flower Shop” and Oil Lamps, Vases, Canopy, Stands and complete services are available.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "VIP Gold Packages",
    helpingText: "PREMIUM CARE & DIGNITY",
    subPackages: [
      {
        price: "400,000",
        description:
          "Ultimate Platinum VIP funeral with all-inclusive services.",
        mainImg: gold1,
        images: [popupGold1_1, popupGold1_2, popupGold1_3, popupGold1_4],
        details: [
          {
            text: "Spray Casket - Mahogany, Teak, or Ebony color.",
          },
          {
            text: "Imported Silver, Gold, and Oxidised fittings and UK imported chemicals.",
          },
          {
            text: "Delivery within 20Km distance from Colombo.",
          },
          {
            text: "Island wide 24-hours funeral services available.",
          },
          {
            text: "Funeral Homes available on request for one day, extra charges apply for additional days.",
          },
          {
            text: "Available VIP Funeral Homes",
            subItems: ["Tulip", "Araliya", "Orchid", "White Rose", "Crystal"],
          },
          {
            text: "Funeral director’s service and VIP Benz and Volvo hearse plus flower car included.",
          },
          {
            text: "All above services include funeral director’s service.",
          },
          {
            text: "Funeral representative available on the day of funeral.",
          },
          {
            text: "4 flower vases with fresh flowers, with other basic requests.",
          },
          {
            text: "Special fresh flower arrangements.",
          },
          {
            text: "Fresh flower pot (free of charge) on 7 days Bana Preaching Ceremony.",
          },
          {
            text: "Fresh flower arrangements are done by “Everlasting Flower Shop” and Oil Lamps, Vases, Canopy, Stands and complete services are available.",
          },
        ],
      },
      {
        price: "350,000",
        description:
          "Platinum with complete luxury and photo and video coverage.",
        mainImg: gold2,
        images: [popupGold2_1, popupGold2_2, popupGold2_3, popupGold2_4],
        details: [
          {
            text: "Spray Casket - Mahogany, Teak, or Ebony color.",
          },
          {
            text: "Benz and Volvo VIP hearse with flower car included.",
          },
          {
            text: "Imported Silver, Gold, and Oxidised fittings and UK imported chemicals.",
          },
          {
            text: "Delivery within 20Km distance from Colombo.",
          },
          {
            text: "Island wide 24-hours funeral services available.",
          },
          {
            text: "Funeral Homes available on request for one day, extra charges apply for additional days.",
          },
          {
            text: "Available VIP Funeral Homes",
            subItems: ["Tulip", "Araliya", "Orchid", "White Rose", "Crystal"],
          },
          {
            text: "All above services include funeral director’s service.",
          },
          {
            text: "Funeral representative available on the day of funeral.",
          },
          {
            text: "4 flower vases with fresh flowers, with other basic requests.",
          },
          {
            text: "Fresh flower arrangements are done by “Everlasting Flower Shop” and Oil Lamps, Vases, Canopy, Stands and complete services are available.",
          },
        ],
      },
      {
        price: "300,000",
        description: "Full VIP Platinum with extended floral services.",
        mainImg: gold3,
        images: [popupGold3_1, popupGold3_2, popupGold3_3, popupGold3_4],
        details: [
          {
            text: "Spray Casket - Mahogany, Teak, or Ebony color.",
          },
          {
            text: "Casket with imported fittings.",
          },
          {
            text: "Gold fittings.",
          },
          {
            text: "UK imported chemicals.",
          },
          {
            text: "All above services include funeral director’s service with VIP Benz and Volvo hearse plus flower car included.",
          },
          {
            text: "Embalming process (British Standard) with UK preservatives.",
          },
          {
            text: "Delivery within 20Km distance from Colombo.",
          },
          {
            text: "Island wide 24-hours funeral services available.",
          },
          {
            text: "Funeral Homes available on request for one day, extra charges apply for additional days.",
          },
          {
            text: "Available VIP Funeral Homes",
            subItems: ["Tulip", "Araliya", "Orchid", "White Rose", "Crystal"],
          },
          {
            text: "4 flower vases with fresh flowers, with other basic requests.",
          },
          {
            text: "Fresh flower arrangements are done by “Everlasting Flower Shop” and Oil Lamps, Vases, Canopy, Stands and complete services are available.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Superior Packages",
    helpingText: "ENHANCED SERVICE EXPERIENCE",
    subPackages: [
      {
        price: "275,000",
        description:
          "Ultimate Platinum VIP funeral with all-inclusive services.",
        mainImg: superior1,
        images: [
          popupSuperior1_1,
          popupSuperior1_2,
          popupSuperior1_3,
          popupSuperior1_4,
        ],
        details: [
          {
            text: "Hand Polished / Spray Casket.",
          },
          {
            text: "Mahogany or Teak color casket with long bar fitting in silver or gold.",
          },
          {
            text: "Benz, Volvo, or similar hearse included with funeral director’s service.",
          },
          {
            text: "Funeral parlours available for one day, extra charges apply for additional days.",
          },
          {
            text: "Delivery within 20 km distance from Colombo.",
          },
          {
            text: "Island wide 24-hours funeral services available.",
          },
          {
            text: "Two flower vases with fresh flowers, with other basic requests.",
          },
          {
            text: "Fresh flower arrangements are done by “Everlasting Flower Shop” and Oil Lamps, Vases, Canopy, Stands and complete services are available.",
          },
        ],
      },
      {
        price: "225,000",
        description:
          "Platinum with complete luxury and photo and video coverage.",
        mainImg: superior2,
        images: [
          popupSuperior2_1,
          popupSuperior2_2,
          popupSuperior2_3,
          popupSuperior2_4,
        ],
        details: [
          {
            text: "Hand Polished / Spray Casket.",
          },
          {
            text: "Mahogany or Teak color casket with long bar fitting in silver or gold.",
          },
          {
            text: "Benz, Volvo or similar VIP hearse included with funeral director’s service.",
          },
          {
            text: "Funeral parlours available for one day, extra charges apply for additional days.",
          },
          {
            text: "Delivery within 20 km distance from Colombo.",
          },
          {
            text: "Island wide 24-hours funeral services available.",
          },
          {
            text: "Two flower vases with fresh flowers, with other basic requests.",
          },
          {
            text: "Fresh flower arrangements are done by “Everlasting Flower Shop” and Oil Lamps, Vases, Canopy, Stands and complete services are available.",
          },
        ],
      },
      {
        price: "175,000",
        description: "Full VIP Platinum with extended floral services.",
        mainImg: superior3,
        images: [
          popupSuperior3_1,
          popupSuperior3_2,
          popupSuperior3_3,
          popupSuperior3_4,
        ],
        details: [
          {
            text: "Hand Polished / Spray Casket.",
          },
          {
            text: "Mahogany or Teak color casket with long bar fitting in silver or gold.",
          },
          {
            text: "Benz, Volvo, Vauxhall, or similar hearses included.",
          },
          {
            text: "Funeral parlours available for one day, extra charges apply for additional days.",
          },
          {
            text: "Delivery within 20 km distance from Colombo.",
          },
          {
            text: "Island wide 24-hours funeral services available.",
          },
          {
            text: "Two flower vases with fresh flowers, with other basic requests.",
          },
          {
            text: "Fresh flowers arrangement with mixed flowers inside the casket.",
          },
          {
            text: "Fresh flower arrangements are done by “Everlasting Flower Shop” and Oil Lamps, Vases, Canopy, Stands, and complete services are available.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Standard Packages",
    helpingText: "AFFORDABLE & RESPECTFUL",
    subPackages: [
      {
        price: "150,000",
        description:
          "Ultimate Platinum VIP funeral with all-inclusive services.",
        mainImg: standard1,
        images: [
          popupStandard1_1,
          popupStandard1_2,
          popupStandard1_3,
          popupStandard1_4,
        ],
        details: [
          {
            text: "Hand Spray Casket.",
          },
          {
            text: "Silver and brass fittings to caskets and matching canopy.",
          },
          {
            text: "Benz, Volvo, Vauxhall, or similar hearses included.",
          },
          {
            text: "Funeral parlours available for one day, extra charges apply for additional days.",
          },
          {
            text: "Delivery within 20 km distance from Colombo.",
          },
          {
            text: "Island wide 24-hour funeral services available.",
          },
          {
            text: "Two flower vases with fresh flowers, with other basic requests.",
          },
          {
            text: "Two fresh flower vases (brass).",
          },
          {
            text: "Stand wreath and 20 fresh orchid or similar flowers inside the casket.",
          },
          {
            text: "Fresh flower arrangements are done by ”Everlasting Flower Shop” and Oil Lamps, Vases, Canopy, Stands and complete service are available.",
          },
        ],
      },
      {
        price: "125,000",
        description:
          "Platinum with complete luxury and photo and video coverage.",
        mainImg: standard2,
        images: [
          popupStandard2_1,
          popupStandard2_2,
          popupStandard2_3,
          popupStandard2_4,
        ],
        details: [
          {
            text: "Hand Polished / Spray Casket.",
          },
          {
            text: "Wagon hearse included.",
          },
          {
            text: "Stand fresh wreath and canopy.",
          },
          {
            text: "Funeral parlours available for one day, extra charges apply for additional days.",
          },
          {
            text: "Delivery within 20 km distance from Colombo.",
          },
          {
            text: "Island wide 24-hours funeral services available.",
          },
          {
            text: "Two flower vases with fresh flowers, with other basic requests.",
          },
          {
            text: "Fresh flower arrangements are done by “Everlasting Flower Shop” and Oil Lamps, Vases, Canopy, Stands and complete services are available.",
          },
        ],
      },
      {
        price: "100,000",
        description: "Full VIP Platinum with extended floral services.",
        mainImg: standard3,
        images: [
          popupStandard3_1,
          popupStandard3_2,
          popupStandard3_3,
          popupStandard3_4,
        ],
        details: [
          {
            text: "Hand Polished / Spray Casket.",
          },
          {
            text: "Basic hearse included.",
          },
          {
            text: "Funeral parlours available for one day, extra charges apply for additional days.",
          },
          {
            text: "Delivery within 20 km distance from Colombo.",
          },
          {
            text: "Island wide 24-hours funeral services available.",
          },
          {
            text: "Two flower vases with fresh flowers, with other basic requests.",
          },
          {
            text: "Fresh flower arrangements are done by “Everlasting Flower Shop” and Oil Lamps, Vases, Canopy, Stands and complete services are available.",
          },
        ],
      },
    ],
  },
];

const AllPackages: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<"none" | "asc" | "desc">("none");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPackage, setSelectedPackage] = useState<SubPackage | null>(
    null
  );
  const navigate = useNavigate();

  // lock scroll when popup is open
  useEffect(() => {
    if (selectedPackage) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [selectedPackage]);

  // popup gallery state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (
      selectedPackage &&
      selectedPackage.images &&
      selectedPackage.images.length > 0
    ) {
      setSelectedImage(selectedPackage.images[0]);
    } else {
      setSelectedImage(null);
    }
  }, [selectedPackage]);

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
                    <button
                      onClick={() => {
                        setSelectedPackage({
                          ...subPkg,
                          category: pkg.category,
                        });
                      }}
                      className="w-full md:w-3/5 px-1 md:px-2 py-1.5 md:py-2.5 lg:py-2 border border-ternary hover:bg-white/40 text-[8px] md:text-xs lg:text-[11px] rounded-lg cursor-pointer"
                    >
                      More Details
                    </button>
                    <button
                      onClick={() =>
                        navigate("/checkout", {
                          state: {
                            selectedPackage: {
                              ...subPkg,
                              category: pkg.category,
                            },
                          },
                        })
                      }
                      className="w-full md:w-full px-2 md:px-4 py-1.5 md:py-2.5 lg:py-2 bg-primary hover:bg-primary/90 md:text-sm lg:text-[13px] rounded-lg cursor-pointer"
                    >
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
                <button
                  onClick={() => {
                    setSelectedPackage(subPkg);
                  }}
                  className="w-full md:w-3/5 px-1 md:px-2 py-1.5 md:py-2.5 lg:py-2 border border-ternary hover:bg-white/40 text-[8px] md:text-xs lg:text-[11px] rounded-lg cursor-pointer"
                >
                  More Details
                </button>
                <button
                  onClick={() =>
                    navigate("/checkout", {
                      state: {
                        selectedPackage: {
                          ...subPkg,
                          category: subPkg.category,
                        },
                      },
                    })
                  }
                  className="w-full md:w-full px-2 md:px-4 py-1.5 md:py-2.5 lg:py-2 bg-primary hover:bg-primary/90 md:text-sm lg:text-[13px] rounded-lg cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* popup */}
      {selectedPackage && (
        <div className="flex fixed inset-0 bg-black/80 items-center justify-center z-50 lg:px-20">
          <button
            onClick={() => {
              setSelectedPackage(null);
            }}
            className="absolute top-4 right-4 md:top-12 md:right-12 lg:top-4 lg:right-4 text-white text-xl md:text-3xl cursor-pointer"
          >
            <IoClose />
          </button>
          <div className="mx-auto w-11/12 md:w-5/6 rounded-xl bg-[#F5F5F5] max-h-[90vh] h-auto">
            <div className="relative z-10 m-4 md:m-10 lg:m-0 lg:p-16 flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-10 overflow-y-scroll md:overflow-y-hidden max-h-[66vh] md:max-h-[80vh]">
              {/* Left - Image gallery */}
              <div className="w-full lg:w-1/2 flex flex-col md:flex-row lg:flex-col gap-2 md:gap-4">
                <div className="w-full flex justify-center items-start h-[30dvh] md:h-[35dvh] lg:h-[48dvh]">
                  {selectedImage && (
                    <img
                      src={selectedImage}
                      alt="Selected Preview"
                      className="w-full h-full object-cover rounded-lg border border-gray-200"
                    />
                  )}
                </div>

                {/* thumbnails */}
                {selectedPackage.images &&
                  selectedPackage.images.length > 0 && (
                    <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-4 gap-2 md:gap-3">
                      {selectedPackage.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt="package images"
                          onClick={() => setSelectedImage(img)}
                          className="w-full h-[8dvh] lg:h-[12dvh] object-cover rounded-lg cursor-pointer border border-gray-200"
                        />
                      ))}
                    </div>
                  )}
              </div>

              {/* Right side */}
              <div className="flex flex-col gap-6 justify-center w-full lg:w-1/2 text-left p-1 md:p-0 ">
                {/* right top */}
                <div className="flex items-center justify-between">
                  {/* main categpry */}
                  <h1 className="text-[11px] md:text-sm font-medium text-secondary leading-tight px-1.5 md:px-2 py-1.5 border border-secondary rounded-full flex items-center justify-center">
                    {selectedPackage.category}
                  </h1>
                  {/* price */}
                  <h1 className="text-base md:text-xl font-semibold text-ternary">
                    LKR {selectedPackage.price} /=
                  </h1>
                </div>

                {/* right middle - package details */}
                <div className="md:h-[25dvh] lg:h-auto overflow-hidden overflow-y-auto text-sm md:text-base font-light ml-1">
                  <ul className="space-y-3">
                    {selectedPackage.details?.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <FaRegCircle className="mr-2 mt-1.5 md:mt-2 flex-shrink-0 w-2 h-2" />
                        {/* details points */}
                        <div>
                          {/* main points */}
                          <p>{point.text}</p>

                          {/* sub points */}
                          {point.subItems && point.subItems.length > 0 && (
                            <ul className="ml-2 list-inside list-disc">
                              {point.subItems.map((subItem, idx) => (
                                <li key={idx}>{subItem}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* right bottom - button */}
                <button
                  onClick={() =>
                    navigate("/checkout", { state: { selectedPackage } })
                  }
                  className="hidden md:block w-fit px-4 lg:px-8 py-2.5 lg:py-3.5 rounded-lg text-ternary text-sm md:text-base font-normal bg-primary hover:bg-primary/90 cursor-pointer"
                >
                  Buy Package
                </button>
              </div>
            </div>
            <div className="block md:hidden m-4 pt-2">
              <button
                onClick={() =>
                  navigate("/checkout", { state: { selectedPackage } })
                }
                className="mw-fit px-4 lg:px-8 py-2.5 lg:py-3.5 rounded-lg text-ternary text-sm md:text-base font-normal bg-primary hover:bg-primary/90 cursor-pointer"
              >
                Buy Package
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPackages;
