import { MapPin, Clock, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface JobCardProps {
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
}

export function JobCard({
  title,
  department,
  location,
  type,
  experience,
  description,
  requirements,
  responsibilities,
  benefits
}: JobCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground">{department}</p>
          </div>
          <Button className="bg-foreground text-background hover:bg-foreground/90">
            지원하기
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {location}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {type}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            {experience}
          </div>
        </div>
        
        <p className="text-foreground leading-relaxed">{description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-accent" />
            자격 요건
          </h4>
          <ul className="space-y-2">
            {requirements.map((req, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-accent" />
            주요 업무
          </h4>
          <ul className="space-y-2">
            {responsibilities.map((resp, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                {resp}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-accent" />
            혜택
          </h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
