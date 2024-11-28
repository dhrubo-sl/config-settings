export interface IBaseSettings {
  id?: string;
  version: string;
  projectId: string;
  language: string;
  languageId: string;
  ISO: string;
  productName: string;
  projectLogColumns: string[];
  projectThumbnailPath: string;

  hierarchies: IHierarchy[];
  sourceAudioFiles: ISourceAudioFile[];
  icons: IIcon[];
  mediaOptions: IMediaOption[];
  steps: IStep[];
  modes: IMode[];
  createSettingOptions?: ICreateSettingOptions;
}

export interface ISettings extends IBaseSettings {
  users: IUser[];
  roles: IRole[];
  permissions: IPermission[];
}

export interface IUser {
  id: string;
  userName: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  socialMediaService: string;
  socialMediaContactInfo: string;
  heartLanguage: string;
  alternativeLanguage: string;
  roleAssignment: string;
  comment: string;
  pinNumber: string;
  roles: number[];
}

export interface IRole {
  id: string;
  title: string;
  description: string;
  permissions: number[];
}

export interface IPermission {
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  id?: string;
}

export interface IHierarchy {
  id: string;
  title: string;
}

export interface ISourceAudioFile {
  title: string;
  fileName: string;
  isDefault: boolean;
}

export interface IMode {
  id: string;
  name: string;
  iconId: string;
  hasToggle: boolean;
  defaultHierarchy: string;
  hasLevelsToggle: boolean;
  steps: IStep[];
}

export enum StepNameEnum {
  TRANSLATION = "Translation",
  BACK_TRANSLATION = "Back-Translation",
  REVIEW_AND_RECONCILE = "Review and Reconcile",
  COMMUNITY_REVIEW = "Community Review",
  FINAL_REVIEW = "Final Review",
}

export interface IStep {
  name: StepNameEnum;
  order: number;
  hasToggle: boolean;
}

export interface IIcon {
  id: string;
  title: string;
  path: string;
}

export interface IMediaOption {
  id: string;
  title: string;
  active: boolean;
  enable: boolean;
}

export interface ICreateSettingOptions {
  fileContent: IFileContent;
  audioOptions: IAudioOptions;
  fileName: IFileName;
  fileFormat: IFileFormat;
}

export interface IFileContent {
  audioOnly: boolean;
}

export interface IMixDownType {
  id: number;
  name: string;
}

export interface IExportTrack {
  id: number;
  name: string;
  isEnable: boolean;
  editable: boolean;
  translateAudio: boolean;
  isMusicSFXTrack: boolean;
}

export interface IAudioOptions {
  editable: boolean;
  mixDownTypes: IMixDownType[];
  exportTracks: IExportTrack[];
}

export interface IFileName {
  includeMode: boolean;
  includeTimeline: boolean;
}

export interface IFileFormat {
  videoFormat: IVideoFormat;
  audioFormat: IAudioFormat;
}

export interface IVideoFormat {
  title: string;
}

export interface IAudioFormat {
  title: string;
}
