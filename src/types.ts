// Existing interfaces
interface SchemeDetail {
    name: string;
    link: string;
    id?: number | string;
}

interface SubDetail {
    title: string;
    subdetails: SchemeDetail[];
}

interface SubMenuItem {
    title: string;
    submenu: (SchemeDetail | SubDetail)[];
}

type SchemeItem = SchemeDetail | SubMenuItem;

// Export the types
export type { SchemeDetail, SubDetail, SubMenuItem, SchemeItem };