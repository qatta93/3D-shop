import { RedirectableProviderType } from "next-auth/providers";

export interface FurnitureTypesProps {
  id: number,
  name: string,
  img: string,
  price: string,
}

export interface FurnitureDetailsProps {
  id: string,
  type: string,
  name: string,
  price: string,
  color: string,
  description: string,
  embed: string,
  img: string
}

export interface User {
  email: string,
  emailVerifed?: boolean,
  id: string,
  image?: string,
  password: string
}

export interface ProductInState {
  products: string,
  quantity: number,
}

export interface ProductInDatabase {
  id: string,
  products: string,
  quantity: number,
  userId: string,
}

export interface group {
  current: {
    rotation: {
      x: number;
      y: number;
    };
  };
}

export interface actions {
  current: {
    idle: {
      play: () => void;
    };
  };
}

export interface MobileNavProps {
  openMenu: boolean,
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export interface DesktopNavProps {
  session: any,
  signIn: any,
  signOut: any,
}