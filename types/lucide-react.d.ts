declare module "lucide-react" {
  import * as React from "react"
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number
    color?: string
    strokeWidth?: string | number
  }
  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >
  export const Moon: LucideIcon
  export const Sun: LucideIcon
  export const Mail: LucideIcon
  export const ArrowRight: LucideIcon
  export const ArrowDown: LucideIcon
  export const Download: LucideIcon
  export const ArrowUpRight: LucideIcon
  export const Check: LucideIcon
  export const Copy: LucideIcon
  export const Terminal: LucideIcon
  export const Sparkles: LucideIcon
  export const Trophy: LucideIcon
  export const X: LucideIcon
  export const Wrench: LucideIcon
  export const ShieldCheck: LucideIcon
  export const Cpu: LucideIcon
  export const Database: LucideIcon
  export const Award: LucideIcon
  export const ExternalLink: LucideIcon
  export const Mic: LucideIcon
  export const Folder: LucideIcon
  export const CheckCircle: LucideIcon
  export const Lock: LucideIcon
  export const ShieldAlert: LucideIcon
  export const FileText: LucideIcon
}
