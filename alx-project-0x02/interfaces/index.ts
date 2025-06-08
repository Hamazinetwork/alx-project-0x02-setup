export interface layoutProps{
    children: React.ReactNode;
  
  }
export interface CardProps{
    content: string;
    title: string
  }

export interface ButtonProps{
  size:string;
  shape:string;
 
}
// interfaces/index.ts

export type Size = "small" | "medium" | "large";
export type Rounded = "rounded-sm" | "rounded-md";

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}
export interface UserProps{
  id: number;
  name: string;
  email: string;
  address: string;
}