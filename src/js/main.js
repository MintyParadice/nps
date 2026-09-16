import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

querySelector("#park-name").textContent = parkData.name;