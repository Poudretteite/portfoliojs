export type ExhibitionItem = {
  year: string;
  description: string;
};


export type ExhibitionCategory = {
  _id: string;
  title: string;
  items: ExhibitionItem[];
};

export type Project = {
  _id: string;
  title: string;

  metadata: {
    medium: string;
    format: string;
  };

  shortDesc: string;
  longDesc: string;

  images: {
    asset: {
      _ref: string;
    };
  }[];

  videos?: {
    type: 'video' | 'youtube' | 'facebook';

    file?: {
      asset: {
        _ref: string;
      };
    };

    url?: string;
  }[];
};

export type GalleryImage = {
  asset: {
    _ref: string;
  };
};

export type Gallery = {
  _id: string;
  images: GalleryImage[];
};