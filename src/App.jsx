import { useState } from 'react';
import mangroveImage from './assets/mangrove.jpg'; // add an image of mangrove to assets folder
import { MangroveInfo } from './MangroveInfo';
import Draggable from 'react-draggable';
import './App.css';
import { BgSvg } from './BgSvg';
import bgImage from './assets/Mangrove-Vector.jpg';

const mangroveData = [
  {
    image: mangroveImage,
    title: "Mangroves",
    description: "Mangroves are vital to coastal ecosystems. They provide habitat for fish, protect coastlines from erosion, and help mitigate climate change by sequestering carbon. To plant mangroves, collect mature propagules, insert them vertically into the sediment, and ensure they are partially submerged in tidal waters.",
    policies: "In the Philippines, several laws and policies protect mangroves including the Presidential Decree No. 705 (Revised Forestry Code), the National Integrated Protected Areas System Act, and the Mangrove and Beach Forest Development Project.",
    reference: "https://www.iucn.org/resources/issues-briefs/mangroves-and-climate-change"
  },
  {
    image: mangroveImage,
    title: "Red Mangrove",
    description: "Red mangroves are characterized by their prop roots that stand above the water, providing habitat for many marine species. To plant red mangroves, collect propagules, place them in shallow holes dug into the substrate, and ensure they are partly submerged by tidal waters.",
    policies: "Red mangroves are protected under various international treaties and national conservation laws in countries where they are found, such as the Clean Water Act in the United States.",
    reference: "https://www.floridamuseum.ufl.edu/southflorida/habitats/mangroves/red-mangroves/"
  },
  {
    image: mangroveImage,
    title: "Black Mangrove",
    description: "Black mangroves are recognized for their ability to excrete excess salt through pores in their leaves, contributing to their survival in saline environments. To plant black mangroves, collect seeds or propagules, place them in holes dug into the mud, and ensure they are in areas with periodic tidal inundation.",
    policies: "Protection of black mangroves is mandated under local conservation laws and regulations in regions where they grow, including specific provisions in coastal management plans.",
    reference: "https://www.fisheries.noaa.gov/species/black-mangrove"
  },
  {
    image: mangroveImage,
    title: "White Mangrove",
    description: "White mangroves are known for their adaptations to tidal fluctuations, with specialized glands excreting excess salt from their leaves. To plant white mangroves, collect seeds or propagules, place them in sandy soil at the water's edge, and ensure they receive occasional tidal flooding.",
    policies: "Conservation efforts for white mangroves are integrated into broader coastal zone management frameworks, ensuring their protection and sustainable use.",
    reference: "https://floridadep.gov/rcp/coastal-ecosystems/content/white-mangrove"
  },
  {
    image: mangroveImage,
    title: "Buttonwood Mangrove",
    description: "Buttonwood mangroves are often found at higher elevations compared to other mangroves and have leathery leaves and small, button-like fruits. To plant buttonwood mangroves, collect seeds or propagules, plant them in well-drained soil, and ensure they are periodically exposed to tidal waters.",
    policies: "Conservation policies for buttonwood mangroves are usually part of broader mangrove and coastal ecosystem protection initiatives.",
    reference: "https://www.sfwmd.gov/community-residents/mangrove/buttonwood"
  },
  {
    image: mangroveImage,
    title: "Dwarf Mangrove",
    description: "Dwarf mangroves are a smaller form of red mangroves that thrive in less favorable conditions, providing critical habitat for smaller marine organisms. To plant dwarf mangroves, collect propagules, place them in shallow depressions filled with mud, and ensure they are in areas with occasional tidal inundation.",
    policies: "Dwarf mangroves are protected under the same laws as other mangroves, emphasizing their ecological importance.",
    reference: "https://www.nps.gov/ever/learn/nature/mangroves.htm"
  },
  {
    image: mangroveImage,
    title: "Orange Mangrove",
    description: "Orange mangroves are known for their distinct orange-colored bark and are typically found in tropical regions. To plant orange mangroves, collect seeds or propagules, plant them in waterlogged soil, and ensure they are regularly submerged by tidal waters.",
    policies: "Local and international conservation efforts protect orange mangroves due to their ecological and environmental significance.",
    reference: "https://www.conservation.org/projects/mangrove-conservation"
  },
  {
    image: mangroveImage,
    title: "Grey Mangrove",
    description: "Grey mangroves have aerial roots known as pneumatophores which allow them to thrive in oxygen-poor environments. To plant grey mangroves, collect seeds or propagules, plant them in muddy soil near the water's edge, and ensure the roots are partially exposed to facilitate gas exchange.",
    policies: "Protection of grey mangroves is often included in national coastal management policies and international environmental agreements.",
    reference: "https://www.wwf.org.au/what-we-do/habitat-conservation/mangroves"
  },
  {
    image: mangroveImage,
    title: "Lumnitzera Mangrove",
    description: "Lumnitzera mangroves are known for their dense, bushy appearance and are found in the Indo-Pacific region. To plant Lumnitzera mangroves, collect seeds or propagules, plant them in saline mud, and ensure they receive periodic tidal flooding.",
    policies: "Conservation efforts focus on habitat preservation and sustainable management practices for Lumnitzera mangroves.",
    reference: "https://mangrove.atlasobscura.com"
  },
  {
    image: mangroveImage,
    title: "River Mangrove",
    description: "River mangroves thrive along riverbanks and estuaries, playing a crucial role in stabilizing riverbanks and providing habitat for aquatic species. To plant river mangroves, collect seeds or propagules, plant them in wet, muddy riverbanks, and ensure they have access to regular freshwater or brackish water inundation.",
    policies: "River mangroves are protected under local and national conservation policies to preserve riverine ecosystems.",
    reference: "https://www.environment.nsw.gov.au/topics/animals-and-plants/native-plants/mangroves"
  },
  {
    image: mangroveImage,
    title: "Tall Mangrove",
    description: "Tall mangroves are distinguished by their height and extensive root systems, providing significant coastal protection.",
    policies: "Conservation of tall mangroves is crucial and covered by environmental protection laws and coastal management policies.",
    reference: "https://oceanservice.noaa.gov/facts/mangroves.html"
  },
  {
    image: mangroveImage,
    title: "Small-leaved Mangrove",
    description: "Small-leaved mangroves have tiny leaves adapted to conserve water in high-salinity environments.",
    policies: "These mangroves are protected under various environmental regulations aimed at preserving coastal biodiversity.",
    reference: "https://www.iucn.org/resources/issues-briefs/mangroves-and-climate-change"
  },
  {
    image: mangroveImage,
    title: "Golden Mangrove",
    description: "Golden mangroves are named for their golden-colored leaves and bark, and are found in tropical regions.",
    policies: "Efforts to conserve golden mangroves include habitat protection and sustainable management practices.",
    reference: "https://www.fisheries.noaa.gov/species/mangrove"
  },
  {
    image: mangroveImage,
    title: "Milky Mangrove",
    description: "Milky mangroves are known for the milky sap they produce and are found in coastal areas of the Indo-Pacific region.",
    policies: "Milky mangroves are protected under local conservation laws and international environmental agreements.",
    reference: "https://floridadep.gov/rcp/coastal-ecosystems/content/mangroves"
  },
  {
    image: mangroveImage,
    title: "Mangrove Apple",
    description: "Mangrove apple trees produce edible fruits and have medicinal properties, commonly found in Southeast Asia.",
    policies: "Conservation policies for mangrove apple trees focus on sustainable harvesting and habitat preservation.",
    reference: "https://www.iucn.org/resources/issues-briefs/mangroves-and-climate-change"
  },
  {
    image: mangroveImage,
    title: "Yellow Mangrove",
    description: "Yellow mangroves are identified by their yellowish bark and leaves, and are crucial for coastal protection.",
    policies: "Yellow mangroves are protected under various coastal and marine conservation laws.",
    reference: "https://www.fisheries.noaa.gov/species/mangrove"
  },
  {
    image: mangroveImage,
    title: "Honey Mangrove",
    description: "Honey mangroves are noted for their sweet-smelling flowers that attract a variety of pollinators.",
    policies: "Conservation efforts for honey mangroves include protecting their habitats from development and pollution.",
    reference: "https://www.conservation.org/projects/mangrove-conservation"
  },
  {
    image: mangroveImage,
    title: "Apple Mangrove",
    description: "Apple mangroves produce apple-like fruits and are found in tropical regions with saline environments.",
    policies: "Apple mangroves are protected through sustainable management practices and conservation laws.",
    reference: "https://www.environment.nsw.gov.au/topics/animals-and-plants/native-plants/mangroves"
  },
  {
    image: mangroveImage,
    title: "Cannonball Mangrove",
    description: "Cannonball mangroves are named for their large, round fruits and are found in the Indo-Pacific region.",
    policies: "Conservation policies for cannonball mangroves focus on habitat preservation and sustainable use.",
    reference: "https://www.iucn.org/resources/issues-briefs/mangroves-and-climate-change"
  },
  {
    image: mangroveImage,
    title: "Silver Mangrove",
    description: "Silver mangroves have silvery leaves that reflect sunlight, helping them survive in harsh, saline environments.",
    policies: "Protection of silver mangroves is included in broader mangrove conservation and coastal management plans.",
    reference: "https://www.fisheries.noaa.gov/species/mangrove"
  }
];


function App() {
  const [mangroves, setMangroves] = useState([]);
  const [showInfos, setShowInfos] = useState([]);
  const [infoPositions, setInfoPositions] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [dataIndex, setDataIndex] = useState(0);
  const [hasClickedButton, setHasClickedButton] = useState(false);

  const handleScreenClick = (e) => {
    const newMangrove = { x: e.clientX, y: e.clientY };
    setMangroves([...mangroves, newMangrove]);
    setInfoPositions([...infoPositions, newMangrove]);
    setShowInfos([...showInfos, true]);
    setSelectedData([...selectedData, mangroveData[dataIndex]]);
    setDataIndex((dataIndex + 1) % mangroveData.length);
    setHasClickedButton(false);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    window.addEventListener('click', handleScreenClick, { once: true });
    setHasClickedButton(true);
  };

  function handleInfoClose(index) {
    const newShowInfos = [...showInfos];
    newShowInfos[index] = false;
    setShowInfos(newShowInfos);
  }

  return (
    <div className="App" >

      <h5 className='slogan'>RESTORE MANGROVE FORESTS</h5>
      <button className="plant-button" onClick={handleButtonClick}>{hasClickedButton ? "Click anywhere to plant your mangrove" : "Plant a mangrove"}</button>
      <p className='footer'><small>Website by Michael Anthony Bitoon</small></p>
      <a className="learn-more-link" target="_blank" href="https://ph.oceana.org/our-campaigns/restore-mangrove-forests/">Learn More</a>
      {showInfos.map((showInfo, index) =>
        showInfo &&
        <Draggable key={index}>
          <div>
            <MangroveInfo key={index} data={selectedData[index]} position={infoPositions[index]} onClose={() => { handleInfoClose(index) }} />
          </div>
        </Draggable>
      )}

      <div className='background'><BgSvg></BgSvg></div>

      <div style={{ display: 'flex', flexDirection: 'column' }}><img src={bgImage} /></div>

    </div>
  );
}

export default App;
