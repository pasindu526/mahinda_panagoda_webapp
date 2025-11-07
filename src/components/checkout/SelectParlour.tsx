import React, { useCallback, useMemo } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { MdDoNotDisturb } from "react-icons/md";

import tulip1 from "../../assets/img/uploads/parlours/prl1.svg";
import araliya1 from "../../assets/img/uploads/parlours/prl1.svg";
import orchid1 from "../../assets/img/uploads/parlours/prl1.svg";
import whiteRose1 from "../../assets/img/uploads/parlours/prl1.svg";
import crystal1 from "../../assets/img/uploads/parlours/prl1.svg";
import fHome1 from "../../assets/img/uploads/parlours/prl1.svg";
import fHome2 from "../../assets/img/uploads/parlours/prl1.svg";
import fHome3 from "../../assets/img/uploads/parlours/prl1.svg";

type PackageType = {
  category?: string;
};

interface SelectParlourProps {
  selectedPackage?: PackageType | null;
  triggerValidation?: boolean;
  onValidationChange?: (isValid: boolean) => void;
  onDataChange?: (data: Record<string, string>) => void;
  isPreArrangement?: boolean;
}

type Parlour = {
  id: number;
  category: string;
  name: string;
  location?: string;
  openingHours?: string;
  image: string;
  services?: string[];
  bookedDates?: string[];
};

const parlours: Parlour[] = [
  {
    id: 1,
    category: "VIP Funeral Homes",
    name: "Tulip Funeral Home",
    image: tulip1,
    bookedDates: ["2025-11-29", "2025-11-30"],
  },
  {
    id: 2,
    category: "VIP Funeral Homes",
    name: "Araliya Funeral Home",
    image: araliya1,
    bookedDates: ["2025-11-15", "2025-11-16"],
  },
  {
    id: 3,
    category: "VIP Funeral Homes",
    name: "Orchid Funeral Home",
    image: orchid1,
    bookedDates: ["2025-11-10"],
  },
  {
    id: 4,
    category: "VIP Funeral Homes",
    name: "White Rose Funeral Home",
    image: whiteRose1,
    bookedDates: [],
  },
  {
    id: 5,
    category: "VIP Funeral Homes",
    name: "Crystal Funeral Home",
    image: crystal1,
    bookedDates: ["2025-11-21", "2025-11-22", "2025-11-23"],
  },
  {
    id: 6,
    category: "Standard Funeral Homes",
    name: "Funeral Home - 1",
    image: fHome1,
    bookedDates: ["2025-11-08"],
  },
  {
    id: 7,
    category: "Standard Funeral Homes",
    name: "Funeral Home - 2",
    image: fHome2,
    bookedDates: ["2025-12-08", "2025-12-09"],
  },
  {
    id: 8,
    category: "Standard Funeral Homes",
    name: "Funeral Home - 3",
    image: fHome3,
    bookedDates: ["2025-10-08"],
  },
];

const SelectParlour: React.FC<SelectParlourProps> = ({
  selectedPackage,
  triggerValidation = false,
  onValidationChange,
  onDataChange,
  isPreArrangement = false,
}) => {
  // selected: number for parlour id, 'none' for booking without parlour, null for none
  const [selected, setSelected] = React.useState<number | "none" | null>(null);
  const [fromDate, setFromDate] = React.useState<string>("");
  const [toDate, setToDate] = React.useState<string>("");
  const [selectedDays, setSelectedDays] = React.useState<Date[]>([]);
  const [error, setError] = React.useState<string>("");
  const [bottomError, setBottomError] = React.useState<string>("");

  // if this checkout originates from PreArrangements, dates should be hidden/optional
  // 'isPreArrangement' is already destructured from props above and can be used directly.

  const selectedParlour = parlours.find((p) => p.id === selected) ?? null;
  const bookedSet = useMemo(
    () => new Set(selectedParlour?.bookedDates ?? []),
    [selectedParlour]
  );

  const handleSelect = (parlourId: number | "none") => {
    const newSelection = selected === parlourId ? null : parlourId;
    setSelected(newSelection);

    // clear selected days when parlour changes
    setSelectedDays([]);

    // notify parlour name (empty when 'none' or deselected)
    if (onDataChange) {
      if (newSelection === "none") {
        onDataChange({ parlourName: "" });
      } else if (typeof newSelection === "number") {
        const parlour = parlours.find((p) => p.id === newSelection) ?? null;
        onDataChange({ parlourName: parlour ? parlour.name : "" });
      } else {
        onDataChange({ parlourName: "" });
      }
    }
    // clear date inputs / errors when changing parlour selection
    setFromDate("");
    setToDate("");
    setSelectedDays([]);
    setError("");
    // clear any bottom-level validation message when user interacts
    setBottomError("");

    // emit validation state: parlour is optional, but dates are required always
    if (onValidationChange) {
      if (isPreArrangement) {
        // for pre-arrangements dates aren't required — mark step valid
        onValidationChange(true);
        setBottomError("");
      } else {
        const hasDate = !!(
          fromDate ||
          toDate ||
          (selectedDays && selectedDays.length > 0)
        );
        const isValid = hasDate;
        onValidationChange(isValid);
        if (isValid) setBottomError("");
      }
    }
  };

  // Parse a YYYY-MM-DD string into a Date object
  const parseISODate = (s: string) => {
    const [y, m, d] = s.split("-").map((v) => parseInt(v, 10));
    return new Date(y, m - 1, d);
  };

  // Format a Date into YYYY-MM-DD using local date parts
  const formatLocalISO = (d: Date) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const validateRange = useCallback(
    (from?: string, to?: string): { valid: boolean; message?: string } => {
      setError("");
      // Parlour is optional. When isPreArrangement is true, dates are not required
      if (isPreArrangement) {
        // clear any parent date fields
        if (onDataChange) onDataChange({ fromDate: "", toDate: "" });
        if (onValidationChange) onValidationChange(true);
        return { valid: true };
      }

      // If only one date is selected, validate that single date isn't booked
      if (!from && to) {
        const toObj = parseISODate(to);
        const iso = formatLocalISO(toObj);
        if (bookedSet.has(iso)) {
          setError("Selected parlour is not available for the chosen day(s).");
          if (onValidationChange) onValidationChange(false);
          return { valid: false };
        }
        if (onValidationChange) onValidationChange(true);
        if (onDataChange) onDataChange({ fromDate: "", toDate: to });
        return { valid: true };
      }

      if (from && !to) {
        const fromObj = parseISODate(from);
        const iso = formatLocalISO(fromObj);
        if (bookedSet.has(iso)) {
          const msg =
            "Selected parlour is not available for the chosen day(s).";
          setError(msg);
          if (onValidationChange) onValidationChange(false);
          return { valid: false, message: msg };
        }
        if (onValidationChange) onValidationChange(true);
        if (onDataChange) onDataChange({ fromDate: from, toDate: "" });
        return { valid: true };
      }

      if (!from && !to) {
        // no explicit range but if calendar days selected that's OK; otherwise invalid
        if (selectedDays && selectedDays.length > 0) {
          // ensure selected calendar days do not include booked dates (only relevant when a parlour is selected)
          if (selectedParlour) {
            for (const d of selectedDays) {
              const iso = formatLocalISO(d);
              if (bookedSet.has(iso)) {
                const msg =
                  "Selected parlour is not available for the chosen day(s).";
                setError(msg);
                if (onValidationChange) onValidationChange(false);
                return { valid: false, message: msg };
              }
            }
          }
          if (onValidationChange) onValidationChange(true);
          if (onDataChange) onDataChange({ fromDate: "", toDate: "" });
          return { valid: true };
        }
        if (onValidationChange) onValidationChange(false);
        setError("Please select at least one date for booking.");
        return { valid: false };
      }

      // Use Date objects for correct comparisons (not string comparison)
      const fromDateObj = parseISODate(from as string);
      const toDateObj = parseISODate(to as string);

      if (fromDateObj.getTime() > toDateObj.getTime()) {
        setError("From date must be before or equal to To date.");
        if (onValidationChange) onValidationChange(false);
        return { valid: false };
      }

      // iterate through each day in the selected range and check booked dates
      for (
        let d = new Date(fromDateObj);
        d.getTime() <= toDateObj.getTime();
        d.setDate(d.getDate() + 1)
      ) {
        const iso = formatLocalISO(d);
        // only block if a real parlour is selected and the date is booked
        if (selectedParlour && bookedSet.has(iso)) {
          setError("Selected parlour is not available for the chosen day(s).");
          if (onValidationChange) onValidationChange(false);
          return { valid: false };
        }
      }

      // valid
      if (onValidationChange) onValidationChange(true);
      if (onDataChange)
        onDataChange({ fromDate: from as string, toDate: to as string });
      return { valid: true };
    },
    [
      selectedParlour,
      selectedDays,
      bookedSet,
      onValidationChange,
      onDataChange,
      isPreArrangement,
    ]
  );

  // Emit validation state when parent requests validation (triggerValidation)
  React.useEffect(() => {
    if (triggerValidation && onValidationChange) {
      const res = validateRange(fromDate, toDate);
      if (!res.valid) {
        setBottomError(
          res.message ??
            "Please select a Parlour or No Parlour, and least one date before clicking Next."
        );
      } else {
        setBottomError("");
      }
    }
  }, [
    triggerValidation,
    onValidationChange,
    fromDate,
    toDate,
    selectedDays,
    selectedParlour,
    validateRange,
  ]);

  // Convert booked date strings to Date objects for the calendar
  const bookedDatesAsDates: Date[] = (selectedParlour?.bookedDates ?? []).map(
    (d) => parseISODate(d)
  );

  // Handle selecting individual days (multiple select)
  const handleCalendarSelect = (days: Date[] | undefined) => {
    const arr = days ?? [];
    setSelectedDays(arr);

    // Notify parent with ISO strings of selected days
    if (onDataChange) {
      onDataChange({ selectedDates: arr.map(formatLocalISO).join(",") });
    }
    // Update validation: dates are required; if a parlour is selected, check for booked dates
    if (onValidationChange) {
      // check for booked dates only when real parlour selected
      if (selectedParlour) {
        for (const d of arr) {
          const iso = formatLocalISO(d);
          if (bookedSet.has(iso)) {
            const msg =
              "Selected parlour is not available for the chosen day(s).";
            setError(msg);
            onValidationChange(false);
            setBottomError(msg);
            return;
          }
        }
      }
      const hasDate = arr.length > 0 || Boolean(fromDate || toDate);
      const valid = !!hasDate;
      onValidationChange(valid);
      if (valid) setBottomError("");
    }
  };

  return (
    <div className="bg-white">
      <h1 className="text-center md:text-start text-xl md:text-2xl lg:text-3xl font-belda mb-4 md:mb-6">
        Select a Parlour and Date for Funeral
      </h1>
      <div className="flex flex-col md:flex-row gap-10 lg:gap-1 justify-between">
        {/* Left section - VIP parlours */}
        {selectedPackage?.category?.toLowerCase().includes("vip") && (
          <div className="w-full md:w-1/2 py-4 text-left h-fit">
            <p className="text-sm md:text-base lg:text-lg">Select a Parlour</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-2 justify-between">
              {/* Card - Book without Parlour */}
              <div
                key="without-parlour"
                onClick={() => handleSelect("none")}
                className={`flex flex-col cursor-pointer w-full bg-[#F4F4F4] rounded-lg overflow-hidden h-auto ${
                  selected === "none" ? "ring-2 ring-ternary" : ""
                }`}
              >
                <div className="relative w-full h-20">
                  <Checkbox
                    id="no-parlour"
                    checked={selected === "none"}
                    onCheckedChange={() => handleSelect("none")}
                    className="absolute z-10 top-1.5 right-1.5 bg-white cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center h-full border-b border-gray-200 text-ternary/60">
                    <MdDoNotDisturb className="w-5 h-5" />
                    <div className="text-sm font-medium mt-2">No Parlour</div>
                  </div>
                </div>
                <div className="p-1.5 text-center mt-2">
                  <h2 className="text-sm font-medium text-ternary mb-2">
                    Book without a Parlour
                  </h2>
                  <div className="text-xs">
                    You will only book dates with funeral package.
                  </div>
                </div>
              </div>

              {parlours.map((parlour) =>
                parlour.category?.toLowerCase().includes("vip") ? (
                  <div
                    key={parlour.id}
                    onClick={() => handleSelect(parlour.id)}
                    className="flex flex-col cursor-pointer w-full bg-[#F4F4F4] rounded-lg overflow-hidden h-auto"
                  >
                    {/* image + checkbox section*/}
                    <div className="relative w-full h-20">
                      <img
                        src={parlour.image}
                        alt={parlour.name}
                        className="w-full h-full object-cover"
                      />
                      <Checkbox
                        id={parlour.name}
                        checked={selected === parlour.id}
                        onCheckedChange={() => handleSelect(parlour.id)}
                        className="absolute z-10 top-1.5 right-1.5 bg-white cursor-pointer"
                      />
                    </div>

                    {/* details section */}
                    <div className="p-1.5 text-left">
                      <h2 className="text-sm font-medium text-ternary mb-2">
                        {parlour.name}
                      </h2>

                      {/* point form */}
                      <ul className="list-inside list-disc text-xs">
                        <div className="flex ml-1 mt-1 font-light">
                          <li></li>
                          <span>
                            Funeral Home{" "}
                            <span className="font-normal">Free</span> for one
                            day.
                          </span>
                        </div>
                        <div className="flex ml-1 mt-1 font-light">
                          <li></li>
                          <span>
                            Additional{" "}
                            <span className="font-normal">LKR 25,000</span> add
                            per extra day.
                          </span>
                        </div>
                      </ul>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}

        {/* Left section - parlours show when package is NOT VIP */}
        {!selectedPackage?.category?.toLowerCase().includes("vip") && (
          <div className="w-full md:w-1/2 py-4 text-left h-fit">
            <p className="text-sm md:text-base lg:text-lg">Select a Parlour</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-2 justify-between">
              {/* Card - Book without Parlour */}
              <div
                key="without-parlour"
                onClick={() => handleSelect("none")}
                className={`flex flex-col cursor-pointer w-full bg-[#F4F4F4] rounded-lg overflow-hidden h-auto ${
                  selected === "none" ? "ring-2 ring-ternary" : ""
                }`}
              >
                <div className="relative w-full h-20">
                  <Checkbox
                    id="no-parlour"
                    checked={selected === "none"}
                    onCheckedChange={() => handleSelect("none")}
                    className="absolute z-10 top-1.5 right-1.5 bg-white cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center h-full border-b border-gray-200 text-ternary/60">
                    <MdDoNotDisturb className="w-5 h-5" />
                    <div className="text-sm font-medium mt-2">No Parlour</div>
                  </div>
                </div>
                <div className="p-1.5 text-center mt-2">
                  <h2 className="text-sm font-medium text-ternary mb-2">
                    Book without a Parlour
                  </h2>
                  <div className="text-xs">
                    You will only book dates with funeral package.
                  </div>
                </div>
              </div>

              {parlours.map((parlour) =>
                !parlour.category?.toLowerCase().includes("vip") ? (
                  <div
                    key={parlour.id}
                    onClick={() => handleSelect(parlour.id)}
                    className="flex flex-col cursor-pointer w-full bg-[#F4F4F4] rounded-lg overflow-hidden h-auto"
                  >
                    {/* image + checkbox section*/}
                    <div className="relative w-full h-20">
                      <img
                        src={parlour.image}
                        alt={parlour.name}
                        className="w-full h-full object-cover"
                      />
                      <Checkbox
                        id={parlour.name}
                        checked={selected === parlour.id}
                        onCheckedChange={() => handleSelect(parlour.id)}
                        className="absolute z-10 top-1.5 right-1.5 bg-white cursor-pointer"
                      />
                    </div>

                    {/* details section */}
                    <div className="p-1.5 text-left">
                      <h2 className="text-sm font-medium text-ternary mb-2">
                        {parlour.name}
                      </h2>

                      {/* point form */}
                      <ul className="list-inside list-disc text-xs">
                        <div className="flex ml-1 mt-1 font-light">
                          <li></li>
                          <span>
                            Funeral Home{" "}
                            <span className="font-normal">Free</span> for one
                            day.
                          </span>
                        </div>
                        <div className="flex ml-1 mt-1 font-light">
                          <li></li>
                          <span>
                            Additional{" "}
                            <span className="font-normal">LKR 10,000</span> add
                            per extra day.
                          </span>
                        </div>
                      </ul>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}

        {/* Right section - hide when selecting from PreArrangements */}
        <div className="w-full md:w-1/2 lg:w-5/12 space-y-5 p-3 md:px-6 md:py-4 bg-[#F8F8F8] rounded-lg">
          {!isPreArrangement && (
            <>
              <p className="text-left text-sm md:text-base lg:text-lg">
                Select Date/Dates
              </p>
              <div className="grid grid-cols-2 gap-10 font-light">
                <div>
                  <Label className="mb-1 font-normal" htmlFor="from-date">
                    From:
                  </Label>
                  <Input
                    id="from-date"
                    type="date"
                    value={fromDate}
                    onChange={(e) => {
                      const v = e.target.value;
                      setFromDate(v);
                      setBottomError("");
                      validateRange(v, toDate);
                    }}
                    className="cursor-pointer bg-white"
                  />
                </div>

                <div>
                  <Label className="mb-1 font-normal" htmlFor="to-date">
                    To:
                  </Label>
                  <Input
                    id="to-date"
                    type="date"
                    value={toDate}
                    onChange={(e) => {
                      const v = e.target.value;
                      setToDate(v);
                      setBottomError("");
                      validateRange(fromDate, v);
                    }}
                    className="cursor-pointer bg-white"
                  />
                </div>
              </div>
            </>
          )}

          {error && <p className="text-left text-xs text-red-600">{error}</p>}
          <div className="mt-4">
            <div className="mb-2 text-sm flex flex-row items-center justify-between text-left">
              <span className="mr-2 font-normal">Already Booked Dates:</span>
              <div className="flex items-center">
                <span className="w-5 h-5 bg-ternary text-primary p-2 rounded-sm mr-2 text-[8px] leading-0 flex items-center justify-center">
                  D
                </span>
                <span className="text-[8px] text-gray-500">
                  Already Booked Dates
                  <br />
                  for Selected Parlour
                </span>
              </div>
            </div>
            <Calendar
              mode="multiple"
              selected={selectedDays}
              onSelect={handleCalendarSelect}
              disabled={bookedDatesAsDates}
              modifiers={{ booked: bookedDatesAsDates }}
              modifiersClassNames={{
                booked: "bg-ternary text-primary rounded-lg",
              }}
              className="rounded-md w-full"
              classNames={{
                day: "w-10 md:w-full lg:w-10 lg:h-10 mx-auto my-0 text-sm pointer-events-none focus:bg-transparent active:bg-transparent",
              }}
            />
          </div>
        </div>
      </div>
      {/* Bottom inline error for Next validation */}
      {bottomError && (
        <div className="w-full mt-4 text-center md:text-left">
          <p className="text-sm text-red-600">{bottomError}</p>
        </div>
      )}
    </div>
  );
};

export default SelectParlour;
