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
  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
