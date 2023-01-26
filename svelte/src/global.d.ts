/// <reference types="svelte" />

interface ProjectJson {
  img: string;
  title: string;
  description: string;
  status: {
    title: string;
    color: string;
  };
  availableAt: Array<{
    logo: string;
    url: string;
  }>;
  madeWith: string[];
}
