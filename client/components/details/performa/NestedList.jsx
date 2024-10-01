import React from "react";

export default function NestedList({ data }) {
  if (!data) return null;

  return (
    <ol>
      {Object.keys(data).map((key) => {
        const value = data[key];

        if (typeof value === "string" || typeof value === null) {
          return (
            <p key={key}>
              <b className="pr-[88px]">{key.split('')[0].toUpperCase() + key.slice(1, key.length)}: </b>
              {value}
            </p>
          );
        }

        if (typeof value === "object" && value !== null) {
          return (
            <li key={key}>
              {value.title && <strong>{value.title}</strong>}
              <NestedList data={value.items} />
            </li>
          );
        }

        return null;
      })}
    </ol>
  );
}
