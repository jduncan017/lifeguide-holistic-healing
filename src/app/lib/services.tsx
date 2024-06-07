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
    description: `Utilizes the Energy Matrix Clearing System© in combination with gem and mineral essences to 
    remediate stuck/clogged/blocked energy within the body resulting in more focus, resolution of past negative 
    experiences, and increased harmony and personal peace.
    `,
    bulletpoints: [
      "Release Energetic Blockages",
      "Restore Balance And Harmony",
      "Achieve Harmony and Inner Peace",
    ],
    imageTitle: "Revitalize Your Body And Mind With Energy Healing",
    button: "Energy Medicine",
    image: "/blue-ocean.jpg",
  },
  brainSpotting: {
    sectionTitle: "Transform Your Life with BrainSpotting",
    description: `A somatic (body-based) modality for achieving goals, facilitating transitions, enhancing performance, 
    and expanding creativity. People have used Brainspotting for anything from achieving a better golf score or eliminating
     a fear of public speaking to being a calmer and more focused parent to releasing past hurts and disappointments`,
    bulletpoints: [
      "Overcome fears and enhance performance",
      "Facilitate personal transitions and goal achievement",
      "Expand creativity and release past disappointments",
    ],
    imageTitle: "find mental clarity with brain spotting",
    button: "Brain Spotting",
    image: "/space.jpg",
  },
  lifeGuidance: {
    sectionTitle: "Navigate Your Journey with LifeGuidance",
    description: `While a coach can teach you plays and send you out in the field – in the end, they observe you 
    from the sidelines. Guides, on the other hand, accompany you on your journey. Rooted in Christian-Judeo, Buddhist
     and Nature-based values and practices, along with Intuitive Healing techniques, LifeGuide Holistic Healing LifeGuidance
      can help you focus on the path ahead -- with abounding support and connection.`,
    bulletpoints: [
      "Holistic support rooted in diverse spiritual practices",
      "Focus on your path with intuitive healing techniques",
      "Experience continuous guidance and connection on your journey",
    ],
    imageTitle: "discover the path forward with tailored life guidance",
    button: "Life Guidance",
    image: "/grass-field.jpg",
  },
};
