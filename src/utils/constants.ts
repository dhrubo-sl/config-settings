import { ISettings } from "@/interfaces";

export const LOCAL_STORAGE_KEY = "multi-page-form-config";
export const defaultConfig: ISettings = {
  id: "",
  version: "",
  projectId: "",
  language: "",
  languageId: "",
  ISO: "",
  productName: "",
  projectLogColumns: [],
  projectThumbnailPath: "",
  hierarchies: [],
  icons: [],
  mediaOptions: [],
  sourceAudioFiles: [],
  steps: [],
  modes: [],
  users: [],
  roles: [],
  permissions: [],
};

export const hierarchies = [
  {
    id: "Prm_1-Blk",
    title: "Block",
  },
  {
    id: "Prm_3-Sub",
    title: "SubBlock",
  },
  {
    id: "Prm_4-Tht",
    title: "ThoughtBlock",
  },
  {
    id: "Prm_2-Multi",
    title: "Multi",
  },
];

export const defaultButtonStyle =
  "m-2 px-4 py-2 bg-blue-500 text-white rounded";
export const defaultAddButtion = "px-5 py-1 bg-blue-600 text-white rounded";
