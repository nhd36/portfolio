
interface IPersonalImage {
  name: string;
  url: string;
}

interface IExperienceImage {
  imageUrl: string;
  position: string;
  companyName: string;
  timeLine: string;
  description: string;
}

interface IProjectImage {
  title: string;
  content: string;
  image: string;
  github: string | null;
}

export {
  type IPersonalImage,
  type IExperienceImage,
  type IProjectImage
}