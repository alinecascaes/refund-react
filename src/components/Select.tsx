import React from "react";

type InputProps = React.ComponentProps<"select"> & {
  legend?: string;
};

export function Select({ legend, children, ...rest }: InputProps) {
  return (
    <fieldset className="flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="text-xxs mb-2 text-inherit uppercase">
          {" "}
          {legend}
        </legend>
      )}
      <select
        className="h-12 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-100 placeholder-gray-300 outline-none focus:border-2 focus:border-green-100"
        {...rest}
      >
        <option value="" disabled hidden>
          Selecione
        </option>
        {children}
      </select>
    </fieldset>
  );
}
