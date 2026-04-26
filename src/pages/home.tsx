import {
  FileSearchIcon,
  LegalHammerIcon,
  LockPasswordIcon,
  TaskDaily01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { demoUrl } from "@/lib/constants"

const proofBadges = [
  "Private deployment",
  "Source-cited answers",
  "Audit logs and RBAC",
  "No external LLM APIs",
]

const workflowSignals = [
  "Citation-backed answer",
  "Audit log visible",
  "Role-based access",
  "No external LLM API",
  "Private inference",
]

const auditTrail = [
  "Query submitted",
  "Source retrieved",
  "Answer generated",
  "Review pending",
]

const useCases = [
  {
    icon: FileSearchIcon,
    title: "Document intelligence",
    text: "Ask questions across leases, pleadings, transcripts, contracts, and discovery files. Get plain-language answers with citations tied to source material.",
  },
  {
    icon: LegalHammerIcon,
    title: "Litigation support",
    text: "Summarize pleadings, transcripts, and evidence while extracting key facts, people, dates, and timelines for review.",
  },
  {
    icon: TaskDaily01Icon,
    title: "Contract review",
    text: "Identify key clauses, flag deviations from firm standards, and generate structured review notes faster.",
  },
  {
    icon: LockPasswordIcon,
    title: "Redaction checks",
    text: "Detect sensitive information such as names, account numbers, and addresses before filing or sharing.",
  },
]

function HeroProductMockup() {
  return (
    <Card
      className="w-full max-w-[540px] overflow-hidden rounded-2xl border bg-card lg:col-span-6 lg:mt-3 lg:justify-self-end"
      aria-label="Product mockup showing legal document review with cited AI answer and audit trail."
    >
      <CardContent className="grid gap-5 p-5 sm:p-6">
        <div>
          <Badge
            className="px-3 py-1 text-[14px] leading-[18px]"
            variant="outline"
          >
            Example workflow
          </Badge>
        </div>
        <div className="flex flex-col gap-3 border-b pb-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="type-ui text-foreground">Matter: Lease Review</p>
            <p className="mt-1 text-[15px] leading-5 text-text-soft">
              Commercial Lease · 14 pages · Private workspace
            </p>
          </div>
          <Badge
            className="w-fit px-3 py-1 text-[14px] leading-[18px]"
            variant="secondary"
          >
            Attorney review required
          </Badge>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border bg-background p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="type-ui text-foreground">Source document</p>
              <span className="text-[14px] leading-[18px] text-text-soft">
                Lease_Agreement.pdf
              </span>
            </div>
            <div className="space-y-4 rounded-xl border bg-muted/30 p-4">
              <div>
                <p className="type-ui text-foreground">
                  Section 12.2 — Termination for Cause
                </p>
                <p className="mt-3 text-[15px] leading-6 text-text-body">
                  Either party may terminate this agreement with sixty (60)
                  days&apos; written notice if a material breach remains uncured
                  for thirty (30) days after notice.
                </p>
              </div>
              <div className="rounded-xl border-l-2 border-primary bg-primary/10 p-3">
                <p className="text-[15px] leading-6 text-text-body">
                  Highlighted clause: notice period, breach condition, and cure
                  window identified for attorney review.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border bg-background p-4">
              <p className="type-ui text-text-soft">Question</p>
              <p className="mt-2 text-[16px] leading-[1.6] text-text-body">
                What are the termination rights in this lease?
              </p>
              <div className="mt-4 rounded-xl border bg-muted/30 p-4">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge
                    className="px-3 py-1 text-[14px] leading-[18px]"
                    variant="outline"
                  >
                    Review pending
                  </Badge>
                  <span className="text-[14px] leading-[18px] text-text-soft">
                    Confidence: source-backed
                  </span>
                </div>
                <p className="text-[16px] leading-[1.6] text-text-body">
                  The lease allows termination after 60 days&apos; written
                  notice if a material breach remains uncured for 30 days.
                </p>
                <div className="mt-4 rounded-xl border border-primary/30 bg-primary/10 p-3">
                  <p className="type-ui text-foreground">
                    Source: Section 12.2, Termination for Cause
                  </p>
                  <span className="mt-2 inline-block text-[15px] leading-5 font-medium text-primary">
                    Jump to source
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {workflowSignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-xl border bg-background px-3 py-2"
                >
                  <p className="text-[14px] leading-[18px] text-text-soft">
                    {signal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-background p-4">
          <p className="type-ui text-foreground">Audit trail</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-4">
            {auditTrail.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span
                  className="size-2 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="text-[14px] leading-[18px] text-text-soft">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function HomePage() {
  return (
    <>
      <section className="border-b bg-muted/30">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 pt-14 pb-12 sm:px-6 sm:pt-[72px] sm:pb-16 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pt-24 lg:pb-[88px]">
          <div className="max-w-[560px] lg:col-span-6">
            <Badge
              className="mb-4 w-fit px-3 py-1 text-[14px] leading-[18px]"
              variant="secondary"
            >
              Private AI for law firms
            </Badge>
            <h1 className="type-h1 text-foreground">
              Private AI for legal teams handling sensitive documents.
            </h1>
            <p className="mt-6 max-w-[620px] text-[20px] leading-[1.6] text-text-body">
              Search, review, summarize, and validate legal documents with cited
              answers inside your firm&apos;s environment.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <a href={demoUrl} target="_blank" rel="noreferrer">
                  Book Demo
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#security">View Security Approach</a>
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {proofBadges.map((badge) => (
                <Badge
                  key={badge}
                  className="px-3 py-1 text-[14px] leading-[18px]"
                  variant="outline"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          <HeroProductMockup />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Badge variant="secondary">High-frequency workflows</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal">
            Turn legal documents into workflows your attorneys can verify.
          </h2>
          <p className="mt-4 text-[18px] leading-[1.65] text-text-body">
            Nomos AI is designed for document-heavy practices that need faster
            review without compromising confidentiality, supervision, or
            internal controls.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <HugeiconsIcon
                  icon={item.icon}
                  className="mb-3 size-6 text-primary"
                  aria-hidden
                />
                <CardTitle className="type-h3">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[16px] leading-[1.6] text-text-soft">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="security" className="border-y bg-muted/30">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Badge variant="secondary">Security-led adoption</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal">
              Private AI for legal teams that need control.
            </h2>
            <p className="mt-4 text-[18px] leading-[1.65] text-text-body">
              Nomos AI is built for firms that cannot use public AI tools on
              client documents. It provides a private AI layer inside your
              environment with source-cited retrieval, access controls, and
              audit visibility.
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border bg-background px-4"
          >
            <AccordionItem value="private">
              <AccordionTrigger>Where does processing happen?</AccordionTrigger>
              <AccordionContent>
                Processing is planned for the firm&apos;s controlled
                environment, such as private cloud or on-prem infrastructure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="citations">
              <AccordionTrigger>How are answers reviewed?</AccordionTrigger>
              <AccordionContent>
                Outputs are source-cited so attorneys can inspect the underlying
                document evidence instead of relying on black-box responses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="systems">
              <AccordionTrigger>What systems does it support?</AccordionTrigger>
              <AccordionContent>
                The marketing brief targets workflows around tools such as Clio,
                NetDocuments, Outlook, and SharePoint integrations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}
