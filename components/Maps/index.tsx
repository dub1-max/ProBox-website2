"use client";
import SectionHeader from "../Common/SectionHeader";


// Define the type for props
type MapsProps = {
  googleMapUrl: string;
};

// Use the defined type for the props
export default function Maps({ googleMapUrl }: MapsProps) {
  return (
    <section>
        
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `MAP`,
                subtitle: `MAPS`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

      <section
        style={{
          alignItems: "center",
          paddingLeft:"10%"
        }}
      >
        <div
          style={{
            width: "90%",
            height: "60vh",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(51, 46, 61, 0.9)",
            overflow: "hidden",
            marginTop: "2rem",
          }}
        >
          <iframe
            src={googleMapUrl}
            style={{ width: "100%", height: "100%", border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <br />
      <br />
    </section>
  );
}
