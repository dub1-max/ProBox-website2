import React from "react";
import { Metadata } from "next";
import Maps from "@/components/Maps";
import mapConfig from "@/components/static-data/mapConfig";

export const metadata: Metadata = {
  title: "Map page",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const MapPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Maps googleMapUrl={mapConfig.googleMapUrl1} />
    </div>
  );
};

export default MapPage;
