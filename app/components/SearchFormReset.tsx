"use client";

import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return (
    <div>
      <button type="reset" onClick={reset}>
        <Link href="/home" className="search-btn text-white">
            <X className="size-5"></X>
        </Link>
      </button>
    </div>
  );
};

export default SearchFormReset;