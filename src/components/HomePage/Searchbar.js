import React from "react";
import { Input } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const Searchbar = () => {
  return (
    <div className="search-banner-container">
      <div className="search-bar-container">
        <Input
          placeholder="Search"
          backgroundColor="white"
          width="100%"
          height={50}
          borderStartRadius={20}
          borderEndRadius={0}
        />
        <IconButton
          aria-label="Search"
          borderEndRadius={20}
          borderStartRadius={0}
          height={50}
          backgroundColor="#b503a6"
          icon={<BsSearch color="white" />}
        />
      </div>
    </div>
  );
};
