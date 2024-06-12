export interface ServiceItem {
  sectionTitle: string;
  description1: string;
  description2: string;
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
    description1: `Utilizes the Energy Matrix Clearing System© in combination with gem and mineral essences to 
    remediate stuck/clogged/blocked energy within the body.`,
    description2: `Results in improved focus, resolution of past negative 
    experiences, and increased harmony and personal peace.
    `,
    bulletpoints: [
      "Release Energetic Blockages",
      "Restore Balance And Harmony",
      "Achieve Harmony and Inner Peace",
    ],
    imageTitle: "Revitalize Your Body And Mind With Energy Healing",
    button: "Energy Medicine",
    image: "/blue-ocean.webp",
  },
  brainSpotting: {
    sectionTitle: "Transform Your Life with Brainspotting",
    description1: `Find a sense of calm while releasing past trauma and disappointments.`,
    description2: `A somatic (body-based) modality for achieving goals, facilitating transitions, enhancing performance, 
    and expanding creativity. People have used brainspotting for anything from improving sports performance to eliminating
     their fear of public speaking.`,
    bulletpoints: [
      "Overcome fears and enhance performance",
      "Facilitate personal transitions and goal achievement",
      "Expand creativity and release past disappointments",
    ],
    imageTitle: "find mental clarity with brain spotting",
    button: "Brainspotting",
    image: "/space.webp",
  },
  lifeGuidance: {
    sectionTitle: "Navigate Your Journey with Life Guidance",
    description1: `While a coach teaches strategy and sends you out in the field, in the end, they only observe you 
    from the sidelines. Guides, on the other hand, accompany you for the journey.`,
    description2: `Rooted in Christian-Judeo, Buddhist and nature-based practices, along with intuitive healing techniques, 
    life guidance can help you focus on the path ahead -- with abounding support and connection.`,
    bulletpoints: [
      "Holistic support rooted in diverse spiritual practices",
      "Focus on your path with intuitive healing techniques",
      "Experience continuous guidance and connection on your journey",
    ],
    imageTitle: "discover the path forward with tailored life guidance",
    button: "Life Guidance",
    image: "/grass-field.webp",
  },
};
