import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { demoUrl } from "@/lib/constants"

export function ContactPage() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
      <div>
        <Badge variant="secondary">Book a demo</Badge>
        <h1 className="mt-5 text-4xl leading-tight font-semibold tracking-normal sm:text-5xl">
          See private AI workflows on legal documents.
        </h1>
        <p className="mt-5 text-[18px] leading-[1.65] text-text-body">
          Schedule a focused walkthrough of the document workflows that take
          the most attorney or staff time, from review and contract analysis to
          case prep and cited answers.
        </p>
        <Button asChild className="mt-8" size="lg">
          <a href={demoUrl} target="_blank" rel="noreferrer">
            Book Demo
          </a>
        </Button>
        <p className="type-fine mt-5 text-muted-foreground">
          Prefer email?{" "}
          <a
            className="font-medium text-foreground"
            href="mailto:daniphil@nomosiq.com"
          >
            daniphil@nomosiq.com
          </a>
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What we&apos;ll cover</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-5" aria-label="Demo discussion topics">
            <div className="grid gap-2">
              <Label htmlFor="firm-size">Firm size</Label>
              <Input
                id="firm-size"
                placeholder="Example: 2 to 15 attorneys"
                readOnly
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="systems">Current systems</Label>
              <Input
                id="systems"
                placeholder="Example: Clio, SharePoint, Outlook"
                readOnly
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="workflow">Workflows to review</Label>
              <Textarea
                id="workflow"
                placeholder="Example: document review, contract analysis, case prep"
                readOnly
              />
            </div>
            <p className="text-[16px] leading-[1.6] text-muted-foreground">
              Bring a workflow you want to improve and where the related
              documents live today. After the call, we&apos;ll identify whether a
              small pilot or focused automation is the right next step.
            </p>
            <Button asChild>
              <a href={demoUrl} target="_blank" rel="noreferrer">
                Continue to Calendly
              </a>
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
