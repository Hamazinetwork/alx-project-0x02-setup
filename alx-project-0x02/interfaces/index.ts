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