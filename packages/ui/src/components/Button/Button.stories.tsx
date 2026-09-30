import type { Meta, StoryObj } from "@storybook/react-vite";
import { Play, Sparkles } from "lucide-react";
import { Button } from "./Button";
const meta={title:"Primitives/Button",component:Button,args:{children:"Senaryoyu çalıştır"}} satisfies Meta<typeof Button>; export default meta; type Story=StoryObj<typeof meta>;
export const Primary:Story={args:{variant:"primary",icon:<Play size={14}/>}};
export const Secondary:Story={args:{variant:"secondary"}};
export const Agent:Story={args:{variant:"ai",icon:<Sparkles size={14}/>,children:"Ajan ile onar"}};
export const Loading:Story={args:{variant:"primary",loading:true,children:"Çalıştırılıyor"}};
