import Image from "next/image";
import type { ReactNode } from "react";

interface ItemListProps {
  list: string[];
}

export default function ItemList({ list }: ItemListProps): ReactNode {
  function renderList(items: string[]) {
    return items.map((item, index) => (
      <li key={index} className="ListItem mt-4 flex gap-2 text-xl font-normal">
        <Image
          className="Leaf aspect-square h-6"
          src="/leaf.png"
          alt="accent leaf"
          width={24}
          height={24}
        />
        <p className="ListText">{item}</p>
      </li>
    ));
  }

  return <ul className="ItemList">{renderList(list)}</ul>;
}
