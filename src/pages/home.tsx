import {
  AiSearchIcon,
  BubbleChatIcon,
  ChartIncreaseIcon,
  CheckmarkCircle01Icon,
  Clock03Icon,
  DocumentAttachmentIcon,
  File01Icon,
  Folder01Icon,
  GridViewIcon,
  LegalDocument01Icon,
  Link01Icon,
  LockPasswordIcon,
  PencilEdit01Icon,
  Shield01Icon,
  StarIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link } from "react-router-dom"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { demoUrl } from "@/lib/constants"

const proofPoints = [
  {
    icon: DocumentAttachmentIcon,
    label: "We fit with your tools",
  },
  {
    icon: Shield01Icon,
    label: "Private by default",
  },
  {
    icon: Clock03Icon,
    label: "Source-backed answers",
  },
  {
    icon: GridViewIcon,
    label: "Set up for your function",
  },
]

const workflowSteps = [
  {
    title: "Upload documents",
    text: "Contracts, briefs, emails",
  },
  {
    title: "AI agent analyzes",
    text: "Extracts key insights",
  },
  {
    title: "Get answers fast",
    text: "Cited and verifiable",
  },
]

const valueItems = [
  {
    title: "Small-firm workflow fit",
    text: "Designed around lean teams, existing systems, and fast adoption.",
  },
  {
    title: "Outcome-led automation",
    text: "Reduce repetitive review, intake, drafting, and case-prep work.",
  },
  {
    title: "Attorney-controlled outputs",
    text: "Every answer stays reviewable, cited, and grounded in firm data.",
  },
]

const billableTimeItems = [
  {
    icon: Clock03Icon,
    title: "Move faster through cases",
    text: "AI agents that keep up with your pace, not slow it down.",
  },
  {
    icon: BubbleChatIcon,
    title: "Respond to clients quicker",
    text: "Get answers to client questions in seconds, not hours.",
  },
  {
    icon: ChartIncreaseIcon,
    title: "Increase billable output without increasing headcount",
    text: "More capacity from your existing team, without adding staff.",
  },
]

const outcomes = [
  {
    icon: Folder01Icon,
    title: "Understand a case faster",
    items: [
      "Summarize large case files and discovery",
      "Extract key facts and timelines",
      "Highlight what matters",
    ],
    result: "Hours saved, clarity gained",
  },
  {
    icon: File01Icon,
    title: "Review contracts with confidence",
    items: [
      "Flag risks and low items",
      "Compare against playbooks",
      "Generate structured redline notes",
    ],
    result: "Fewer mistakes, stronger reviews",
  },
  {
    icon: AiSearchIcon,
    title: "Find answers across documents instantly",
    items: [
      "Search everything in seconds",
      "Cite exact sources",
      "Jump to relevant passages",
    ],
    result: "Answers when you need them",
  },
  {
    icon: PencilEdit01Icon,
    title: "Produce first-pass legal work faster",
    items: [
      "Draft memos, summaries, and letters",
      "Generate outlines and talking points",
      "Maintain your firm's voice",
    ],
    result: "First drafts in less time",
  },
  {
    icon: GridViewIcon,
    title: "Structure intake and case prep",
    items: [
      "Convert intake notes into structured case summaries",
      "Identify missing information",
      "Create client next steps",
    ],
    result: "Better prep, stronger starts",
  },
]

const setupSteps = [
  {
    title: "Connect your workflow",
    text: "We integrate with your existing tools, documents, and storage systems.",
  },
  {
    title: "Deploy focused AI agents",
    text: "Each agent is configured for your practice area, workflows, and standards.",
  },
  {
    title: "Review and use outputs",
    text: "All outputs are grounded in your data so you can review with confidence.",
  },
]

const securityPillars = [
  {
    icon: Shield01Icon,
    title: "Not another legal platform",
    text: "We fit into your firm, not the other way around.",
    items: [
      "No platform migration",
      "No workflow disruption",
      "No heavy implementation",
    ],
  },
  {
    icon: Link01Icon,
    title: "Works with the tools you already rely on",
    text: "We connect AI agents to your existing ecosystem.",
    items: [
      "Document and storage systems",
      "Case files and shared drives",
      "Email and internal workflows",
    ],
  },
  {
    icon: LockPasswordIcon,
    title: "Private and controlled by default",
    text: "Your data stays with you.",
    items: [
      "Documents stay within your environment",
      "Outputs are grounded in your data",
      "No training on your client information",
    ],
  },
]

const faqItems = [
  {
    question: "Where does processing happen?",
    answer:
      "Processing happens within your firm's controlled environment. Documents are never sent to shared cloud infrastructure or used to train models.",
  },
  {
    question: "Do we need to change our tools?",
    answer:
      "No. Nomos AI connects to your existing document storage, case management, and email systems. There's nothing new to learn or migrate to.",
  },
  {
    question: "How accurate are the outputs?",
    answer:
      "Every answer is grounded in your actual documents with source citations. Attorneys review outputs before use. AI assists, you decide.",
  },
  {
    question: "Is client data used to train models?",
    answer:
      "Never. Your client data stays within your environment and is never used to train or improve any external model.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most firms are up and running within a week. Our team handles the integration and configuration so you don't need technical resources.",
  },
  {
    question: "What size firm is this for?",
    answer:
      "Nomos AI is built specifically for small law firms, typically 2 to 30 attorneys. The product is designed around the workflows and constraints of smaller practices.",
  },
]

function SectionHeader({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
      <h2 className="type-h2 text-balance">{title}</h2>
      {text ? (
        <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-[1.65] text-muted-foreground">
          {text}
        </p>
      ) : null}
    </div>
  )
}

function HeroMockup() {
  return (
    <div
      className="flex flex-col gap-5 lg:justify-self-end"
      role="img"
      aria-label="Workflow mockup showing document upload, AI analysis, and source-backed legal answer."
    >
      <Card className="rounded-[14px] border bg-card shadow-[0_4px_24px_rgba(13,27,62,0.07),0_1px_4px_rgba(13,27,62,0.05)]">
        <CardContent className="flex flex-col gap-6 p-8">
          {workflowSteps.map((step, index) => (
            <div key={step.title} className="flex items-start gap-4">
              <div
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-[16px] leading-none font-bold text-primary-foreground"
                aria-hidden="true"
              >
                {index + 1}
              </div>
              <div>
                <p className="text-[16px] leading-[1.35] font-semibold text-foreground">
                  {step.title}
                </p>
                <p className="mt-1 text-[16px] leading-[1.5] text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-[14px] border bg-card shadow-[0_4px_24px_rgba(13,27,62,0.07),0_1px_4px_rgba(13,27,62,0.05)]">
        <CardContent className="p-8">
          <div className="rounded-[10px] bg-muted p-6">
            <div className="mb-5 flex items-start gap-3">
              <div
                className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                aria-hidden="true"
              >
                <HugeiconsIcon icon={Clock03Icon} className="size-4" />
              </div>
              <p className="text-[16px] leading-[1.45] font-semibold text-foreground">
                What are the termination rights in this lease?
              </p>
            </div>
            <p className="mb-2 text-[16px] leading-[1.35] font-bold tracking-[0.08em] text-text-subtle uppercase">
              Answer
            </p>
            <p className="mb-5 text-[16px] leading-[1.6] text-muted-foreground">
              Either party may terminate this agreement with sixty (60) days'
              written notice if a material breach remains uncurable thirty (30)
              days after notice.
            </p>
            <p className="mb-2 text-[16px] leading-[1.35] font-bold tracking-[0.08em] text-text-subtle uppercase">
              Source
            </p>
            <div className="flex items-start gap-2 text-[16px] leading-[1.55] font-medium text-primary">
              <span
                className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span>
                Section 12.3 · Termination for Cause · Lease Agreement.pdf · p.
                14
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TrustStrip() {
  return (
    <section className="border-y bg-card" aria-label="Nomos AI value summary">
      <div className="mx-auto grid w-full max-w-[1140px] gap-6 px-5 py-12 md:grid-cols-3 md:px-8 lg:px-12">
        {valueItems.map((item) => (
          <div key={item.title} className="flex flex-col gap-3">
            <p className="text-[17px] leading-[1.4] font-semibold text-foreground">
              {item.title}
            </p>
            <p className="text-[16px] leading-[1.6] text-muted-foreground">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function BillableTimeSection() {
  return (
    <section className="bg-surface-1 py-[72px] md:py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1140px] items-center gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div>
          <h2 className="type-h2 text-balance">
            Turn repetitive work into billable time
          </h2>
          <p className="mt-8 text-[18px] leading-[1.65] text-muted-foreground">
            AI removes the busywork that slows you down so you can focus on
            strategy and clients.
          </p>
          <div className="mt-10 flex flex-col gap-8">
            {billableTimeItems.map((item) => (
              <div key={item.title} className="flex items-start gap-5">
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-full border bg-card text-primary"
                  aria-hidden="true"
                >
                  <HugeiconsIcon icon={item.icon} className="size-6" />
                </div>
                <div>
                  <h3 className="text-[18px] leading-[1.35] font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-[1.6] text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="min-h-[380px] rounded-2xl border bg-card">
          <CardContent className="flex h-full min-h-[380px] flex-col items-center justify-center gap-4 p-10 text-center text-text-subtle">
            <HugeiconsIcon
              icon={LegalDocument01Icon}
              className="size-12 opacity-45"
              aria-hidden="true"
            />
            <p className="font-mono text-[16px] leading-[1.4]">
              productivity chart
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function OutcomesSection() {
  return (
    <section className="bg-background py-[72px] md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1140px] px-5 md:px-8 lg:px-12">
        <SectionHeader title="Built around the outcomes attorneys actually need" />
        <div className="grid gap-6 md:grid-cols-2 md:gap-7 xl:grid-cols-5 xl:gap-8">
          {outcomes.map((outcome) => (
            <Card
              key={outcome.title}
              className="h-full rounded-[14px] border bg-card"
            >
              <CardHeader className="p-8 pb-5">
                <div
                  className="mb-5 flex size-11 items-center justify-center rounded-[10px] bg-primary/10 text-primary"
                  aria-hidden="true"
                >
                  <HugeiconsIcon icon={outcome.icon} className="size-5" />
                </div>
                <CardTitle className="text-[18px] leading-[1.3] font-semibold">
                  {outcome.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex grow flex-col px-8 pt-0 pb-8">
                <ul className="flex flex-1 flex-col gap-3">
                  {outcome.items.map((item) => (
                    <li
                      key={item}
                      className="relative pl-5 text-[16px] leading-[1.55] text-muted-foreground before:absolute before:top-[0.7em] before:left-0 before:size-1.5 before:rounded-full before:border before:border-primary before:bg-primary/10"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t pt-5 text-[16px] leading-[1.45] font-semibold text-primary">
                  <p className="mb-1 text-[16px] leading-[1.35] font-medium tracking-[0.07em] text-text-subtle uppercase">
                    Result
                  </p>
                  {outcome.result}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function SetupSection() {
  return (
    <section className="bg-surface-1 py-[72px] md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1140px] px-5 md:px-8 lg:px-12">
        <SectionHeader title="Simple setup. Immediate impact." />
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {setupSteps.map((step, index) => (
            <Card key={step.title} className="rounded-[14px] border bg-card">
              <CardContent className="p-8 text-center md:p-10">
                <div
                  className="mx-auto mb-6 flex size-12 items-center justify-center rounded-full bg-primary text-[18px] leading-none font-bold text-primary-foreground"
                  aria-hidden="true"
                >
                  {index + 1}
                </div>
                <h3 className="text-[20px] leading-[1.3] font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.6] text-muted-foreground">
                  {step.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function SecurityControlSection() {
  return (
    <section className="bg-background py-[72px] md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1140px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {securityPillars.map((pillar) => (
            <Card key={pillar.title} className="rounded-[14px] border bg-card">
              <CardContent className="p-8 md:p-10">
                <div
                  className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
                  aria-hidden="true"
                >
                  <HugeiconsIcon icon={pillar.icon} className="size-6" />
                </div>
                <h2 className="text-[22px] leading-[1.25] font-semibold tracking-normal text-foreground">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-[16px] leading-[1.6] text-muted-foreground">
                  {pillar.text}
                </p>
                <ul className="mt-6 flex flex-col gap-4">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[16px] leading-[1.45] text-muted-foreground"
                    >
                      <span
                        className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                        aria-hidden="true"
                      >
                        <HugeiconsIcon
                          icon={CheckmarkCircle01Icon}
                          className="size-4"
                        />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="bg-surface-1 py-[72px] md:py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1140px] gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:px-12">
        <div>
          <p className="text-[16px] leading-[1.4] font-semibold tracking-[0.12em] text-primary uppercase">
            FAQ
          </p>
          <h2 className="type-h2 mt-5 text-balance">
            Questions small law firms ask before getting started
          </h2>
          <p className="mt-6 text-[18px] leading-[1.65] text-muted-foreground">
            Straight answers about setup, privacy and day-to-day use.
          </p>
          <Card className="mt-10 rounded-xl border bg-card">
            <CardContent className="flex items-start gap-5 p-7">
              <div
                className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-primary/10 text-primary"
                aria-hidden="true"
              >
                <HugeiconsIcon icon={StarIcon} className="size-5" />
              </div>
              <p className="text-[16px] leading-[1.6] text-muted-foreground">
                Nomos AI provides source-backed answers with controlled
                deployment so your firm stays secure and in control.
              </p>
            </CardContent>
          </Card>
        </div>

        <Accordion type="single" collapsible className="border-t">
          {faqItems.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="py-6 text-left text-[18px] leading-[1.45] font-semibold text-foreground hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[16px] leading-[1.7] text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function FinalCtaSection() {
  return (
    <section className="border-y bg-background py-[72px] text-center md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1140px] px-5 md:px-8 lg:px-12">
        <h2 className="type-h2 text-balance">
          See how this fits your workflow
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[18px] leading-[1.65] text-muted-foreground">
          Book a focused walkthrough of how AI agents can reduce your workload
          and free up billable time.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
          <Button asChild size="lg" className="h-13 rounded-[9px] px-8">
            <a href={demoUrl} target="_blank" rel="noreferrer">
              Book a demo
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-13 rounded-[9px] px-8"
          >
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-[1140px] items-center gap-14 px-5 py-[72px] md:px-8 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28">
          <div>
            <p className="text-[16px] leading-[1.4] font-semibold tracking-[0.12em] text-primary uppercase">
              AI Agents for Small Law Firms
            </p>
            <h1 className="mt-5 max-w-2xl text-[clamp(38px,7vw,68px)] leading-[1.06] font-bold tracking-[-0.03em] text-balance text-foreground">
              Free up hours of legal work every week
            </h1>
            <p className="mt-8 max-w-[520px] text-[20px] leading-[1.6] text-muted-foreground">
              Private AI agents that handle document review, contract analysis,
              and case prep inside your existing workflows.
            </p>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <Button asChild size="lg" className="h-13 rounded-[9px] px-8">
                <a href={demoUrl} target="_blank" rel="noreferrer">
                  Book a demo
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 rounded-[9px] px-8"
              >
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t pt-8">
              {proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-center gap-2 text-[16px] leading-[1.45] font-medium text-muted-foreground"
                >
                  <HugeiconsIcon
                    icon={point.icon}
                    className="size-4 opacity-60"
                    aria-hidden="true"
                  />
                  {point.label}
                </div>
              ))}
            </div>
          </div>

          <HeroMockup />
        </div>
      </section>

      <TrustStrip />
      <BillableTimeSection />
      <OutcomesSection />
      <SetupSection />
      <SecurityControlSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  )
}
