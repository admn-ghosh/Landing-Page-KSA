import { ProjectCityOption, PanelTypeOption } from "./types";

export const CITY_OPTIONS: ProjectCityOption[] = [
  { value: "Riyadh", label: "Riyadh" },
  { value: "Jeddah", label: "Jeddah" },
  { value: "NEOM", label: "NEOM" },
  { value: "Dammam", label: "Dammam" },
  { value: "Al Khobar", label: "Al Khobar" },
  { value: "Mecca", label: "Mecca" },
  { value: "Medina", label: "Medina" },
  { value: "Other", label: "Other" },
];

export const PANEL_OPTIONS: PanelTypeOption[] = [
  { value: "PUR Roof", label: "PUR Roof" },
  { value: "PUR Wall", label: "PUR Wall" },
  { value: "PIR Roof", label: "PIR Roof" },
  { value: "PIR Wall", label: "PIR Wall" },
  { value: "Rockwool Roof", label: "Rockwool Roof" },
  { value: "Rockwool Wall", label: "Rockwool Wall" },
  { value: "Mixed / Not sure", label: "Mixed / Not sure" },
];