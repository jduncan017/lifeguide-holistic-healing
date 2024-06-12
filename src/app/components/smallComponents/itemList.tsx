import Image from "next/image";
import type { ReactNode } from "react";

interface ItemListProps {
  list: string[];
}

export default function ItemList({ list }: ItemListProps): ReactNode {
  function renderList(items: string[]) {
    return items.map((item, index) => (
      <li
        key={index}
        className="ListItem mt-4 flex gap-2 font-normal opacity-65"
      >
        <Image
          className="Leaf aspect-square h-6"
          src="/leaf.webp"
          alt="accent leaf"
          width={20}
          height={20}
        />
        <p className="ListText font-light italic">{item}</p>
      </li>
    ));
  }

  return <ul className="ItemList">{renderList(list)}</ul>;
}
