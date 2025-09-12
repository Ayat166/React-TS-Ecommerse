"use client";
import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import type { ICategory } from "../../interfaces";

export default function DropdownList({
  data,
  setSelectedCategory = () => {},
}: {
  data: ICategory[];
  setSelectedCategory?: (category: ICategory) => void;
}) {
  const [selected, setSelected] = useState(data[0]);

  return (
    <Listbox value={selected} onChange={(value) => {
    setSelected(value);
    setSelectedCategory(value);
  }}>
      <Label className="block text-sm font-medium text-gray-700 mb-2">
        Category
      </Label>
      <div className="relative">
        <ListboxButton className="relative w-full cursor-pointer rounded-lg bg-white py-3 pl-3 pr-10 text-left border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200">
          <span className="flex items-center">
            <img
              alt=""
              src={selected.imageUrl}
              className="h-5 w-5 flex-shrink-0 rounded-full object-cover"
            />
            <span className="ml-3 block truncate text-gray-900">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {data.map((category) => (
            <ListboxOption
              key={category.id}
              value={category}
              className="group relative cursor-pointer select-none py-2.5 pl-3 pr-9 text-gray-900 transition-colors duration-150 hover:bg-gray-50 data-focus:bg-gray-50"
            >
              <div className="flex items-center">
                <img
                  alt=""
                  src={category.imageUrl}
                  className="h-5 w-5 flex-shrink-0 rounded-full object-cover"
                />
                <span className="ml-3 block truncate text-sm font-medium">
                  {category.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600 group-data-selected:block group-not-data-selected:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
