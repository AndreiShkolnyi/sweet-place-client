"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const filters = [
  { label: "All cabins", type: "all" },
  { label: "1-3 guest", type: "small" },
  { label: "4-7 guest", type: "medium" },
  { label: "8-12 guest", type: "large" },
];

export const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentFilter = searchParams.get("capacity") || "all";

  const handleFilter = (type) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", type);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className='border border-primary-800 flex'>
      {filters.map((filter) => (
        <button
          className={`px-5 py-2 hover:bg-primary-700 ${
            currentFilter === filter.type ? "bg-primary-700" : ""
          }`}
          key={filter.type}
          onClick={() => handleFilter(filter.type)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
