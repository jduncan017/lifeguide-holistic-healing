export interface ServiceItem {
  sectionTitle: string;
  description: string;
  bulletpoints: string[];
  imageTitle: string;
  button: string;
  image: string;
}

export const Services: Record<
  "energyMedicine" | "lifeGuidance" | "brainSpotting",
  ServiceItem
> = {
  energyMedicine: {
    sectionTitle: "Unlock Your Full Potential With Energy Medicine",
    description: `Our Energy Medicine service utilizes the powerful Energy Matrix
        Clearing System to help clients release energetic blockages, restore
        balance, and achieve optimal well-being. By working with the body's
        energy field, we address the root causes of physical, emotional, and
        spiritual imbalances, promoting deep healing and transformation.`,
    bulletpoints: [
      "Release Energetic Blockages",
      "Restore Balance And Harmony",
      "Point C",
    ],
    imageTitle: "Revitalize Your Body And Mind With Energy Healing",
    button: "Energy Medicine",
    image: "/blue-ocean.jpg",
  },
  brainSpotting: {
    sectionTitle: "Service Two",
    description: "Description for service two.",
    bulletpoints: ["Point A", "Point B", "Point C"],
    imageTitle: "heal past traumas and find clarity with brain spotting",
    button: "Brain Spotting",
    image: "/space.jpg",
  },
  lifeGuidance: {
    sectionTitle: "Service One",
    description: "Description for service one.",
    bulletpoints: ["Point 1", "Point 2", "Point 3"],
    imageTitle: "discover your path forward with tailored life guidance",
    button: "Life Guidance",
    image: "/grass-field.jpg",
  },
};
